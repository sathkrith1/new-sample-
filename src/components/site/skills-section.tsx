"use client";

import { SolarSystem, OrbitConfig, SolarSystemItem } from "@/components/ui/solar-system";

const gameDevOrbits: OrbitConfig[] = [
  {
    id: "inner",
    name: "Core Engines",
    radiusClass: "var(--radius-inner)",
    radiusPx: 175,
    speed: 20,
    items: [
      {
        id: "unreal",
        label: "Unreal Engine 5",
        color: "#0E2A47",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#00D4AA" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 22V12" stroke="#00D4AA" strokeWidth="2" />
            <path d="M2 7l10-5 10 5" stroke="#00D4AA" strokeWidth="2" />
          </svg>
        ),
      },
      {
        id: "unity",
        label: "Unity",
        color: "#1A1A2E",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#00D4AA" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="#00D4AA" strokeWidth="2" />
            <path d="M12 9v6M9 12h6" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: "csharp",
        label: "C#",
        color: "#2D1B4E",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="#A855F7">C#</text>
          </svg>
        ),
      },
      {
        id: "blueprints",
        label: "Blueprints",
        color: "#1E3A5F",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3B82F6" strokeWidth="2" />
            <path d="M9 9h6M9 12h6M9 15h4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "mid",
    name: "Gameplay & AI",
    radiusClass: "var(--radius-mid)",
    radiusPx: 285,
    speed: 32,
    items: [
      {
        id: "gameplay",
        label: "Gameplay Systems",
        color: "#1A3C2E",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#22C55E" strokeWidth="2" />
            <path d="M12 7v10M7 12l5 5 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: "ai",
        label: "AI / Behavior Trees",
        color: "#3D1A1A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#EF4444" strokeWidth="2" />
            <path d="M12 8v4M12 16v.01M8 12h8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 8l4 4M16 8l-4 4" stroke="#EF4444" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        id: "combat",
        label: "Combat Mechanics",
        color: "#4A1A3A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#F97316" strokeWidth="2" />
            <path d="M12 7l5 5-5 5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="2" stroke="#F97316" strokeWidth="2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "outer",
    name: "Animation & Tools",
    radiusClass: "var(--radius-outer)",
    radiusPx: 395,
    speed: 48,
    items: [
      {
        id: "anim-bp",
        label: "Animation Blueprints",
        color: "#1A4A4A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M3 17v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" stroke="#06B6D4" strokeWidth="2" />
            <path d="M9 13V7M15 13V9" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 13h6M15 9H9" stroke="#06B6D4" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        id: "umg",
        label: "UMG / UI",
        color: "#2D2D1A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#EAB308" strokeWidth="2" />
            <rect x="7" y="7" width="10" height="4" rx="1" fill="#EAB308" />
            <rect x="7" y="13" width="6" height="4" rx="1" fill="#EAB308" />
          </svg>
        ),
      },
      {
        id: "git",
        label: "Git / Perforce",
        color: "#1A1A1A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="6" r="3" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" />
            <path d="M12 9v7M5 16h14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <circle cx="19" cy="16" r="3" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="5" cy="16" r="3" stroke="#F59E0B" strokeWidth="2" />
          </svg>
        ),
      },
      {
        id: "blender",
        label: "Blender (basics)",
        color: "#2A1A4A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#F472B6" strokeWidth="2" strokeDasharray="4 3" />
            <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#F472B6" />
            <circle cx="12" cy="12" r="1.5" fill="#fff" />
          </svg>
        ),
      },
      {
        id: "web",
        label: "Web / App Dev",
        color: "#0F1A2A",
        svg: (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00D4AA" strokeWidth="2" />
            <path d="M9 9h6M9 12h4M9 15h2" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Skillset
        </p>
        <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,3rem)]">
          Everything orbits the engine
        </h2>
        <p className="text-muted text-sm md:text-base mt-3 max-w-lg mx-auto">
          Hover a node for detail. The core is where systems, AI, and animation meet.
        </p>
      </div>

      <div className="flex items-center justify-center mt-8">
        <SolarSystem orbits={gameDevOrbits} />
      </div>
    </section>
  );
}