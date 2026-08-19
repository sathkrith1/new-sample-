"use client";

import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import { CreepyButton } from "@/components/ui/creepy-button";
import { RoleFlipText } from "@/components/site/role-flip-text";

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <PerspectiveGrid gridSize={28} fadeRadius={65} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted mb-6">
          Unreal Engine 5 · C++ / Blueprints · Gameplay / AI / Combat · India · 2026
        </p>

        <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-[clamp(2.4rem,10vw,7rem)]">
          SATHKRITH
          <br />
          GAUR
        </h1>

        <div className="mt-4 md:mt-6 h-[2.4em] md:h-[1.6em] flex items-center justify-center font-display font-medium text-[clamp(1.4rem,5vw,2.6rem)]">
          <RoleFlipText />
        </div>

        <p className="mt-6 max-w-xl text-muted text-sm md:text-base">
          I build gameplay systems, AI, combat mechanics, animation systems, and
          interactive experiences in Unreal Engine 5.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CreepyButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            VIEW PROJECTS
          </CreepyButton>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-wider border border-border rounded-xl px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}