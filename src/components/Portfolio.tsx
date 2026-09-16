import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['ALL', 'Brand Film', 'Motion Graphics', 'Social Media Campaign', 'Commercial', 'Product Video', 'Kinetic Typography'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold tracking-tight text-[#F2F2F2]">
              SELECTED WORK
            </h2>
            <p className="text-sm sm:text-base font-['Inter'] text-[#8C929B] max-w-xl mt-3 leading-relaxed">
              A collection of selected projects across video, motion and digital experiences.
            </p>
          </div>

          {/* Quick Category Filters (Capsule styling) */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#6CC8FF] text-[#0D0F12] font-bold shadow-[0_0_20px_rgba(108,200,255,0.3)]'
                    : 'bg-[#171B21] text-[#8C929B] hover:text-[#F2F2F2] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-3xl bg-[#12161C] border border-white/[0.08] hover:border-[#6CC8FF]/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Thumbnail Container with Cinematic Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0C0F]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = project.thumbnail.replace('.jpg', '.svg');
                  }}
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Top Metatags: Number & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold text-[#F2F2F2] px-2.5 py-1 rounded-full bg-[#0D0F12]/80 backdrop-blur-md border border-white/[0.08]">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono text-[#8C929B] px-2.5 py-1 rounded-full bg-[#0D0F12]/80 backdrop-blur-md border border-white/[0.08]">
                    {project.year}
                  </span>
                </div>

                {/* Center Hover Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-[#6CC8FF] text-[#0D0F12] flex items-center justify-center shadow-[0_0_30px_rgba(108,200,255,0.6)]">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Content: Category, Title, Tools */}
              <div className="p-6 relative z-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#6CC8FF] uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C929B] uppercase">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] group-hover:text-white mt-1.5 transition-colors tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C929B] group-hover:text-[#6CC8FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>

                  <p className="text-xs text-[#8C929B] font-['Inter'] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tools Pills */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.tools.slice(0, 2).map((tool, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171B21] text-[#8C929B]">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#8C929B] group-hover:text-[#6CC8FF] transition-colors">
                    PREVIEW →
                  </span>
                </div>
              </div>

              {/* Glowing Accent Border on Hover */}
              <div className="absolute inset-0 rounded-3xl border border-[#6CC8FF] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout: View All Projects CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-[#12161C] border border-white/[0.08] gap-6">
          <div>
            <span className="text-xs font-mono text-[#6CC8FF] tracking-widest uppercase block mb-1">
              ARCHIVE // 150+ COMMERCIAL WORKS
            </span>
            <h4 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-[#F2F2F2]">
              Need a bespoke motion reel or full campaign portfolio?
            </h4>
          </div>

          <button
            id="view-all-projects-btn"
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className="group px-8 py-3.5 rounded-full bg-[#171B21] hover:bg-[#1F2530] border border-white/[0.12] hover:border-[#6CC8FF]/50 text-[#F2F2F2] hover:text-[#6CC8FF] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all flex-shrink-0"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#6CC8FF]" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
