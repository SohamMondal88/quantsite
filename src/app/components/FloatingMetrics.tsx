export default function FloatingMetrics() {
  const metrics = [
    { label: "SYSTEM STATUS", value: "ONLINE", color: "#3bb078", suffix: "" },
    { label: "UPTIME", value: "99.97", color: "#00f0ff", suffix: "%" },
    { label: "AGENTS", value: "2.4K", color: "#ff9e00", suffix: "" },
    { label: "LATENCY", value: "12", color: "#9d4edd", suffix: "ms" },
  ];

  return (
    <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
      <div className="flex flex-col gap-3">
        {metrics.map((m, i) => (
          <div 
            key={m.label}
            className={`glass-card px-4 py-2.5 rounded-lg animate-slideInRight delay-${(i + 2) * 100}`}
          >
            <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1">
              {m.label}
            </div>
            <div className="flex items-baseline gap-1">
              <span 
                className="font-mono text-[18px] font-bold"
                style={{ color: m.color, textShadow: `0 0 20px ${m.color}40` }}
              >
                {m.value}
              </span>
              <span className="font-mono text-[11px] text-text-muted">{m.suffix}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
