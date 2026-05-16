import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40">
      {/* Background world map glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* 2-Column Layout: Text Left, Dashboard Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="animate-slideInLeft">
            {/* Main Heading */}
            <h1 className="font-serif text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-6 sm:mb-8">
              <span className="text-white">Trade Beyond</span>
              <br />
              <span className="text-accent-cyan italic">Human Limits</span>
              <br />
              <span className="text-white">on Quantsuite</span>
            </h1>

            {/* Subtitle Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 sm:px-6 sm:py-5 mb-8 sm:mb-10 animate-fadeInUp delay-100">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-green shrink-0 mt-1.5 animate-pulse-glow" />
                <p className="font-sans text-[14px] sm:text-[16px] text-white/85 leading-[1.6]">
                  Quantsuite is your AI-powered edge in the markets, built for quants, traders, and visionaries
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fadeInUp delay-200">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold text-[15px] sm:text-[16px] rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:-translate-y-0.5"
              >
                Join Waitlist
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Dashboard Preview */}
          <div className="relative animate-scaleIn delay-300">
            {/* Dashboard with terminal header */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 border-b border-white/5 bg-white/3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/40">
                    quantsuite_dashboard — live
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-glow" />
                  <span className="font-mono text-[9px] sm:text-[10px] text-accent-green">LIVE</span>
                </div>
              </div>

              {/* Dashboard content area */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-white/5 to-white/2">
                <Image
                  src="/images/dashboard.png"
                  alt="Quantsuite Trading Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full h-24 bg-accent-cyan/10 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Metrics Row - Below */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-3 sm:gap-6 animate-fadeInUp delay-500">
          {[
            { label: "Alpha Signals", value: "24,891", color: "#00f0ff" },
            { label: "Avg Latency", value: "12ms", color: "#3bb078" },
            { label: "Win Rate", value: "68.4%", color: "#ff9e00" },
          ].map((m) => (
            <div
              key={m.label}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: m.color }} />
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{m.label}</span>
                <span className="font-mono text-[13px] sm:text-[15px] font-semibold" style={{ color: m.color }}>{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}