const testimonials = [
  {
    text: "The walk-forward engine saved us from a disastrous overfitting loop in our volatility strategies. Pure institutional grade.",
    author: "Sarah Chen",
    role: "Quantitative Researcher",
    firm: "Wintermute",
    color: "#ff5f57",
    initial: "SC",
  },
  {
    text: "Real-time regime detection kept us ahead of market shifts. Tight, precise, and reliable execution across all timeframes.",
    author: "David Kross",
    role: "Portfolio Manager",
    firm: "Jump Crypto",
    color: "#3bb078",
    initial: "DK",
  },
  {
    text: "Quantsuite's SwarmEngine detected the oil supply squeeze 48 hours before headlines. It's an indispensable alpha edge.",
    author: "Marcus Vance",
    role: "Head of Trading",
    firm: "CMS Holdings",
    color: "#4488ff",
    initial: "MV",
  },
  {
    text: "A masterclass in UI and data density. Having Black-Scholes and Heston models side by side with AI signals is transformative.",
    author: "Suvendu Adhikary",
    role: "Derivatives Strategist",
    firm: "Alameda Research",
    color: "#ff9e00",
    initial: "SA",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 animate-fadeInUp">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-accent-cyan uppercase">
              Testimonials
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white leading-[1.1] animate-fadeInUp delay-100">
            Trusted by the{" "}
            <span className="gradient-hero">best</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`group relative p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl glass-card animate-fadeInUp delay-${(i + 1) * 100} overflow-hidden`}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${t.color}, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Quote */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={t.color} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-[13px] sm:text-[14px] md:text-[15px] text-text-secondary leading-[1.7] mb-5 sm:mb-6">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-[11px] font-bold text-white shrink-0"
                    style={{ background: `${t.color}30`, border: `1px solid ${t.color}50` }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-sans text-[13px] sm:text-[14px] font-semibold text-white">
                      {t.author}
                    </div>
                    <div className="font-mono text-[10px] sm:text-[11px] text-text-muted">
                      {t.role} · {t.firm}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
