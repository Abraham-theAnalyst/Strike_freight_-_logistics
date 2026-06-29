import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/site-data";

export default function FaqSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions people ask us most." align="center" />
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
