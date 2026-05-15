"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-8 md:px-16 py-16 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="animate-slide-up">
          <Image
            src="/images/footer.png"
            alt="Footer"
            width={1200}
            height={300}
            className="w-full h-auto mb-8 rounded-2xl transition-all duration-300 hover-lift"
            style={{
              boxShadow: "0 15px 60px rgba(76, 255, 255, 0.1)",
            }}
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-white/90">
            © 2024 Quantsuite. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a
              href="#"
              className="relative group transition-colors duration-300"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="relative group transition-colors duration-300"
            >
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
            <button
              onClick={scrollToTop}
              className="relative group transition-all duration-300 flex items-center gap-1 hover:text-white"
              title="Scroll to top"
            >
              Back to top
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
