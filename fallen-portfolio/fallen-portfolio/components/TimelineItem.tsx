import { Experience } from "@/lib/data";

export default function TimelineItem({
  item,
  isLast = false,
}: {
  item: Experience;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center">
        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-bg" />
        {!isLast ? <span className="w-px flex-1 bg-line" /> : null}
      </div>

      <div className={`pb-14 ${isLast ? "pb-0" : ""} w-full`}>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl text-ink">{item.org}</h3>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
              item.status === "Active"
                ? "border-accent/40 text-accent"
                : "border-line text-ink-faint"
            }`}
          >
            {item.status}
          </span>
        </div>
        <p className="mt-1 font-mono text-sm text-ink-dim">{item.role}</p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">
          {item.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-line-soft px-2 py-1 font-mono text-[11px] text-ink-faint"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
