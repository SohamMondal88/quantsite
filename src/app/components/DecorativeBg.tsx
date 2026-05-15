export default function DecorativeBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh gradient layers */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Top right cyan glow */}
      <div
        className="absolute rounded-full blur-[150px] animate-breathe"
        style={{
          right: "-10%",
          top: "0%",
          width: "50%",
          height: "25%",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Left green glow */}
      <div
        className="absolute rounded-full blur-[200px] animate-breathe delay-300"
        style={{
          left: "-20%",
          top: "10%",
          width: "60%",
          height: "30%",
          background: "radial-gradient(circle, rgba(59, 176, 120, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Center blue glow */}
      <div
        className="absolute rounded-full blur-[180px] animate-breathe delay-500"
        style={{
          left: "30%",
          top: "20%",
          width: "50%",
          height: "25%",
          background: "radial-gradient(circle, rgba(68, 136, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Bottom right purple glow */}
      <div
        className="absolute rounded-full blur-[180px] animate-breathe delay-700"
        style={{
          right: "-15%",
          top: "50%",
          width: "60%",
          height: "30%",
          background: "radial-gradient(circle, rgba(157, 78, 221, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Bottom left yellow glow */}
      <div
        className="absolute rounded-full blur-[150px] animate-breathe delay-200"
        style={{
          left: "-10%",
          top: "70%",
          width: "50%",
          height: "30%",
          background: "radial-gradient(circle, rgba(255, 158, 0, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Floating accent orbs */}
      <div
        className="absolute w-2 h-2 rounded-full bg-accent-cyan animate-float hidden sm:block"
        style={{
          left: "15%",
          top: "25%",
          boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)",
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-accent-green animate-float delay-300 hidden sm:block"
        style={{
          right: "20%",
          top: "40%",
          boxShadow: "0 0 15px rgba(59, 176, 120, 0.5)",
        }}
      />
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-accent-purple animate-float delay-500 hidden md:block"
        style={{
          left: "60%",
          top: "15%",
          boxShadow: "0 0 20px rgba(157, 78, 221, 0.5)",
        }}
      />
    </div>
  );
}
