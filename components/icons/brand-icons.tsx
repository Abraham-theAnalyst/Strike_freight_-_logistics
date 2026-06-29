// Hand-drawn, simplified brand glyphs for platforms lucide-react doesn't
// ship (it only covers generic UI icons, not brand marks). Kept as plain
// inline SVG — no extra dependency, near-zero bytes, no network request.

export interface BrandIconProps {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className, size = 20 }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.15-.15.34-.39.51-.58.17-.2.22-.34.34-.56.12-.22.06-.41-.03-.56-.1-.15-.6-1.45-.82-1.98-.22-.53-.45-.46-.63-.46-.17 0-.41-.02-.63.02-.22.05-.58.2-.79.46-.22.27-.84.82-.84 2 0 1.18.86 2.32 1 2.49.13.17 1.71 2.61 4.15 3.56 2.43.95 2.43.63 2.86.6.44-.04 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.15-.46-.27z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.54 3.76 1.48 5.31L2 22l4.9-1.55a9.83 9.83 0 0 0 5.14 1.4h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 17.87h-.01a8.04 8.04 0 0 1-4.18-1.16l-.3-.18-3.12.99 1.01-3.03-.2-.31a7.96 7.96 0 0 1-1.27-4.27c0-4.42 3.62-8.04 8.07-8.04 4.43 0 8.04 3.6 8.04 8.04 0 4.43-3.6 7.96-8.04 7.96z" />
    </svg>
  );
}

export function InstagramIcon({ className, size = 20 }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className, size = 20 }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.8h2.5V21h3z" />
    </svg>
  );
}

export function TikTokIcon({ className, size = 20 }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.4 4.4 0 0 1-2.62-1.06v8.86a4.62 4.62 0 1 1-3.97-4.57v2.3a2.32 2.32 0 1 0 1.65 2.22V2h2.3a4.4 4.4 0 0 0 2.64 3.34v2.48z" />
    </svg>
  );
}
