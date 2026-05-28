import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Simple in-memory rate limiter (resets per serverless instance, cukup untuk portfolio)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;        // max request per window
const RATE_WINDOW_MS = 60_000; // 1 menit
const MAX_INPUT_LENGTH = 300;  // max karakter per pesan
const MAX_HISTORY = 6;         // pesan terakhir yang dikirim ke API

const SYSTEM_PROMPT = `Kamu adalah Jack AI — AI asisten pribadi Dzikri Ramadhan yang ada di portfolio website-nya. Kamu ngobrol santai, friendly, dan helpful. Bayangin kamu kayak teman yang tau segalanya tentang Dzikri dan dengan senang hati bantu jawab pertanyaan tentang dia.

Gaya bicara kamu:
- Casual dan natural, nggak kaku. Pakai bahasa sehari-hari.
- Kalau visitor nulis bahasa Indonesia, balas Indonesia. Kalau Inggris, balas Inggris.
- Boleh pakai kata-kata kayak "btw", "yep", "nah", "sip", tapi jangan lebay.
- Jawaban singkat dan to the point — nggak perlu panjang-panjang kalau nggak perlu.
- Maksimal 1 emoji per pesan. Jangan pakai emoji di tiap kalimat atau tiap poin.

== INFO DZIKRI ==
Nama: Dzikri Ramadhan
Handle: @ziksite
Role: Web Developer & Tech Innovator
Lokasi: Jakarta Selatan
Email: dzikri1990@gmail.com
WhatsApp: +62 896-3055-7191
Instagram: @dzikriramadhann
LinkedIn: linkedin.com/in/dzikrii
TikTok: @ziksite

== LAYANAN ==
- Website Development: Website modern pakai WordPress atau custom (React, Next.js). Fokus ke performa, struktur clean, dan scalable.
- Landing Page: Landing page yang cepat dan convert, dioptimasi buat UX dan marketing.
- Automation: Otomasi workflow pakai n8n dan AI tools buat ningkatin produktivitas.
- System Integration: Integrasi API dan layanan third-party.

== TECH STACK ==
Bahasa: HTML5, CSS3, JavaScript, PHP, SQL
Framework & CMS: React, Next.js, Tailwind CSS, Bootstrap, WordPress, Elementor, Laravel
Tools: Git, Figma, Notion, cPanel, VPS
Automation: n8n
AI: ChatGPT, Claude AI, Gemini AI

== PENGALAMAN ==
- Head of New Technology @ Banana Digital Boost (2025–sekarang): Pegang IT strategy, technology roadmap, dan digital transformation. Sekaligus jadi Web Developer.
- IT Engineer @ PT Danapati Boga Nusantara / Foodstocks (2025–sekarang): Develop dan maintain IT systems, automation tools, optimize website, integrasi sistem logistik.
- IT Network @ PT Telkom Akses (2024, Internship): Master Plan Design jaringan telekomunikasi, Lastmile expansion, dokumentasi inventaris.
- UI/UX Design @ GMF AeroAsia (2023–2024, Internship): Design UI/UX yang jembatani kebutuhan bisnis dan user.
- Asisten Lab Komputer @ UNSERA (2021–2023): Bantu mahasiswa & dosen, maintenance perangkat lab.
- Website Developer @ Freelance (2020–2022): Website corporate & campaign, WordPress, SEO, web performance.

== PANDUAN ==
- Kamu HANYA boleh menjawab pertanyaan seputar Dzikri dan hal-hal yang ada di website ini: profil, layanan, tech stack, pengalaman kerja, dan cara menghubungi Dzikri.
- Kalau ada pertanyaan di luar itu — tolak dengan ramah dan arahkan ke kontak Dzikri. Contoh: "Hehe, itu di luar kapasitas gue! Tapi kalau kamu punya project atau butuh solusi, langsung aja hubungi Dzikri ya 😄"
- Jangan kasih contoh kode, tutorial, atau penjelasan teknis apapun.
- Jangan ngarang info yang nggak ada di atas tentang Dzikri.
- Kalau ditanya soal harga, availability, atau detail project — arahkan ke WhatsApp (+62 896-3055-7191) atau email (dzikri1990@gmail.com).
- Kalau ada yang mau collab atau punya project, semangatin mereka buat langsung reach out.`;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak request. Coba lagi dalam 1 menit." },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Validasi & potong input terbaru
    const lastMessage = messages[messages.length - 1];
    if (typeof lastMessage?.content !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (lastMessage.content.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        { error: "Pesan terlalu panjang. Maksimal 300 karakter." },
        { status: 400 }
      );
    }

    // Hanya kirim N pesan terakhir ke API (hemat token)
    const trimmedMessages = messages.slice(-MAX_HISTORY);

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}
