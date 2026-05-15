import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[1400px] overflow-hidden">
      {/* Hero-specific decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rectangle 125 - top right gradient */}
        <div
          className="absolute"
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
          className="absolute"
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
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8 pt-8">
        {/* Hero Text with Green Dot */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1">
            <h1
              className="font-serif text-[48px] md:text-[80px] lg:text-[124px] font-normal leading-[1.12] tracking-normal"
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
              on Quantsuite
            </h1>
          </div>

          {/* Green Dot - Ellipse 13 */}
          <div
            className="hidden lg:block mt-8 shrink-0"
            style={{ width: 51, height: 51 }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #3bb078 0%, #8fbfb8 100%)",
                border: "15px solid rgba(207, 217, 212, 0.2)",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Subtitle in glassmorphism frame */}
        <div
          className="relative mb-8 inline-block"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "16px",
            padding: "44px 45px",
            maxWidth: "798px",
          }}
        >
          <p className="font-sans text-[16px] md:text-[25px] text-white/90 max-w-xl leading-[1.32]">
            QuantSuite is your AI powered edge in the markets built for quants,
            traders, and visionaries
          </p>
        </div>

        {/* Launch Now Button */}
        <a
          href="#launch"
          className="inline-block px-8 py-4 rounded-2xl launch-btn text-white font-bold text-[18px] md:text-[30px] hover:opacity-90 transition-opacity"
          style={{
            boxShadow: "0 0 83px 29px rgba(255,187,0,0.23), 0 4px 68px 23px rgba(255,187,0,0.07)",
          }}
        >
          Launch Now →
        </a>

        {/* Dashboard Image - with device frame */}
        <div className="mt-8 relative">
          <div
            className="relative rounded-3xl overflow-hidden"
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
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
