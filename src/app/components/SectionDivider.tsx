export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 py-8 sm:py-12 flex items-center gap-4">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border-medium to-transparent" />
      {label && (
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-text-muted uppercase shrink-0">
          {label}
        </span>
      )}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border-medium to-transparent" />
    </div>
  );
}
