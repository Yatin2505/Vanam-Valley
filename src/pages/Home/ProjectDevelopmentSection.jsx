// src/pages/Home/ProjectDevelopmentSection.jsx
// Section 05: Project Development and Features — Planned with Your Needs in Mind

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Navigation, Shield, Landmark, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { projectFeatures } from '../../data/siteData';

const categoryIcons = {
  layout: Layers,
  roads: Navigation,
  development: Shield,
  entrance: Landmark,
  location: Compass,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ProjectDevelopmentSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = projectFeatures[activeIndex] || projectFeatures[0];
  const Icon = categoryIcons[activeFeature.id] || Layers;

  return (
    <section className="bg-white text-[#1a1a1a] py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background glow & accent lines */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2D5A43]/[0.03] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#D8B879]/[0.05] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-[0.2em] uppercase text-[#2D5A43]">
              Section 05 · Site Planning &amp; Features
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4"
          >
            Planned with{' '}
            <span className="font-playfair italic font-normal text-[#2D5A43]">
              Your Needs in Mind
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-base sm:text-lg text-[#1a1a1a]/60 leading-relaxed"
          >
            Every aspect of the Vanam Valley project is structured to offer practical utility, organized access, and long-term livability in Balaghat.
          </motion.p>
        </div>

        {/* Feature Interactive Showcase: Tabs on Left, Active Stage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Category Selectors (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            {projectFeatures.map((feature, index) => {
              const isActive = index === activeIndex;
              const FeatureIcon = categoryIcons[feature.id] || Layers;

              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  {...fadeUp(0.1 + index * 0.08)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#f8faf9] border-[#2D5A43]/30 shadow-lg translate-x-1.5'
                      : 'bg-white hover:bg-[#f8faf9]/60 border-[#1a1a1a]/[0.06] text-[#1a1a1a]/70 hover:border-[#2D5A43]/20'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? 'bg-[#1a3c2a] text-[#D8B879] shadow-md' : 'bg-[#2D5A43]/[0.08] text-[#2D5A43]'
                    }`}
                  >
                    <FeatureIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-outfit tracking-widest uppercase text-[#2D5A43] font-bold">
                        {feature.tag}
                      </span>
                      <span className="text-xs font-outfit text-[#1a1a1a]/40 font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className={`font-outfit text-base sm:text-lg font-bold transition-colors ${
                      isActive ? 'text-[#1a3c2a]' : 'text-[#1a1a1a]'
                    }`}>
                      {feature.title}
                    </h3>

                    {isActive && (
                      <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/65 leading-relaxed mt-2">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right / High-Impact Visual Stage (7 Columns) */}
          <motion.div {...fadeUp(0.3)} className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 bg-[#001D18] aspect-[16/11] sm:aspect-[16/10] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature.id}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Caption Box */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-[#D8B879]" />
                  <span className="text-[10px] font-outfit font-bold tracking-widest text-[#D8B879] uppercase">
                    {activeFeature.tag}
                  </span>
                </div>
                <h4 className="font-outfit text-lg sm:text-xl font-bold mb-1">
                  {activeFeature.title}
                </h4>
                <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                  {activeFeature.desc}
                </p>
              </div>

              {/* Indicator Pips */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                {projectFeatures.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? 'w-5 bg-[#D8B879]' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Go to feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDevelopmentSection;
