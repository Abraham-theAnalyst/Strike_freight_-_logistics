import { Star, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { testimonials, socialEmbeds } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-brand-cloud py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Customers Say"
          title="Real shipments, real people."
          description="[CONFIRM: these are placeholder slots. Swap in real customer reviews and photos before launch.]"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-xl border border-brand-line bg-white p-6">
              <div className="flex items-center gap-1 text-brand-red" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                  <User size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Delivery Feed</p>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {socialEmbeds.map((embed) => (
              <PhotoPlaceholder
                key={embed.id}
                aspect="aspect-[9/16]"
                label={`${embed.platform === "instagram" ? "Instagram" : "TikTok"} embed slot: ${embed.caption}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
