import { Instagram, Linkedin } from "lucide-react";

// Custom wrapper for TikTok SVG
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-dark text-secondary text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm font-medium tracking-wide opacity-60">
          © {new Date().getFullYear()} DZIKRI RAMADHAN.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 opacity-60">
          <a href="https://instagram.com/dzikriramadhann" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Instagram">
             <Instagram size={20} />
          </a>
          <a href="https://id.linkedin.com/in/dzikrii" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="LinkedIn">
             <Linkedin size={20} />
          </a>
          <a href="https://tiktok.com/@ziksite" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="TikTok">
             <TikTokIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
