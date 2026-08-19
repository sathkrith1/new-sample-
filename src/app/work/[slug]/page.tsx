import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections: [string, string][] = [
    ["Overview", project.technicalDetails.overview],
    ["Problem", project.technicalDetails.problem],
    ["Approach", project.technicalDetails.approach],
    ["Technical Implementation", project.technicalDetails.implementation],
    ["Result", project.technicalDetails.result],
    ["Lessons", project.technicalDetails.lessons],
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-10 md:pb-14">
            <Link
              href="/#projects"
              className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              ← Back to projects
            </Link>
            <span className="block font-mono text-xs text-accent mt-4 mb-2">
              {project.number} — {project.category}
            </span>
            <h1 className="font-display font-semibold text-[clamp(2.2rem,7vw,5rem)] leading-none">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.technologies.map((t: string) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider border border-border rounded-full px-3 py-1 text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <AsciiGlitchRipple as="p" className="text-lg md:text-xl leading-relaxed mb-16 block">
            {project.longDescription}
          </AsciiGlitchRipple>

          <div className="flex flex-col gap-14">
            {sections.map(([label, body]) => (
              <div key={label}>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
                  {label}
                </h2>
                <p className="text-muted text-sm md:text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border flex items-center justify-between">
            <Link
              href="/#projects"
              className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors"
            >
              ← All projects
            </Link>
            <Link
              href="/#contact"
              className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}