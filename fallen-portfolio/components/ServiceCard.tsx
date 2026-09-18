import { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-md border border-line bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-2">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-ink">{service.name}</h3>
          <span className="shrink-0 font-mono text-lg text-accent">
            {service.price}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-dim">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-ink-dim"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-line-soft pt-4">
        <StatusBadge label={service.availability} />
      </div>
    </div>
  );
}
