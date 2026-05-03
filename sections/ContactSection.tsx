"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

// Custom wrapper for TikTok SVG
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="bg-dark text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Let's Start <br /> A Project
              </h2>
              <p className="text-gray-400 font-medium max-w-md text-sm md:text-base leading-relaxed mb-12">
                Currently open for new opportunities. Whether you have a specific project in mind or just want to explore possibilities, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:dzikri1990@gmail.com" className="flex items-center gap-4 group w-max">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:bg-white group-hover:text-dark transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">dzikri1990@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                  <p className="text-xl font-bold">Jakarta Selatan</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12 pt-12 border-t border-white/10">
               {[
                 { icon: Instagram, url: "https://instagram.com/dzikriramadhann", label: "Instagram" },
                 { icon: Linkedin, url: "https://id.linkedin.com/in/dzikrii", label: "LinkedIn" },
                 { icon: TikTokIcon, url: "https://tiktok.com/@ziksite", label: "TikTok" }
               ].map((social) => {
                 const Icon = social.icon;
                 return (
                   <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-all duration-300">
                     <Icon size={22} />
                   </a>
                 );
               })}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/40 focus:bg-white/5 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/40 focus:bg-white/5 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/40 focus:bg-white/5 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/40 focus:bg-white/5 transition-all duration-300 resize-none"
                />
              </div>

              <button 
                type="button"
                onClick={() => window.open('https://wa.me/6289630557191', '_blank')}
                className="group mt-4 w-full md:w-auto self-start bg-white text-dark hover:bg-gray-200 uppercase tracking-widest font-black text-sm px-10 py-5 rounded-2xl border-4 border-transparent hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
