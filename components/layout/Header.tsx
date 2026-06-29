"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PackageSearch } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-navy">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/track"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark"
          >
            <PackageSearch className="h-4 w-4" aria-hidden="true" />
            Track
          </Link>
          <WhatsAppButton />
        </div>

        {/* Mobile controls — the floating WhatsApp button provides persistent access */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line text-brand-navy"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav id="mobile-menu" aria-label="Primary mobile" className="border-t border-brand-line bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base font-semibold text-slate-700 hover:bg-brand-cloud hover:text-brand-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 sm:hidden">
            <WhatsAppButton size="lg" />
          </div>
        </nav>
      )}
    </header>
  );
}
