export default function Navbar() {
  return (
    <nav className="relative z-50 w-full py-5 px-8 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Logo icon + text */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #3bb078 0%, #ffdb65 100%)",
            }}
          >
            Q
          </div>
          <span className="font-sans font-semibold text-[32px] text-white tracking-tight">
            Quantsuite
          </span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#learn"
            className="font-sans font-semibold text-[19px] text-white hover:text-white/80 transition-colors"
          >
            Learn
          </a>
          <a
            href="#twitter"
            className="font-sans font-semibold text-[19px] text-white hover:text-white/80 transition-colors"
          >
            Twitter
          </a>
          <a
            href="#docs"
            className="font-sans font-semibold text-[19px] text-white hover:text-white/80 transition-colors"
          >
            Docs
          </a>
        </div>

        {/* Join Discord Button */}
        <a
          href="#discord"
          className="px-6 py-3 rounded-xl font-sans font-bold text-[18px] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
          style={{
            background: "rgba(59, 176, 120, 0.17)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Join Discord
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
