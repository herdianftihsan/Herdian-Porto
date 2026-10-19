"use client";

import React from "react";
import { Layout, Server, Cpu, Database } from "lucide-react";
import { CAPABILITIES, CapabilityGroup } from "@/data/portfolioData";

export default function CapabilitiesSection() {
  const getGroupIcon = (iconName: CapabilityGroup["iconName"]) => {
    switch (iconName) {
      case "frontend":
        return <Layout className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors" />;
      case "backend":
        return <Server className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors" />;
      case "systems":
        return <Cpu className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors" />;
      case "database":
        return <Database className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      <hr className="border-white/10 mb-8" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA] pb-6 mb-8 border-b border-white/10">
        Tools I reach for.
      </h2>

      {/* Grid of Capability Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAPABILITIES.map((group) => (
          <div
            key={group.id}
            className="group rounded-2xl border border-white/10 bg-[#121215] p-6 hover:border-white/20 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 transition-colors">
                {getGroupIcon(group.iconName)}
              </div>
              <h3 className="text-lg font-medium text-[#FAFAFA] tracking-tight">
                {group.title}
              </h3>
            </div>

            <p className="text-sm text-[#A1A1AA] mb-5 leading-relaxed">
              {group.desc}
            </p>

            {/* Pills with Tooltips */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group/pill"
                >
                  <button
                    type="button"
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#D4D4D8] hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill.name}
                  </button>

                  {/* Tooltip */}
                  <div
                    role="tooltip"
                    className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-1 opacity-0 pointer-events-none group-hover/pill:opacity-100 group-hover/pill:translate-y-0 transition-all duration-200 z-20 whitespace-nowrap rounded-lg border border-white/20 bg-[#27272A] px-2.5 py-1 text-xs text-[#FAFAFA] shadow-xl font-sans"
                  >
                    {skill.tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#27272A]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
