"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Code2, Lightbulb, Zap, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const labels = [
  { text: "Software Engineer", top: "15%", left: "10%", delay: 0, rotate: -4 },
  { text: "System Builder", top: "25%", left: "75%", delay: 1, rotate: 6 },
  { text: "AI Automation", top: "70%", left: "8%", delay: 2, rotate: 3 },
  { text: "Startup Builder", top: "75%", left: "80%", delay: 0.5, rotate: -5 },
  { text: "Tech Innovator", top: "45%", left: "5%", delay: 1.5, rotate: -2 },
  { text: "Digital Architect", top: "50%", left: "85%", delay: 2.5, rotate: 4 },
];

const mobileLabels = [
  { text: "Web Developer", top: "15%", left: "5%" },
  { text: "UI Engineer", top: "80%", right: "5%" },
  { text: "Tech Innovator", top: "85%", left: "10%" },
];

const iconLabels = [
  { icon: Code2, top: "20%", left: "60%", delay: 0.2, rotate: 10 },
  { icon: Lightbulb, top: "60%", left: "15%", delay: 1.2, rotate: -15 },
  { icon: Zap, top: "65%", left: "70%", delay: 2.2, rotate: 12 },
  { icon: Rocket, top: "35%", left: "20%", delay: 0.7, rotate: -8 },
];

const mobileIconLabels = [
  { icon: Code2, top: "25%", right: "10%", delay: 0.2, rotate: 10 },
  { icon: Zap, top: "70%", left: "15%", delay: 1.2, rotate: -15 },
];

function TypingText({ text }: { text: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline" },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef(null);
  const { t } = useLanguage();
  const codeString = `const dev = { name: "Dzikri Ramadhan", role: "Website Developer", base: "Jakarta Selatan" };\nawait dev.init(); // Crafting bold digital experiences`;

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Floating Labels Desktop */}
      {labels.map((label, idx) => (
        <motion.div
          key={idx}
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [label.rotate, label.rotate + 3, label.rotate]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: label.delay }}
          className="absolute hidden lg:block z-20 cursor-grab"
          style={{ top: label.top, left: label.left }}
        >
           <span className="px-5 py-2.5 border-[3px] border-foreground rounded-[2rem] text-xs font-black uppercase tracking-widest bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
            {label.text}
          </span>
        </motion.div>
      ))}

      {/* Floating Icon Labels Desktop */}
      {iconLabels.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={`icon-${idx}`}
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [item.rotate, item.rotate + 5, item.rotate]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className="absolute hidden lg:flex z-20 cursor-grab items-center justify-center w-12 h-12 border-[3px] border-foreground rounded-full bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ top: item.top, left: item.left }}
          >
            <Icon size={20} strokeWidth={2.5} />
          </motion.div>
        );
      })}

      {/* Floating Labels Mobile/Tablet */}
      {mobileLabels.map((label, idx) => (
        <motion.div
          key={`mobile-${idx}`}
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          animate={{ y: [0, -10, 0], rotate: [idx % 2 === 0 ? -2 : 2, 0, idx % 2 === 0 ? -2 : 2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
          className="absolute lg:hidden z-20 cursor-grab"
          style={{ top: label.top, left: label.left, right: label.right }}
        >
          <span className="px-4 py-2 border-[2px] border-foreground rounded-[2rem] text-[10px] font-black uppercase tracking-widest bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {label.text}
          </span>
        </motion.div>
      ))}

      {/* Floating Icon Labels Mobile */}
      {mobileIconLabels.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={`mobile-icon-${idx}`}
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            animate={{ y: [0, -10, 0], rotate: [item.rotate, item.rotate + 5, item.rotate] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className="absolute lg:hidden z-20 cursor-grab flex items-center justify-center w-10 h-10 border-[2px] border-foreground rounded-full bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ top: item.top, left: item.left, right: item.right }}
          >
            <Icon size={16} strokeWidth={2.5} />
          </motion.div>
        );
      })}

      <div className="text-center z-10 w-full max-w-[90vw] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <span className="text-sm md:text-md font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">
            {t.hero.greeting}
          </span>
          <h1 className="text-[14vw] md:text-[8vw] xl:text-[9rem] font-black tracking-tighter leading-[0.9] text-foreground uppercase mix-blend-difference w-full flex flex-col md:block items-center justify-center pointer-events-auto">
            <span>DZIKRI</span> <span className="md:ml-4">RAMADHAN</span>
          </h1>
        </motion.div>
        
        <div className="max-w-3xl mx-auto flex justify-center pointer-events-auto h-16 md:h-20 lg:h-12 items-start">
          <p className="text-[11px] md:text-sm text-gray-500 font-mono text-center tracking-tight opacity-80 mt-2 px-4 whitespace-pre-wrap">
            <TypingText text={codeString} />
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 md:h-5 bg-primary ml-1 align-middle"
            />
          </p>
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
    </section>
  );
}
