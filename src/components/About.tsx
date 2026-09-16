import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, X, Sparkles, CheckCircle2, Film, HeartHandshake, Lightbulb, Upload } from 'lucide-react';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [aboutImgSrc, setAboutImgSrc] = useState('/assets/IMG-Mycreation00002.png');
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('about_custom_portrait');
    if (saved) {
      setAboutImgSrc(saved);
    }
  }, []);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setAboutImgSrc(reader.result);
        localStorage.setItem('about_custom_portrait', reader.result);
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

  return (
    <section id="about" className="py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Portrait Inside Tall Rounded / Capsule Container */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm sm:max-w-md h-[460px] sm:h-[520px] cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              title="Click or drag to update portrait photo (e.g. IMG-Mycreation00002.png)"
            >
              {/* Hidden native file input for direct photo upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileInputChange}
              />

              {/* Outer Cyan Edge Light Aura Glow */}
              <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-b from-[#6CC8FF]/30 via-transparent to-[#6CC8FF]/15 blur-lg opacity-50 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Capsule Inner Shell */}
              <div className="relative w-full h-full rounded-[40px] bg-[#12161C] border border-white/[0.1] group-hover:border-[#6CC8FF]/50 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                {/* Portrait Image */}
                <img
                  id="about-portrait-image"
                  src={aboutImgSrc}
                  alt="Rofique Chowdhury in Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.02] contrast-[1.03]"
                  onError={() => {
                    if (aboutImgSrc === '/assets/IMG-Mycreation00002.png') {
                      setAboutImgSrc('/assets/profile-about.jpg');
                    } else if (aboutImgSrc === '/assets/profile-about.jpg') {
                      setAboutImgSrc('/IMG-Mycreation00002.png');
                    } else if (aboutImgSrc !== '/assets/profile-about.svg') {
                      setAboutImgSrc('/assets/profile-about.svg');
                    }
                  }}
                />

                {/* Dark Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/60 via-transparent to-black/20 pointer-events-none" />

                {/* Upload Hover Indicator */}
                <div className={`absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 bg-black/40' : 'opacity-0'}`}>
                  <div className="px-3.5 py-2 rounded-full bg-[#0D0F12]/90 border border-[#6CC8FF]/50 text-[#6CC8FF] text-[11px] font-mono tracking-wider flex items-center gap-2 shadow-xl backdrop-blur-md">
                    <Upload className="w-3.5 h-3.5" />
                    <span>CLICK TO CHANGE PHOTO</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                ABOUT ROFIQUE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] tracking-tight leading-[1.15] mb-6">
              “I turn ideas into visuals people remember.”
            </h2>

            <p className="text-base sm:text-lg font-['Inter'] font-light text-[#8C929B] leading-relaxed mb-8">
              “I’m Rofique Chowdhury, a Senior Visualizer &amp; Motion Designer focused on cinematic video editing, motion graphics, branding and digital content. I combine storytelling, design and technology to create visuals that are not only visually striking but built to communicate.”
            </p>

            {/* Three Key Pillar Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/[0.08] mb-8">
              <div>
                <span className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] block">
                  6+
                </span>
                <span className="text-xs font-mono text-[#8C929B] tracking-wider uppercase mt-1 block">
                  Years Experience
                </span>
              </div>
              <div className="border-x border-white/[0.08] px-4">
                <span className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] block">
                  150+
                </span>
                <span className="text-xs font-mono text-[#8C929B] tracking-wider uppercase mt-1 block">
                  Projects Completed
                </span>
              </div>
              <div className="pl-2 sm:pl-4">
                <span className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] block">
                  400+
                </span>
                <span className="text-xs font-mono text-[#8C929B] tracking-wider uppercase mt-1 block">
                  Students Mentored
                </span>
              </div>
            </div>

            {/* Services bullets list preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['Cinematic Editorial & Color', 'Kinetic Motion Design Systems', 'High-Impact Social Video', 'Creative Direction & Storytelling'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-['Space_Grotesk'] text-[#F2F2F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#6CC8FF] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div>
              <button
                id="about-read-more-btn"
                type="button"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 text-xs uppercase font-['Space_Grotesk'] font-bold tracking-[0.24em] text-[#F2F2F2] hover:text-[#6CC8FF] transition-colors py-2"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 text-[#6CC8FF] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Expanded Read More Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-[#0D0F12]/90 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#12161C] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#6CC8FF] uppercase block">
                    BIOGRAPHY &amp; METHODOLOGY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-1">
                    The Creative Path of Rofique Chowdhury
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-[#171B21] border border-white/[0.08] hover:border-[#6CC8FF] text-[#8C929B] hover:text-[#F2F2F2] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm sm:text-base font-['Inter'] font-light text-[#8C929B] leading-relaxed">
                <p>
                  With over six years of rigorous experience leading visual post-production pipelines, I bridge the gap between abstract brand messaging and high-retention video experiences. My background in Computer Science &amp; Engineering gives me a unique technical edge — from algorithmic compression and render pipeline automation to 3D math and particle mechanics.
                </p>

                <div className="p-5 rounded-2xl bg-[#171B21] border border-white/[0.08] space-y-3">
                  <h4 className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2] uppercase tracking-wider flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#6CC8FF]" />
                    My Three-Step Creative Engine
                  </h4>
                  <ul className="space-y-2 text-xs font-mono text-[#F2F2F2]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6CC8FF]">01. Story Architecture:</span> Deconstruct the client’s core value into a rhythmic 3-beat emotional arc.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6CC8FF]">02. Kinetic Precision:</span> Frame-by-frame pacing, custom typography choreography, and synchronized sound design.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6CC8FF]">03. Finishing &amp; Delivery:</span> Color-managed grade, multi-platform aspect ratio mastery, and compression optimization.
                    </li>
                  </ul>
                </div>

                <p>
                  Beyond commercial and agency productions for clients like UNDP, FutureNation, and MGI, I am passionate about mentoring the next generation of creative technologists. Having trained over 400 students across industry academies, I continuously refine my teaching of motion grammar, visual rhythm, and storytelling.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#171B21] hover:bg-[#1E242C] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#F2F2F2] border border-white/[0.1] transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
