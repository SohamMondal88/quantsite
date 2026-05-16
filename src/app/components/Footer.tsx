"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    Product: [
      { label: "SwarmEngine", href: "#" },
      { label: "Factor Zoo", href: "#" },
      { label: "Backtester", href: "#" },
      { label: "Documentation", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
    Resources: [
      { label: "Community", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="w-full px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-10">


      {/* Links grid */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-12 sm:mb-16">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-text-muted uppercase mb-4 sm:mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group font-sans text-[13px] sm:text-[14px] text-text-secondary hover:text-white transition-colors duration-300 inline-flex"
                    >
                      {item.label}
                      <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan text-[11px]">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-[11px]"
              style={{ background: "linear-gradient(135deg, #3bb078 0%, #00f0ff 100%)" }}
            >
              Q
            </div>
            <span className="font-sans text-[13px] sm:text-[14px] text-text-muted">
              © 2024 Quantsuite. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social icons */}
            {["M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"].map((path, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={path} />
                </svg>
              </a>
            ))}

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg border border-border-subtle text-text-muted hover:text-white hover:border-accent-cyan/30 hover:bg-white/5 transition-all duration-300 ml-1"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
