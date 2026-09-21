import type { ExperienceItem } from "@/types";

interface ExperienceProps {
  items: ExperienceItem[];
  title: string;
}

export default function Experience({ items, title }: ExperienceProps) {
  return (
    <section id="experience" className="section border-t border-line">
      <p className="section-label mb-8">{title}</p>
      <ol className="flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.id} className="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr]">
            <p className="font-mono text-sm text-muted">{item.period}</p>
            <div>
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="text-sm text-muted">{item.organization}</p>
              <p className="mt-2 max-w-prose text-ink">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
