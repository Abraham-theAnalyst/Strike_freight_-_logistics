export default function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-semibold text-slate-600 ${className}`}
    >
      {children}
    </span>
  );
}
