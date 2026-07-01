import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { howItWorksSteps, whatsappMessages } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

export default function HowItWorks() {
  const image = stockImages.warehouseHandling;

  return (
    <section id="how-it-works" className="bg-brand-cloud py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="One simple flow, every time."
          description="From quote to delivery, in four steps."
        />

        <div data-reveal-img className="mt-8">
          <PhotoPlaceholder src={image.src} alt={image.alt} aspect="aspect-[21/8]" sizes="100vw" />
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
          {howItWorksSteps.map((step) => (
            <li key={step.step} data-reveal-item className="relative rounded-xl border border-brand-line bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">Not sure where to start?</p>
          <WhatsAppButton message={whatsappMessages.notSure} label="Chat with us" variant="ghost" size="md" />
        </div>
      </Container>
    </section>
  );
}
