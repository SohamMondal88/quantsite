export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Perspective grid floor */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60vh] perspective-grid opacity-60"
        style={{ 
          transform: 'translateX(-50%) perspective(500px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }}
      />
      
      {/* Subtle vertical scan line */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent opacity-0"
        style={{ animation: 'scan 8s linear infinite' }}
      />
    </div>
  );
}
