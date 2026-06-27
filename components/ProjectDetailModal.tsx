"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, BadgeCheck, Globe, Lock, Sparkles } from "lucide-react";

export interface ProjectDetail {
  title: string;
  type?: string;
  status?: string;
  client?: string;
  year?: string;
  overview?: string;
  features?: string[];
  role?: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  imageUrl: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} overview`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border-[3px] border-white/20 rounded-[24px] text-white shadow-[12px_12px_0px_0px_rgba(255,255,255,0.08)]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close overview"
              className="sticky top-4 left-full z-20 -mt-2 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-[#0A0A0A]/80 text-white backdrop-blur hover:bg-white hover:text-black transition-colors duration-300"
            >
              <X size={18} strokeWidth={3} />
            </button>

            <div className="-mt-12 p-6 md:p-10">
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden rounded-[16px] border-[2px] border-white/10 bg-[#0f0f0f] mb-6 md:mb-8">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 md:gap-3 flex-wrap mb-4">
                {project.type && (
                  <span className="px-2.5 py-1 md:px-3 md:py-1.5 border-[2px] border-white/20 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-300">
                    {project.type}
                  </span>
                )}
                {project.status && (
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${
                      project.status === "LIVE" ? "text-green-400" : "text-gray-500"
                    }`}
                  >
                    {project.status === "LIVE" ? <Globe size={12} /> : <Lock size={12} />}
                    {project.status}
                  </span>
                )}
                {project.year && (
                  <span className="text-gray-500 font-bold tracking-widest text-xs ml-auto">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-black uppercase mb-5 md:mb-6 leading-tight">
                {project.title}
              </h3>

              {/* Overview */}
              {project.overview && (
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-medium mb-7 md:mb-8">
                  {project.overview.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-7 md:mb-8">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Sparkles size={14} className="text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      Key Features
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-gray-200 font-medium"
                      >
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-7 md:mb-8">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <BadgeCheck size={14} className="text-blue-400" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">
                      Verified Impact
                    </span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8 border-l-[3px] border-white/10 pl-3 md:pl-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-lg md:text-2xl font-black mb-0.5">{m.value}</span>
                        <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack */}
              <div className="pt-5 md:pt-6 border-t border-white/10">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 md:px-3 md:py-1.5 text-[9px] font-bold bg-[#1A1A1A] text-gray-300 rounded-[6px] border border-white/10 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role */}
              {project.role && (
                <div className="mt-5 md:mt-6">
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Role
                  </span>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">{project.role}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
