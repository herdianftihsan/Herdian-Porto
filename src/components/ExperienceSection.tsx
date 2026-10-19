"use client";

import React from "react";
import { TIMELINE } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      <hr className="border-white/10 mb-8" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA] pb-6 mb-8 border-b border-white/10">
        Competitions, coursework, and applied engineering.
      </h2>

      {/* Timeline List */}
      <div className="flex flex-col">
        {TIMELINE.map((item, index) => {
          const isLast = index === TIMELINE.length - 1;
          return (
            <div
              key={index}
              className={`group grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-6 transition-colors ${
                !isLast ? "border-b border-white/10" : ""
              }`}
            >
              {/* Date */}
              <div className="font-mono text-xs text-[#A1A1AA] pt-1">
                {item.year}
              </div>

              {/* Role & Org Description */}
              <div>
                <h4 className="text-base sm:text-lg font-medium text-[#FAFAFA] tracking-tight group-hover:text-white transition-colors">
                  {item.role}
                </h4>
                <span className="font-mono text-xs text-[#D4D4D8] font-medium block mt-0.5 mb-2">
                  {item.organization}
                </span>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
