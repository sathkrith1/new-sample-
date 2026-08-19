"use client";

import Link from "next/link";
import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { LazyMount } from "@/components/site/lazy-mount";
import { projects, Project } from "@/data/projects";

function Caption({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`Open ${project.title} case study`}
      className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-14 md:pb-20 group z-10"
    >
      <span className="font-mono text-xs text-accent mb-2">
        {project.number} — {project.category}
      </span>
      <h3 className="font-display font-semibold text-[clamp(2rem,6vw,4.5rem)] leading-none mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <div className="max-w-xl">
        <AsciiGlitchRipple as="p" className="text-muted text-sm md:text-base">
          {project.description}
        </AsciiGlitchRipple>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.disciplines.map((d) => (
          <span
            key={d}
            className="font-mono text-[10px] uppercase tracking-wider border border-border rounded-full px-3 py-1 text-muted"
          >
            {d}
          </span>
        ))}
      </div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted mt-6 group-hover:text-accent transition-colors">
        View case study →
      </span>
    </Link>
  );
}

export function ProjectsSection() {
  // Chain projects: each project's back image is the next project's cover
  // Last project loops back to first for continuous flow
  const projectsWithChainedImages = projects.map((project, index) => {
    const nextIndex = (index + 1) % projects.length;
    return {
      ...project,
      imageBack: projects[nextIndex]?.cover || project.cover,
    };
  });

  if (projects.length === 0) {
    return (
      <section id="projects" className="relative">
        <div className="px-6 md:px-10 pt-24 md:pt-32 pb-10 max-w-6xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Selected Work
          </p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,3rem)] max-w-2xl">
            Projects coming soon...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative">
      <div className="px-6 md:px-10 pt-24 md:pt-32 pb-10 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Selected Work
        </p>
        <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,3rem)] max-w-2xl">
          Scroll through each project. Click it to open the case study.
        </h2>
      </div>

      {projectsWithChainedImages.map((project) => (
        <LazyMount
          key={project.slug}
          placeholder={
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.cover})` }}
            >
              <div className="absolute inset-0 bg-background/50" />
              <Caption project={project} />
            </div>
          }
        >
          <div className="relative">
            <ScrollDissolveReveal imageFront={project.cover} imageBack={project.imageBack} />
            <Caption project={project} />
          </div>
        </LazyMount>
      ))}
    </section>
  );
}