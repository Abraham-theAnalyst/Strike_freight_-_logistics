import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappMessages } from "@/lib/site-data";

/** Reusable bottom-of-page conversion band — used on Home and every secondary page. */
export default function CTABand({
  title = "Ready to ship?",
  description = "Get your exact price on WhatsApp, or fill in a quick quote form. Either way, we reply fast.",
  whatsappMessage = whatsappMessages.bookNow,
  quoteHref = "/pricing",
}: {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  quoteHref?: string;
}) {
  return (
    <section className="bg-brand-navy py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base text-white/80 sm:text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={whatsappMessage} size="lg" />
          <Button href={quoteHref} variant="outline" size="lg">
            Get a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
