import type { Metadata } from "next";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fallen's approach to systems architecture, leadership and security — structure first, everything else follows.",
};

const principles = [
  {
    label: "01",
    title: "Fix the structure, not the symptom",
    body: "A bug report is rarely the whole story. If the same category of issue keeps resurfacing in different shapes, the fix isn't another patch — it's a boundary that was never drawn between the parts that change often and the parts that shouldn't move at all.",
  },
  {
    label: "02",
    title: "Build the framework, not the one-off",
    body: "I'm less interested in solving a problem once than in making the next ten instances of it impossible. Most of what I build under Fallen exists so someone else doesn't have to rebuild the same foundation twice.",
  },
  {
    label: "03",
    title: "Assume someone will poke at every edge",
    body: "Pentesting sharpened how I build. Once you've spent time finding the gap between what a system is supposed to do and what it actually does, you stop trusting assumptions — including your own.",
  },
  {
    label: "04",
    title: "Write it down so it survives without you",
    body: "Good systems, including teams, keep working when the person who built them steps away. I'd rather write a runbook once than be the answer to every question forever.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-24">
        <Container>
          <RevealSection>
            <span className="mono-label">{"// About"}</span>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-medium text-balance">
              Everything is a system. I just decide where the boundaries go.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-dim">
              I run architecture and operations under Fallen, build backend
              and plugin systems for TimeNetwork and Solaryn Network, test
              infrastructure for a living, and build small games in whatever
              time is left over. Different surfaces, same underlying habit.
            </p>
          </RevealSection>
        </Container>
      </section>

      <section className="py-16 border-t border-line-soft">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            <RevealSection className="md:col-span-2">
              <p className="max-w-3xl leading-relaxed text-ink-dim">
                Most problems people bring me aren&apos;t really about the
                thing they&apos;re describing. A laggy plugin, a permissions
                bug, a network that falls over at fifty concurrent players —
                the actual problem is almost always structural. Something was
                built without a clear line between the parts that change
                often and the parts that shouldn&apos;t move at all. Fix the
                structure and the symptom usually disappears on its own.
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-ink-dim">
                That&apos;s the lens I bring to everything under Fallen —
                TimeNetwork, Solaryn Network, my own tooling, the reports I
                write after an engagement. I&apos;d rather spend three extra
                days on a framework than three hours a week maintaining
                whatever we shipped instead.
              </p>
            </RevealSection>
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-line-soft">
        <Container>
          <RevealSection>
            <SectionHeader
              eyebrow="Operating principles"
              title="How I actually make decisions"
            />
          </RevealSection>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line-soft md:grid-cols-2">
            {principles.map((p, i) => (
              <RevealSection key={p.label} delay={i * 0.06}>
                <div className="h-full bg-bg p-7">
                  <span className="font-mono text-xs text-accent">
                    {p.label}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">
                    {p.body}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-line-soft">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <RevealSection>
              <span className="mono-label">{"// Leadership"}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-balance">
                Operations is the part nobody sees.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-dim">
                Running operations for Fallen means I spend as much time on
                process as I do on code — who owns what, how decisions get
                made when I&apos;m not in the room, what happens when
                something breaks at 2am NZST and I&apos;m asleep. The teams I
                like working with are the ones that don&apos;t need me to
                function.
              </p>
            </RevealSection>

            <RevealSection delay={0.1}>
              <span className="mono-label">{"// Outside of work"}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-balance">
                Games are where the habit started.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-dim">
                Game development is where I keep the practice of building for
                the sake of it instead of for a deadline. It&apos;s also
                where a lot of this started — you learn fast that a game with
                elegant mechanics and a fragile backend is still a fragile
                game.
              </p>
            </RevealSection>
          </div>
        </Container>
      </section>
    </>
  );
}
