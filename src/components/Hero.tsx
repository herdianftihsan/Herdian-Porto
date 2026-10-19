"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/data/portfolioData";
import { useToast } from "@/context/ToastContext";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_ADDRESS;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    showToast("Email copied to clipboard!", true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.9, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 max-w-5xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start"
      >

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#FAFAFA] leading-[1.08] mb-4 max-w-4xl"
        >
          Herdian Immanuel Todyas
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-[#FAFAFA] mb-3 max-w-2xl"
        >
          Full-Stack Web Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8 max-w-3xl"
        >
          Designing and building AI-integrated web applications, real-time
          monitoring interfaces, and reliable software architectures grounded in
          C, Java, and Linux.
        </motion.p>


        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3"
        >
          {/* Primary View Work CTA */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAFAFA] text-[#09090B] font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95 duration-150"
          >
            <span>View selected work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#121215] text-[#FAFAFA] text-sm hover:border-white/20 hover:bg-[#18181B] transition-all duration-150"
          >
            <GithubIcon className="w-4 h-4 text-[#A1A1AA]" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#121215] text-[#FAFAFA] text-sm hover:border-white/20 hover:bg-[#18181B] transition-all duration-150"
          >
            <LinkedinIcon className="w-4 h-4 text-[#A1A1AA]" />
            <span>LinkedIn</span>
          </a>


          {/* Email button with copy state */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#121215] text-[#FAFAFA] text-sm hover:border-white/20 hover:bg-[#18181B] transition-all duration-150 active:scale-95"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#6EE7B7]" />
                <span className="text-[#6EE7B7]">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-[#A1A1AA]" />
                <span>Email</span>
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
