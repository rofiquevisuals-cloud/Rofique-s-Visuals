/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GridBackground } from './components/GridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0F12] text-[#F2F2F2] selection:bg-[#6CC8FF]/20 selection:text-[#6CC8FF]">
      {/* Background Subtle 12-Column Grid & Ambient Lighting */}
      <GridBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero / Introduction */}
        <Hero />

        {/* 2. Skills / Software */}
        <Skills />

        {/* 3. Awards / Clients / Credibility */}
        <Clients />

        {/* 4. About Section */}
        <About />

        {/* 5. Services & Capabilities */}
        <Services />

        {/* 6. Testimonial Section */}
        <Testimonial />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
