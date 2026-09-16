import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { X, Play, Pause, Volume2, Maximize2, Check, Clock, Film, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState('00:18:04');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D0F12]/92 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#12161C] border border-white/[0.12] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 border-b border-white/[0.08] mb-6 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#6CC8FF] tracking-[0.2em] uppercase">
                  {project.number} // {project.category}
                </span>
                <span className="text-xs font-mono text-[#8C929B]">•</span>
                <span className="text-xs font-mono text-[#8C929B]">{project.year}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-1.5 tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-[#8C929B] mt-1">
                Client: <span className="text-[#F2F2F2]">{project.client}</span>
              </p>
            </div>

            <button
              id="project-modal-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close project preview"
              className="p-2.5 rounded-full bg-[#171B21] border border-white/[0.08] hover:border-[#6CC8FF] text-[#8C929B] hover:text-[#F2F2F2] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cinematic Video Player Simulation */}
          <div className="relative w-full aspect-video rounded-2xl bg-[#0B0D11] border border-white/[0.08] overflow-hidden group mb-8 shadow-inner">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = project.thumbnail.replace('.jpg', '.svg');
              }}
            />

            {/* Dark player gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Camera Viewfinder Crosshair */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                MASTER PRORES 4K // 24.00 FPS
              </span>
            </div>

            {/* Big Center Play/Pause button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#0D0F12]/80 backdrop-blur-md border border-white/[0.2] hover:border-[#6CC8FF] text-[#F2F2F2] hover:text-[#6CC8FF] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
              </button>
            </div>

            {/* Bottom Player Controls */}
            <div className="absolute bottom-0 inset-x-0 p-4 z-20 flex flex-col gap-2">
              {/* Progress Timeline bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div className="w-2/5 h-full bg-[#6CC8FF]" />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#8C929B]">
                <div className="flex items-center gap-3">
                  <span className="text-[#F2F2F2]">{currentTime}</span>
                  <span>/</span>
                  <span>{project.duration || '01:30'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-[#8C929B]" />
                  <span className="text-[#6CC8FF]">STEREO 48kHz</span>
                  <Maximize2 className="w-4 h-4 text-[#8C929B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            {/* Column 1 & 2: Overview narrative */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2] uppercase tracking-wider">
                PROJECT OVERVIEW
              </h3>
              <p className="text-sm sm:text-base font-['Inter'] font-light text-[#8C929B] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#6CC8FF] mb-3">
                  KEY DELIVERABLES &amp; CUTDOWNS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#F2F2F2]">
                      <Check className="w-3.5 h-3.5 text-[#6CC8FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Metadata & Tools */}
            <div className="p-5 rounded-2xl bg-[#171B21] border border-white/[0.08] space-y-4">
              <div>
                <span className="text-[10px] font-mono text-[#8C929B] uppercase tracking-wider block">
                  SOFTWARE SUITE
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#12161C] border border-white/[0.06] text-[#F2F2F2]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono text-[#8C929B] uppercase tracking-wider block">
                  TIMELINE DURATION
                </span>
                <span className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-0.5 block">
                  {project.duration || '01:30'}
                </span>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono text-[#8C929B] uppercase tracking-wider block">
                  HIGHLIGHT METRIC
                </span>
                <span className="text-sm font-['Space_Grotesk'] font-bold text-[#6CC8FF] mt-0.5 block">
                  {project.highlightStat || 'Broadcast Approved'}
                </span>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#6CC8FF] hover:bg-[#82d2ff] text-[#0D0F12] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
