"use client";

"use client";

import Image from "next/image";

const featureNavItems = [
  { name: "Walk Forward Backtester", color: "#7650fd", icon: "wallet" },
  { name: "Pulse Geopolitical Dashboard", color: "#3bb078", icon: "lock" },
  { name: "Autonomous Hedge Fund", color: "#ff6b00", icon: "work" },
  { name: "Market System Intelligence", color: "#647bff", icon: "password" },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full px-8 md:px-16 py-16">
      {/* Vertical Green Line - Rectangle 83 */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[13px] hidden lg:block"
        style={{
          opacity: 0.32,
          background:
            "linear-gradient(180deg, rgba(59,176,120,0.15) 0%, rgba(59,176,120,1) 25%, rgba(59,176,120,0.94) 50%, rgba(59,176,120,0.84) 75%, rgba(59,176,120,0.15) 100%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* We Offer Label */}
        <p className="font-sans text-[24px] md:text-[36px] text-white/80 mb-12 tracking-[-0.01em]">
          We Offer
        </p>

        {/* Feature Navigation Pills */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-24">
          {featureNavItems.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 rounded-[32px] hover-lift animate-slide-up stagger-${index + 1}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.13) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div
                className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: item.color }}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {item.icon === "wallet" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  )}
                  {item.icon === "lock" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  )}
                  {item.icon === "work" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {item.icon === "password" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  )}
                </svg>
              </div>
              <span className="font-serif text-[16px] md:text-[24px] lg:text-[36px] text-white whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Feature 1: SwarmEngine AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative animate-slide-left">
            <p className="font-display text-[120px] md:text-[160px] lg:text-[240px] text-white/[0.03] font-black leading-none absolute -top-16 -left-4">
              01
            </p>
            <div className="relative z-10 pt-20">
              <h3 className="font-serif text-[36px] md:text-[64px] text-white mb-6 leading-tight group">
                <span className="group-hover:text-glow-cyan transition-all duration-300">
                  SwarmEngine AI
                </span>
              </h3>
              <p className="font-sans text-[16px] md:text-[24px] text-white/80 leading-[1.32] mb-8 transition-all duration-300">
                Deploy autonomous agent swarms to analyze alternative data,
                detect information asymmetry, and synthesize multi-model alpha
                signals.
              </p>
              <a
                href="#"
                className="font-sans text-[20px] md:text-[31px] text-white relative group transition-smooth"
              >
                Learn more →
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div className="relative animate-slide-right hover-lift">
            <Image
              src="/images/element-1.png"
              alt="SwarmEngine AI Dashboard"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl transition-all duration-300"
              style={{
                boxShadow: "0 20px 60px rgba(76, 255, 255, 0.1)",
              }}
            />
          </div>
        </div>

        {/* Feature 2: Factor Zoo Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="order-2 lg:order-1 relative hover-lift animate-slide-left">
            <Image
              src="/images/element-2.png"
              alt="Factor Zoo Pipeline"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl transition-all duration-300"
              style={{
                boxShadow: "0 20px 60px rgba(76, 255, 255, 0.1)",
              }}
            />
          </div>
          <div className="order-1 lg:order-2 relative animate-slide-right">
            <p className="font-display text-[120px] md:text-[160px] lg:text-[240px] text-white/[0.03] font-black leading-none absolute -top-16 -left-4">
              02
            </p>
            <div className="relative z-10 pt-20">
              <h3 className="font-serif text-[36px] md:text-[64px] text-white mb-6 leading-tight group">
                <span className="group-hover:text-glow-cyan transition-all duration-300">
                  Factor Zoo Pipeline
                </span>
              </h3>
              <p className="font-sans text-[16px] md:text-[24px] text-white/80 leading-[1.32] mb-8 transition-all duration-300">
                Access 93+ pre-built alpha factors. Test momentum, value, and
                quality metrics with instant cross section ranking.
              </p>
              <a
                href="#"
                className="font-sans text-[20px] md:text-[31px] text-white relative group transition-smooth"
              >
                Learn more →
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature 3: Walk Forward Backtester */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative animate-slide-left">
            <p className="font-display text-[120px] md:text-[160px] lg:text-[240px] text-white/[0.03] font-black leading-none absolute -top-16 -left-4">
              03
            </p>
            <div className="relative z-10 pt-20">
              <h3 className="font-serif text-[36px] md:text-[51px] text-white mb-6 leading-tight group">
                <span className="group-hover:text-glow-cyan transition-all duration-300">
                  Walk Forward Backtester
                </span>
              </h3>
              <p className="font-sans text-[16px] md:text-[24px] text-white/80 leading-[1.32] mb-8 transition-all duration-300">
                Prevent overfitting. Our walk-forward engine optimizes
                parameters dynamically across shifting market regimes.
              </p>
              <a
                href="#"
                className="font-sans text-[20px] md:text-[31px] text-white relative group transition-smooth"
              >
                Learn more →
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div className="relative hover-lift animate-slide-right">
            <Image
              src="/images/trading-card.png"
              alt="Walk Forward Backtester"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl transition-all duration-300"
              style={{
                boxShadow: "0 20px 60px rgba(76, 255, 255, 0.1)",
              }}
            />
          </div>
        </div>

        {/* Feature 4: Market System Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 lg:order-1 relative hover-lift animate-slide-left">
            <Image
              src="/images/dashboard.png"
              alt="Market System Intelligence"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl transition-all duration-300"
              style={{
                boxShadow: "0 20px 60px rgba(76, 255, 255, 0.1)",
              }}
            />
          </div>
          <div className="order-1 lg:order-2 relative animate-slide-right">
            <p className="font-display text-[120px] md:text-[160px] lg:text-[240px] text-white/[0.03] font-black leading-none absolute -top-16 -left-4">
              04
            </p>
            <div className="relative z-10 pt-20">
              <h3 className="font-serif text-[36px] md:text-[48px] text-white mb-6 leading-tight group">
                <span className="group-hover:text-glow-cyan transition-all duration-300">
                  Market System Intelligence
                </span>
              </h3>
              <p className="font-sans text-[16px] md:text-[24px] text-white/80 leading-[1.32] mb-8 transition-all duration-300">
                Runs markets as a system—not a workflow. Continuously detecting
                signals, shaping strategies, and managing risk before others
                even react.
              </p>
              <a
                href="#"
                className="font-sans text-[20px] md:text-[31px] text-white relative group transition-smooth"
              >
                Learn more →
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
