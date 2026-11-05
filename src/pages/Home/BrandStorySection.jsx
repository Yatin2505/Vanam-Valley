// src/pages/Home/BrandStorySection.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trees, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutLandscapeImg from '../../assets/images/about-landscape.jpg';
import residentialImg from '../../assets/images/residential-plots.jpg';

const storyPillars = [
  {
    num: '01',
    icon: Trees,
    title: 'The Ecological Canvas',
    headline: 'Preserving Natural Contours',
    desc: 'Every parcel is conceptualized to honor Balaghat’s rich biodiversity, preserving native vegetation and optimizing natural sunlight and airflow.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Master-Planned Balance',
    headline: 'Thoughtful Zonation',
    desc: 'Separating tranquil residential enclaves from dynamic commercial thoroughfares ensures undisturbed peace for families and high visibility for businesses.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Clear Title Integrity',
    headline: 'Generational Security',
    desc: 'Founded on meticulous legal transparency and verified paperwork, providing landowners unconditional peace of mind for their family legacy.',
  },
];

const BrandStorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#F8F6EF] text-[#18231F] py-24 md:py-36 px-5 md:px-10 lg:px-16 relative overflow-hidden" ref={ref}>
      
      {/* Decorative architectural watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.04] text-[#002D26]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Eyebrow & Main Editorial Statement ── */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-[#002D26]/40" />
            <span className="font-inter font-semibold text-xs tracking-[0.28em] uppercase text-[#075C4A]">
              THE PHILOSOPHY OF VANAM VALLEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-[#002D26] leading-[1.12] tracking-tight"
          >
            Rooted in Nature. <br />
            <span className="italic font-normal text-[#075C4A]">Designed for Legacy.</span>
          </motion.h2>
        </div>

        {/* ── Asymmetrical Magazine Composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Layered Photography Frame (7 cols) */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Primary Landscape Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/10 group">
              <img
                src={aboutLandscapeImg}
                alt="Vanam Valley Landscape"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Overlapping Secondary Card (Architectural Detail) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[#002D26]/10 text-left"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src={residentialImg}
                  alt="Planned Residential Living"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-[10px] font-inter text-[#075C4A] font-semibold tracking-wider uppercase">
                Balaghat Region
              </div>
              <div className="text-xs font-playfair font-bold text-[#002D26] mt-0.5">
                Master-Planned Integrity
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Editorial Narrative & Pull Quote (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 35 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <blockquote className="font-playfair italic text-2xl sm:text-3xl text-[#002D26] leading-snug mb-8 border-l-2 border-[#D8B879] pl-6">
              "A true sanctuary isn’t merely land you purchase; it’s an environment that elevates how your future unfolds."
            </blockquote>

            <p className="font-inter text-[#18231F]/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
              At Vanam Valley, we re-evaluate what it means to develop plotted communities. Rather than dense, uniform grids, we introduce spacious residential layouts and vibrant commercial avenues curated around natural topography.
            </p>

            <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              Situated in the culturally rich and naturally scenic district of Balaghat, our plots offer both a peaceful family retreat and strategic commercial opportunity.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-inter font-semibold tracking-wider uppercase text-[#002D26] hover:text-[#075C4A] border-b border-[#002D26]/40 pb-1 hover:border-[#075C4A] transition-all"
              >
                <span>Read Full Brand Manifesto</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ── Interactive Story Pillars Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#002D26]/15">
          {storyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="p-7 rounded-2xl bg-white/70 hover:bg-white border border-[#002D26]/10 hover:border-[#D8B879] transition-all duration-300 shadow-sm hover:shadow-xl text-left group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#002D26]/5 group-hover:bg-[#002D26] group-hover:text-[#D8B879] flex items-center justify-center text-[#075C4A] transition-colors">
                    <Icon size={22} />
                  </div>
                  <span className="font-playfair font-bold text-3xl text-[#002D26]/20 group-hover:text-[#D8B879]/50 transition-colors">
                    {pillar.num}
                  </span>
                </div>

                <div className="text-[11px] font-inter text-[#075C4A] font-semibold tracking-wider uppercase mb-1">
                  {pillar.title}
                </div>
                <h3 className="font-playfair font-bold text-xl text-[#002D26] mb-3">
                  {pillar.headline}
                </h3>
                <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BrandStorySection;

