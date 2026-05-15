import Image from "next/image";

const featureNavItems = [
  { name: "Walk Forward Backtester", color: "#7650fd", icon: "wallet" },
  { name: "Pulse Geopolitical Dashboard", color: "#3bb078", icon: "lock" },
  { name: "Autonomous Hedge Fund", color: "#ff9e00", icon: "work" },
  { name: "Market System Intelligence", color: "#4488ff", icon: "password" },
];

const features = [
  {
    num: "01",
    title: "SwarmEngine AI",
    desc: "Deploy autonomous agent swarms to analyze alternative data, detect information asymmetry, and synthesize multi-model alpha signals in real-time.",
    image: "/images/element-1.png",
    stats: [
      { label: "Agents", value: "2.4K" },
      { label: "Models", value: "47" },
    ],
  },
  {
    num: "02",
    title: "Factor Zoo Pipeline",
    desc: "Access 93+ pre-built alpha factors. Test momentum, value, and quality metrics with instant cross-section ranking and regime detection.",
    image: "/images/element-2.png",
    stats: [
      { label: "Factors", value: "93+" },
      { label: "Speed", value: "<1s" },
    ],
  },
  {
    num: "03",
    title: "Walk Forward Backtester",
    desc: "Prevent overfitting. Our walk-forward engine optimizes parameters dynamically across shifting market regimes with statistical rigor.",
    image: "/images/trading-card.png",
    stats: [
      { label: "Accuracy", value: "94%" },
      { label: "Regimes", value: "12" },
    ],
  },
  {
    num: "04",
    title: "Market System Intelligence",
    desc: "Runs markets as a system—not a workflow. Continuously detecting signals, shaping strategies, and managing risk before others react.",
    image: "/images/dashboard.png",
    stats: [
      { label: "Markets", value: "140+" },
      { label: "Latency", value: "12ms" },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3 animate-fadeInUp">
              <div className="h-[1px] w-8 bg-gradient-to-r from-accent-cyan to-transparent" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-accent-cyan uppercase">
                Core Systems
              </span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white leading-[1.1] animate-fadeInUp delay-100">
              What We Offer
            </h2>
          </div>
          <p className="font-sans text-[13px] sm:text-[14px] md:text-[15px] text-text-secondary max-w-xs animate-fadeInUp delay-200">
            Four interconnected engines powering autonomous alpha generation
          </p>
        </div>

        {/* Feature Navigation Pills - horizontal scroll */}
        <div className="flex gap-3 sm:gap-4 mb-16 sm:mb-20 lg:mb-24 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {featureNavItems.map((item, i) => (
            <div
              key={item.name}
              className={`group flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl cursor-default glass-card animate-fadeInUp delay-${(i + 1) * 100} snap-start shrink-0`}
            >
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${item.color}18` }}
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: item.color }} />
              </div>
              <span className="font-sans text-[13px] sm:text-[14px] md:text-[16px] text-white/80 whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-28">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={f.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center animate-fadeInUp`}
              >
                {/* Text column */}
                <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  {/* Large background number */}
                  <div className="absolute -top-4 sm:-top-8 -left-2 sm:-left-4 font-display text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] text-white/[0.025] font-black leading-none select-none pointer-events-none">
                    {f.num}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                      <div className="font-mono text-[11px] sm:text-[12px] tracking-wider text-accent-cyan/60 border border-accent-cyan/20 px-2.5 py-1 rounded-md">
                        {f.num}
                      </div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-border-medium to-transparent" />
                    </div>

                    <h3 className="font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[52px] text-white mb-4 sm:mb-5 leading-tight">
                      {f.title}
                    </h3>

                    <p className="font-sans text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-text-secondary leading-[1.6] mb-6 sm:mb-8">
                      {f.desc}
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8">
                      {f.stats.map((s) => (
                        <div key={s.label}>
                          <div className="font-mono text-[20px] sm:text-[24px] font-bold text-white mb-0.5">
                            {s.value}
                          </div>
                          <div className="font-mono text-[10px] sm:text-[11px] tracking-wider text-text-muted uppercase">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 font-sans text-[14px] sm:text-[15px] font-medium text-white/70 hover:text-accent-cyan transition-colors duration-300"
                    >
                      <span className="relative">
                        Explore system
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-300 group-hover:w-full" />
                      </span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image column */}
                <div className={`relative group ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle bg-bg-elevated/30">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={800}
                      height={600}
                      className="w-full h-auto transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Glow behind image */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-accent-cyan/5 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
