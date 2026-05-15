const partners = [
  { name: "Wintermute", color: "#4488ff" },
  { name: "Jump Crypto", color: "#3bb078" },
  { name: "CMS Holdings", color: "#ff9e00" },
  { name: "Alameda Research", color: "#9d4edd" },
  { name: "Three Arrows", color: "#00f0ff" },
  { name: "Multicoin", color: "#ff5f57" },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Section label */}
      <div className="text-center mb-8 sm:mb-10">
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-text-muted uppercase">
          Trusted Infrastructure Partners
        </span>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 shrink-0"
            >
              {/* Logo placeholder */}
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-mono text-[10px] sm:text-[12px] font-bold text-white/80 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${partner.color}15`,
                  border: `1px solid ${partner.color}30`,
                }}
              >
                {partner.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <span
                className="font-sans text-[15px] sm:text-[17px] md:text-[20px] font-medium transition-all duration-500 group-hover:opacity-100"
                style={{ color: `${partner.color}90` }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Static grid for mobile fallback */}
      <div className="sm:hidden grid grid-cols-2 gap-4 px-5 mt-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg"
            style={{ background: `${partner.color}10` }}
          >
            <div
              className="w-6 h-6 rounded flex items-center justify-center font-mono text-[9px] font-bold text-white/70"
              style={{ background: `${partner.color}20` }}
            >
              {partner.name[0]}
            </div>
            <span className="font-sans text-[12px] font-medium" style={{ color: `${partner.color}90` }}>
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
