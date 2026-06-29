import Link from "next/link";

// [CONFIRM/TODO] No vector logo file was supplied. This is a placeholder
// monogram built to the brief's description (blue/white "SF" + wordmark).
// Once the client provides the real logo, drop it at /public/logo.svg (or
// .png) and replace the markup below with:
//   <Image src="/logo.svg" alt={businessInfo.name} width={160} height={40} priority />
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Strike Freight & Logistics home">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy text-base font-extrabold text-white">
        SF
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-extrabold uppercase tracking-tight text-brand-navy sm:text-base">Strike Freight</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-red sm:text-xs">& Logistics</span>
      </span>
    </Link>
  );
}
