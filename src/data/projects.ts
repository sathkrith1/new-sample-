export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  engine: "Unreal Engine" | "Unity" | "Unreal Engine (in development)";
  description: string;
  longDescription: string;
  technologies: string[];
  disciplines: string[];
  cover: string;
  technicalDetails: {
    overview: string;
    problem: string;
    approach: string;
    implementation: string;
    result: string;
    lessons: string;
  };
}

export const projects: Project[] = [
  {
    slug: "survival-horror",
    number: "01",
    title: "Survival Horror",
    category: "SURVIVAL HORROR / AI / GAMEPLAY",
    year: "2025",
    engine: "Unreal Engine",
    description:
      "An AI-driven horror experience — enemy detection, dynamic chase sequences, and a full combat and health system built around tension and pacing.",
    longDescription:
      "A survival horror prototype built in Unreal Engine 5, centered on an enemy AI that hunts the player through detection, memory, and chase states rather than scripted triggers.",
    technologies: ["Unreal Engine 5", "Blueprints", "Behavior Trees", "NavMesh"],
    disciplines: ["Enemy AI", "Combat Systems", "Health Systems", "Pacing & Tension"],
    cover: "/projects/survival-horror.jpg",
    technicalDetails: {
      overview:
        "A short survival horror slice built to explore how AI perception and pacing create tension, without relying on jump-scare scripting.",
      problem:
        "Scripted horror encounters get predictable fast. The goal was an enemy that felt like it was actually hunting the player.",
      approach:
        "Built the enemy around a behavior tree with distinct idle, investigate, chase, and attack states, driven by a sight + sound detection system rather than fixed triggers.",
      implementation:
        "Enemy creature animations were built across idle, movement, chase, and reaction states, all synchronized and blended through Animation Blueprints, state machines, and montages tied to gameplay logic.",
      result:
        "A working slice where the enemy's behavior reads as reactive and threatening, with a combat and health system layered on top for player counterplay.",
      lessons:
        "Animation and AI state have to be designed together from the start — bolting blend logic on after the fact creates visible seams.",
    },
  },
  {
    slug: "kart-racer",
    number: "02",
    title: "Kart Racer",
    category: "VEHICLE PHYSICS / GAMEPLAY",
    year: "2025",
    engine: "Unity",
    description:
      "An arcade-style kart racing game built from the ground up — custom vehicle physics, drift mechanics, and movement tuned for responsive handling.",
    longDescription:
      "An arcade kart racer built in Unity, with hand-tuned vehicle physics and drift mechanics designed to feel immediate and forgiving rather than simulation-accurate.",
    technologies: ["Unity", "C#", "Custom Vehicle Physics"],
    disciplines: ["Vehicle Physics", "Drift Mechanics", "Movement Feel"],
    cover: "/projects/kart-racer.jpg",
    technicalDetails: {
      overview:
        "An arcade kart racing prototype focused entirely on movement feel — acceleration curves, drift, and recovery.",
      problem:
        "Off-the-shelf physics components made karts feel floaty and unresponsive at arcade speeds.",
      approach:
        "Wrote custom vehicle physics from scratch instead of relying on Unity's built-in wheel colliders, giving direct control over grip, drift threshold, and recovery.",
      implementation:
        "Tuned acceleration curves, drift-initiation thresholds, and steering response through iterative playtesting rather than fixed formulas.",
      result:
        "A small but complete racing loop with karts that feel snappy and controllable at speed.",
      lessons: "Arcade physics is a feel problem first and a math problem second.",
    },
  },
  {
    slug: "jodu-the-fighter",
    number: "03",
    title: "Jodu The Fighter",
    category: "COMBAT SYSTEM / ANIMATION",
    year: "2025",
    engine: "Unreal Engine",
    description:
      "A combat-focused fighting prototype with combo-driven attacks and hand-tuned animation blending for readable, impactful hits.",
    longDescription:
      "A fighting-game prototype built around combo-driven melee combat, with an emphasis on readable animation and satisfying hit reactions.",
    technologies: ["Unreal Engine", "Animation Blueprints", "Montages"],
    disciplines: ["Combat Design", "Animation", "Hit Reactions"],
    cover: "/projects/jodu-the-fighter.jpg",
    technicalDetails: {
      overview:
        "A combat prototype exploring combo chains, hit reactions, and animation blending for a fighting-game feel.",
      problem:
        "Combo systems can feel stiff or unfair if animation and hit windows aren't tightly synced.",
      approach:
        "Built sword slash and combo attacks as layered Animation Blueprints and montages, tied directly to gameplay logic and player input timing.",
      implementation:
        "Imported, organized, and synchronized multiple combat and movement animations to ensure smooth blending and correct timing across states.",
      result: "A combo system that reads clearly on screen and responds tightly to input.",
      lessons: "Impact comes from timing and readability more than raw animation fidelity.",
    },
  },
  {
    slug: "untitled-unity-project",
    number: "04",
    title: "Untitled Unity Project",
    category: "GAMEPLAY SYSTEMS / TOOLS",
    year: "In development",
    engine: "Unreal Engine (in development)",
    description:
      "A larger solo-built Unity project — movement, collisions, level design, prefab architecture, and a full player customization system.",
    longDescription:
      "An ongoing, larger-scope Unity project built entirely solo — every core system from player movement to customization built from scratch.",
    technologies: ["Unity", "C#", "Prefab Architecture", "UI Toolkit"],
    disciplines: ["Player Systems", "Level Design", "Customization / UI"],
    cover: "/projects/unity-project.jpg",
    technicalDetails: {
      overview:
        "A solo project built to go deeper on systems ownership — everything from movement to UI built and owned end to end.",
      problem:
        "Working solo means every system — movement, collision, UI, customization — has to be designed, built, and integrated by one person.",
      approach:
        "Built a modular prefab architecture so systems like customization and level pieces could be iterated on independently.",
      implementation:
        "Player movement, collisions, tags, level design, sound and particle effects, and a full customization system (skins, hats, clothing) with UI, all built from scratch in C#.",
      result: "An in-progress but functional core loop with a working customization system.",
      lessons: "Still in progress — the biggest lesson so far is how much UI/UX work customization systems actually need.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}