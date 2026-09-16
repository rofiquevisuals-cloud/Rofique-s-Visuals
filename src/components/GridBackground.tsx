import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dark Ambient Lighting / Subtle Cyan undertone at top */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108, 200, 255, 0.35) 0%, rgba(18, 22, 28, 0.15) 50%, transparent 80%)'
        }}
      />
      
      {/* Subtle bottom-right counter aura */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108, 200, 255, 0.2) 0%, transparent 70%)'
        }}
      />

      {/* Center Max-Width 12-Column Guide Lines (Barely visible 1px lines as requested) */}
      <div className="w-full max-w-[1320px] mx-auto h-full px-6 sm:px-8 md:px-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 border-x border-white/[0.04]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className={`h-full border-r border-white/[0.03] ${i >= 8 ? 'hidden lg:block' : i >= 4 ? 'hidden md:block' : 'block'}`} 
          />
        ))}
      </div>

      {/* Extremely faint horizontal grid scanlines */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />
    </div>
  );
};
