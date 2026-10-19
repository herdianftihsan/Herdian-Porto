"use client";

import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/data/portfolioData";
import { useToast } from "@/context/ToastContext";


export default function Footer() {
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

  return (
    <footer id="contact" className="px-4 sm:px-8 max-w-5xl mx-auto pb-12 pt-8">
      {/* Contact CTA Card */}
      <div className="rounded-2xl border border-white/10 bg-[#121215] p-7 sm:p-12 mb-16 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA] mb-3">
          Let’s build something impactful.
        </h2>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mb-8 leading-relaxed">
          I’m open to new projects, internships, and collaborations. The quickest way
          to reach me is email.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#FAFAFA] text-[#09090B] font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95 duration-150"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#09090B]" />
                <span className="font-mono text-xs sm:text-sm">Copied to clipboard!</span>
              </>
            ) : (

              <>
                <Mail className="w-4 h-4 text-[#09090B]" />
                <span className="font-mono text-xs sm:text-sm">{EMAIL_ADDRESS}</span>
              </>
            )}
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181B] text-[#FAFAFA] text-sm hover:border-white/20 transition-all duration-150"
          >
            <GithubIcon className="w-4 h-4 text-[#A1A1AA]" />
            <span>GitHub</span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181B] text-[#FAFAFA] text-sm hover:border-white/20 transition-all duration-150"
          >
            <LinkedinIcon className="w-4 h-4 text-[#A1A1AA]" />
            <span>LinkedIn</span>
          </a>

        </div>
      </div>

      {/* Copyright Line */}
      <div className="font-mono text-xs text-[#A1A1AA]/60 text-center sm:text-left">
        © 2026 Herdian Immanuel Todyas · Surabaya, Indonesia
      </div>
    </footer>
  );
}
