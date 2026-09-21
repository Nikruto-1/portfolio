import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
  title: string;
}

export default function Projects({ projects, title }: ProjectsProps) {
  return (
    <section id="projects" className="section border-t border-line">
      <p className="section-label mb-8">{title}</p>
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="flex flex-col gap-4 bg-paper p-8">
            <h3 className="font-display text-2xl text-ink">{project.title}</h3>
            <p className="text-muted">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="font-mono text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent hover:text-accent"
                >
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent hover:text-accent"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
