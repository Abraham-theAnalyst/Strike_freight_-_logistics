import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import QuoteForm from "@/components/forms/QuoteForm";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { businessInfo, contactNumbers, buildWhatsAppLink, whatsappMessages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Reach Strike Freight & Logistics on WhatsApp, phone or email, or visit our Ogba, Lagos office. Find us on the map and send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us. We reply fast."
        description="WhatsApp is the quickest way to reach us, but you're welcome to call, email, or send a message below."
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold text-brand-navy">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-600">We&apos;ll open WhatsApp with your message pre-filled.</p>
              <div className="mt-6">
                <QuoteForm variant="contact" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <WhatsAppButton size="lg" className="w-full sm:w-auto" />

            <ul className="space-y-4 rounded-2xl border border-brand-line bg-white p-6">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-700">{businessInfo.address.full}</span>
              </li>
              {contactNumbers.map((number) => (
                <li key={number.raw} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-slate-700">
                    {number.raw}
                    <span className="text-slate-300" aria-hidden="true">|</span>
                    <a href={`tel:${number.callIntl}`} className="hover:text-brand-navy">
                      Call
                    </a>
                    <span className="text-slate-300" aria-hidden="true">|</span>
                    <a
                      href={buildWhatsAppLink(whatsappMessages.general, number.whatsappIntl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-brand-navy"
                    >
                      <WhatsAppIcon size={14} />
                      WhatsApp
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <a href={`mailto:${businessInfo.email}`} className="break-all text-sm font-semibold text-slate-700 hover:text-brand-navy">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-700">
                  {businessInfo.hours.weekdays}. {businessInfo.hours.note}
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strike Freight on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strike Freight on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={businessInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Strike Freight on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="map" className="pb-16 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-brand-line">
            <iframe
              title="Map showing Strike Freight & Logistics office in Ogba, Lagos"
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessInfo.address.mapQuery)}&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
