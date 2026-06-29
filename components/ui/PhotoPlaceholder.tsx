import Image from "next/image";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Renders a real photo via next/image once `src` is supplied. Until then,
 * shows a clearly labelled placeholder box so the client knows exactly
 * which photo to drop in (see README "Where to add photos").
 *
 * To activate a real photo: add the file under /public/images and pass its
 * path as `src`, e.g. <PhotoPlaceholder src="/images/office-storefront.jpg" .../>
 */
export default function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  src,
  alt,
  priority = false,
  sizes = "100vw",
  icon,
  className = "",
}: {
  label?: string;
  aspect?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  icon?: ReactNode;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspect} ${className}`}>
        <Image src={src} alt={alt ?? label ?? ""} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-brand-line bg-brand-cloud p-4 text-center ${aspect} ${className}`}
    >
      {icon ?? <ImageIcon className="h-8 w-8 text-slate-400" aria-hidden="true" />}
      <p className="max-w-[220px] text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
