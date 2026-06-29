"use client";

import { useId, useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-data";

/**
 * Track Shipment form. There is no live tracking API yet, so this collects
 * a name/reference and opens WhatsApp with a pre-filled status request.
 *
 * // TODO: once a real tracking system/API exists, replace the WhatsApp
 * redirect below with a fetch() to that API and render the live status
 * inline instead.
 */
export default function TrackForm() {
  const formId = useId();
  const [reference, setReference] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = reference.trim()
      ? `Hi Strike Freight, please can you give me an update on my shipment?\n\nName / Waybill reference: ${reference.trim()}`
      : "Hi Strike Freight, please can you give me an update on my shipment?";
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor={`${formId}-ref`} className="sr-only">
          Your name or waybill reference
        </label>
        <input
          id={`${formId}-ref`}
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="Enter your name or waybill reference"
          className="w-full rounded-lg border border-brand-line bg-white px-4 py-3.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Track My Shipment
      </button>
    </form>
  );
}
