import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

type Variant = "accent" | "outline" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  accent: "bg-brand-red text-white hover:bg-brand-red-dark",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand-navy",
  ghost: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

/**
 * The single reusable "Book on WhatsApp" CTA. Every WhatsApp link on the
 * site should go through this component (or buildWhatsAppLink directly)
 * so the number and message templates stay centralized in site-data.ts.
 */
export default function WhatsAppButton({
  message = whatsappMessages.bookNow,
  label = "Book on WhatsApp",
  variant = "accent",
  size = "md",
  className = "",
}: {
  message?: string;
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  );
}
