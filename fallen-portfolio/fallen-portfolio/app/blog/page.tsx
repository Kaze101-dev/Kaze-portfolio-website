import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Long-form notes on systems design, network architecture and security research — coming soon.",
};

export default function BlogPage() {
  return (
    <section className="pt-20 pb-28 md:pt-24">
      <Container>
        <RevealSection>
          <span className="mono-label">{"// Blog"}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-medium text-balance">
            Nothing published yet.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-dim">
            This is where longer write-ups on systems design, network
            architecture and security research will go. Structure&apos;s in
            place — content isn&apos;t, yet.
          </p>

          <div className="mt-12 rounded-md border border-dashed border-line p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
              Post index — empty
            </p>
            <p className="mt-3 text-sm text-ink-dim">
              Check back later, or see what&apos;s already shipped in the
              meantime.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              View projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}
