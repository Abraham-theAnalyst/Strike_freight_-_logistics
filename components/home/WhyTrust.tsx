import { CheckCircle2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import { trustReasons, businessInfo } from "@/lib/site-data";

export default function WhyTrust() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Why Trust Strike"
            title="We know you're trusting us with your money and your goods. We don't take that lightly."
            description="In a market full of fly-by-night shippers, here's what makes Strike Freight different."
          />

          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {trustReasons.map((reason) => (
              <li key={reason.title} className="flex gap-3 rounded-xl border border-brand-line bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">{reason.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button href="/about" variant="ghost" className="mt-6">
            See our story & office
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <PhotoPlaceholder
            label="Photo: Ogba office storefront/signage. Replace at /public/images/office-front.jpg"
            aspect="aspect-square"
            icon={<Building2 className="h-8 w-8 text-slate-400" aria-hidden="true" />}
            className="col-span-2"
          />
          <PhotoPlaceholder label="Photo: inside the Ogba office" aspect="aspect-square" />
          <PhotoPlaceholder label="Photo: packed parcels ready to ship" aspect="aspect-square" />
          <div className="col-span-2 rounded-xl border border-brand-line bg-brand-cloud p-4 text-sm text-slate-600">
            <p className="font-semibold text-brand-navy">Visit us</p>
            <p className="mt-1">{businessInfo.address.full}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
