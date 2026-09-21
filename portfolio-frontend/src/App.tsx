import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProfile, getSkills, getProjects, getExperience } from "@/api/api";
import type { ExperienceItem, LanguageCode, Profile, Project, SkillGroup } from "@/types";
import {
  profile as fallbackProfile,
  skillGroups as fallbackSkillGroups,
  projects as fallbackProjects,
  experience as fallbackExperience,
  localizedContent,
} from "@/data/placeholder";

export const UI_COPY = {
  uk: {
    nav: {
      about: "Про мене",
      skills: "Навички",
      projects: "Проєкти",
      contact: "Контакти",
      resume: "Резюме",
    },
    hero: {
      contact: "Написати мені",
      projects: "Переглянути проєкти",
      resume: "Завантажити резюме",
    },
    sections: {
      about: "Про мене",
      skills: "Навички",
      projects: "Проєкти",
      experience: "Досвід та освіта",
      contact: "Контакти",
    },
    contact: {
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      consent:
        "Я погоджуюсь на обробку моїх персональних даних для відповіді на це повідомлення.",
      privacyPrefix: "Дані використовуються лише для відповіді на запит.",
      privacyLink: "Політика конфіденційності",
      sending: "Надсилаю...",
      submit: "Надіслати",
    },
    footer: "Зроблено на React + ASP.NET Core",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      contact: "Contact me",
      projects: "View projects",
      resume: "Download resume",
    },
    sections: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience & education",
      contact: "Contact",
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      consent:
        "I agree to the processing of my personal data so you can reply to this message.",
      privacyPrefix: "The data is used only to respond to your request.",
      privacyLink: "Privacy Policy",
      sending: "Sending...",
      submit: "Send",
    },
    footer: "Built with React + ASP.NET Core",
  },
  sv: {
    nav: {
      about: "Om mig",
      skills: "Kompetenser",
      projects: "Projekt",
      contact: "Kontakt",
      resume: "CV",
    },
    hero: {
      contact: "Kontakta mig",
      projects: "Visa projekt",
      resume: "Ladda ner CV",
    },
    sections: {
      about: "Om mig",
      skills: "Kompetenser",
      projects: "Projekt",
      experience: "Erfarenhet & utbildning",
      contact: "Kontakt",
    },
    contact: {
      name: "Namn",
      email: "Email",
      message: "Meddelande",
      consent:
        "Jag samtycker till behandling av mina personuppgifter så att du kan svara på detta meddelande.",
      privacyPrefix: "Uppgifterna används endast för att svara på din förfrågan.",
      privacyLink: "Integritetspolicy",
      sending: "Skickar...",
      submit: "Skicka",
    },
    footer: "Byggd med React + ASP.NET Core",
  },
} satisfies Record<LanguageCode, {
  nav: Record<"about" | "skills" | "projects" | "contact" | "resume", string>;
  hero: Record<"contact" | "projects" | "resume", string>;
  sections: Record<"about" | "skills" | "projects" | "experience" | "contact", string>;
  contact: Record<
    | "name"
    | "email"
    | "message"
    | "consent"
    | "privacyPrefix"
    | "privacyLink"
    | "sending"
    | "submit",
    string
  >;
  footer: string;
}>;

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>("uk");
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>(fallbackSkillGroups);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [experience, setExperience] = useState<ExperienceItem[]>(fallbackExperience);
  const copy = UI_COPY[language];

  useEffect(() => {
    const content = localizedContent[language];
    setProfile(content.profile);
    setSkillGroups(content.skillGroups);
    setProjects(content.projects);
    setExperience(content.experience);

    if (language !== "uk") return;

    getProfile().then(setProfile);
    getSkills().then(setSkillGroups);
    getProjects().then(setProjects);
    getExperience().then(setExperience);
  }, [language]);

  return (
    <>
      <Header
        profile={profile}
        language={language}
        labels={copy.nav}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero profile={profile} labels={copy.hero} />
        <About profile={profile} title={copy.sections.about} />
        <Skills skillGroups={skillGroups} title={copy.sections.skills} />
        <Projects projects={projects} title={copy.sections.projects} />
        <Experience items={experience} title={copy.sections.experience} />
        <Contact profile={profile} title={copy.sections.contact} labels={copy.contact} />
      </main>
      <Footer text={copy.footer} />
    </>
  );
}
