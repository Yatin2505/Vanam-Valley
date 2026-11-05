// src/pages/Home/AboutSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sprout, MapPin, Sparkles } from 'lucide-react';
import aboutLandscapeImg from '../../assets/images/about-landscape.jpg';

const highlights = [
  {
    icon: Sprout,
    title: 'Green Surroundings',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
  },
  {
    icon: Sparkles,
    title: 'Future Potential',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#F8F6EF] text-[#1D2D26] py-20 md:py-28 px-5 md:px-10 lg:px-16 relative overflow-hidden" ref={ref}>
      
      {/* Decorative botanical watermark in top right */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-[0.08] text-[#004D40]">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M190 20C140 30 100 80 110 130C120 180 170 190 190 190C190 160 170 120 190 20Z" fill="currentColor"/>
          <path d="M140 60C110 90 90 130 100 170" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Aerial Landscape Visual */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card border border-[#004D40]/15 group">
              <img
                src={aboutLandscapeImg}
                alt="Panoramic view of Vanam Valley green landscape"
                className="w-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-inter font-semibold text-xs tracking-[0.25em] uppercase text-[#004D40]">
                ABOUT VANAM VALLEY
              </span>
              <div className="h-px w-12 bg-[#004D40]/30" />
            </div>

            {/* Headline */}
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-[#002620] leading-[1.18] mb-5">
              A Sanctuary Crafted for <span className="italic font-normal">Generations.</span>
            </h2>

            {/* Narrative Body */}
            <p className="font-inter text-[#25372F]/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Vanam Valley is more than just a plotted development—it's a promise of a better, greener and more prosperous future. Designed for modern living and smart investment.
            </p>

            {/* 3 Clean Features Row with Vertical Dividers */}
            <div className="grid grid-cols-3 divide-x divide-[#004D40]/20 pt-6 border-t border-[#004D40]/15">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center px-2">
                    <div className="w-10 h-10 rounded-full bg-[#004D40]/8 flex items-center justify-center text-[#004D40] mb-2.5">
                      <Icon size={18} />
                    </div>
                    <span className="font-inter font-medium text-xs sm:text-sm text-[#002620]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
