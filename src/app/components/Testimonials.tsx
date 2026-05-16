const topTestimonials = [
  {
    text: "The walk Forward engine saved us from a disastrous overfitting loop in our volatility strategies. Pure institutional grade.",
    author: "Sarah chen",
    offset: "ml-[20%]",
    nameOffset: "left-[15%]",
  },
  {
    text: "Realtime regime detection kept us ahead of market shifts tight, precise, and reliable.",
    author: "David Kross",
    offset: "ml-[25%]",
    nameOffset: "left-[20%]",
  },
];

const bottomTestimonials = [
  {
    text: "Quantsuite's SwarmEngine detected the oil supply squeeze 48 hours before the headlines hit. It's an indispensable edge.",
    author: "Marcus Vance",
    offset: "mr-[15%]",
    nameOffset: "left-[25%]",
  },
  {
    text: "A masterclass in UI and data density. Having Black Scholes and Heston models side by side with AI signals is a game changer.",
    author: "suvendu adhikary",
    offset: "mr-[10%]",
    nameOffset: "left-[30%]",
  },
];

function NameConnector({ name, position }: { name: string; position: "above" | "below" }) {
  return (
    <div className={`flex flex-col items-center ${position === "above" ? "" : "mt-3"}`}>
      {position === "above" && (
        <>
          <span className="font-sans text-[13px] sm:text-[14px] text-white/50 mb-2">{name}</span>
          <div className="w-px h-8 sm:h-10 bg-white/25 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan" />
          </div>
        </>
      )}
      {position === "below" && (
        <>
          <div className="w-px h-8 sm:h-10 bg-white/25 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan" />
          </div>
          <span className="font-sans text-[13px] sm:text-[14px] text-white/50 mt-2">{name}</span>
        </>
      )}
    </div>
  );
}

function RedCard({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`p-4 sm:p-5 rounded-[14px] sm:rounded-[16px] ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(210, 75, 75, 0.9) 0%, rgba(170, 55, 55, 0.95) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="font-sans text-[12px] sm:text-[13px] text-white/95 leading-[1.6]">{text}</p>
    </div>
  );
}

function GreenCard({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`p-4 sm:p-5 rounded-[14px] sm:rounded-[16px] ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(55, 165, 110, 0.9) 0%, rgba(35, 130, 85, 0.95) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="font-sans text-[12px] sm:text-[13px] text-white/95 leading-[1.6]">{text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto">
        {/* Section title */}
        <h2 className="font-serif text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-white text-center mb-16 sm:mb-20 lg:mb-24 animate-fadeInUp">
          Trusted by the{" "}
          <span className="italic">best</span>
        </h2>

        {/* ============ DESKTOP (lg+) ============ */}
        <div className="hidden lg:block">
          {/* TOP ROW: Names + connectors + Red cards */}
          <div className="flex justify-between px-4">
            <div className="w-[48%]">
              <NameConnector name="Sarah chen" position="above" />
              <RedCard text={topTestimonials[0].text} className="mt-3 ml-[15%]" />
            </div>
            <div className="w-[48%]">
              <NameConnector name="David Kross" position="above" />
              <RedCard text={topTestimonials[1].text} className="mt-3 ml-[20%]" />
            </div>
          </div>

          {/* Dashed divider */}
          <div className="my-8 border-t border-dashed border-white/20" />

          {/* BOTTOM ROW: Green cards + connectors + Names */}
          <div className="flex justify-between px-4">
            <div className="w-[48%]">
              <GreenCard text={bottomTestimonials[0].text} className="mb-3 mr-[10%]" />
              <NameConnector name="Marcus Vance" position="below" />
            </div>
            <div className="w-[48%]">
              <GreenCard text={bottomTestimonials[1].text} className="mb-3 mr-[5%]" />
              <NameConnector name="suvendu adhikary" position="below" />
            </div>
          </div>
        </div>

        {/* ============ TABLET (md) ============ */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-8 gap-y-12 relative">
          {/* Horizontal dashed line */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-t border-dashed border-white/20 pointer-events-none" />

          <div className="relative z-10">
            <NameConnector name="Sarah chen" position="above" />
            <RedCard text={topTestimonials[0].text} className="mt-3" />
          </div>

          <div className="relative z-10">
            <NameConnector name="David Kross" position="above" />
            <RedCard text={topTestimonials[1].text} className="mt-3" />
          </div>

          <div className="relative z-10">
            <GreenCard text={bottomTestimonials[0].text} className="mb-3" />
            <NameConnector name="Marcus Vance" position="below" />
          </div>

          <div className="relative z-10">
            <GreenCard text={bottomTestimonials[1].text} className="mb-3" />
            <NameConnector name="suvendu adhikary" position="below" />
          </div>
        </div>

        {/* ============ MOBILE (<md) ============ */}
        <div className="md:hidden flex flex-col gap-10 relative">
          {/* Vertical dashed line */}
          <div className="absolute top-0 bottom-0 left-[11px] border-l border-dashed border-white/20" />

          {[
            ...topTestimonials.map((t) => ({ ...t, type: "red" as const })),
            ...bottomTestimonials.map((t) => ({ ...t, type: "green" as const })),
          ].map((t) => (
            <div key={t.author} className="relative pl-8">
              <div className="absolute left-[11px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-cyan z-10" />

              <span className="font-sans text-[12px] text-white/50 block mb-2">{t.author}</span>

              {t.type === "red" ? (
                <RedCard text={t.text} />
              ) : (
                <GreenCard text={t.text} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
