const testimonials = [
  {
    text: "The walk Forward engine saved us from a disastrous overfitting loop in our volatility strategies. Pure institutional grade.",
    author: "Sarah chen",
    color: "red",
    position: "top-left",
  },
  {
    text: "Realtime regime detection kept us ahead of market shifts tight, precise, and reliable.",
    author: "David Kross",
    color: "red",
    position: "top-right",
  },
  {
    text: "Quantsuite's SwarmEngine detected the oil supply squeeze 48 hours before the headlines hit. It's an indispensable edge.",
    author: "Marcus Vance",
    color: "green",
    position: "bottom-left",
  },
  {
    text: "A masterclass in UI and data density. Having Black Scholes and Heston models side by side with AI signals is a game changer.",
    author: "suvendu adhikary",
    color: "green",
    position: "bottom-right",
  },
];

function TestimonialCard({
  text,
  color,
  className = "",
}: {
  text: string;
  color: "red" | "green";
  className?: string;
}) {
  const bg =
    color === "red"
      ? "linear-gradient(135deg, rgba(214, 92, 92, 0.92) 0%, rgba(173, 67, 67, 0.95) 100%)"
      : "linear-gradient(135deg, rgba(65, 185, 130, 0.92) 0%, rgba(41, 145, 98, 0.96) 100%)";

  return (
    <div
      className={`max-w-[280px] p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm ${className}`}
      style={{
        background: bg,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="font-sans text-[12px] leading-[1.65] text-white/95">
        {text}
      </p>
    </div>
  );
}

function Connector({
  author,
  position,
}: {
  author: string;
  position: "top" | "bottom";
}) {
  return (
    <div className="flex flex-col items-center">
      {position === "top" ? (
        <>
          <span className="font-sans text-[14px] font-light text-white/45 mb-2">
            {author}
          </span>

          <div className="relative w-px h-12 bg-emerald-400/60">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] border border-emerald-300/40" />
          </div>
        </>
      ) : (
        <>
          <div className="relative w-px h-12 bg-emerald-400/60">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] border border-emerald-300/40" />
          </div>

          <span className="font-sans text-[14px] font-light text-white/45 mt-2">
            {author}
          </span>
        </>
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden py-24 px-6 lg:px-12">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.04),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01),transparent_20%,transparent_80%,rgba(255,255,255,0.01))] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-center text-white text-[48px] md:text-[72px] lg:text-[84px] font-light tracking-tight mb-24">
          Trusted by the <span className="italic">best</span>
        </h2>

{/* ============ DESKTOP LAYOUT (RESPONSIVE + PERFECTLY ALIGNED) ============ */}
<div className="hidden lg:block relative h-[34rem] xl:h-[36rem]">
  {/* Center dashed divider */}
  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/20" />

  {/* ================= TOP ROW ================= */}
  <div className="absolute inset-x-0 top-0 grid grid-cols-3 items-start">
    {/* Sarah chen */}
    <div className="flex flex-col items-start">
      <div className="ml-[18%]">
        <Connector author="Sarah chen" position="top" />
      </div>

      <TestimonialCard
        text={testimonials[0].text}
        color="red"
        className="mt-4 ml-[42%] w-[16rem] xl:w-[17rem]"
      />
    </div>

    {/* David Kross */}
    <div className="flex flex-col items-center">
      <Connector author="David Kross" position="top" />
    </div>

    {/* Red Card Right */}
    <div className="flex justify-end">
      <TestimonialCard
        text={testimonials[1].text}
        color="red"
        className="mt-[3.5rem] w-[16rem] xl:w-[17rem]"
      />
    </div>
  </div>

  {/* ================= BOTTOM ROW ================= */}
  <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 items-end">
    {/* Green Card Left */}
    <div className="flex items-start">
      <TestimonialCard
        text={testimonials[2].text}
        color="green"
        className="w-[17rem] xl:w-[18rem]"
      />
    </div>

    {/* Marcus Vance */}
    <div className="flex justify-start">
      <div className="ml-[5%]">
        <Connector author="Marcus Vance" position="bottom" />
      </div>
    </div>

    {/* Green Card + Suvendu */}
    <div className="relative flex justify-center">
      <TestimonialCard
        text={testimonials[3].text}
        color="green"
        className="w-[17rem] xl:w-[18rem]"
      />

      <div className="absolute left-full ml-12 top-8">
        <Connector author="suvendu adhikary" position="bottom" />
      </div>
    </div>
  </div>
</div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 relative">
          <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-white/20 -translate-y-1/2" />

          <div className="relative z-10">
            <Connector author="Sarah chen" position="top" />
            <TestimonialCard
              text={testimonials[0].text}
              color="red"
              className="mt-4"
            />
          </div>

          <div className="relative z-10">
            <Connector author="David Kross" position="top" />
            <TestimonialCard
              text={testimonials[1].text}
              color="red"
              className="mt-4"
            />
          </div>

          <div className="relative z-10">
            <TestimonialCard
              text={testimonials[2].text}
              color="green"
              className="mb-4"
            />
            <Connector author="Marcus Vance" position="bottom" />
          </div>

          <div className="relative z-10">
            <TestimonialCard
              text={testimonials[3].text}
              color="green"
              className="mb-4"
            />
            <Connector author="suvendu adhikary" position="bottom" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative flex flex-col gap-8">
          {/* Vertical dashed line */}
          <div className="absolute top-0 bottom-0 left-[11px] border-l border-dashed border-white/20" />

          {testimonials.map((item) => (
            <div key={item.author} className="relative pl-8">
              <div className="absolute left-[11px] top-6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)] z-10" />

              <span className="block text-white/45 text-[12px] mb-2">
                {item.author}
              </span>

              <TestimonialCard
                text={item.text}
                color={item.color as "red" | "green"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}