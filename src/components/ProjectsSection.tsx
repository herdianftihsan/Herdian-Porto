"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import {
  PROJECTS,
  Project,
  ProjectCategory,
} from "@/data/portfolioData";
import ProjectDrawer from "./ProjectDrawer";

interface FilterTab {
  id: ProjectCategory;
  label: string;
}

const FILTER_TABS: FilterTab[] = [
  { id: "all", label: "All" },
  { id: "ai-simulation", label: "AI & Simulation" },
  { id: "web-api", label: "Web & API Architecture" },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === "all") return true;
    return p.cat === selectedFilter;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      <hr className="border-white/10 mb-8" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA] pb-6 mb-8 border-b border-white/10">
        Things I’ve built and explored.
      </h2>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-[#121215] w-fit mb-8 max-w-full overflow-x-auto">
        {FILTER_TABS.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive ? "text-[#FAFAFA]" : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              onClick={() => setActiveProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View architecture details for ${project.title}`}
              className="group card-spotlight flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#121215] hover:border-white/20 hover:bg-[#151518] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/20"
            >
              {/* Top Row: Context/Year + Category badge on left, GitHub / Live Demo links on right */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[#A1A1AA] tracking-wide">
                    {project.tag}
                  </span>
                  <span className="text-white/20 text-xs">•</span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.04] text-[#D4D4D8]">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Middle Content: Title, Subtitle, and Description */}
              <div className="my-5 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#F4F4F5] tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                  {project.sub && (
                    <span className="text-[#A1A1AA] font-normal text-sm sm:text-base block sm:inline sm:ml-2">
                      — {project.sub}
                    </span>
                  )}
                </h3>
                <p className="mt-2.5 text-sm text-[#A1A1AA] leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Row: Tech Stack Pills & Architecture Details Link */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-[#D4D4D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#F4F4F5] group-hover:text-white underline decoration-white/30 group-hover:decoration-white underline-offset-4 flex items-center gap-1.5 transition-all">
                    <span>Architecture details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Drawer Modal */}
      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
