"use client";

import React, { useSyncExternalStore } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/context/ToastContext";

const emptySubscribe = () => () => {};

export default function Home() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="min-h-screen bg-[#09090B]" suppressHydrationWarning />;
  }

  return (
    <ToastProvider>
      <div
        className="relative min-h-screen bg-[#09090B] text-[#FAFAFA] flex flex-col selection:bg-white/20 selection:text-white"
        suppressHydrationWarning

      >
        <Navbar />
        <main className="flex-1 w-full" suppressHydrationWarning>
          <Hero />
          <ProjectsSection />
          <CapabilitiesSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
