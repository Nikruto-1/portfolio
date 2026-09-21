import type {
  Profile,
  SkillGroup,
  Project,
  ExperienceItem,
  ContactPayload,
  ContactResponse,
} from "@/types";
import {
  profile as fallbackProfile,
  skillGroups as fallbackSkillGroups,
  projects as fallbackProjects,
  experience as fallbackExperience,
} from "@/data/placeholder";

// The portfolio can run as a static site. API calls are opt-in so local
// development and static hosting do not show noisy 500s when no backend is up.
const API_ENABLED = import.meta.env.VITE_API_ENABLED === "true";

async function safeGet<T>(url: string, fallback: T): Promise<T> {
  if (!API_ENABLED) return fallback;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request to ${url} failed with ${res.status}`);
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export function getProfile(): Promise<Profile> {
  return safeGet("/api/profile", fallbackProfile);
}

export function getSkills(): Promise<SkillGroup[]> {
  return safeGet("/api/skills", fallbackSkillGroups);
}

export function getProjects(): Promise<Project[]> {
  return safeGet("/api/projects", fallbackProjects);
}

export function getExperience(): Promise<ExperienceItem[]> {
  return safeGet("/api/experience", fallbackExperience);
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResponse> {
  if (!API_ENABLED) {
    return {
      success: false,
      message:
        "Форма поки не підключена до backend. Напиши напряму на пошту або в Telegram.",
    };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Contact request failed with ${res.status}`);
    return (await res.json()) as ContactResponse;
  } catch {
    return {
      success: false,
      message:
        "Не вдалося надіслати повідомлення. Спробуй написати напряму на пошту.",
    };
  }
}
