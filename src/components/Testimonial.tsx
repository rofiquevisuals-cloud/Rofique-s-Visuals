import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonial every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 border-t border-white/[0.06] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-4xl mx-auto relative flex flex-col items-center text-center">
          
          {/* Section Indicator */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
              CLIENT TESTIMONIAL
            </span>
          </div>

          {/* Large Stylized Quotation Mark */}
          <div className="mb-4 text-[#6CC8FF] opacity-30 select-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.2]" />
          </div>

          {/* Animated Testimonial Text */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-['Space_Grotesk'] font-medium text-[#F2F2F2] leading-relaxed tracking-tight">
                  “{current.quote}”
                </p>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-['Space_Grotesk'] font-bold text-base text-[#F2F2F2]">
                      {current.author}
                    </span>
                    {current.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#6CC8FF] bg-[#171B21] px-2 py-0.5 rounded-full border border-white/[0.08]">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Partner
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#8C929B] uppercase tracking-wider">
                    {current.role} — <span className="text-[#F2F2F2]">{current.organization}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Pagination Dots and Arrows */}
          <div className="flex items-center gap-6 mt-10">
            <button
              id="prev-testimonial-btn"
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-[#12161C] border border-white/[0.08] hover:border-[#6CC8FF] text-[#8C929B] hover:text-[#F2F2F2] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#6CC8FF]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              id="next-testimonial-btn"
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-[#12161C] border border-white/[0.08] hover:border-[#6CC8FF] text-[#8C929B] hover:text-[#F2F2F2] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
