"use client";

import { useState, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const DUMMY_PROJECTS = [
  {
    title: "Healthcare Hospital Digital Platform",
    type: "HEALTHCARE WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A modern healthcare website designed to improve accessibility to medical information and services for patients.\n\nThe platform provides a streamlined experience for visitors to explore hospital services, promotions, and medical information while maintaining a clean and professional healthcare interface.\n\nBuilt with a responsive architecture to ensure smooth browsing across desktop and mobile devices.",
    metrics: [
      { value: "38%", label: "FASTER LOAD" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Optimization"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Laundry Service Business Website",
    type: "SERVICE BUSINESS WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A service-based website designed to help customers easily access laundry services and request pickup orders.\n\nThe website focuses on clear messaging, service visibility, and simple interaction so users can quickly understand the service offerings and contact the business. The responsive design ensures a smooth experience across both mobile and desktop platforms.",
    metrics: [
      { value: "40%", label: "SERVICE INQUIRIES" },
      { value: "0", label: "DOWNTIME" },
      { value: "97/100", label: "USABILITY SCORE" }
    ],
    tags: ["WordPress", "Elementor", "Responsive UI Design"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Snack Product Campaign Landing Page",
    type: "PRODUCT LANDING PAGE",
    category: "Landing Page",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A product-focused landing page built to promote snack bundle packages and improve online product visibility.\n\nThe design emphasizes strong product visuals, promotional messaging, and a direct path to purchase through marketplace integration. The layout was optimized to capture attention and guide users toward product discovery.",
    metrics: [
      { value: "45%", label: "VISIBILITY" },
      { value: "30%", label: "ENGAGEMENT" },
      { value: "94/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "F&B Digital Distribution Platform",
    type: "E-COMMERCE PLATFORM",
    category: "E-Commerce",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "An e-commerce platform designed to support the distribution of food and beverage products through a centralized digital system.\n\nThe platform enables users to browse products, explore categories, and place orders through a structured interface optimized for both mobile and desktop devices. The system was built with scalability in mind to support future product expansion.",
    metrics: [
      { value: "50+", label: "PRODUCTS INTEGRATED" },
      { value: "MULTI", label: "DEVICE RESPONSIVE" },
      { value: "96/100", label: "UX PERFORMANCE" }
    ],
    tags: ["WordPress", "WooCommerce", "Custom UI Development"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "ISP Promotional Campaign Website",
    type: "MARKETING CAMPAIGN WEBSITE",
    category: "Landing Page",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A promotional website designed to support internet service campaigns and highlight fiber internet offerings.\n\nThe platform delivers clear promotional messaging and strong visual branding to attract potential customers and guide them toward service inquiries. The design prioritizes clarity, speed, and accessibility across devices.",
    metrics: [
      { value: "42%", label: "CAMPAIGN ENGAGEMENT" },
      { value: "100%", label: "MOBILE COMPATIBILITY" },
      { value: "95/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "UI Optimization"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "F&B Reseller Program Landing Page",
    type: "BUSINESS LANDING PAGE",
    category: "Landing Page",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A conversion-focused landing page designed to attract new resellers and simplify the onboarding process for individuals interested in selling food and beverage products.\n\nThe platform highlights the benefits of joining the reseller program, including product variety, competitive margins, and a streamlined ordering system. The layout was designed to clearly communicate the opportunity and encourage visitors to register as partners.\n\nThe responsive interface ensures a smooth experience across both desktop and mobile devices, making it easy for potential resellers to explore the program and start their journey.",
    metrics: [
      { value: "50+", label: "PRODUCTS LISTED" },
      { value: "30%", label: "RESELLER INQUIRIES" },
      { value: "96/100", label: "PAGE PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Digital Agency Company Website",
    type: "AGENCY WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "A modern agency website created to represent digital services including web development, digital marketing, and technology solutions.\n\nThe platform showcases services, portfolio work, and consultation opportunities to help businesses discover digital solutions that support their growth. The design combines modern visuals with a structured service presentation.",
    metrics: [
      { value: "35%", label: "CONSULTATION INQUIRIES" },
      { value: "100%", label: "FULLY RESPONSIVE" },
      { value: "97/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Development"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Defense MRO Corporate Website",
    type: "CORPORATE PROFILE WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A corporate profile website for a defense maintenance, repair & overhaul (MRO) company, built to establish institutional credibility rather than to sell.\n\nThe site answers three questions within the first ten seconds — who the company is, what they can do, and who already trusts them — for government, military, and private partners verifying the company's capability.\n\nDelivered as a multilingual WordPress build with a custom theme aligned to strict brand guidelines.",
    metrics: [
      { value: "ID / EN", label: "MULTILINGUAL" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["WordPress", "Polylang", "Custom Theme"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Premium Group Transport Website",
    type: "TRAVEL & TRANSPORT WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A B2C-first website for a premium group transport service, repositioned to feel simpler, more premium, and easier to read.\n\nThe redesign strengthens the brand's positioning and guides visitors toward a clear WhatsApp booking flow, while improving readability and SEO across the whole site.\n\nBuilt by modifying the existing WordPress theme rather than rebuilding from scratch, keeping the brand's history intact.",
    metrics: [
      { value: "B2C", label: "FIRST POSITIONING" },
      { value: "24/7", label: "WHATSAPP BOOKING" },
      { value: "100%", label: "MOBILE RESPONSIVE" }
    ],
    tags: ["WordPress", "Custom Theme", "SEO"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Property & Boarding House Rental Website",
    type: "PROPERTY RENTAL WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A property rental website covering boarding houses (kos) and apartments across multiple locations, with per-room listings and pricing ranges.\n\nEach room shows its own specifications, price range, and real-time availability status, with a waiting-list and inquiry flow that hands off to WhatsApp for follow-up.\n\nDesigned around a clear order flow and availability database so prospective tenants can quickly find and ask about the right unit.",
    metrics: [
      { value: "3", label: "LOCATIONS" },
      { value: "REAL-TIME", label: "ROOM AVAILABILITY" },
      { value: "100%", label: "MOBILE RESPONSIVE" }
    ],
    tags: ["WordPress", "Custom Theme", "Booking Flow"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Industrial Supplier Catalog Website",
    type: "PRODUCT CATALOG WEBSITE",
    category: "E-Commerce",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A B2B product catalog website for an industrial supplier, built so buyers can browse the full product range and send inquiries with minimal friction.\n\nThe site combines a structured catalog, cart, blog, and company profile into one clean experience, with a layout optimized for product discovery across devices.\n\nDelivered from an HTML prototype into a maintainable WordPress build.",
    metrics: [
      { value: "CATALOG", label: "+ CART & INQUIRY" },
      { value: "50+", label: "PRODUCTS LISTED" },
      { value: "100%", label: "RESPONSIVE" }
    ],
    tags: ["WordPress", "Catalog", "Responsive UI"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Advertising & Media Agency Website",
    type: "AGENCY WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A multi-page website for an advertising and media agency, presenting its services and service locations with a consistent, brand-aligned design.\n\nThe build went through a full QA pass — fixing navigation, brand fonts, favicon, and sitemap alignment — to ship a polished, responsive site across more than twenty pages.\n\nStructured around a clear sitemap so visitors can navigate services and coverage areas with ease.",
    metrics: [
      { value: "21", label: "PAGES BUILT" },
      { value: "BRAND", label: "FONT CONSISTENT" },
      { value: "100%", label: "RESPONSIVE" }
    ],
    tags: ["HTML/CSS", "Custom UI", "Responsive UI"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Investment Management Firm Website",
    type: "FINANCIAL SERVICES WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A company profile website for an OJK-registered investment manager specializing in mutual funds, built to communicate trust and regulatory credibility.\n\nThe site guides visitors through how to invest, how to buy and sell, downloadable forms, FAQs, and articles — turning a regulated financial offering into a clear, approachable experience.\n\nA full revamp of the firm's previous site with a refreshed brand palette and typography.",
    metrics: [
      { value: "OJK", label: "REGISTERED" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["HTML/CSS", "Custom UI", "SEO"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Technology Consulting Website",
    type: "CORPORATE PROFILE WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A corporate website for a management and technology consulting firm focused on helping technology companies penetrate the government and state-owned enterprise market.\n\nThe site presents services such as government relations, software license compliance, legal support, and corporate training in a clear, credibility-first structure.\n\nBuilt with a clean, professional layout optimized for performance and SEO.",
    metrics: [
      { value: "100%", label: "RESPONSIVE" },
      { value: "SEO", label: "OPTIMIZED" },
      { value: "FAST", label: "LOAD TIME" }
    ],
    tags: ["WordPress", "SEO", "Responsive UI"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Law Firm Corporate Website",
    type: "LEGAL SERVICES WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2026",
    description: "A corporate website for a law firm offering measured legal services to both individual and corporate clients.\n\nThe site presents a broad set of practice areas — from civil and criminal litigation to corporate, banking, intellectual property, and insolvency matters — in a structure that builds trust and makes it easy to get in touch.\n\nDesigned with a professional, authoritative tone and a responsive, SEO-ready build.",
    metrics: [
      { value: "10+", label: "PRACTICE AREAS" },
      { value: "100%", label: "MOBILE RESPONSIVE" },
      { value: "SEO", label: "READY" }
    ],
    tags: ["WordPress", "SEO", "Responsive UI"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Foodstocks Hub — ERP System",
    type: "ERP SYSTEM",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "An internal ERP web app that unifies an omnichannel food business previously run on five separate spreadsheets into a single source of truth.\n\nThe system consolidates sales & revenue across eight channels, reseller/B2B CRM, inventory, purchasing, and finance into one platform — replacing manual monthly copy-paste workflows with automated dashboards and reports.\n\nBuilt with a scalable architecture so new channels and modules can be added without breaking the data model.",
    metrics: [
      { value: "5→1", label: "EXCEL FILES UNIFIED" },
      { value: "8", label: "CHANNELS INTEGRATED" },
      { value: "100%", label: "AUTOMATED REPORTING" }
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Boost Engine — Agency Platform",
    type: "AGENCY MANAGEMENT PLATFORM",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "An internal agency management platform that replaces ClickUp, Looker Studio, and WhatsApp with a single workspace for running all agency operations.\n\nIt delivers role-based home dashboards for every position — from CEO revenue pipeline and forecasting to PM kanban boards and staff task lists — with real-time performance data, client health scoring, and a branded client portal.\n\nBuilt on a realtime database with row-level security so each role sees exactly what they need, nothing more.",
    metrics: [
      { value: "3→1", label: "TOOLS CONSOLIDATED" },
      { value: "7", label: "ROLE-BASED DASHBOARDS" },
      { value: "REAL-TIME", label: "PERFORMANCE DATA" }
    ],
    tags: ["Next.js", "Supabase", "Recharts"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "IT Operations Dashboard",
    type: "IT OPS DASHBOARD",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "An internal dashboard built for an IT team serving two companies at once — tracking development tasks, support tickets, briefs, and team capacity in one place.\n\nIt replaces untracked WhatsApp requests and verbal briefs with a structured ticketing and task system, giving the team clear visibility into workload, priorities, and performance.\n\nDesigned around a priority system that keeps support requests and development work from colliding.",
    metrics: [
      { value: "2", label: "COMPANIES SERVED" },
      { value: "30+", label: "ACTIVE USERS" },
      { value: "100%", label: "TICKETS TRACKED" }
    ],
    tags: ["Next.js", "Prisma", "NextAuth"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "Banana Academy — Internal LMS",
    type: "LEARNING MANAGEMENT SYSTEM",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "An internal Learning Management System that turns ad hoc employee training into a structured, measurable, and motivating program.\n\nEmployees follow async training paths, complete assessments, earn points, and redeem real rewards — with progress, leaderboards, and streaks that make every learning action feel meaningful.\n\nAdmins create programs and grade submissions in as few clicks as possible, while managers track team progress without logging into individual accounts.",
    metrics: [
      { value: "100%", label: "STRUCTURED TRAINING" },
      { value: "GAMIFIED", label: "POINTS & LEADERBOARD" },
      { value: "3", label: "ROLES SUPPORTED" }
    ],
    tags: ["Next.js", "Supabase", "Drizzle"],
    imageUrl: "/images/placeholder-image.svg",
    link: "#"
  },
  {
    title: "CV ATS Builder — AI Web App",
    type: "AI WEB APP",
    category: "Web App",
    status: "LIVE",
    kind: "Web App",
    client: "In-house Product",
    year: "2026",
    description: "A free AI-assisted web app for building ATS-friendly resumes, with a form on the left and a real-time live preview on the right.\n\nUsers fill in five sections, optimize their summary and job descriptions with AI, toggle between Indonesian and English, and export a clean, single-column PDF designed to pass applicant tracking systems.\n\nBuilt as an in-house product with an AI optimization endpoint and a lightweight premium upsell flow.",
    metrics: [
      { value: "50K+", label: "RESUMES BUILT" },
      { value: "<10 MIN", label: "TO FINISH" },
      { value: "95%", label: "ATS PASS RATE" }
    ],
    tags: ["Next.js", "Tailwind", "Claude AI"],
    imageUrl: "/images/placeholder-image.svg",
    link: "https://cvb.ziksite.my.id"
  }
];

// Pluralize a kind label for the filter tabs ("Website" -> "Websites")
const pluralize = (label: string) => (label.endsWith("s") ? label : `${label}s`);

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const touchStartX = useRef<number | null>(null);

  // Build the tab list dynamically from whatever kinds exist in the data
  const kinds = Array.from(new Set(DUMMY_PROJECTS.map((p) => (p as any).kind ?? "Website")));
  const filters = ["All", ...kinds];

  const projects =
    activeFilter === "All"
      ? DUMMY_PROJECTS
      : DUMMY_PROJECTS.filter((p) => ((p as any).kind ?? "Website") === activeFilter);

  const selectFilter = (filter: string) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
              Real projects. Real results. Built with precision and purpose.
            </p>
            {/* Mobile counter */}
            <p className="text-white/40 text-xs font-bold tracking-widest md:hidden">
              {currentIndex + 1} / {projects.length}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        {filters.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8 md:mb-12">
            {filters.map((filter) => {
              const label = filter === "All" ? "All" : pluralize(filter);
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => selectFilter(filter)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 touch-manipulation ${
                    isActive
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        <div
          className="relative w-full overflow-hidden pt-2 rounded-[24px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.87,_0,_0.13,_1)] w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
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
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${i === currentIndex ? 'bg-white w-8' : 'bg-white/20 w-3 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <div className="flex gap-3 md:gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 touch-manipulation"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
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
