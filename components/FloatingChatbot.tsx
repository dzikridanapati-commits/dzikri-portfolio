"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Trash2, MessageCircle, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED = [
  "Dzikri bisa bikin apa aja?",
  "Gimana cara kerja sama sama Dzikri?",
  "Tech stack apa yang dia pake?",
];

const GREETING: Message = {
  role: "assistant",
  content: "Hei! 👋 Gue Zik, asisten AI Dzikri Ramadhan. Kalau kamu penasaran soal Dzikri, projectnya, atau mau tau cara kerja sama — tanya aja langsung!",
};

const MAX_MESSAGES = 20;
const MAX_INPUT_LENGTH = 300;
const STORAGE_KEY = "zik_chat_history";
const GREETED_KEY = "zik_greeted";
const AUTO_OPEN_DELAY = 8000;

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
  }, []);

  // Save history to localStorage on change
  useEffect(() => {
    if (messages.length === 0) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {}
  }, [messages]);

  // Auto-open greeting after delay (once per session)
  useEffect(() => {
    const alreadyGreeted = sessionStorage.getItem(GREETED_KEY);
    if (alreadyGreeted) return;

    const timer = setTimeout(() => {
      setMessages((prev) => (prev.length === 0 ? [GREETING] : prev));
      setOpen(true);
      setUnread(true);
      sessionStorage.setItem(GREETED_KEY, "1");
    }, AUTO_OPEN_DELAY);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      inputRef.current?.focus();
    }
  }, [open]);

  const isLimitReached = messages.filter((m) => m.role === "user").length >= MAX_MESSAGES;

  function clearHistory() {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || isLimitReached) return;
    if (text.length > MAX_INPUT_LENGTH) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      if (!res.ok) throw new Error("Request failed");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: assistantText };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, terjadi kesalahan. Coba lagi ya!" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const lastAssistantIndex = messages.map((m) => m.role).lastIndexOf("assistant");

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] bg-white rounded-3xl border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-foreground text-white px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest">Dzikri AI</p>
                  <p className="text-[10px] text-white/60 font-bold tracking-wider">Tanya apa saja!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    type="button"
                    aria-label="Hapus riwayat chat"
                    onClick={clearHistory}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-red-500/60 flex items-center justify-center transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
                <button
                  type="button"
                  aria-label="Tutup chat"
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest text-center">
                    Halo! Ada yang bisa saya bantu? 👋
                  </p>
                  <div className="space-y-2">
                    {SUGGESTED.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="w-full text-left text-xs font-bold border-2 border-foreground/20 hover:border-foreground px-4 py-2.5 rounded-xl transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center shrink-0 mt-1">
                        <Bot size={12} />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs font-medium leading-relaxed ${
                        msg.role === "user"
                          ? "bg-foreground text-white rounded-tr-sm"
                          : "bg-gray-100 text-gray-800 rounded-tl-sm"
                      }`}
                    >
                      {msg.content ? (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-black">{children}</strong>,
                            ul: ({ children }) => <ul className="mt-1 mb-1 space-y-0.5 pl-3 list-disc">{children}</ul>,
                            ol: ({ children }) => <ol className="mt-1 mb-1 space-y-0.5 pl-3 list-decimal">{children}</ol>,
                            h3: ({ children }) => <p className="font-black mt-2 mb-0.5">{children}</p>,
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      ) : (
                        <span className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                        </span>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-1">
                        <User size={12} />
                      </div>
                    )}
                  </div>

                  {/* CTA buttons after last assistant message */}
                  {msg.role === "assistant" && i === lastAssistantIndex && !loading && msg.content && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex gap-2 ml-8"
                    >
                      <a
                        href="https://wa.me/6289630557191"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-[10px] font-black rounded-lg hover:brightness-110 transition-all hover:-translate-y-0.5"
                      >
                        <MessageCircle size={10} />
                        WhatsApp
                      </a>
                      <a
                        href="mailto:dzikri1990@gmail.com"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-white text-[10px] font-black rounded-lg hover:bg-foreground/80 transition-all hover:-translate-y-0.5"
                      >
                        <Mail size={10} />
                        Email
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t-2 border-foreground/10 px-4 py-3 flex flex-col gap-2 shrink-0">
              {isLimitReached && (
                <p className="text-[10px] text-center text-gray-400 font-medium">
                  Sesi chat habis. Klik 🗑️ untuk mulai baru.
                </p>
              )}
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
                  onKeyDown={handleKey}
                  placeholder={isLimitReached ? "Sesi habis..." : "Ketik pertanyaan..."}
                  disabled={loading || isLimitReached}
                  className="flex-1 text-xs font-medium bg-gray-100 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-foreground/20 disabled:opacity-50 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  aria-label="Kirim pesan"
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading || isLimitReached}
                  className="w-9 h-9 rounded-xl bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-foreground text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
        aria-label="AI Chatbot"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-20" />
        )}

        {/* Unread badge */}
        <AnimatePresence>
          {unread && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Bot size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 bottom-3 bg-white text-black text-xs font-black uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg whitespace-nowrap border-2 border-black/10"
          >
            Tanya AI 🤖
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
