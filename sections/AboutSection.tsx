"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Terminal, Cpu, Sparkles, Database, Brain, Wand2, Code2, Server, Monitor } from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPhp,
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiBootstrap,
  SiWordpress, SiWoocommerce, SiElementor, SiLaravel,
  SiGit, SiFigma, SiPostman, SiNotion,
  SiVercel, SiCloudflare, SiCpanel, SiGoogleanalytics,
  SiN8N, SiOpenai, SiAnthropic, SiGooglegemini,
} from "react-icons/si";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

const techStack: Record<string, { name: string; icon: IconComponent }[]> = {
  "Core Languages": [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PHP", icon: SiPhp },
    { name: "SQL", icon: Database as IconComponent },
  ],
  "Frameworks & CMS": [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "WordPress", icon: SiWordpress },
    { name: "WooCommerce", icon: SiWoocommerce },
    { name: "Elementor", icon: SiElementor },
    { name: "Laravel", icon: SiLaravel },
  ],
  "Tools & Ecosystem": [
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: Monitor as IconComponent },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Notion", icon: SiNotion },
    { name: "Vercel", icon: SiVercel },
    { name: "Cloudflare", icon: SiCloudflare },
    { name: "cPanel", icon: SiCpanel },
    { name: "VPS", icon: Server as IconComponent },
    { name: "Google Analytics", icon: SiGoogleanalytics },
  ],
  "Automation": [
    { name: "n8n", icon: SiN8N },
  ],
  "AI Tools": [
    { name: "ChatGPT", icon: SiOpenai },
    { name: "Claude AI", icon: SiAnthropic },
    { name: "Gemini AI", icon: SiGooglegemini },
    { name: "Cursor", icon: Code2 as IconComponent },
  ],
};

function ProfileCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="lg:col-span-4"
      style={{ perspective: 800 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-card rounded-[24px] border border-border shadow-sm hover:shadow-xl hover:border-gray-300 transition-shadow duration-300 overflow-hidden relative group h-full"
      >
        <div className="aspect-square md:aspect-auto md:h-full min-h-[320px] relative">
          <img src="/images/profile.jpeg" alt="Dzikri Ramadhan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/10">
            <div>
              <div className="text-white font-bold tracking-wide">@ziksite</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">Online</span>
              </div>
            </div>
            <a href="https://wa.me/6289630557191" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black text-xs font-black tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground px-6 py-2 border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white -rotate-1">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Card 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-card rounded-[24px] p-8 md:p-10 border-2 border-foreground shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-wave origin-bottom-right inline-block">👋</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                Hi, I'm Dzikri.
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
              <p>
                I'm a web developer specializing in building modern websites, web applications, and automation systems. I work with both WordPress and Website custom development to create scalable and efficient digital solutions.
              </p>
              <p>
                I focus on performance, clean architecture, and practical systems that help businesses operate more efficiently.
              </p>
              <p>
                I enjoy turning ideas into real digital products — from business websites and landing pages to internal tools and automation workflows.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Profile */}
          <ProfileCard />

          {/* Card 3: What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-card rounded-[24px] p-8 md:p-10 border-2 border-foreground shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 px-3 py-1.5 bg-primary text-secondary rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
              Services
            </div>

            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-8 bg-gray-50 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Sparkles size={22} />
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">What I Do</h3>

            <div className="space-y-6">
              <div className="flex flex-col border-l-2 border-primary pl-4">
                <span className="text-sm font-black text-foreground mb-1">Website Development</span>
                <span className="text-xs text-gray-500 font-medium leading-relaxed">Building modern websites using WordPress and custom development. Focused on performance, clean structure, and scalable architecture.</span>
              </div>
              <div className="flex flex-col border-l-2 border-transparent pl-4 hover:border-gray-200 transition-colors">
                <span className="text-sm font-black text-foreground mb-1">Landing Page Development</span>
                <span className="text-xs text-gray-500 font-medium leading-relaxed">Creating high-converting landing pages optimized for speed, UX, and marketing performance.</span>
              </div>
              <div className="flex flex-col border-l-2 border-transparent pl-4 hover:border-gray-200 transition-colors">
                <span className="text-sm font-black text-foreground mb-1">Automation Systems</span>
                <span className="text-xs text-gray-500 font-medium leading-relaxed">Designing workflow automation using tools like n8n and AI integrations to improve productivity.</span>
              </div>
              <div className="flex flex-col border-l-2 border-transparent pl-4 hover:border-gray-200 transition-colors">
                <span className="text-sm font-black text-foreground mb-1">E-commerce Development</span>
                <span className="text-xs text-gray-500 font-medium leading-relaxed">Building online stores with WooCommerce — from product setup and payment gateway to custom checkout flows.</span>
              </div>
              <div className="flex flex-col border-l-2 border-transparent pl-4 hover:border-gray-200 transition-colors">
                <span className="text-sm font-black text-foreground mb-1">System Integration</span>
                <span className="text-xs text-gray-500 font-medium leading-relaxed">Integrating APIs, third-party services, and automation tools to create efficient digital systems.</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-card rounded-[24px] p-8 md:p-10 border-2 border-foreground shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="text-foreground" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Tech Stack</h3>
            </div>

            <div className="space-y-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <div className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <span key={idx} className="px-4 py-2 border-2 border-foreground rounded-xl text-xs font-bold text-foreground bg-white hover:bg-foreground hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-default flex items-center gap-2 group/pill">
                          <Icon size={14} className="text-gray-500 group-hover/pill:text-white" />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
