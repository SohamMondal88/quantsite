"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl mb-6 sm:mb-8 transition-all duration-500 hover:shadow-[0_0_60px_rgba(76,255,255,0.08)]">
          <Image
            src="/images/footer.png"
            alt="Footer"
            width={1200}
            height={300}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] sm:text-sm text-white/60 transition-colors duration-300 hover:text-white/80 text-center sm:text-left">
            © 2024 Quantsuite. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 text-[12px] sm:text-sm text-white/60">
            <a
              href="#"
              className="relative transition-colors duration-300 hover:text-white group"
            >
              Privacy
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-accent-cyan rounded-full transition-all duration-500 group-hover:w-full" />
            </a>
            <a
              href="#"
              className="relative transition-colors duration-300 hover:text-white group"
            >
              Terms
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-accent-cyan rounded-full transition-all duration-500 group-hover:w-full" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(76,255,255,0.15)] transition-all duration-500"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
