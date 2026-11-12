// src/pages/Home/ProjectDevelopmentSection.jsx
// Section 05: Project Development and Features — Planned with Your Needs in Mind

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, Navigation, Landmark, Compass } from 'lucide-react';
import { projectFeatures } from '../../data/siteData';

const categoryIcons = {
  layout: Layers,
  roads: Navigation,
  development: Shield,
  entrance: Landmark,
  location: Compass,
};

const ProjectDevelopmentSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = projectFeatures[activeIndex] || projectFeatures[0];
  const Icon = categoryIcons[activeFeature.id] || Layers;

  return (
    <section className="bg-[#F8F6EF] text-[#18231F] py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Subtle background architectural lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #002D26 1px, transparent 1px), linear-gradient(to bottom, #002D26 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#002D26]/5 border border-[#002D26]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#075C4A]" />
            <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
              Section 05 · Site Planning &amp; Development
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#002D26] tracking-tight leading-[1.15] mb-5">
            Planned with <br />
            <span className="italic font-normal bg-gradient-to-r from-[#075C4A] via-[#002D26] to-[#075C4A] bg-clip-text text-transparent">
              Your Needs in Mind.
            </span>
          </h2>

          <p className="font-inter text-[#18231F]/75 text-base sm:text-lg leading-relaxed">
            Every aspect of the Vanam Valley project is structured to offer practical utility, organized access, and long-term livability in Balaghat.
          </p>
        </div>

        {/* Feature Interactive Showcase: Tabs on Left, Active Stage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left / Category Selectors (5 Columns) ── */}
          <div className="lg:col-span-5 space-y-3">
            {projectFeatures.map((feature, index) => {
              const isActive = index === activeIndex;
              const FeatureIcon = categoryIcons[feature.id] || Layers;

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-[#002D26]/20 shadow-lg translate-x-2'
                      : 'bg-white/50 hover:bg-white border-transparent hover:border-[#002D26]/10 text-[#18231F]/70'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-[#002D26] text-[#D8B879]' : 'bg-[#002D26]/5 text-[#002D26]'
                    }`}
                  >
                    <FeatureIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#075C4A] font-bold">
                        {feature.tag}
                      </span>
                      <span className="text-xs font-mono text-[#18231F]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className={`font-playfair text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? 'text-[#002D26]' : 'text-[#18231F]'
                    }`}>
                      {feature.title}
                    </h3>

                    {isActive && (
                      <p className="font-inter text-xs sm:text-sm text-[#18231F]/75 leading-relaxed mt-2 animate-fadeIn">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right / High-Impact Visual Stage (7 Columns) ── */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 bg-[#001D18] aspect-[16/11] sm:aspect-[16/10]">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Box */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-[#001713]/85 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-[#D8B879]" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#D8B879] uppercase">
                    {activeFeature.tag}
                  </span>
                </div>
                <h4 className="font-playfair text-lg sm:text-xl font-bold mb-1">
                  {activeFeature.title}
                </h4>
                <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                  {activeFeature.desc}
                </p>
              </div>

              {/* Indicator Pips */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
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
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDevelopmentSection;

