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

export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}