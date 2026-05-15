import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rectangle 125 - top right gradient */}
        <div
          className="absolute animate-float-slow hidden sm:block"
          style={{
            right: "-5%",
            top: "1%",
            width: "34%",
            height: "8%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)",
            borderRadius: "8px",
          }}
        />

        {/* Rectangle 127 - decorative near dashboard */}
        <div
          className="absolute animate-float delay-200 hidden md:block"
          style={{
            right: "15%",
            top: "7%",
            width: "32%",
            height: "7%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)",
            borderRadius: "19px",
            transform: "rotate(-2deg)",
          }}
        />

        {/* Glowing dot accents - hidden on very small screens */}
        <div
          className="absolute rounded-full animate-glow-pulse hidden sm:block"
          style={{
            left: "8%",
            top: "18%",
            width: 8,
            height: 8,
            background: "rgba(76, 255, 255, 0.9)",
            boxShadow: "0 0 20px rgba(76,255,255,0.6), 0 0 60px rgba(76,255,255,0.2)",
          }}
        />
        <div
          className="absolute rounded-full animate-glow-pulse-green delay-300 hidden lg:block"
          style={{
            right: "12%",
            top: "32%",
            width: 6,
            height: 6,
            background: "rgba(59, 176, 120, 0.9)",
            boxShadow: "0 0 20px rgba(59,176,120,0.6), 0 0 60px rgba(59,176,120,0.2)",
          }}
        />
        <div
          className="absolute rounded-full animate-glow-pulse delay-500 hidden md:block"
          style={{
            left: "20%",
            top: "45%",
            width: 10,
            height: 10,
            background: "rgba(255, 219, 101, 0.8)",
            boxShadow: "0 0 20px rgba(255,219,101,0.5), 0 0 60px rgba(255,219,101,0.15)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-8 pt-4 sm:pt-8">
        {/* Hero Text with Green Dot */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 animate-slideInUp">
          <div className="flex-1 min-w-0">
            <h1
              className="font-serif text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[104px] font-normal leading-[1.1] sm:leading-[1.12] tracking-normal animate-text-glow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(76,255,255,0.56) 0%, rgba(129,255,227,1) 31%, rgba(149,255,216,1) 44%, rgba(0,255,163,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trade Beyond
              <br />
              Human Limits
              <br />
              <span className="hidden sm:inline">on Quantsuite</span>
              <span className="sm:hidden">on Quantsuite</span>
            </h1>
          </div>

          {/* Green Dot - Ellipse 13 */}
          <div
            className="hidden lg:block mt-6 xl:mt-8 shrink-0 animate-scaleIn delay-300"
            style={{ width: 51, height: 51 }}
          >
            <div
              className="w-full h-full rounded-full transition-transform duration-500 hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, #3bb078 0%, #8fbfb8 100%)",
                border: "15px solid rgba(207, 217, 212, 0.2)",
                boxSizing: "border-box",
                boxShadow: "0 0 30px rgba(59,176,120,0.3)",
              }}
            />
          </div>
        </div>

        {/* Subtitle in glassmorphism frame */}
        <div
          className="relative mb-6 sm:mb-8 inline-block glass-card animate-fadeInUp delay-200 w-full sm:w-auto"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "16px",
            padding: "24px 20px",
            maxWidth: "100%",
          }}
        >
          <p className="font-sans text-[15px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-white/90 max-w-xl leading-[1.32]">
            QuantSuite is your AI powered edge in the markets built for quants,
            traders, and visionaries
          </p>
        </div>

        {/* Launch Now Button */}
        <a
          href="#launch"
          className="group inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-2xl launch-btn text-white font-bold text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,187,0,0.35)] hover:-translate-y-1 animate-fadeInUp delay-400"
          style={{
            boxShadow: "0 0 83px 29px rgba(255,187,0,0.23), 0 4px 68px 23px rgba(255,187,0,0.07)",
          }}
        >
          <span className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
            Launch Now
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        {/* Dashboard Image - with device frame */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 relative animate-slideInUp delay-500">
          <div
            className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_80px_rgba(76,255,255,0.12)] hover:border-white/20"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/dashboard.png"
              alt="Quantsuite Trading Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
              priority
            />

            {/* Subtle overlay glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
