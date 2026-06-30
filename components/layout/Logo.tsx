import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Strike Freight & Logistics home">
      <Image
        src="/logo.png"
        alt="Strike Freight & Logistics"
        width={44}
        height={44}
        priority
        className="flex-shrink-0"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-extrabold uppercase tracking-tight text-brand-navy sm:text-base">Strike Freight</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-red sm:text-xs">& Logistics</span>
      </span>
    </Link>
  );
}
