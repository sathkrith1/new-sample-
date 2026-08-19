const PRINCIPLES = [
  {
    title: "Systems Over Scripts",
    body: "Gameplay that holds together under pressure — AI, combat, and UI that talk to the same rules instead of scripted one-offs.",
  },
  {
    title: "Animation Drives Gameplay",
    body: "Montages and state machines aren't polish bolted on last — they're wired directly into combat timing and player input.",
  },
  {
    title: "AI That Feels Alive",
    body: "Enemies built on detection and behavior states, not fixed triggers — so encounters read as reactive, not scripted.",
  },
  {
    title: "Technical Artistry",
    body: "Comfortable moving between Blueprints, C++, and raw systems design — picking the right tool for the feel I'm after.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
        Philosophy
      </p>
      <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,3rem)] max-w-2xl mb-14">
        How I think about building games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="bg-background p-8 md:p-10">
            <h3 className="font-display font-medium text-lg md:text-xl mb-3">{p.title}</h3>
            <p className="text-muted text-sm md:text-base leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}