import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

/**
 * Fixed floating WhatsApp entry point, present on every page. Plain anchor —
 * no client-side state needed, so it costs nothing in JS.
 */
export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Strike Freight on WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/30 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
