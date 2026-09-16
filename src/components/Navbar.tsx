import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0F12]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 h-20 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          id="nav-brand-logo"
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#171B21] border border-white/[0.12] flex items-center justify-center group-hover:border-[#6CC8FF]/50 transition-colors">
            <span className="font-['Space_Grotesk'] text-sm font-bold text-[#F2F2F2] tracking-wider group-hover:text-[#6CC8FF] transition-colors">
              RV
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-sm md:text-base font-bold tracking-[0.18em] text-[#F2F2F2] uppercase group-hover:text-white transition-colors">
              ROFIQUE’S VISUALS
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#8C929B] uppercase font-mono">
              Senior Motion &amp; Visuals
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase font-['Space_Grotesk'] font-medium tracking-[0.24em] text-[#8C929B] hover:text-[#F2F2F2] transition-colors py-2 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#6CC8FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Availability Badge & Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12161C] border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6CC8FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6CC8FF]" />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#8C929B] uppercase">
              Available for Work
            </span>
          </div>

          <a
            id="nav-cta-talk"
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#171B21] hover:bg-[#1E242C] border border-white/[0.1] hover:border-[#6CC8FF]/50 text-xs uppercase font-['Space_Grotesk'] font-medium tracking-[0.18em] text-[#F2F2F2] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6CC8FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="nav-mobile-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2.5 rounded-lg bg-[#171B21] border border-white/[0.08] text-[#F2F2F2] hover:text-[#6CC8FF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#6CC8FF]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0D0F12]/98 backdrop-blur-2xl border-b border-white/[0.08] p-8 flex flex-col justify-between overflow-y-auto z-40"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <div className="flex items-center gap-2 pb-4 border-b border-white/[0.06]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6CC8FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6CC8FF]" />
                </span>
                <span className="text-xs font-mono tracking-widest text-[#8C929B] uppercase">
                  Available for Select Commissions
                </span>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="text-2xl font-['Space_Grotesk'] font-semibold tracking-wider text-[#F2F2F2] hover:text-[#6CC8FF] py-2 flex items-center justify-between border-b border-white/[0.04]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C929B]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8C929B]">Direct Inquiries</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-['Space_Grotesk'] text-[#6CC8FF] hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-3.5 rounded-xl bg-[#6CC8FF] hover:bg-[#82d2ff] text-[#0D0F12] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
