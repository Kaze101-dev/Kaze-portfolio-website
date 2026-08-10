import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="pt-28 pb-32">
      <Container>
        <span className="mono-label">{"// 404"}</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-medium">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-md text-ink-dim">
          Wrong link, or it moved. Either way, here&apos;s a way back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
        >
          Back to home
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}
