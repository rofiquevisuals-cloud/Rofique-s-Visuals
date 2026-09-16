import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Cpu, Film, Layers, Palette, PenTool, Layout, Wand2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  // Mapping software IDs to icons
  const getToolIcon = (id: string) => {
    switch (id) {
      case 'pr':
        return <Film className="w-5 h-5 text-[#6CC8FF]" />;
      case 'ae':
        return <Layers className="w-5 h-5 text-[#6CC8FF]" />;
      case 'ps':
        return <Palette className="w-5 h-5 text-[#6CC8FF]" />;
      case 'ai':
        return <PenTool className="w-5 h-5 text-[#6CC8FF]" />;
      case 'figma':
        return <Layout className="w-5 h-5 text-[#6CC8FF]" />;
      case 'davinci':
        return <Film className="w-5 h-5 text-[#6CC8FF]" />;
      case 'capcut':
        return <Wand2 className="w-5 h-5 text-[#6CC8FF]" />;
      case 'genai':
        return <Sparkles className="w-5 h-5 text-[#6CC8FF]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#6CC8FF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                TOOLKIT &amp; PROFICIENCIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold tracking-tight text-[#F2F2F2]">
              SOFTWARE &amp; CRAFT
            </h2>
          </div>
          <p className="text-sm font-['Inter'] text-[#8C929B] max-w-md">
            Industry-standard post-production pipeline engineered for high-precision timeline editing, kinetic graphics, and color fidelity.
          </p>
        </div>

        {/* Mobile Horizontal Scroll Indicator note */}
        <div className="flex md:hidden items-center justify-between text-[10px] font-mono text-[#8C929B] uppercase mb-4">
          <span>SWIPE HORIZONTALLY</span>
          <span className="text-[#6CC8FF]">→</span>
        </div>

        {/* Skills Container: Desktop Grid / Floating capsules & Mobile Scrollable Row */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex-shrink-0 w-[270px] sm:w-[300px] md:w-auto snap-start p-5 rounded-3xl bg-[#12161C] hover:bg-[#171C24] border border-white/[0.08] hover:border-[#6CC8FF]/50 transition-all duration-300 group relative flex flex-col justify-between"
            >
              {/* Top Row: Icon + Percentage badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#171B21] border border-white/[0.08] flex items-center justify-center group-hover:border-[#6CC8FF]/40 group-hover:bg-[#1C2330] transition-colors">
                  {getToolIcon(skill.id)}
                </div>
                <div className="flex items-baseline gap-1 px-3 py-1 rounded-full bg-[#171B21] border border-white/[0.06]">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#F2F2F2] group-hover:text-[#6CC8FF] transition-colors">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div>
                <h3 className="font-['Space_Grotesk'] text-base font-semibold text-[#F2F2F2] tracking-wide group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-[#8C929B] mt-1 tracking-wider uppercase">
                  {skill.category}
                </p>
              </div>

              {/* Glowing Minimal Progress Bar */}
              <div className="w-full h-1 bg-[#1A1F29] rounded-full overflow-hidden mt-5">
                <div
                  className="h-full bg-gradient-to-r from-[#6CC8FF]/40 to-[#6CC8FF] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Subtle hover backlight */}
              <div className="absolute inset-0 rounded-3xl bg-[#6CC8FF] opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
