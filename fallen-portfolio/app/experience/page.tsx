import type { Metadata } from "next";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Where Fallen works: systems architecture and operations, development across TimeNetwork and Solaryn Network, pentesting and game development.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-24">
        <Container>
          <RevealSection>
            <span className="mono-label">{"// Experience"}</span>
            <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-medium text-balance">
              Where the work actually happens.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-dim">
              Five ongoing lines of work, all feeding the same set of habits.
              Status reflects current involvement, not a resume date range.
            </p>
          </RevealSection>
        </Container>
      </section>

      <section className="pb-28 border-t border-line-soft pt-16">
        <Container>
          <div>
            {experience.map((item, i) => (
              <RevealSection key={`${item.org}-${item.role}`} delay={i * 0.05}>
                <TimelineItem
                  item={item}
                  isLast={i === experience.length - 1}
                />
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
