export const siteConfig = {
  name: "Sathkrith Gaur",
  title: "Game Developer",
  location: "Hyderabad, Telangana, India",
  email: "sathkrith0@gmail.com",
  phone: "+91 99894 91154",
  github: "https://github.com/sathkrith1",
  linkedin: "https://www.linkedin.com/in/sathkrith-gaur",
  resumeUrl: "/resume.pdf",

  professionalSummary: `Game developer specializing in Unity/C# and Unreal Engine 5, focused on gameplay systems, AI, combat mechanics, and animation systems.`,

  education: [
    {
      degree: "Advanced Diploma in Game Development",
      institution: "Backstage Pass Institute of Gaming",
      period: "2025–2026",
      details: "Trained in Unreal Engine 5, Blueprints, and C++",
    },
  ],

  experience: [
    {
      role: "Game Developer",
      company: "Backstage Pass Institute of Gaming",
      description: "Built enemy AI, animation systems, and combat tied to Animation Blueprints and montages",
    },
    {
      role: "Core Game Developer Intern (Remote)",
      company: "Temple of Causality: Reincarnation",
      description: "Unity/C# internship offer",
    },
  ],

  currentFocus: "Building a larger solo Unity project from scratch — movement, collisions, level design, prefab architecture, and full player customization system.",

  stats: [
    { value: "3+", label: "Projects shipped" },
    { value: "2", label: "Engines — Unity & Unreal" },
    { value: "1yr", label: "Advanced diploma in game dev" },
  ],

  skills: {
    coreEngines: [
      { id: "unity", label: "Unity", color: "#1A1A2E", iconColor: "#00D4AA" },
      { id: "unreal", label: "Unreal Engine 5", color: "#0E2A47", iconColor: "#00D4AA" },
      { id: "csharp", label: "C#", color: "#2D1B4E", iconColor: "#A855F7" },
      { id: "blueprints", label: "Blueprints", color: "#1E3A5F", iconColor: "#3B82F6" },
    ],
    gameplayAI: [
      { id: "gameplay", label: "Gameplay Systems", color: "#1A3C2E", iconColor: "#22C55E" },
      { id: "ai", label: "AI / Behavior Trees", color: "#3D1A1A", iconColor: "#EF4444" },
      { id: "combat", label: "Combat Mechanics", color: "#4A1A3A", iconColor: "#F97316" },
    ],
    animationTools: [
      { id: "anim-bp", label: "Animation Blueprints", color: "#1A4A4A", iconColor: "#06B6D4" },
      { id: "umg", label: "UMG / UI", color: "#2D2D1A", iconColor: "#EAB308" },
      { id: "git", label: "Git / Perforce", color: "#1A1A1A", iconColor: "#F59E0B" },
      { id: "blender", label: "Blender (basics)", color: "#2A1A4A", iconColor: "#F472B6" },
    ],
  },

  socialLinks: [
    { letter: "G", label: "GitHub", href: "https://github.com/sathkrith1", icon: "github" },
    { letter: "L", label: "LinkedIn", href: "https://www.linkedin.com/in/sathkrith-gaur", icon: "linkedin" },
    { letter: "E", label: "Email", href: "mailto:sathkrith0@gmail.com", icon: "envelope" },
  ],

  roles: ["GAME DEVELOPER", "UNITY DEVELOPER", "UNREAL DEVELOPER"],

  philosophy: [
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
  ],
};

export type SiteConfig = typeof siteConfig;