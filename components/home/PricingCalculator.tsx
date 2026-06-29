"use client";

import { useId, useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Badge from "@/components/ui/Badge";
import QuoteForm from "@/components/forms/QuoteForm";
import { routes, currencySymbols, calculatorConfig, paymentPolicy, paymentBadges, type RateCurrency } from "@/lib/site-data";

type ServiceType = "cargo" | "courier";

export default function PricingCalculator() {
  const formId = useId();
  const [routeId, setRouteId] = useState(routes[0].id);
  const [serviceType, setServiceType] = useState<ServiceType>("cargo");
  const [weight, setWeight] = useState("");
  const [showVolumetric, setShowVolumetric] = useState(false);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const route = routes.find((r) => r.id === routeId) ?? routes[0];
  const rate = serviceType === "cargo" ? route.cargoRate : route.courierRate;
  const symbol = currencySymbols[rate.currency as RateCurrency];

  const { billableWeight, estimate, volumetricWeight } = useMemo(() => {
    const actual = Number.parseFloat(weight) || 0;
    const l = Number.parseFloat(length) || 0;
    const w = Number.parseFloat(width) || 0;
    const h = Number.parseFloat(height) || 0;
    const volumetric = showVolumetric && l > 0 && w > 0 && h > 0 ? (l * w * h) / calculatorConfig.volumetricDivisor : 0;
    const billable = Math.max(actual, volumetric, calculatorConfig.minimumBillableWeightKg);
    return {
      billableWeight: billable,
      volumetricWeight: volumetric,
      estimate: actual > 0 || volumetric > 0 ? billable * rate.amount : 0,
    };
  }, [weight, length, width, height, showVolumetric, rate.amount]);

  const hasInput = estimate > 0;

  const whatsappMessage = hasInput
    ? `Hi Strike Freight, I'd like an exact quote.\n\nRoute: ${route.name}\nService: ${serviceType === "cargo" ? "Cargo" : "Courier"}\nWeight: ${weight || "0"}kg${
        volumetricWeight > 0 ? ` (volumetric: ${volumetricWeight.toFixed(1)}kg)` : ""
      }\nBillable weight: ${billableWeight.toFixed(1)}kg\nEstimated cost: ${symbol}${estimate.toFixed(2)}\n\nPlease confirm my exact price.`
    : `Hi Strike Freight, I'd like a quote for shipping to/from ${route.name}.`;

  return (
    <section id="calculator" className="bg-brand-cloud py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing & Calculator"
          title="See a starting rate, then estimate your shipment in seconds."
          description="Pick a route and enter your weight for a quick estimate. Your exact price is always confirmed on WhatsApp."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm lg:col-span-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Calculator className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-bold">Weight & Route Estimator</h3>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-route`} className="block text-sm font-semibold text-slate-700">
                  Route
                </label>
                <select
                  id={`${formId}-route`}
                  value={routeId}
                  onChange={(e) => setRouteId(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {routes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.flag} {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={`${formId}-service`} className="block text-sm font-semibold text-slate-700">
                  Service
                </label>
                <select
                  id={`${formId}-service`}
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                  className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <option value="cargo">Cargo (7–10 days)</option>
                  <option value="courier">Courier (2–5 days)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor={`${formId}-weight`} className="block text-sm font-semibold text-slate-700">
                  Approximate weight (kg)
                </label>
                <input
                  id={`${formId}-weight`}
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 5"
                  className="mt-1.5 w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowVolumetric((v) => !v)}
              className="mt-4 text-sm font-semibold text-brand-navy underline-offset-2 hover:underline"
            >
              {showVolumetric ? "Hide" : "Have a large but light item?"} {!showVolumetric && "Add dimensions →"}
            </button>

            {showVolumetric && (
              <div className="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-brand-cloud p-4">
                {[
                  { label: "Length (cm)", value: length, set: setLength },
                  { label: "Width (cm)", value: width, set: setWidth },
                  { label: "Height (cm)", value: height, set: setHeight },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-semibold text-slate-600">{field.label}</label>
                    <input
                      type="number"
                      min="0"
                      inputMode="decimal"
                      value={field.value}
                      onChange={(e) => field.set(e.target.value)}
                      className="mt-1 w-full rounded-md border border-brand-line bg-white px-2 py-2 text-sm text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
                    />
                  </div>
                ))}
                <p className="col-span-3 text-xs leading-relaxed text-slate-500">{calculatorConfig.volumetricExplainer}</p>
              </div>
            )}

            <div className="mt-6 rounded-xl bg-brand-navy p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Estimated cost</p>
              <p className="mt-1 text-3xl font-extrabold">
                {hasInput ? `${symbol}${estimate.toFixed(2)}` : `${symbol}0.00`}
              </p>
              <p className="mt-1 text-xs text-white/70">
                Billable weight: {hasInput ? billableWeight.toFixed(1) : "0"}kg
                {!rate.confirmed && <span className="ml-2 font-semibold text-amber-300">[CONFIRM rate]</span>}
              </p>
              <p className="mt-3 text-xs text-white/80">{calculatorConfig.disclaimer}</p>
            </div>

            <WhatsAppButton message={whatsappMessage} label="Get Exact Quote on WhatsApp" size="lg" className="mt-5 w-full" />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-2xl border border-brand-line bg-white p-6">
              <h3 className="text-base font-bold text-brand-navy">Payment & Trust</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{paymentPolicy.intl}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{paymentPolicy.local}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {paymentBadges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-brand-line p-6">
              <h3 className="text-sm font-bold text-slate-700">Route starting rates</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {routes.map((r) => (
                  <li key={r.id} className="flex items-center justify-between gap-2">
                    <span>
                      {r.flag} {r.name}
                    </span>
                    <span className="font-semibold text-slate-700">
                      from {currencySymbols[r.cargoRate.currency]}
                      {r.cargoRate.amount}/kg{!r.cargoRate.confirmed && <span className="ml-1 text-brand-red">[CONFIRM]</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="quote-form" className="mt-12 rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
          <h3 className="text-lg font-bold text-brand-navy">Prefer to send your details directly?</h3>
          <p className="mt-1 text-sm text-slate-600">
            Fill this in once and we&apos;ll open WhatsApp with everything pre-filled, so you just hit send.
          </p>
          <div className="mt-6 max-w-2xl">
            <QuoteForm variant="quote" />
          </div>
        </div>
      </Container>
    </section>
  );
}
