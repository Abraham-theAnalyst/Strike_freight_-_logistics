import Container from "@/components/ui/Container";

/** Compact navy banner used at the top of every secondary page for a consistent feel. */
export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-navy py-12 sm:py-16">
      <Container>
        {eyebrow && <p className="text-sm font-bold uppercase tracking-wide text-brand-red-light">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>}
      </Container>
    </section>
  );
}
