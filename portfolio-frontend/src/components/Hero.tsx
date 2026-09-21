import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
  labels: Record<"contact" | "projects" | "resume", string>;
}

export default function Hero({ profile, labels }: HeroProps) {
  return (
    <section id="top" className="section flex flex-col gap-8 pt-24 sm:pt-32">
      <p className="section-label">{profile.role} · {profile.location}</p>
      <h1 className="max-w-[14ch] break-words font-display text-4xl leading-tight text-ink sm:max-w-none sm:text-6xl">
        {profile.name}
      </h1>
      <p className="w-full max-w-full text-lg text-muted sm:max-w-prose">{profile.tagline}</p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-none border border-ink bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent hover:border-accent"
        >
          {labels.contact}
        </a>
        <a
          href="#projects"
          className="rounded-none border border-ink px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
        >
          {labels.projects}
        </a>
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-none border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span aria-hidden="true">↓</span> {labels.resume}
          </a>
        )}
      </div>
    </section>
  );
}
