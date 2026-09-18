import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import ServiceCard from "@/components/ServiceCard";
import { serviceGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Server setup, network architecture, operations and security work — scoped and priced up front.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-24">
        <Container>
          <RevealSection>
            <span className="mono-label">{"// Services"}</span>
            <h1 className="mt-4 max-w-2xl text-4xl md:text-5xl font-medium text-balance">
              Work I take on, scoped and priced up front.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-dim">
              Minecraft server setup, network architecture, operations and
              security work — broken into fixed packages so you know exactly
              what you&apos;re getting before you commit. Something that
              doesn&apos;t fit neatly into one of these? Ask anyway — most of
              this started as a one-off too.
            </p>
          </RevealSection>
        </Container>
      </section>

      {serviceGroups.map((group, gi) => (
        <section
          key={group.title}
          className={`pb-20 ${gi === 0 ? "border-t border-line-soft pt-16" : "pt-4"}`}
        >
          <Container>
            <RevealSection>
              <div className="flex items-center gap-3">
                <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                  {group.title}
                </h2>
                {group.featured ? (
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                    Most popular
                  </span>
                ) : null}
              </div>
            </RevealSection>

            <div
              className={`mt-6 grid gap-6 ${
                group.services.length >= 3
                  ? "md:grid-cols-3"
                  : group.services.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-1 max-w-sm"
              }`}
            >
              {group.services.map((service, i) => (
                <RevealSection key={service.name} delay={i * 0.06}>
                  <ServiceCard service={service} />
                </RevealSection>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <RevealSection>
        <section className="border-t border-line-soft pb-28 pt-16">
          <Container>
            <div className="rounded-md border border-line bg-surface px-8 py-14 text-center md:px-16">
              <span className="mono-label">Contact</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-medium text-balance">
                Not sure which package fits? Ask before you book.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </RevealSection>
    </>
  );
}
