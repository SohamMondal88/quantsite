import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      {/* Subtle corner accents */}
      <div className="absolute top-20 left-8 hidden lg:block">
        <div className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">
          System v4.2.1
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-glow" />
          <span className="font-mono text-[10px] text-accent-green">OPERATIONAL</span>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 animate-fadeInUp">
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-accent-cyan to-transparent" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-accent-cyan uppercase">
            Autonomous Trading Infrastructure
          </span>
        </div>

        {/* Hero Text with Green Dot */}
        <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 animate-slideInUp">
          <div className="flex-1 min-w-0">
            <h1
              className="font-serif text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] font-normal leading-[1.05] sm:leading-[1.08] tracking-tight"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00f0ff 35%, #3bb078 70%, #ffffff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "textShimmer 6s linear infinite",
              }}
            >
              Trade Beyond
              <br />
              Human Limits
            </h1>
          </div>

          {/* Green Dot accent */}
          <div
            className="hidden lg:block mt-4 xl:mt-8 shrink-0 animate-scaleIn delay-300"
            style={{ width: 44, height: 44 }}
          >
            <div
              className="w-full h-full rounded-full transition-transform duration-500 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #3bb078 0%, #00f0ff 100%)",
                boxShadow: "0 0 30px rgba(59,176,120,0.3), 0 0 60px rgba(0,240,255,0.1)",
              }}
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className="max-w-xl mb-6 sm:mb-8 animate-fadeInUp delay-200">
          <p className="font-sans text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-text-secondary leading-[1.5]">
            AI-powered market intelligence for autonomous hedge funds.
            Built for quants, traders, and visionaries who demand the edge.
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 sm:mb-14 animate-fadeInUp delay-300">
          <a
            href="#launch"
            className="group relative px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-sans font-semibold text-[14px] sm:text-[16px] text-[#050505] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #00f0ff 0%, #3bb078 100%)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Platform
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="#features"
            className="group px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-sans font-medium text-[14px] sm:text-[16px] text-white/80 border border-border-medium hover:border-accent-cyan/30 hover:text-white transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Explore Features
              <svg className="w-4 h-4 text-text-muted transition-all duration-300 group-hover:text-accent-cyan group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Dashboard Preview */}
        <div className="relative animate-scaleIn delay-400">
          {/* Terminal-style chrome */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border-medium bg-bg-elevated/50">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 border-b border-border-subtle">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-[9px] sm:text-[10px] text-text-muted">
                  quantsuite_dashboard — live
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-glow" />
                <span className="font-mono text-[9px] sm:text-[10px] text-accent-green">LIVE</span>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/images/dashboard.png"
                alt="Quantsuite Trading Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* Reflection glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-accent-cyan/10 blur-[60px] rounded-full pointer-events-none" />
        </div>

        {/* Floating metric badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 animate-fadeInUp delay-500">
          {[
            { label: "Alpha Signals", value: "24,891", color: "#00f0ff" },
            { label: "Avg Latency", value: "12ms", color: "#3bb078" },
            { label: "Win Rate", value: "68.4%", color: "#ff9e00" },
          ].map((m) => (
            <div
              key={m.label}
              className="glass-card px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: m.color }} />
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider">{m.label}</span>
                <span className="font-mono text-[13px] sm:text-[15px] font-semibold" style={{ color: m.color }}>{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
