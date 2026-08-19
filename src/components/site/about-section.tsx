import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const STATS = [
  { value: "3+", label: "Projects shipped" },
  { value: "2", label: "Engines — Unreal & Unity" },
  { value: "1yr", label: "Advanced diploma in game dev" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">About</p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,3rem)] mb-6">
            Background
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            I&apos;m a game developer based in Hyderabad, India, working across Unreal
            Engine&nbsp;5 and Unity/C#. I trained at the{" "}
            <AnimatedTooltip
              content="Advanced Diploma in Game Development, 2025–2026. Trained in Unreal Engine 5, Blueprints, and C++."
              variant="sadoc"
            >
              <span className="underline decoration-dotted underline-offset-4">
                Backstage Pass Institute of Gaming
              </span>
            </AnimatedTooltip>
            , and worked there as a Game Developer building enemy AI, animation
            systems, and combat tied to Animation Blueprints and montages.
          </p>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Outside of shipped projects, I&apos;m building a larger solo Unity
            project from scratch — movement, collisions, level design, and a full
            player customization system — and have an offer for a remote Core
            Game Developer Internship (Unity/C#) on{" "}
            <em className="text-foreground not-italic">Temple of Causality: Reincarnation</em>.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-6">
              <div className="font-display font-semibold text-3xl md:text-4xl text-accent mb-1">
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}