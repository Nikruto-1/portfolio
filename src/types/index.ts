export type LanguageCode = "uk" | "en" | "sv";

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  telegram?: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
