import { useState } from "react";
import type { LanguageCode, Profile } from "@/types";

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
  { code: "sv", label: "SV" },
];

interface HeaderProps {
  profile: Profile;
  language: LanguageCode;
  labels: Record<"about" | "skills" | "projects" | "contact" | "resume", string>;
  onLanguageChange: (language: LanguageCode) => void;
}

export default function Header({
  profile,
  language,
  labels,
  onLanguageChange,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "#about", label: labels.about },
    { href: "#skills", label: labels.skills },
    { href: "#projects", label: labels.projects },
    { href: "#contact", label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-lg text-ink" onClick={() => setIsOpen(false)}>
            {profile.name}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line text-ink sm:hidden"
          >
            <span className={`h-px w-5 bg-ink transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-px w-5 bg-ink transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } mt-4 flex-col gap-4 border-t border-line pt-4 sm:mt-0 sm:flex sm:flex-row sm:items-center sm:justify-end sm:gap-6 sm:border-t-0 sm:pt-0`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="self-start border border-ink px-3 py-1.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {labels.resume} ↓
            </a>
          )}
          <div className="flex self-start border border-line" aria-label="Language selector">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                aria-pressed={language === item.code}
                onClick={() => {
                  onLanguageChange(item.code);
                  setIsOpen(false);
                }}
                className={`px-2.5 py-1.5 font-mono text-xs transition-colors ${
                  language === item.code
                    ? "bg-ink text-paper"
                    : "text-muted hover:bg-accentDim hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
