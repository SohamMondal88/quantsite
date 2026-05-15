"use client";

export default function TrustedBy() {
  return (
    <section className="w-full px-8 md:px-16 py-20">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Exact from Figma:
            ID: 21:655
            Font: Instrument Serif Regular
            Size: 114px
            Gradient on "best"
        */}
        <h2 className="font-serif text-[48px] md:text-[80px] lg:text-[114px] font-normal text-white mb-12 leading-tight animate-slide-up">
          Trusted by the <span className="gradient-hero">best</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { name: "Wintermute", color: "#647bff" },
            { name: "Jump Crypto", color: "#3bb078" },
            { name: "CMS Holdings", color: "#ffab4c" },
            { name: "Alameda", color: "#7650fd" },
            { name: "Three Arrows", color: "#4cffff" },
            { name: "Multicoin", color: "#65ff99" },
          ].map((partner, index) => (
            <span
              key={partner.name}
              className={`font-sans text-[16px] md:text-[24px] font-medium transition-all duration-300 hover:scale-110 cursor-pointer animate-slide-up stagger-${(index % 5) + 1}`}
              style={{
                color: partner.color,
                textShadow: "0 0 20px rgba(76, 255, 255, 0)",
                transition: "all 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = `0 0 30px ${partner.color}`;
                e.currentTarget.style.filter = "brightness(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 20px rgba(76, 255, 255, 0)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
