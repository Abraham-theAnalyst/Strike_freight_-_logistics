export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold uppercase tracking-wide ${light ? "text-brand-red-light" : "text-brand-red"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl ${light ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${light ? "text-white/85" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
