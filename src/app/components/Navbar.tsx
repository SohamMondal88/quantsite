"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Learn", href: "#learn" },
    { label: "Twitter", href: "#twitter" },
    { label: "Docs", href: "#docs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#050505]/80 backdrop-blur-[24px] border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto py-3.5 sm:py-4 px-5 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 animate-fadeInDown">
            {/* System status dot */}
            <div className="relative">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #3bb078 0%, #00f0ff 100%)",
                }}
              >
                Q
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent-green border-2 border-bg animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-[20px] sm:text-[26px] md:text-[32px] text-white tracking-tight leading-none">
                Quantsuite
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] text-accent-cyan/60 uppercase leading-none mt-0.5 hidden sm:block">
                Autonomous Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative px-3 lg:px-4 py-2 rounded-lg font-sans font-medium text-[13px] lg:text-[14px] text-text-secondary hover:text-white transition-all duration-300 hover:bg-white/5 animate-fadeInDown delay-${(i + 1) * 100}`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-accent-cyan rounded-full transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}

            <a
              href="#discord"
              className="group ml-2 px-4 lg:px-5 py-2.5 rounded-lg font-sans font-semibold text-[13px] lg:text-[14px] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] border border-border-medium hover:border-accent-cyan/30 animate-fadeInDown delay-400"
              style={{
                background: "linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(59,176,120,0.06) 100%)",
              }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-glow" />
                Join Discord
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 translate-x-2" : ""}`} />
              <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-[30px]" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-[36px] sm:text-[44px] text-white/90 hover:text-accent-cyan transition-colors duration-300 py-2 ${
                menuOpen ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#discord"
            onClick={() => setMenuOpen(false)}
            className={`mt-6 px-8 py-3.5 rounded-xl font-sans font-semibold text-[16px] text-white border border-border-medium hover:border-accent-cyan/40 transition-all duration-300 ${
              menuOpen ? "animate-fadeInUp" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(59,176,120,0.08) 100%)",
              animationDelay: "320ms",
            }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              Join Discord
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
