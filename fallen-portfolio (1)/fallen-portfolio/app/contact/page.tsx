import type { Metadata } from "next";
import Container from "@/components/Container";
import RevealSection from "@/components/RevealSection";
import StatusBadge from "@/components/StatusBadge";
import { contact, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fallen via Discord or email.",
};

export default function ContactPage() {
  return (
    <section className="pt-20 pb-28 md:pt-24">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_0.8fr] md:gap-24">
          <RevealSection>
            <span className="mono-label">{"// Contact"}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-medium text-balance">
              Discord&apos;s the fastest way to reach me.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-dim">
              I&apos;m active there most days. Email works too, if
              you&apos;d rather keep a written record or you&apos;re
              reaching out about a paid engagement.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="https://discord.com/users/fallen"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-line bg-surface px-5 py-4 transition-colors hover:border-accent/40 hover:bg-surface-2"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                    Discord
                  </p>
                  <p className="mt-1 text-ink">{contact.discordDisplay}</p>
                </div>
                <span className="text-ink-faint transition-colors group-hover:text-accent">
                  →
                </span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between rounded-md border border-line bg-surface px-5 py-4 transition-colors hover:border-accent/40 hover:bg-surface-2"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                    Email
                  </p>
                  <p className="mt-1 text-ink">{contact.email}</p>
                </div>
                <span className="text-ink-faint transition-colors group-hover:text-accent">
                  →
                </span>
              </a>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="rounded-md border border-line bg-surface p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-line-soft pb-3">
                <span className="text-ink-faint uppercase tracking-[0.1em]">
                  Status
                </span>
                <StatusBadge label="Open to select work" />
              </div>
              <dl className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <dt className="text-ink-faint">Location</dt>
                  <dd className="text-ink-dim">{site.location}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-faint">Timezone</dt>
                  <dd className="text-ink-dim">{site.timezone}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-faint">Response time</dt>
                  <dd className="text-ink-dim text-right">
                    Within 48 hrs, usually faster
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-faint">Best for</dt>
                  <dd className="text-ink-dim text-right">
                    Systems, plugins, security
                  </dd>
                </div>
              </dl>
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  );
}
