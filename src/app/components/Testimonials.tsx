export default function Testimonials() {
  return (
    <section className="w-full px-8 md:px-16 py-16">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Top row - red/pink cards */}
        <div className="flex justify-center gap-8 mb-4">
          <div
            className="w-[280px] md:w-[350px] p-4 rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(177,91,91,0.75) 0%, rgba(236,73,73,1) 100%)",
            }}
          >
            <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3">
              The walk Forward engine saved us from a disastrous overfitting loop
              in our volatility strategies. Pure institutional grade.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="font-sans text-[12px] text-white/80">Sarah chen</span>
            </div>
          </div>

          <div
            className="w-[280px] md:w-[320px] p-4 rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(177,91,91,0.75) 0%, rgba(236,73,73,1) 100%)",
            }}
          >
            <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3">
              Realtime regime detection kept us ahead of market shifts tight,
              precise, and reliable.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="font-sans text-[12px] text-white/80">David Kross</span>
            </div>
          </div>
        </div>

        {/* Connector dots and lines */}
        <div className="flex justify-center gap-8 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-accent-green" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-accent-green" />
          </div>
        </div>

        {/* Bottom row - green cards */}
        <div className="flex justify-center gap-6">
          <div
            className="w-[260px] md:w-[340px] p-4 rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,176,120,0.75) 0%, rgba(89,182,137,1) 100%)",
            }}
          >
            <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3">
              Quantsuite's SwarmEngine detected the oil supply squeeze 48 hours
              before the headlines hit. It's an indispensable edge.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="font-sans text-[12px] text-white/80">Marcus Vance</span>
            </div>
          </div>

          <div
            className="w-[260px] md:w-[360px] p-4 rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,176,120,0.75) 0%, rgba(89,182,137,1) 100%)",
            }}
          >
            <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3">
              A masterclass in UI and data density. Having Black Scholes and
              Heston models side by side with AI signals is a game changer.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="font-sans text-[12px] text-white/80">David Kross</span>
            </div>
          </div>

          <div
            className="w-[260px] md:w-[360px] p-4 rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,176,120,0.75) 0%, rgba(89,182,137,1) 100%)",
            }}
          >
            <p className="font-sans text-[14px] md:text-[16px] text-white leading-snug mb-3">
              A masterclass in UI and data density. Having Black Scholes and
              Heston models side by side with AI signals is a game changer.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="font-sans text-[12px] text-white/80">suvendu adhikary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
