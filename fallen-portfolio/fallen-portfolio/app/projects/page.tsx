import type { Metadata } from "next";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Recon tooling, plugin architecture, economy systems and a solo game project — the work behind Fallen, TimeNetwork and Solaryn Network.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-24">
        <Container>
          <RevealSection>
            <span className="mono-label">{"// Projects"}</span>
            <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-medium text-balance">
              Tools and systems, built to be reused.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-dim">
              A mix of internal infrastructure, personal tooling, and one
              game built to keep the systems-design habit sharp outside of
              network work.
            </p>
          </RevealSection>
        </Container>
      </section>

      <section className="pb-28 border-t border-line-soft pt-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <RevealSection key={project.name} delay={i * 0.06}>
                <ProjectCard project={project} />
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
