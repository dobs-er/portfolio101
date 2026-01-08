import portfolioData from "./portfolio-data.json";

export interface Image {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Branding" | "Social Media" | "Posters" | "Print Media";
  description: string;
  longDescription: string;
  coverImage: Image;
  designs: Image[];
}

export const projects: Project[] = portfolioData.projects;
