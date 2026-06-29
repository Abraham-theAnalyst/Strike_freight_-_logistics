"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { importFlowSteps, exportFlowSteps, whatsappMessages } from "@/lib/site-data";
import { stockImages } from "@/lib/stock-images";

type FlowKey = "import" | "export";

const tabs: { key: FlowKey; label: string; hint: string; image: keyof typeof stockImages }[] = [
  { key: "import", label: "Import: Shop & Ship", hint: "Buying from abroad, into Nigeria", image: "worldwideShopping" },
  { key: "export", label: "Export: Cargo & Courier", hint: "Sending from Nigeria, out", image: "warehouseHandling" },
];

export default function HowItWorks() {
  const [active, setActive] = useState<FlowKey>("import");
  const steps = active === "import" ? importFlowSteps : exportFlowSteps;
  const activeTab = tabs.find((tab) => tab.key === active) ?? tabs[0];
  const image = stockImages[activeTab.image];

  return (
    <section id="how-it-works" className="bg-brand-cloud py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Two simple flows, depending on which way you're going."
          description="Pick whichever matches what you need right now."
        />

        <div role="tablist" aria-label="How it works flow" className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:max-w-xl">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              type="button"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                active === tab.key ? "border-brand-navy bg-brand-navy text-white" : "border-brand-line bg-white text-slate-700 hover:border-brand-navy/40"
              }`}
            >
              <span className="block text-sm font-bold">{tab.label}</span>
              <span className={`block text-xs ${active === tab.key ? "text-white/75" : "text-slate-500"}`}>{tab.hint}</span>
            </button>
          ))}
        </div>

        <PhotoPlaceholder
          key={activeTab.key}
          src={image.src}
          alt={image.alt}
          aspect="aspect-[21/8]"
          sizes="100vw"
          className="mt-8"
        />

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.step} className="relative rounded-xl border border-brand-line bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">Not sure which one fits you?</p>
          <WhatsAppButton message={whatsappMessages.notSure} label="Chat with us" variant="ghost" size="md" />
        </div>
      </Container>
    </section>
  );
}
