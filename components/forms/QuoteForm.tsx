"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { routes, buildWhatsAppLink } from "@/lib/site-data";

type Variant = "quote" | "contact";

interface FormValues {
  name: string;
  whatsapp: string;
  email: string;
  direction: "import" | "export";
  service: "cargo" | "courier";
  route: string;
  weight: string;
  message: string;
  company: string; // honeypot — real users never see or fill this
}

const initialValues: FormValues = {
  name: "",
  whatsapp: "",
  email: "",
  direction: "export",
  service: "cargo",
  route: routes[0].id,
  weight: "",
  message: "",
  company: "",
};

function buildQuoteMessage(values: FormValues): string {
  const route = routes.find((r) => r.id === values.route)?.name ?? values.route;
  const serviceLabel = { cargo: "Cargo", courier: "Courier" }[values.service];
  const lines = [
    "Hi Strike Freight, I'd like to book a shipment / get a quote.",
    "",
    `Name: ${values.name}`,
    `WhatsApp/Phone: ${values.whatsapp}`,
    values.email ? `Email: ${values.email}` : null,
    `Direction: ${values.direction === "import" ? "Import (into Nigeria)" : "Export (from Nigeria)"}`,
    `Service: ${serviceLabel}`,
    `Route: ${route}`,
    values.weight ? `Approx. weight: ${values.weight}kg` : null,
    values.message ? `Details: ${values.message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function buildContactMessage(values: FormValues): string {
  const lines = [
    "Hi Strike Freight, I have a question.",
    "",
    `Name: ${values.name}`,
    `WhatsApp/Phone: ${values.whatsapp}`,
    values.email ? `Email: ${values.email}` : null,
    `Message: ${values.message}`,
  ].filter(Boolean);
  return lines.join("\n");
}

/**
 * Quote/booking and contact form. On submit it:
 *  1) Builds a pre-filled WhatsApp message from every field and opens wa.me
 *     — this is the real, always-working submission path.
 *  2) Fires a non-blocking POST to /api/quote so a copy reaches an email/CRM
 *     once that route is wired to a real provider (see its // TODO).
 */
export default function QuoteForm({ variant = "quote" }: { variant?: Variant }) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot tripped — silently pretend success, send nothing.
    if (values.company) {
      setSubmittedLink("#");
      return;
    }

    const message = variant === "quote" ? buildQuoteMessage(values) : buildContactMessage(values);
    const link = buildWhatsAppLink(message);

    // Non-blocking — does not delay or block the WhatsApp redirect below.
    fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ variant, ...values, company: undefined }),
    }).catch(() => {
      // Email/API hook isn't wired up yet — WhatsApp remains the source of truth.
    });

    window.open(link, "_blank", "noopener,noreferrer");
    setSubmittedLink(link);
    formRef.current?.reset();
    setValues(initialValues);
  }

  if (submittedLink) {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-cloud p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-red" aria-hidden="true" />
        <p className="mt-3 font-bold text-brand-navy">Almost done!</p>
        <p className="mt-1 text-sm text-slate-600">
          We&apos;ve opened WhatsApp with your details filled in. Just hit send. If it didn&apos;t open automatically,
          tap below.
        </p>
        {submittedLink !== "#" && (
          <a
            href={submittedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:underline"
          >
            Open WhatsApp <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
        <button
          type="button"
          onClick={() => setSubmittedLink(null)}
          className="mt-4 block w-full text-sm font-semibold text-slate-500 hover:text-slate-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users, left empty by them, but bots tend to fill every field. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-slate-700">
            Full name *
          </label>
          <input
            id={`${formId}-name`}
            required
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-whatsapp`} className="block text-sm font-semibold text-slate-700">
            WhatsApp / phone number *
          </label>
          <input
            id={`${formId}-whatsapp`}
            required
            type="tel"
            inputMode="tel"
            value={values.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="080..."
            className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-slate-700">
          Email (optional)
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      {variant === "quote" && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor={`${formId}-direction`} className="block text-sm font-semibold text-slate-700">
                Direction
              </label>
              <select
                id={`${formId}-direction`}
                value={values.direction}
                onChange={(e) => update("direction", e.target.value as FormValues["direction"])}
                className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="export">Export (from Nigeria)</option>
                <option value="import">Import (into Nigeria)</option>
              </select>
            </div>
            <div>
              <label htmlFor={`${formId}-service`} className="block text-sm font-semibold text-slate-700">
                Service
              </label>
              <select
                id={`${formId}-service`}
                value={values.service}
                onChange={(e) => update("service", e.target.value as FormValues["service"])}
                className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="cargo">Cargo</option>
                <option value="courier">Courier</option>
              </select>
            </div>
            <div>
              <label htmlFor={`${formId}-route`} className="block text-sm font-semibold text-slate-700">
                Route
              </label>
              <select
                id={`${formId}-route`}
                value={values.route}
                onChange={(e) => update("route", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {routes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.flag} {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-weight`} className="block text-sm font-semibold text-slate-700">
              Approximate weight (kg, optional)
            </label>
            <input
              id={`${formId}-weight`}
              type="number"
              min="0"
              step="0.1"
              inputMode="decimal"
              value={values.weight}
              onChange={(e) => update("weight", e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-slate-700">
          {variant === "quote" ? "What are you shipping? *" : "Your message *"}
        </label>
        <textarea
          id={`${formId}-message`}
          required
          rows={3}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-red px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {variant === "quote" ? "Send to WhatsApp & Get My Quote" : "Send Message on WhatsApp"}
      </button>
      <p className="text-center text-xs text-slate-500">
        We&apos;ll open WhatsApp with your details pre-filled. You just tap send.
      </p>
    </form>
  );
}
