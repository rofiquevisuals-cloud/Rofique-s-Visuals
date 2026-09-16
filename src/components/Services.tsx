import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Film, PlayCircle, Layers, Share2, Smartphone, MonitorPlay, Compass, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Film className="w-5 h-5 text-[#6CC8FF]" />;
      case 1: return <Layers className="w-5 h-5 text-[#6CC8FF]" />;
      case 2: return <PlayCircle className="w-5 h-5 text-[#6CC8FF]" />;
      case 3: return <Share2 className="w-5 h-5 text-[#6CC8FF]" />;
      case 4: return <Smartphone className="w-5 h-5 text-[#6CC8FF]" />;
      case 5: return <MonitorPlay className="w-5 h-5 text-[#6CC8FF]" />;
      case 6: return <Compass className="w-5 h-5 text-[#6CC8FF]" />;
      default: return <Film className="w-5 h-5 text-[#6CC8FF]" />;
    }
  };

  return (
    <section id="services" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                CAPABILITIES &amp; OFFERINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold tracking-tight text-[#F2F2F2]">
              CORE SERVICES
            </h2>
          </div>
          <p className="text-sm font-['Inter'] text-[#8C929B] max-w-md leading-relaxed">
            From initial concept and storyboarding to final broadcast delivery, I craft motion experiences with uncompromising visual fidelity.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAL_INFO.services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#12161C] hover:bg-[#171C24] border border-white/[0.08] hover:border-[#6CC8FF]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#171B21] border border-white/[0.08] flex items-center justify-center group-hover:border-[#6CC8FF]/40 transition-colors">
                    {getServiceIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-[#8C929B] group-hover:text-[#6CC8FF] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] group-hover:text-white transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm font-['Inter'] font-light text-[#8C929B] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#8C929B] uppercase">
                  FULL PRODUCTION
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-['Space_Grotesk'] font-bold text-[#6CC8FF] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                >
                  <span>INQUIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
