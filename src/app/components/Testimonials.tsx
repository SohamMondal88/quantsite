export default function Testimonials() {
  const topTestimonials = [
    {
      text: "The walk Forward engine saved us from a disastrous overfitting loop in our volatility strategies. Pure institutional grade.",
      author: "Sarah chen",
      delay: "delay-100",
    },
    {
      text: "Realtime regime detection kept us ahead of market shifts tight, precise, and reliable.",
      author: "David Kross",
      delay: "delay-200",
    },
  ];

  const bottomTestimonials = [
    {
      text: "Quantsuite's SwarmEngine detected the oil supply squeeze 48 hours before the headlines hit. It's an indispensable edge.",
      author: "Marcus Vance",
      delay: "delay-300",
    },
    {
      text: "A masterclass in UI and data density. Having Black Scholes and Heston models side by side with AI signals is a game changer.",
      author: "David Kross",
      delay: "delay-400",
    },
    {
      text: "A masterclass in UI and data density. Having Black Scholes and Heston models side by side with AI signals is a game changer.",
      author: "suvendu adhikary",
      delay: "delay-500",
    },
  ];

  return (
    <section className="w-full px-8 md:px-16 py-16">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Top row - red/pink cards */}
        <div className="flex justify-center gap-8 mb-4">
          {topTestimonials.map((t) => (
            <div
              key={t.author}
              className={`group w-[280px] md:w-[350px] p-4 rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(236,73,73,0.25)] animate-fadeInUp ${t.delay}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(177,91,91,0.75) 0%, rgba(236,73,73,1) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3 transition-colors duration-300">
                {t.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-dot-pulse" />
                <span className="font-sans text-[12px] text-white/80">{t.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Connector dots and lines */}
        <div className="flex justify-center gap-8 mb-4">
          {topTestimonials.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[1px] h-8 bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-accent-green animate-dot-pulse" />
            </div>
          ))}
        </div>

        {/* Bottom row - green cards */}
        <div className="flex justify-center gap-6">
          {bottomTestimonials.map((t) => (
            <div
              key={t.author + t.delay}
              className={`group w-[260px] md:w-[340px] p-4 rounded-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,176,120,0.25)] animate-fadeInUp ${t.delay}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,176,120,0.75) 0%, rgba(89,182,137,1) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3 transition-colors duration-300">
                {t.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-dot-pulse" />
                <span className="font-sans text-[12px] text-white/80">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
