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
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-serif text-[36px] sm:text-[56px] md:text-[72px] lg:text-[90px] xl:text-[114px] font-normal text-white mb-8 sm:mb-10 lg:mb-12 leading-tight animate-fadeInUp">
          Trusted by the{" "}
          <span className="gradient-hero animate-text-glow">
            best
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6 md:gap-x-12 md:gap-y-8 lg:gap-10 xl:gap-16">
          {partners.map((partner, i) => (
            <span
              key={partner.name}
              className={`group relative font-sans text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium transition-all duration-500 cursor-default animate-fadeInUp delay-${(i + 1) * 100} text-center lg:text-left`}
              style={{ color: partner.color }}
            >
              <span className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:scale-110 inline-block">
                {partner.name}
              </span>
              <span
                className="absolute -bottom-1 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 h-[2px] w-0 bg-current rounded-full transition-all duration-500 group-hover:w-full"
                style={{ opacity: 0.6 }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
