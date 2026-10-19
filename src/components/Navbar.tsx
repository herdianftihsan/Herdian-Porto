"use client";

import React, { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CV_PATH } from "@/data/portfolioData";
import { useToast } from "@/context/ToastContext";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "top", label: "Home", href: "#top" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "capabilities", label: "Capabilities", href: "#capabilities" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const sectionIds = ["contact", "experience", "capabilities", "projects"];

      // Check if at the very bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleCvDownload = () => {
    showToast("Starting CV download…", true);
  };

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100%-24px)]">
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-[#09090B]/85 backdrop-blur-xl shadow-lg shadow-black/50"
        >
          {/* Desktop links */}
          <div className="hidden sm:flex relative items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`relative z-10 px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-[#FAFAFA]" : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-[#A1A1AA] hover:text-[#FAFAFA] rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {/* Download CV button */}
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download="Herdian_Immanuel_Todyas_CV.pdf"
            onClick={handleCvDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFAFA] text-[#09090B] text-xs sm:text-sm font-medium hover:bg-zinc-200 transition-transform active:scale-95 duration-150"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 sm:hidden rounded-2xl border border-white/10 bg-[#121215]/95 backdrop-blur-2xl p-4 shadow-2xl flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-[#FAFAFA]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
