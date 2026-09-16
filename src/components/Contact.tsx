import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Send, CheckCircle2, Copy, Check, ArrowUpRight, Mail, MapPin, Clock, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Motion Graphics',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Video Editing',
    'Motion Graphics',
    'Brand Visuals',
    'Commercial Video',
    'Reels & Short-form',
    'Creative Direction'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share brief project details.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift local validation and submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Motion Graphics',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Dramatic Headline & Contact Metadata */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#6CC8FF]" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C929B] uppercase">
                  INITIATE A COLLABORATION
                </span>
              </div>

              {/* Large Editorial Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] tracking-tight leading-[1.1] mb-6">
                LET’S CREATE<br />
                SOMETHING<br />
                <span className="text-[#6CC8FF]">IMPACTFUL.</span>
              </h2>

              <p className="text-base sm:text-lg font-['Inter'] font-light text-[#8C929B] max-w-lg leading-relaxed mb-10">
                Have a project, campaign or creative idea in mind? Let's turn it into something people remember.
              </p>
            </div>

            {/* Direct Contact & Socials Information Cards */}
            <div className="space-y-6">
              {/* Email Block with 1-click copy */}
              <div className="p-5 rounded-2xl bg-[#12161C] border border-white/[0.08] hover:border-[#6CC8FF]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#8C929B] uppercase">
                    DIRECT INBOX
                  </span>
                  <button
                    id="copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#6CC8FF] hover:underline"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] hover:text-[#6CC8FF] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location & Timezone info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#12161C] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#8C929B] uppercase block">LOCATION</span>
                  <span className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-1 block">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#12161C] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#8C929B] uppercase block">TIMEZONE</span>
                  <span className="text-sm font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-1 block">
                    GMT+6 Standard
                  </span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-2">
                <span className="text-[10px] font-mono tracking-widest text-[#8C929B] uppercase block mb-3">
                  SOCIAL NETWORKS &amp; REELS
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PERSONAL_INFO.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#12161C] hover:bg-[#171B21] border border-white/[0.08] hover:border-[#6CC8FF]/40 text-xs font-['Space_Grotesk'] font-medium text-[#F2F2F2] flex items-center gap-1.5 transition-all"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#6CC8FF]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#12161C] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#6CC8FF]/10 border border-[#6CC8FF]/40 text-[#6CC8FF] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(108,200,255,0.2)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-[#F2F2F2]">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm font-['Inter'] text-[#8C929B] max-w-sm mt-3 leading-relaxed">
                      Thank you for reaching out. Rofique will review your project brief and reply within 24 hours.
                    </p>
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2.5 rounded-full bg-[#171B21] hover:bg-[#1E242C] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#F2F2F2] border border-white/[0.1] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-white/[0.08] pb-4 mb-2">
                      <span className="text-xs font-mono text-[#6CC8FF] uppercase tracking-widest block">
                        PROJECT INQUIRY
                      </span>
                      <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#F2F2F2] mt-1">
                        Tell Me About Your Vision
                      </h3>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono tracking-wider text-[#8C929B] uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#171B21] border ${
                          errors.name ? 'border-red-500/70 focus:ring-red-500/50' : 'border-white/[0.1] focus:border-[#6CC8FF]/70'
                        } text-sm text-[#F2F2F2] placeholder-[#555D68] focus:outline-none focus:ring-1 focus:ring-[#6CC8FF]/50 transition-colors font-['Inter']`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono tracking-wider text-[#8C929B] uppercase mb-2">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[#171B21] border ${
                            errors.email ? 'border-red-500/70 focus:ring-red-500/50' : 'border-white/[0.1] focus:border-[#6CC8FF]/70'
                          } text-sm text-[#F2F2F2] placeholder-[#555D68] focus:outline-none focus:ring-1 focus:ring-[#6CC8FF]/50 transition-colors font-['Inter']`}
                        />
                        {errors.email && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-mono tracking-wider text-[#8C929B] uppercase mb-2">
                          Your Phone (Optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#171B21] border border-white/[0.1] focus:border-[#6CC8FF]/70 text-sm text-[#F2F2F2] placeholder-[#555D68] focus:outline-none focus:ring-1 focus:ring-[#6CC8FF]/50 transition-colors font-['Inter']"
                        />
                      </div>
                    </div>

                    {/* Project Type Selection */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-[#8C929B] uppercase mb-2">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-['Space_Grotesk'] tracking-wider uppercase transition-all ${
                              formData.projectType === type
                                ? 'bg-[#6CC8FF] text-[#0D0F12] font-bold'
                                : 'bg-[#171B21] text-[#8C929B] hover:text-[#F2F2F2] border border-white/[0.08]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Details Field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono tracking-wider text-[#8C929B] uppercase mb-2">
                        Tell me about your project *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Briefly describe your goals, expected timeline, or links to references..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#171B21] border ${
                          errors.message ? 'border-red-500/70 focus:ring-red-500/50' : 'border-white/[0.1] focus:border-[#6CC8FF]/70'
                        } text-sm text-[#F2F2F2] placeholder-[#555D68] focus:outline-none focus:ring-1 focus:ring-[#6CC8FF]/50 transition-colors font-['Inter'] resize-none`}
                      />
                      {errors.message && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#6CC8FF] hover:bg-[#83d3ff] disabled:opacity-50 text-[#0D0F12] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(108,200,255,0.3)] transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#0D0F12] border-t-transparent rounded-full animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
