import type { SkillGroup } from "@/types";

interface SkillsProps {
  skillGroups: SkillGroup[];
  title: string;
}

export default function Skills({ skillGroups, title }: SkillsProps) {
  return (
    <section id="skills" className="section border-t border-line">
      <p className="section-label mb-8">{title}</p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-display text-2xl text-ink">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-1 font-mono text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
