import Link from "next/link";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import NetworkGraphic from "@/components/NetworkGraphic";
import StatusBadge from "@/components/StatusBadge";
import { roles, projects, site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="mono-label">
                  Systems Architecture — Security — Game Networks
                </span>
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium text-balance">
                I design how systems hold together.{" "}
                <span className="text-ink-dim">Then I try to break them.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-ink-dim">
                I&apos;m Fallen — Lead Systems Architect &amp; Operations
                Manager, a developer across TimeNetwork and Solaryn Network,
                and a pentester who tests the same kind of infrastructure I
                build. Based in {site.location}.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  View the work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="aspect-square w-full max-w-sm mx-auto md:mx-0 opacity-90">
                <NetworkGraphic />
              </div>

              <div className="rounded-md border border-line bg-surface p-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-line-soft pb-3">
                  <span className="text-ink-faint uppercase tracking-[0.1em]">
                    Telemetry
                  </span>
                  <StatusBadge label="Operational" />
                </div>
                <dl className="mt-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-faint">Location</dt>
                    <dd className="text-ink-dim">{site.location}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-faint">Timezone</dt>
                    <dd className="text-ink-dim">{site.timezone}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-faint">Focus</dt>
                    <dd className="text-ink-dim text-right">
                      Architecture, plugins, security
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-faint">Availability</dt>
                    <dd className="text-ink-dim">Select work</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current roles strip */}
      <RevealSection>
        <section className="border-y border-line-soft py-10">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {roles.map((r) => (
                <div key={`${r.org}-${r.title}`}>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                    {r.org}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-dim">{r.title}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </RevealSection>

      {/* Philosophy teaser */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <RevealSection>
              <span className="mono-label">{"// How I work"}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-balance">
                Structure first. Everything else follows.
              </h2>
            </RevealSection>

            <RevealSection delay={0.1}>
              <p className="text-ink-dim leading-relaxed">
                Most problems people bring me aren&apos;t really about the
                thing they&apos;re describing. A laggy plugin, a permissions
                bug, a network that falls over at fifty concurrent players —
                the actual problem is almost always structural. I&apos;m less
                interested in the clever one-off fix than in the framework
                that makes the next ten fixes unnecessary.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
              >
                Read the full philosophy
                <span aria-hidden>→</span>
              </Link>
            </RevealSection>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-24 md:py-28 border-t border-line-soft">
        <Container>
          <RevealSection>
            <SectionHeader
              eyebrow="Selected work"
              title="Systems built to be trusted, not just to run."
            />
          </RevealSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <RevealSection key={project.name} delay={i * 0.08}>
                <ProjectCard project={project} />
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.2}>
            <Link
              href="/projects"
              className="mt-10 inline-flex items-center gap-2 text-sm text-ink-dim hover:text-accent transition-colors"
            >
              View all work
              <span aria-hidden>→</span>
            </Link>
          </RevealSection>
        </Container>
      </section>

      {/* CTA */}
      <RevealSection>
        <section className="py-24 md:py-28 border-t border-line-soft">
          <Container>
            <div className="rounded-md border border-line bg-surface px-8 py-14 text-center md:px-16">
              <span className="mono-label">Contact</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-medium text-balance">
                Reach out on Discord — it&apos;s the fastest way to find me.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Contact details
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </RevealSection>
    </>
  );
}
