import type { Profile } from "@/types";

interface AboutProps {
  profile: Profile;
  title: string;
}

export default function About({ profile, title }: AboutProps) {
  return (
    <section id="about" className="section border-t border-line">
      <p className="section-label mb-4">{title}</p>
      <p className="w-full max-w-full text-xl leading-relaxed text-ink sm:max-w-prose">
        {profile.bio}
      </p>
    </section>
  );
}
