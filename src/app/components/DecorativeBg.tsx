export default function DecorativeBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-level decorative ellipses */}

      {/* Ellipse 5 - top right large glow
          Figma: blur 558px, fill opacity 0, color rgba(23,171,231,1)
          Creates subtle edge glow only */}
      <div
        className="absolute rounded-full blur-558 opacity-20"
        style={{
          right: "-5%",
          top: "2%",
          width: "38%",
          height: "12%",
          background: "rgba(23, 171, 231, 0.15)",
        }}
      />

      {/* Ellipse 4 - left side yellow glow
          Figma: blur 900px, opacity 0.21, gradient yellow
          This is the most prominent glow */}
      <div
        className="absolute rounded-full blur-900"
        style={{
          left: "-25%",
          top: "5%",
          width: "50%",
          height: "20%",
          background: "linear-gradient(180deg, rgba(242,208,72,0.25) 0%, rgba(255,189,76,0.15) 100%)",
        }}
      />

      {/* Ellipse 1 - left mid green glow
          Figma: blur 236px, #65ff91, opacity 0.09 */}
      <div
        className="absolute rounded-full blur-236"
        style={{
          left: "-30%",
          top: "20%",
          width: "60%",
          height: "25%",
          background: "rgba(101, 255, 145, 0.15)",
        }}
      />

      {/* Ellipse 27 - left lower cyan glow
          Figma: blur 236px, #65ff99, opacity 0.09 */}
      <div
        className="absolute rounded-full blur-236"
        style={{
          left: "-25%",
          top: "50%",
          width: "60%",
          height: "25%",
          background: "rgba(101, 255, 153, 0.15)",
        }}
      />

      {/* Ellipse 28 - right lower pink glow
          Figma: blur 236px, #ffad65, opacity 0.09 */}
      <div
        className="absolute rounded-full blur-236"
        style={{
          right: "-20%",
          top: "55%",
          width: "60%",
          height: "25%",
          background: "rgba(255, 140, 142, 0.15)",
        }}
      />

      {/* Group 397 - right mid pink glow */}
      <div
        className="absolute rounded-full blur-236"
        style={{
          right: "-15%",
          top: "30%",
          width: "60%",
          height: "25%",
          background: "rgba(255, 140, 142, 0.15)",
        }}
      />

      {/* BG Frame ellipses */}

      {/* BG Ellipse 4 - hero area yellow glow */}
      <div
        className="absolute rounded-full blur-150"
        style={{
          left: "5%",
          top: "25%",
          width: "65%",
          height: "20%",
          background: "rgba(255, 219, 101, 0.2)",
        }}
      />

      {/* BG Ellipse 3 - center blue glow */}
      <div
        className="absolute rounded-full blur-100"
        style={{
          left: "40%",
          top: "10%",
          width: "60%",
          height: "20%",
          background: "rgba(81, 108, 255, 0.15)",
        }}
      />

      {/* BG Ellipse 2 - center green-yellow glow */}
      <div
        className="absolute rounded-full blur-100"
        style={{
          left: "25%",
          top: "18%",
          width: "40%",
          height: "15%",
          background: "rgba(255, 255, 139, 0.15)",
        }}
      />

      {/* Additional subtle glows for atmosphere */}
      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          left: "60%",
          top: "0%",
          width: "30%",
          height: "15%",
          background: "rgba(250, 224, 95, 0.25)",
        }}
      />

      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          left: "0%",
          top: "35%",
          width: "40%",
          height: "20%",
          background: "rgba(59, 176, 120, 0.1)",
        }}
      />
    </div>
  );
}
