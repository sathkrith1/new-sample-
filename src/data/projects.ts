export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  engine: "Unity" | "Unreal Engine" | "Unreal Engine (in development)";
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
    slug: "coming-soon",
    number: "01",
    title: "Projects Coming Soon",
    category: "GAME DEV / UNITY / UNREAL",
    year: "2025",
    engine: "Unity",
    description: "New projects will be added here soon. Stay tuned for gameplay systems, AI, combat mechanics, and more.",
    longDescription: "This is a placeholder project. Real projects with detailed case studies will be added here once they're ready to showcase.",
    technologies: ["Unity", "C#", "Unreal Engine 5"],
    disciplines: ["Gameplay Systems", "AI", "Combat", "Animation"],
    cover: "/projects/placeholder.jpg",
    technicalDetails: {
      overview: "Portfolio projects coming soon.",
      problem: "Need to showcase game development work.",
      approach: "Building projects to add to portfolio.",
      implementation: "Using Unity and Unreal Engine 5.",
      result: "Projects will be displayed here.",
      lessons: "Always keep portfolio updated.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}