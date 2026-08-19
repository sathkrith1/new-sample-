"use client";

import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import { CreepyButton } from "@/components/ui/creepy-button";
import { RoleFlipText } from "@/components/site/role-flip-text";
import { siteConfig } from "@/data/config";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-14">
      <div className="absolute inset-0 opacity-30">
        <PerspectiveGrid gridSize={20} fadeRadius={50} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted mb-4">
          {siteConfig.education[0]?.details} · {siteConfig.location} · {new Date().getFullYear()}
        </p>

        <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-[clamp(2rem,12vw,6rem)]">
          {siteConfig.name.toUpperCase().split(" ")[0]}
          <br />
          {siteConfig.name.toUpperCase().split(" ")[1]}
        </h1>

        <div className="mt-3 md:mt-4 h-[2.2em] md:h-[1.6em] flex items-center justify-center font-display font-medium text-[clamp(1.2rem,6vw,2.4rem)]">
          <RoleFlipText />
        </div>

        <p className="mt-4 md:mt-5 max-w-[90vw] md:max-w-xl text-muted text-sm md:text-base leading-relaxed px-2">
          {siteConfig.professionalSummary}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-2">
          <CreepyButton 
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-sm"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            VIEW PROJECTS
          </CreepyButton>
          <a
            href="#contact"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 font-mono text-xs uppercase tracking-wider border border-border rounded-xl text-center hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}