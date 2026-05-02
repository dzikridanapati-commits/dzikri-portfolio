"use client";

import { useRef } from "react";
import { TimelineCard } from "@/components/TimelineCard";
import { motion, useScroll, useSpring } from "framer-motion";

const TIMELINE_DATA = [
  {
    year: "2025 - Present",
    role: "Head of New Technology",
    company: "Banana Digital Boost",
    jobType: "Full Time",
    description: "Lead IT strategy, technology roadmap, and digital transformation initiatives. Also serving as Web Developer, creating and developing corporate websites.",
    tags: ["IT Strategy", "Leadership", "Web Development"]
  },
  {
    year: "2025 - Present",
    role: "IT Engineer",
    company: "PT Danapati Boga Nusantara | Foodstocks",
    jobType: "Full Time",
    description: "Develop, implement, and maintain IT systems and automation tools to enhance operational efficiency. Collaborate with teams to optimize websites and integrate logistics systems.",
    tags: ["Automation", "System Integration", "IT Operations"]
  },
  {
    year: "2024",
    role: "IT Network",
    company: "PT Telkom Akses",
    jobType: "Internship",
    description: "Designing Master Plan Design for telecommunications networks. Developing Lastmile expansion and carrying out inventory documentation.",
    tags: ["Network Design", "Documentation"]
  },
  {
    year: "2023 - 2024",
    role: "UI/UX Design",
    company: "Garuda Maintenance Facility (GMF) AeroAsia",
    jobType: "Internship",
    description: "Integrate UI/UX Design with understanding of business solutions to identify improvements that support company strategy. Design UI/UX solutions bridging business and user needs.",
    tags: ["Figma", "UI/UX", "Prototyping"]
  },
  {
    year: "2021 - 2023",
    role: "Asisten Lab Komputer",
    company: "Universitas Serang Raya (UNSERA)",
    jobType: "Contract",
    description: "Provide technical assistance to students and lecturers. Manage and maintain computer equipment and software in the lab. Supervise computer lab use and maintain device security.",
    tags: ["IT Support", "Hardware Maintenance"]
  },
  {
    year: "2020 - 2022",
    role: "Website Developer",
    company: "Freelance",
    jobType: "Custom Web",
    description: "Develop corporate and campaign websites according to client requirements. Optimize website speed, security, and basic SEO performance. Integrate plugins and custom features.",
    tags: ["WordPress", "SEO", "Web Performance"]
  }
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <section id="journey" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 relative inline-block">
            My Journey
            {/* Hidden decorative line under the title */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary hidden md:block" />
          </h2>
          <p className="text-gray-600 font-medium max-w-xl mx-auto uppercase tracking-widest text-xs leading-relaxed">
            A chronological timeline of my professional experience and career progression as a software engineer.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Main vertical line for desktop and mobile */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-border/50" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-foreground origin-top z-10"
            style={{ scaleY }}
          />
          
          <div className="flex flex-col">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineCard 
                key={index}
                index={index}
                year={item.year}
                role={item.role}
                company={item.company}
                jobType={item.jobType}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
