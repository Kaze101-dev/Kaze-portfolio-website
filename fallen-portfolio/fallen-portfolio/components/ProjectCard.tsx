import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-md border border-line bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-2">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-ink">{project.name}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-accent">
              {project.category}
            </p>
          </div>
          <span className="shrink-0 rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-dim">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line-soft pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-bg px-2 py-1 font-mono text-[11px] text-ink-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.href ? (
        <a
          href={project.href}
          className="absolute inset-0"
          aria-label={`View ${project.name}`}
        />
      ) : null}
    </div>
  );
}
