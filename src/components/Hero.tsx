import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles, Video, Award, MapPin, Layers, GraduationCap, Camera, Upload } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('/assets/IMG-Mycreation00016.jpg');
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('hero_custom_portrait');
    if (saved) {
      setImageSrc(saved);
    }
  }, []);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
        localStorage.setItem('hero_custom_portrait', reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Top micro-tagline */}
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 pt-4 flex items-center justify-between z-10 text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase border-b border-white/[0.04] pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6CC8FF]" />
          <span>ROFIQUE'S VISUALS // FOLIO 2026</span>
        </div>
      </div>

      {/* Main Hero Centerpiece Stage */}
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12 my-auto py-8 sm:py-12 relative flex flex-col items-center justify-center">
        
        {/* Giant Editorial Typography Behind / Overlapping the Portrait */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span 
            className="font-['Space_Grotesk'] font-extrabold uppercase text-[#F2F2F2] opacity-[0.05] tracking-[-0.04em] whitespace-nowrap text-center leading-none"
            style={{ fontSize: 'clamp(4.5rem, 18vw, 15rem)' }}
          >
            ROFIQUE
          </span>
        </div>

        {/* Floating Information Blocks + Central Portrait Container */}
        <div className="relative z-10 w-full max-w-4xl flex items-center justify-center">
          
          {/* Left Floating Info Badges (Desktop & Tablet) */}
          <div className="hidden lg:flex flex-col gap-8 absolute left-0 xl:-left-6 top-1/2 -translate-y-1/2 z-20">
            {/* Block 1: Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-2xl bg-[#12161C]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#6CC8FF]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] w-56 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C929B] uppercase group-hover:text-[#6CC8FF] transition-colors">
                  EXPERTISE
                </span>
                <Video className="w-3.5 h-3.5 text-[#6CC8FF]" />
              </div>
              <p className="text-xs font-['Space_Grotesk'] font-medium text-[#F2F2F2] leading-relaxed">
                Motion Design &amp; Video Editing
              </p>
            </motion.div>

            {/* Block 2: Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-4 rounded-2xl bg-[#12161C]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#6CC8FF]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] w-56 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C929B] uppercase group-hover:text-[#6CC8FF] transition-colors">
                  EXPERIENCE
                </span>
                <Award className="w-3.5 h-3.5 text-[#6CC8FF]" />
              </div>
              <p className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2]">
                6+ Years in Industry
              </p>
              <span className="text-[10px] text-[#8C929B]">Commercial &amp; Narrative</span>
            </motion.div>
          </div>

          {/* Center: Vertical Rounded Portrait Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Click or drag to update portrait photo (e.g. IMG-Mycreation00016.jpg)"
          >
            {/* Hidden native file input for direct photo upload */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileInputChange}
            />

            {/* Outer Cyan Edge Light Aura */}
            <div className="absolute -inset-1 rounded-[38px] bg-gradient-to-b from-[#6CC8FF]/30 via-transparent to-[#6CC8FF]/15 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Portrait Frame (Rounded capsule inspired by Enigma) */}
            <div className="relative w-64 sm:w-72 md:w-80 h-[360px] sm:h-[410px] md:h-[460px] rounded-[34px] bg-[#12161C] border border-white/[0.12] group-hover:border-[#6CC8FF]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 flex flex-col justify-between p-4">
              
              {/* Camera Viewfinder Reticles on top corners */}
              <div className="w-full flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D0F12]/80 backdrop-blur-md border border-white/[0.08]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-[#F2F2F2]">REC 24FPS</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#8C929B] bg-[#0D0F12]/80 px-2.5 py-1 rounded-full border border-white/[0.08] group-hover:text-[#6CC8FF] transition-colors">
                  <Camera className="w-2.5 h-2.5" />
                  <span>CUSTOM PHOTO</span>
                </div>
              </div>

              {/* Portrait Image or Cinematic Fallback Graphic */}
              <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <img
                  id="hero-portrait-image"
                  src={imageSrc}
                  alt="Rofique Chowdhury - Senior Visualizer & Motion Designer"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-top sm:object-center transition-all duration-700 group-hover:scale-105 brightness-[1.03] contrast-[1.04] ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    if (imageSrc === '/assets/IMG-Mycreation00016.jpg') {
                      setImageSrc('/assets/profile.jpg');
                    } else if (imageSrc !== '/assets/profile-hero.svg') {
                      setImageSrc('/assets/profile-hero.svg');
                    }
                  }}
                />
                
                {/* Subtle dark vignette overlay gradient - refined for maximum clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Upload Hover Indicator */}
              <div className={`absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 bg-black/40' : 'opacity-0'}`}>
                <div className="px-3 py-1.5 rounded-full bg-[#0D0F12]/90 border border-[#6CC8FF]/40 text-[#6CC8FF] text-[10px] font-mono tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <Upload className="w-3 h-3" />
                  <span>CLICK TO CHANGE PHOTO</span>
                </div>
              </div>

              {/* Bottom Capsule Overlay Label */}
              <div className="relative z-20 w-full mt-auto text-center py-2 px-3 rounded-2xl bg-[#0D0F12]/85 backdrop-blur-md border border-white/[0.08]">
                <p className="text-xs font-['Space_Grotesk'] font-bold text-[#F2F2F2] tracking-[0.15em] uppercase">
                  Rofique Chowdhury
                </p>
                <p className="text-[10px] font-mono text-[#6CC8FF] tracking-wider uppercase mt-0.5">
                  Senior Motion Visualizer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Info Badges (Desktop & Tablet) */}
          <div className="hidden lg:flex flex-col gap-8 absolute right-0 xl:-right-6 top-1/2 -translate-y-1/2 z-20">
            {/* Block 3: Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-2xl bg-[#12161C]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#6CC8FF]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] w-56 group text-right"
            >
              <div className="flex items-center justify-between mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6CC8FF]" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C929B] uppercase group-hover:text-[#6CC8FF] transition-colors">
                  BASED IN
                </span>
              </div>
              <p className="text-xs font-['Space_Grotesk'] font-medium text-[#F2F2F2]">
                Dhaka, Bangladesh
              </p>
              <span className="text-[10px] text-[#8C929B] font-mono">GMT+6 Standard Time</span>
            </motion.div>

            {/* Block 4: Projects */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-4 rounded-2xl bg-[#12161C]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#6CC8FF]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] w-56 group text-right"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Layers className="w-3.5 h-3.5 text-[#6CC8FF]" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C929B] uppercase group-hover:text-[#6CC8FF] transition-colors">
                  PROJECTS
                </span>
              </div>
              <p className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2]">
                150+ Delivered
              </p>
              <span className="text-[10px] text-[#8C929B]">Commercials, Reels, Films</span>
            </motion.div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Info Bar (When floating cards are hidden) */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mt-8">
          <div className="p-3 rounded-xl bg-[#12161C] border border-white/[0.06] text-center">
            <span className="text-[9px] font-mono text-[#8C929B] uppercase block">EXPERTISE</span>
            <span className="text-xs font-['Space_Grotesk'] font-medium text-[#F2F2F2] mt-0.5 block">Motion &amp; Video</span>
          </div>
          <div className="p-3 rounded-xl bg-[#12161C] border border-white/[0.06] text-center">
            <span className="text-[9px] font-mono text-[#8C929B] uppercase block">EXPERIENCE</span>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-0.5 block">6+ Years</span>
          </div>
          <div className="p-3 rounded-xl bg-[#12161C] border border-white/[0.06] text-center">
            <span className="text-[9px] font-mono text-[#8C929B] uppercase block">DELIVERED</span>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-0.5 block">150+ Works</span>
          </div>
          <div className="p-3 rounded-xl bg-[#12161C] border border-white/[0.06] text-center">
            <span className="text-[9px] font-mono text-[#8C929B] uppercase block">LOCATION</span>
            <span className="text-xs font-['Space_Grotesk'] font-medium text-[#F2F2F2] mt-0.5 block">Dhaka, BD</span>
          </div>
        </div>

        {/* Education badge at center bottom */}
        <div className="mt-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12161C]/80 border border-white/[0.08] text-[11px] font-mono text-[#8C929B]">
            <GraduationCap className="w-3.5 h-3.5 text-[#6CC8FF]" />
            <span>EDUCATION // {PERSONAL_INFO.education}</span>
          </div>
        </div>

        {/* Editorial Introduction Text */}
        <div className="mt-8 sm:mt-10 max-w-2xl text-center z-10 px-4">
          <p 
            className="text-base sm:text-lg md:text-xl font-['Inter'] font-light text-[#F2F2F2] leading-relaxed tracking-wide"
          >
            “Crafting cinematic visuals, motion experiences and digital stories that turn ideas into impact.”
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10">
          <a
            id="hero-cta-services"
            href="#services"
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F2F2F2] hover:bg-white text-[#0D0F12] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(242,242,242,0.15)] transition-all duration-200"
          >
            <span>EXPLORE SERVICES</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            id="hero-cta-contact"
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171B21] hover:bg-[#1E242C] text-[#F2F2F2] hover:text-[#6CC8FF] border border-white/[0.12] hover:border-[#6CC8FF]/50 font-['Space_Grotesk'] font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>LET’S WORK TOGETHER</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center gap-2 z-10 pt-4">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#6CC8FF] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
