// src/pages/Home/PropertyCollectionSection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Trees, Building2, Compass, Layers } from 'lucide-react';
import residentialImg from '../../assets/images/residential-plots.jpg';
import commercialImg from '../../assets/images/commercial-plots.jpg';

const PropertyCollectionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#001D18] text-white py-24 md:py-36 px-5 md:px-10 lg:px-16 relative overflow-hidden" ref={ref}>
      
      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
              CURATED PROPERTY COLLECTION
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Two Distinct Opportunities. <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              One Master-Planned Vision.
            </span>
          </h2>
        </div>

        <p className="font-inter text-white/70 text-xs sm:text-sm max-w-md font-light leading-relaxed text-left">
          Whether you envision crafting a serene family villa or establishing a high-visibility commercial asset in Balaghat, Vanam Valley provides planned parcel infrastructure.
        </p>
      </div>

      {/* ── Two Panoramic Full-Bleed Property Stages ── */}
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        
        {/* ── Stage 01: Residential Plots ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[500px] md:min-h-[580px] rounded-3xl overflow-hidden border border-gold/30 group shadow-2xl flex flex-col justify-end p-7 sm:p-10 md:p-14"
        >
          {/* Background Standalone Photograph */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={residentialImg}
              alt="Residential Plots at Vanam Valley"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001713] via-[#002D26]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001D18]/90 via-[#001D18]/50 to-transparent" />
          </div>

          {/* Watermark Number */}
          <div className="absolute top-6 right-8 font-playfair font-bold text-7xl sm:text-8xl md:text-9xl text-white/10 pointer-events-none select-none">
            01
          </div>

          {/* Stage Content */}
          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[11px] font-inter text-gold uppercase tracking-widest mb-4">
              <Trees size={13} />
              <span>Residential Enclaves</span>
            </div>

            <h3 className="font-playfair font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              A Sanctuary Crafted for <span className="italic text-gradient-gold">Private Living.</span>
            </h3>

            <p className="font-inter text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light max-w-xl">
              Nestled in tranquility away from urban noise, our residential parcels provide the foundation for bespoke homes, verdant gardens, and generational family memories.
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-xs font-inter text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Low-Density Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Avenue Plantations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Wide Internal Roads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>100% Clear Title</span>
              </div>
            </div>

            <Link
              to="/projects/residential"
              className="btn-gold text-xs px-8 py-4 shadow-gold hover:shadow-gold-glow inline-flex items-center gap-2.5"
            >
              <span>Explore Residential Parcels</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* ── Stage 02: Commercial Plots ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[500px] md:min-h-[580px] rounded-3xl overflow-hidden border border-gold/30 group shadow-2xl flex flex-col justify-end p-7 sm:p-10 md:p-14"
        >
          {/* Background Standalone Photograph */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={commercialImg}
              alt="Commercial Plots at Vanam Valley"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.72] contrast-[1.08]"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001713] via-[#075C4A]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001D18]/90 via-[#001D18]/50 to-transparent" />
          </div>

          {/* Watermark Number */}
          <div className="absolute top-6 right-8 font-playfair font-bold text-7xl sm:text-8xl md:text-9xl text-white/10 pointer-events-none select-none">
            02
          </div>

          {/* Stage Content */}
          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[11px] font-inter text-gold uppercase tracking-widest mb-4">
              <Building2 size={13} />
              <span>Commercial Corridors</span>
            </div>

            <h3 className="font-playfair font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
              High-Visibility Assets on <span className="italic text-gradient-gold">Prime Frontage.</span>
            </h3>

            <p className="font-inter text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light max-w-xl">
              Strategically positioned along active vehicular axes, our commercial plots deliver premier frontage for business establishments, retail complexes, and capital appreciation.
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-xs font-inter text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Prime Road Frontage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>High-Footfall Axis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Flexible Depth Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                <span>Immediate Accessibility</span>
              </div>
            </div>

            <Link
              to="/projects/commercial"
              className="btn-gold text-xs px-8 py-4 shadow-gold hover:shadow-gold-glow inline-flex items-center gap-2.5"
            >
              <span>Explore Commercial Hub</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PropertyCollectionSection;

