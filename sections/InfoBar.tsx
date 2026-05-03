"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export function InfoBar() {
  const { t } = useLanguage();
  return (
    <div className="w-full border-y-2 border-foreground bg-white mt-12 md:mt-0 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-foreground">
        <div className="py-6 px-8 flex flex-col justify-center items-center text-center hover:bg-gray-50 transition-colors cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t.infobar.basedIn}</span>
          <span className="text-sm font-bold tracking-wide text-foreground">Jakarta Selatan</span>
        </div>
        <div className="py-6 px-8 flex flex-col justify-center items-center text-center hover:bg-gray-50 transition-colors cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t.infobar.role}</span>
          <span className="text-sm font-bold tracking-wide text-foreground">Website Developer</span>
        </div>
        <div className="py-6 px-8 flex flex-col justify-center items-center text-center hover:bg-green-50 transition-colors cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t.infobar.availability}</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="text-sm font-bold tracking-wide text-green-600">{t.infobar.availableText}</span>
          </div>
        </div>
        <div className="py-6 px-8 flex flex-col justify-center items-center text-center hover:bg-gray-50 transition-colors cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t.infobar.experience}</span>
          <span className="text-sm font-bold tracking-wide text-foreground">5+ Years</span>
        </div>
      </div>
    </div>
  );
}
