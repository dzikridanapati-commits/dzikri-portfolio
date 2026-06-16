"use client";

import { useState, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
export const DUMMY_PROJECTS = [
  {
    title: "CV ATS Builder — AI Web App",
    type: "AI WEB APP",
    category: "Web App",
    status: "LIVE",
    kind: "Web App",
    client: "In-house Product",
    year: "2026",
    description: "Build a resume that beats the bots. A free, AI-assisted builder with live preview, one-click optimization, and clean ATS-safe PDF export — a finished resume in under ten minutes.\n\nUsers fill in five sections, optimize their summary and job descriptions with AI, toggle between Indonesian and English, and export a clean, single-column PDF designed to pass applicant tracking systems.\n\nBuilt as an in-house product with an AI optimization endpoint and a lightweight premium upsell flow.",
    metrics: [
      { value: "50K+", label: "RESUMES BUILT" },
      { value: "<10 MIN", label: "TO FINISH" },
      { value: "95%", label: "ATS PASS RATE" }
    ],
    tags: ["Next.js", "Tailwind", "AI Integration"],
    imageUrl: "/images/project-cv-builder.webp",
    link: "https://cvb.ziksite.my.id"
  },
  {
    title: "Foodstocks Purchasing Intelligence",
    type: "PURCHASING ANALYTICS SYSTEM",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "Purchasing decisions backed by data, not gut feel. Synced hourly to the warehouse system, it forecasts demand, flags stockouts and overstock before they happen, and recommends exactly what to reorder — and when.\n\nUnder the hood: reorder-point and EOQ calculators, ABC classification, true-COGS building, and a supplier scorecard, with automated email and WhatsApp alerts.\n\nTurns data that already existed into purchasing decisions that finally use it.",
    metrics: [
      { value: "200+", label: "SKUs TRACKED" },
      { value: "HOURLY", label: "DATA SYNC" },
      { value: "AUTO", label: "REORDER ALERTS" }
    ],
    tags: ["Next.js", "Redis", "REST API"],
    imageUrl: "/images/project-purchasing-tracker.webp",
    link: "#"
  },
  {
    title: "Foodstocks Reseller Ecosystem",
    type: "RESELLER PLATFORM",
    category: "Internal System",
    status: "PRIVATE",
    kind: "Internal System",
    client: "Confidential",
    year: "2026",
    description: "A B2B ordering portal that turns resellers into a loyal community. They browse the catalog, place orders, and track shipments and payments end to end — while points, tiers, leaderboards, and rewards keep them coming back.\n\nBuilt as a split web + API architecture with a full admin back office for catalog, access control, and reseller management.\n\nDesigned to scale a reseller network with structure instead of spreadsheets.",
    metrics: [
      { value: "15+", label: "RESELLER MODULES" },
      { value: "GAMIFIED", label: "TIERS & REWARDS" },
      { value: "E2E", label: "ORDER → SHIPMENT" }
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    imageUrl: "/images/project-reseller-ecosystem.webp",
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
    description: "Employee training people actually finish. An internal LMS that turns ad-hoc onboarding into structured paths, with points, leaderboards, and real rewards that make progress feel earned.\n\nEmployees follow async training paths, complete assessments, earn points, and redeem real rewards — with progress, leaderboards, and streaks that make every learning action feel meaningful.\n\nAdmins create programs and grade submissions in as few clicks as possible, while managers track team progress without logging into individual accounts.",
    metrics: [
      { value: "100%", label: "STRUCTURED TRAINING" },
      { value: "GAMIFIED", label: "POINTS & LEADERBOARD" },
      { value: "3", label: "ROLES SUPPORTED" }
    ],
    tags: ["Next.js", "PostgreSQL", "Drizzle"],
    imageUrl: "/images/project-banana-academy.webp",
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
    description: "Two companies, one IT team, zero lost tickets. An internal dashboard that turns scattered WhatsApp requests into tracked tickets and tasks — with clear visibility into team capacity.\n\nIt replaces untracked WhatsApp requests and verbal briefs with a structured ticketing and task system, giving the team clear visibility into workload, priorities, and performance.\n\nDesigned around a priority system that keeps support requests and development work from colliding.",
    metrics: [
      { value: "2", label: "COMPANIES SERVED" },
      { value: "30+", label: "ACTIVE USERS" },
      { value: "100%", label: "TICKETS TRACKED" }
    ],
    tags: ["Next.js", "Prisma", "NextAuth"],
    imageUrl: "/images/project-it-dashboard.webp",
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
    description: "ClickUp, Looker, and WhatsApp — replaced by one platform. An internal agency operating system with a role-based dashboard for every seat, from CEO forecasts to staff task lists, powered by real-time performance data.\n\nIt delivers role-based home dashboards for every position — from CEO revenue pipeline and forecasting to PM kanban boards and staff task lists — with real-time performance data, client health scoring, and a branded client portal.\n\nBuilt on a realtime database with row-level security so each role sees exactly what they need, nothing more.",
    metrics: [
      { value: "3→1", label: "TOOLS REPLACED" },
      { value: "7", label: "ROLE DASHBOARDS" },
      { value: "8-MO", label: "REVENUE FORECAST" }
    ],
    tags: ["Next.js", "PostgreSQL", "Recharts"],
    imageUrl: "/images/project-boost-engine.webp",
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
    description: "One system replacing five spreadsheets. An internal ERP that unifies an omnichannel food business — sales, resellers, inventory, purchasing, and finance — so every team works from the same numbers, updated automatically.\n\nThe system consolidates sales & revenue across eight channels, reseller/B2B CRM, inventory, purchasing, and finance into one platform — replacing manual monthly copy-paste workflows with automated dashboards and reports.\n\nBuilt with a scalable architecture so new channels and modules can be added without breaking the data model.",
    metrics: [
      { value: "8", label: "SALES CHANNELS" },
      { value: "5→1", label: "SPREADSHEETS UNIFIED" },
      { value: "SSOT", label: "SINGLE DATA SOURCE" }
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    imageUrl: "/images/project-foodstocks-erp.webp",
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
    description: "Authority you can feel before you call. A law firm's corporate site presenting a deep bench of practice areas with a tone that earns trust from individuals and corporations alike.\n\nThe site presents a broad set of practice areas — from civil and criminal litigation to corporate, banking, intellectual property, and insolvency matters — in a structure that builds trust and makes it easy to get in touch.\n\nDesigned with a professional, authoritative tone and a responsive, SEO-ready build.",
    metrics: [
      { value: "10+", label: "PRACTICE AREAS" },
      { value: "100%", label: "MOBILE-FIRST" },
      { value: "SEO", label: "READY" }
    ],
    tags: ["WordPress", "SEO", "Responsive UI"],
    imageUrl: "/images/project-law-firm.webp",
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
    description: "Opening doors to the public sector. A credibility-first site for a consultancy that helps technology companies break into government and state-owned-enterprise markets.\n\nThe site presents services such as government relations, software license compliance, legal support, and corporate training in a clear, credibility-first structure.\n\nBuilt with a clean, professional layout optimized for performance and SEO.",
    metrics: [
      { value: "GOV", label: "& BUMN FOCUS" },
      { value: "<2s", label: "LOAD TIME" },
      { value: "100%", label: "RESPONSIVE" }
    ],
    tags: ["WordPress", "SEO", "Responsive UI"],
    imageUrl: "/images/project-tech-consulting.webp",
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
    description: "Trust, communicated clearly. An OJK-registered investment manager's site that turns a regulated mutual-fund offering into an approachable, confidence-building experience — from how-to-invest to downloadable forms.\n\nThe site guides visitors through how to invest, how to buy and sell, downloadable forms, FAQs, and articles — turning a regulated financial offering into a clear, approachable experience.\n\nA full revamp of the firm's previous site with a refreshed brand palette and typography.",
    metrics: [
      { value: "OJK", label: "LICENSED" },
      { value: "100%", label: "MOBILE READY" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["HTML/CSS", "Custom UI", "SEO"],
    imageUrl: "/images/project-investment-firm.webp",
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
    description: "A nationwide out-of-home ad network, presented at scale. Twenty-plus pages of services and coverage, unified by one consistent, brand-true design.\n\nThe build went through a full QA pass — fixing navigation, brand fonts, favicon, and sitemap alignment — to ship a polished, responsive site across more than twenty pages.\n\nStructured around a clear sitemap so visitors can navigate services and coverage areas with ease.",
    metrics: [
      { value: "35+", label: "CITIES COVERED" },
      { value: "21", label: "PAGES SHIPPED" },
      { value: "100%", label: "BRAND-CONSISTENT" }
    ],
    tags: ["HTML/CSS", "Custom UI", "Responsive UI"],
    imageUrl: "/images/project-ad-media-agency.webp",
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
    description: "A B2B supplier's full catalog, built for buyers in a hurry. Browse, add to cart, and send an inquiry — product discovery without the friction, on any device.\n\nThe site combines a structured catalog, cart, blog, and company profile into one clean experience, with a layout optimized for product discovery across devices.\n\nDelivered from an HTML prototype into a maintainable WordPress build.",
    metrics: [
      { value: "50+", label: "PRODUCTS" },
      { value: "CART", label: "+ INQUIRY FLOW" },
      { value: "100%", label: "RESPONSIVE" }
    ],
    tags: ["WordPress", "Catalog", "Responsive UI"],
    imageUrl: "/images/project-industrial-catalog.webp",
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
    description: "Find your next room in seconds. A rental platform for boarding houses and apartments with per-room pricing, real-time availability, and a WhatsApp flow that closes the gap between browsing and booking.\n\nEach room shows its own specifications, price range, and real-time availability status, with a waiting-list and inquiry flow that hands off to WhatsApp for follow-up.\n\nDesigned around a clear order flow and availability database so prospective tenants can quickly find and ask about the right unit.",
    metrics: [
      { value: "3", label: "LOCATIONS" },
      { value: "LIVE", label: "ROOM AVAILABILITY" },
      { value: "1-TAP", label: "WA INQUIRY" }
    ],
    tags: ["WordPress", "Custom Theme", "Booking Flow"],
    imageUrl: "/images/project-property-rental.webp",
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
    description: "Premium group travel that finally looks premium. A B2C-first redesign — cleaner, more confident — engineered to turn visitors into WhatsApp bookings.\n\nThe redesign strengthens the brand's positioning and guides visitors toward a clear WhatsApp booking flow, while improving readability and SEO across the whole site.\n\nBuilt by modifying the existing WordPress theme rather than rebuilding from scratch, keeping the brand's history intact.",
    metrics: [
      { value: "B2C", label: "REPOSITIONED" },
      { value: "24/7", label: "WHATSAPP BOOKING" },
      { value: "100%", label: "MOBILE-FIRST" }
    ],
    tags: ["WordPress", "Custom Theme", "SEO"],
    imageUrl: "/images/project-group-transport.webp",
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
    description: "Built to verify, not to sell. A defense MRO corporate site that proves who the company is, what it can do, and who already trusts it — within the first ten seconds — to government and military partners.\n\nThe site answers three questions within the first ten seconds — who the company is, what they can do, and who already trusts them — for government, military, and private partners verifying the company's capability.\n\nDelivered as a multilingual WordPress build with a custom theme aligned to strict brand guidelines.",
    metrics: [
      { value: "ID / EN", label: "BILINGUAL" },
      { value: "10s", label: "CREDIBILITY TEST" },
      { value: "95/100", label: "SEO SCORE" }
    ],
    tags: ["WordPress", "Polylang", "Custom Theme"],
    imageUrl: "/images/project-defense-mro.webp",
    link: "#"
  },
  {
    title: "Healthcare Hospital Digital Platform",
    type: "HEALTHCARE WEBSITE",
    category: "Company Profile",
    status: "LIVE",
    kind: "Website",
    client: "Confidential",
    year: "2024",
    description: "Healthcare information patients can actually find — fast. This hospital platform turns a maze of services, schedules, and promotions into a clean, mobile-first experience that earns trust from the first click.\n\nThe platform provides a streamlined experience for visitors to explore hospital services, promotions, and medical information while maintaining a clean and professional healthcare interface.\n\nBuilt with a responsive architecture to ensure smooth browsing across desktop and mobile devices.",
    metrics: [
      { value: "38%", label: "FASTER LOAD" },
      { value: "95/100", label: "SEO SCORE" },
      { value: "24/7", label: "INFO ACCESS" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Optimization"],
    imageUrl: "/images/porto-ziksite (1).jpg",
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
    description: "A laundry service that books customers before they call. Clear messaging and a frictionless pickup-request flow turn casual visitors into orders, on any device.\n\nThe website focuses on clear messaging, service visibility, and simple interaction so users can quickly understand the service offerings and contact the business. The responsive design ensures a smooth experience across both mobile and desktop platforms.",
    metrics: [
      { value: "+40%", label: "PICKUP REQUESTS" },
      { value: "1-TAP", label: "WA ORDERING" },
      { value: "0", label: "DOWNTIME" }
    ],
    tags: ["WordPress", "Elementor", "Responsive UI Design"],
    imageUrl: "/images/porto-ziksite (2).jpg",
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
    description: "A snack brand's bundles, packaged to sell. A bold, visual-first landing page that grabs attention and sends shoppers straight to checkout on the marketplace.\n\nThe design emphasizes strong product visuals, promotional messaging, and a direct path to purchase through marketplace integration. The layout was optimized to capture attention and guide users toward product discovery.",
    metrics: [
      { value: "+45%", label: "PRODUCT VISIBILITY" },
      { value: "1-CLICK", label: "TO MARKETPLACE" },
      { value: "94/100", label: "PERFORMANCE" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/porto-ziksite (3).jpg",
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
    description: "One storefront for an entire food & beverage catalog. A structured, scalable e-commerce experience that makes browsing, exploring, and ordering effortless on every device.\n\nThe platform enables users to browse products, explore categories, and place orders through a structured interface optimized for both mobile and desktop devices. The system was built with scalability in mind to support future product expansion.",
    metrics: [
      { value: "50+", label: "SKUs ONLINE" },
      { value: "1", label: "UNIFIED STOREFRONT" },
      { value: "96/100", label: "UX SCORE" }
    ],
    tags: ["WordPress", "WooCommerce", "Custom UI Development"],
    imageUrl: "/images/porto-ziksite (4).jpg",
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
    description: "A fiber-internet campaign engineered to convert. Sharp messaging and strong visual branding turn curiosity about faster internet into real service inquiries.\n\nThe platform delivers clear promotional messaging and strong visual branding to attract potential customers and guide them toward service inquiries. The design prioritizes clarity, speed, and accessibility across devices.",
    metrics: [
      { value: "+42%", label: "CAMPAIGN ENGAGEMENT" },
      { value: "<2s", label: "LOAD TIME" },
      { value: "100%", label: "MOBILE READY" }
    ],
    tags: ["WordPress", "Elementor", "UI Optimization"],
    imageUrl: "/images/porto-ziksite (5).jpg",
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
    description: "A reseller program that sells itself. A conversion-focused landing page that lays out the margins, the products, and the path to partnership — then makes signing up effortless.\n\nThe platform highlights the benefits of joining the reseller program, including product variety, competitive margins, and a streamlined ordering system. The layout was designed to clearly communicate the opportunity and encourage visitors to register as partners.\n\nThe responsive interface ensures a smooth experience across both desktop and mobile devices, making it easy for potential resellers to explore the program and start their journey.",
    metrics: [
      { value: "+30%", label: "PARTNER SIGNUPS" },
      { value: "50+", label: "PRODUCTS LISTED" },
      { value: "1-STEP", label: "ONBOARDING" }
    ],
    tags: ["WordPress", "Elementor", "Landing Page Optimization"],
    imageUrl: "/images/porto-ziksite (6).jpg",
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
    description: "A digital agency's credibility, captured in a single scroll. Services, portfolio, and consultation paths presented with the polish that turns visitors into leads.\n\nThe platform showcases services, portfolio work, and consultation opportunities to help businesses discover digital solutions that support their growth. The design combines modern visuals with a structured service presentation.",
    metrics: [
      { value: "+35%", label: "CONSULT INQUIRIES" },
      { value: "97/100", label: "PERFORMANCE" },
      { value: "100%", label: "RESPONSIVE" }
    ],
    tags: ["WordPress", "Elementor", "Custom UI Development"],
    imageUrl: "/images/porto-ziksite (7).jpg",
    link: "#"
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
          </div>
        </div>

        {/* Filter Dropdown */}
        {filters.length > 1 && (
          <div className="relative inline-block mb-8 md:mb-12">
            <select
              value={activeFilter}
              onChange={(e) => selectFilter(e.target.value)}
              aria-label="Filter projects by type"
              className="appearance-none bg-[#1A1A1A] text-white border-2 border-white/20 hover:border-white/50 focus:border-white rounded-full pl-5 pr-12 py-2.5 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-widest cursor-pointer focus:outline-none transition-colors duration-300"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter} className="bg-[#1A1A1A] text-white">
                  {filter === "All" ? "All Projects" : pluralize(filter)}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              strokeWidth={3}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
            />
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
          {/* Mobile counter (dots are too many on small screens) */}
          <p className="md:hidden text-white/60 text-xs font-bold tracking-widest">
            {currentIndex + 1} / {projects.length}
          </p>
          {/* Dots (desktop only) */}
          <div className="hidden md:flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
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
