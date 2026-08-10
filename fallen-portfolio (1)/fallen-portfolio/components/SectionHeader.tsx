import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-2 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-1 w-1 rounded-full bg-accent" />
        <span className="mono-label">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-ink-dim max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
