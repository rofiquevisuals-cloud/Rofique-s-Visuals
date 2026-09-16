import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0C0F] py-12 relative z-10">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.04]">
          
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-['Space_Grotesk'] text-base font-bold tracking-[0.2em] text-[#F2F2F2] uppercase">
              ROFIQUE’S VISUALS
            </span>
            <span className="text-xs font-mono text-[#8C929B] mt-1 tracking-wider">
              Visual Stories. Motion. Impact.
            </span>
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-['Space_Grotesk'] uppercase tracking-[0.22em] text-[#8C929B] hover:text-[#6CC8FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Back to Top */}
          <div>
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161C] hover:bg-[#171B21] border border-white/[0.08] hover:border-[#6CC8FF]/50 text-xs font-['Space_Grotesk'] tracking-wider uppercase text-[#8C929B] hover:text-[#F2F2F2] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#6CC8FF]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#555D68] gap-4 text-center sm:text-left">
          <p>© 2026 Rofique’s Visuals. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>DESIGNED WITH EDITORIAL PRECISION</span>
            <span className="text-white/20">•</span>
            <span>MOTION EXCELLENCE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
