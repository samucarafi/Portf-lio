export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "mobile"
  | "saas";

export type ProjectStatus = "completed" | "in-progress";

export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;

  problem: string;
  solution: string;
  result: string;

  category: ProjectCategory;
  technologies: ProjectTechnology[];
  features: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  status: ProjectStatus;
}
