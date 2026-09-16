import React from 'react';
import { motion } from 'motion/react';
import { CLIENTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const Clients: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Selected Experience & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                  CREDIBILITY &amp; TRACK RECORD
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] tracking-tight mb-8">
                SELECTED EXPERIENCE
              </h2>
            </div>

            {/* Metric Blocks */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-[#12161C] border border-white/[0.08] relative overflow-hidden group hover:border-[#6CC8FF]/40 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-[#F2F2F2] group-hover:text-white transition-colors">
                    6+ YEARS
                  </span>
                  <span className="text-xs font-mono text-[#6CC8FF] uppercase tracking-wider">
                    2018 — Present
                  </span>
                </div>
                <p className="text-sm font-['Space_Grotesk'] text-[#8C929B] mt-2 tracking-wide uppercase">
                  Creative Motion &amp; Commercial Video Experience
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-3xl bg-[#12161C] border border-white/[0.08] relative overflow-hidden group hover:border-[#6CC8FF]/40 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-[#F2F2F2] group-hover:text-white transition-colors">
                    150+
                  </span>
                  <span className="text-xs font-mono text-[#6CC8FF] uppercase tracking-wider">
                    Completed
                  </span>
                </div>
                <p className="text-sm font-['Space_Grotesk'] text-[#8C929B] mt-2 tracking-wide uppercase">
                  Commercials, Documentaries, Social Reels &amp; Idents
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-3xl bg-[#12161C] border border-white/[0.08] relative overflow-hidden group hover:border-[#6CC8FF]/40 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-[#F2F2F2] group-hover:text-white transition-colors">
                    400+
                  </span>
                  <span className="text-xs font-mono text-[#6CC8FF] uppercase tracking-wider">
                    Mentorship
                  </span>
                </div>
                <p className="text-sm font-['Space_Grotesk'] text-[#8C929B] mt-2 tracking-wide uppercase">
                  Aspiring Visualizers &amp; Motion Editors Mentored
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Clients / Collaborations */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                TRUSTED BY LEADING BRANDS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] tracking-tight mb-8">
              CLIENTS / COLLABORATIONS
            </h2>

            {/* Typographic Client Directory (Refined Minimalist Editorial List) */}
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {CLIENTS_DATA.map((client, idx) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 sm:px-4 rounded-xl transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono text-[#8C929B] w-6">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] group-hover:text-[#6CC8FF] transition-colors tracking-wide">
                        {client.name}
                      </h3>
                      <p className="text-xs text-[#8C929B] mt-0.5 max-w-md">
                        {client.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-[11px] font-mono text-[#8C929B] tracking-wider uppercase px-3 py-1 rounded-full bg-[#171B21] border border-white/[0.06]">
                      {client.sector}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note at bottom */}
            <div className="mt-8 p-4 rounded-2xl bg-[#12161C]/60 border border-white/[0.06] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#6CC8FF] flex-shrink-0" />
              <p className="text-xs text-[#8C929B] font-mono leading-relaxed">
                And other selected private enterprises, agencies, and international development initiatives under active NDAs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
