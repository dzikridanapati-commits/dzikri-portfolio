"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function ScrollIndicator() {
  const [active, setActive] = useState("home");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 hidden md:flex"
        >
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Go to ${label}`}
              className="flex items-center gap-2 group"
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredId === id && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-foreground text-background whitespace-nowrap shadow-md"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Dot */}
              <motion.div
                animate={{
                  width: active === id ? 24 : 6,
                  backgroundColor: active === id ? "#000000" : "#d1d5db",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
