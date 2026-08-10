import Link from "next/link";
import { contact, site } from "@/lib/data";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft mt-32">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-ink">Fallen</p>
            <p className="mt-1 font-mono text-xs text-ink-faint">
              {site.location} · {site.timezone}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-dim">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-ink transition-colors"
            >
              {contact.email}
            </a>
            <span className="text-line">·</span>
            <span>Discord — {contact.discordDisplay}</span>
            <span className="text-line">·</span>
            <Link href="/contact" className="hover:text-ink transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line-soft pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Fallen. Built from scratch, not a template.</p>
          <p className="font-mono">STATUS — OPERATIONAL</p>
        </div>
      </Container>
    </footer>
  );
}
