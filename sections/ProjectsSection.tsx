"use client";

import { useState, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DUMMY_PROJECTS = [
  {
    title: "RS Mata Undaan Digital Platform",
    type: "HEALTHCARE WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    client: "RS Mata Undaan",
    year: "2024",
    description: "A modern healthcare website designed to improve accessibility to medical information and services for patients.\n\nThe platform provides a streamlined experience for visitors to explore hospital services, promotions, and medical information while maintaining a clean and professional healthcare interface.\n\nBuilt with a responsive architecture to ensure smooth browsing across desktop and mobile devices.",
    metrics: [
      { value: "38%", label: "FASTER LOAD" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Optimization"],
    imageUrl: "/images/porto-ziksite (1).jpg",
    link: "#"
  },
  {
    title: "Candika Laundry Service Website",
    type: "SERVICE BUSINESS WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    client: "Candika Laundry",
    year: "2024",
    description: "A service-based website designed to help customers easily access laundry services and request pickup orders.\n\nThe website focuses on clear messaging, service visibility, and simple interaction so users can quickly understand the service offerings and contact the business. The responsive design ensures a smooth experience across both mobile and desktop platforms.",
    metrics: [
      { value: "40%", label: "SERVICE INQUIRIES" },
      { value: "0", label: "DOWNTIME" },
      { value: "97/100", label: "USABILITY SCORE" }
    ],
    tags: ["WordPress", "Elementor", "Responsive UI Design"],
    imageUrl: "/images/porto-ziksite (2).jpg",
    link: "#"
  },
  {
    title: "Iskaya Product Campaign Website",
    type: "PRODUCT LANDING PAGE",
    category: "Landing Page",
    status: "LIVE",
    client: "Iskaya Snack",
    year: "2024",
    description: "A product-focused landing page built to promote snack bundle packages and improve online product visibility.\n\nThe design emphasizes strong product visuals, promotional messaging, and a direct path to purchase through marketplace integration. The layout was optimized to capture attention and guide users toward product discovery.",
    metrics: [
      { value: "45%", label: "VISIBILITY" },
      { value: "30%", label: "ENGAGEMENT" },
      { value: "94/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/porto-ziksite (3).jpg",
    link: "#"
  },
  {
    title: "Foodstocks Digital Distribution Platform",
    type: "E-COMMERCE PLATFORM",
    category: "E-Commerce",
    status: "LIVE",
    client: "Foodstocks",
    year: "2024",
    description: "An e-commerce platform designed to support the distribution of snack products through a centralized digital system.\n\nThe platform enables users to browse products, explore categories, and place orders through a structured interface optimized for both mobile and desktop devices. The system was built with scalability in mind to support future product expansion.",
    metrics: [
      { value: "50+", label: "PRODUCTS INTEGRATED" },
      { value: "MULTI", label: "DEVICE RESPONSIVE" },
      { value: "96/100", label: "UX PERFORMANCE" }
    ],
    tags: ["WordPress", "WooCommerce", "Custom UI Development"],
    imageUrl: "/images/porto-ziksite (4).jpg",
    link: "#"
  },
  {
    title: "MyRepublic Promotional Website",
    type: "MARKETING CAMPAIGN WEBSITE",
    category: "Landing Page",
    status: "LIVE",
    client: "MyRepublic",
    year: "2024",
    description: "A promotional website designed to support internet service campaigns and highlight fiber internet offerings.\n\nThe platform delivers clear promotional messaging and strong visual branding to attract potential customers and guide them toward service inquiries. The design prioritizes clarity, speed, and accessibility across devices.",
    metrics: [
      { value: "42%", label: "CAMPAIGN ENGAGEMENT" },
      { value: "100%", label: "MOBILE COMPATIBILITY" },
      { value: "95/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "UI Optimization"],
    imageUrl: "/images/porto-ziksite (5).jpg",
    link: "#"
  },
  {
    title: "Foodstocks Reseller Program Website",
    type: "BUSINESS LANDING PAGE",
    category: "Landing Page",
    status: "LIVE",
    client: "Foodstocks",
    year: "2024",
    description: "A conversion-focused landing page designed to attract new resellers and simplify the onboarding process for individuals interested in selling snack products.\n\nThe platform highlights the benefits of joining the reseller program, including product variety, competitive margins, and a streamlined ordering system. The layout was designed to clearly communicate the opportunity and encourage visitors to register as partners.\n\nThe responsive interface ensures a smooth experience across both desktop and mobile devices, making it easy for potential resellers to explore the program and start their journey.",
    metrics: [
      { value: "50+", label: "SNACK PRODUCTS" },
      { value: "30%", label: "RESELLER INQUIRIES" },
      { value: "96/100", label: "PAGE PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/porto-ziksite (6).jpg",
    link: "#"
  },
  {
    title: "Banana Digital Boost Digital Agency Website",
    type: "AGENCY WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    client: "Banana Digital Boost",
    year: "2024",
    description: "A modern agency website created to represent digital services including web development, digital marketing, and technology solutions.\n\nThe platform showcases services, portfolio work, and consultation opportunities to help businesses discover digital solutions that support their growth. The design combines modern visuals with a structured service presentation.",
    metrics: [
      { value: "35%", label: "CONSULTATION INQUIRIES" },
      { value: "100%", label: "FULLY RESPONSIVE" },
      { value: "97/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Development"],
    imageUrl: "/images/porto-ziksite (7).jpg",
    link: "#"
  }
];

const CATEGORIES = ["All", "Landing Page", "E-Commerce", "Company Profile"];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const touchStartX = useRef<number | null>(null);

  const filtered = activeCategory === "All"
    ? DUMMY_PROJECTS
    : DUMMY_PROJECTS.filter((p) => (p as any).category === activeCategory);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  return (
    <section id="projects" className="bg-dark py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 lg:mb-20 gap-4 md:gap-8">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Selected <br className="hidden md:block" /> Works
          </h2>
          <div className="flex flex-col md:items-end gap-4 md:gap-6">
            <p className="text-gray-400 font-medium max-w-sm md:text-right uppercase tracking-widest text-xs leading-relaxed">
              A curated selection of my recent projects demonstrating expertise in frontend architecture and UI design.
            </p>
            {/* Mobile counter */}
            <p className="text-white/40 text-xs font-bold tracking-widest md:hidden">
              {currentIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/20 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="relative w-full overflow-hidden pt-2 rounded-[24px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.87,_0,_0.13,_1)] w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filtered.map((project, index) => (
              <div key={index} className="w-full shrink-0">
                <ProjectCard
                  index={index}
                  title={project.title}
                  type={project.type}
                  status={project.status as any}
                  client={project.client}
                  year={project.year}
                  testimonial={(project as any).testimonial}
                  description={project.description}
                  metrics={project.metrics}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between md:justify-end items-center gap-4 mt-8 md:mt-12 w-full relative">
          {/* Dots */}
          <div className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${i === currentIndex ? 'bg-white w-8' : 'bg-white/20 w-3 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <div className="flex gap-3 md:gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 touch-manipulation"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 touch-manipulation"
              aria-label="Next project"
            >
              <ChevronRight size={22} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
