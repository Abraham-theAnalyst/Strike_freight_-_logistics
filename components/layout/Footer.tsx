import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons/brand-icons";
import { businessInfo, navLinks, services, paymentBadges } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="Strike Freight & Logistics"
            width={56}
            height={56}
            className="mb-3"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            International air freight, sea freight and courier between Nigeria and the world.
          </p>
          <p className="mt-2 text-xs text-white/50">{businessInfo.registrationNumber}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={businessInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strike Freight on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={businessInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strike Freight on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={businessInfo.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strike Freight on TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/60">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/85 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/60">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link href="/services" className="text-sm text-white/85 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/60">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-red" aria-hidden="true" />
              <span>{businessInfo.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-brand-red" aria-hidden="true" />
              <a href={`tel:${businessInfo.phoneNumberIntl}`} className="hover:text-white">
                {businessInfo.phoneNumberRaw}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-brand-red" aria-hidden="true" />
              <a href={`mailto:${businessInfo.email}`} className="break-all hover:text-white">
                {businessInfo.email}
              </a>
            </li>
          </ul>
          <WhatsAppButton size="md" className="mt-5 w-full sm:w-auto" />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; {year} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {paymentBadges.map((badge) => (
              <Badge key={badge} className="border-white/15 bg-white/5 text-white/80">
                {badge}
              </Badge>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
