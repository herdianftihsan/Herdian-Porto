"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";
import { useToast } from "@/context/ToastContext";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const { showToast } = useToast();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [project, onClose]);

  const handleLiveDemoClick = () => {
    showToast("Live demo link isn’t published yet", false);
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl h-full bg-[#121215] border-l border-white/10 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Close Button */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[#D4D4D8] tracking-wide uppercase">
                    {project.tag}
                  </span>
                  <span className="text-white/20 text-xs">•</span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.04] text-[#D4D4D8]">
                    {project.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg border border-white/10 hover:border-white/20 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Sub */}
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA] mb-1">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] mb-8">
                {project.sub}
              </p>

              {/* Architecture */}
              <div className="mb-6">
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
                  Architecture
                </h5>
                <p className="text-sm leading-relaxed text-[#D4D4D8]">
                  {project.arch}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
                  Key Features
                </h5>
                <ul className="space-y-1.5 list-disc pl-5 text-sm text-[#D4D4D8]">
                  {project.feat.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
                  Stack
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[#D4D4D8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10 mt-auto">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAFAFA] text-[#09090B] font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95 duration-150"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleLiveDemoClick}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAFAFA] text-[#09090B] font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95 duration-150"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181B] text-[#FAFAFA] text-sm hover:border-white/20 transition-all duration-150"
              >
                <GithubIcon className="w-4 h-4 text-[#A1A1AA]" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA]" />
              </a>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
