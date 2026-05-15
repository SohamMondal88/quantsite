export default function TrustedBy() {
  const partners = [
    { name: "Wintermute", color: "#647bff" },
    { name: "Jump Crypto", color: "#3bb078" },
    { name: "CMS Holdings", color: "#ffab4c" },
    { name: "Alameda", color: "#7650fd" },
    { name: "Three Arrows", color: "#4cffff" },
    { name: "Multicoin", color: "#65ff99" },
  ];

  return (
    <section className="w-full px-8 md:px-16 py-20">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-serif text-[48px] md:text-[80px] lg:text-[114px] font-normal text-white mb-12 leading-tight animate-fadeInUp">
          Trusted by the{" "}
          <span className="gradient-hero animate-text-glow">
            best
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, i) => (
            <span
              key={partner.name}
              className={`group relative font-sans text-[16px] md:text-[24px] font-medium transition-all duration-500 cursor-default animate-fadeInUp delay-${(i + 1) * 100}`}
              style={{ color: partner.color }}
            >
              <span className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:scale-110 inline-block">
                {partner.name}
              </span>
              {/* Animated underline on hover */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-current rounded-full transition-all duration-500 group-hover:w-full"
                style={{ opacity: 0.6 }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
