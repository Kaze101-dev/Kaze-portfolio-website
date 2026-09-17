import type { Metadata } from "next";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fallen's approach to systems architecture, leadership and security structure first, everything else follows.",
};

const principles = [
  {
    label: "01",
    title: "Fix the structure, not the symptom error",
    body: "A bug report is rarely the whole story. If the same category of issue keeps happening in different ways, the fix isn't another patch or change of code it's a boundary that was never drawn between the parts that change often and the parts that shouldn't move at all.",
  },
  {
    label: "02",
    title: "Build the framework, not the one-off",
    body: "I'm less interested in solving a problem once than in making the next ten instances of it impossible. Most of what I build under Fallen exists so someone else doesn't have to rebuild the same foundation twice.",
  },
  {
    label: "03",
    title: "Assume someone will poke at every edge",
    body: "Pentesting sharpened how I build. Once you've spent time finding the gap between what a system is supposed to do and what it actually does, you stop trusting assumptions, including your own.",
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
            <span className="mono-label">{"About Me"}</span>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-medium text-balance">
              I have not failed. I've just found 10,000 ways that won't work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-dim">
              I’m Fallen a developer and operations lead who specialises in building structured,
              scalable environments for Minecraft networks and community‑based projects.
              I focus on clarity, stability, and long‑term growth, whether I’m designing staff frameworks, 
              configuring plugins, or architecting full server networks.
            </p>
          </RevealSection>
        </Container>
      </section>

      <section className="py-16 border-t border-line-soft">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            <RevealSection className="md:col-span-2">
              <p className="max-w-3xl leading-relaxed text-ink-dim">
                I’ve worked across multiple roles including systems architect, developer, pentester, Moderation, Administration, 
                and an operations manager. My strength isn’t just writing configs or building servers 
                it’s creating order, direction, and structure in servers and projects that need a clear path forward.
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-ink-dim">
                I’m currently developing My own Minecraft Project, FracturedSMP, a multi‑server Minecraft network built with a professional workflow, a full development roadmap, and a focus on player experience. 
                I also design staff systems, operational pipelines, and technical frameworks for servers that want to run smoothly and scale properly.
                I’m not a “god tier” developer, I’m a practical one. I build clean systems, solve problems quickly and effiecently, and keep projects moving. My work is intentional, organised, and built to last
                
                If you’re looking for someone who can bring structure, clarity, and technical direction to your project, that’s what I do best. :)
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
              <span className="mono-label">{"Leadership & Proffesionalism"}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-balance">
                Operations is the part nobody sees.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-dim">
                Running operations means I spend just as much time building structure as I do writing code. Who owns what,
                how decisions get made when I’m not around, what happens when something breaks at 2am NZST and I’m asleep 
                all of that matters as much as the technical work. The teams I enjoy working with are the ones that can function without me standing over them.
              </p>
            </RevealSection>

            <RevealSection delay={0.1}>
              <span className="mono-label">{"Outside of work"}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-balance">
                Games are where the habit started.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-dim">
                Game development is where I keep the practice of building for
                the sake of it instead of for a deadline. It&apos;s also
                where a lot of this started you learn fast that a game with
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
