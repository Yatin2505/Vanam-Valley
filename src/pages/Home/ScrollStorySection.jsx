// src/pages/Home/ScrollStorySection.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Sparkles, MapPin, Trees, ArrowRight } from 'lucide-react';
import whyImg from '../../assets/images/why-vanam-valley.jpg';

const pillars = [
  {
    id: '01',
    tag: 'ECOLOGICAL HARMONY',
    title: 'Natural Topography & Waterflow Integrity',
    desc: 'We do not flatten hills or obstruct natural hydrology. The layout respects the natural gradient of Balaghat, ensuring natural drainage and preserved mature trees.',
    icon: Trees,
  },
  {
    id: '02',
    tag: 'BUILT INFRASTRUCTURE',
    title: 'Engineered Internal Avenues & Utilities',
    desc: 'Designed with generous road widths, pedestrian pathways, dedicated underground conduits for utilities, and planned perimeter security.',
    icon: Sparkles,
  },
  {
    id: '03',
    tag: 'REGIONAL CONNECTIVITY',
    title: 'Strategic Balaghat Growth Trajectory',
    desc: 'Positioned strategically within Balaghat district to bridge serene countryside tranquility with effortless access to urban markets and regional highways.',
    icon: MapPin,
  },
  {
    id: '04',
    tag: 'TRUSTED FOUNDATION',
    title: 'Unconditional Documentation & Legal Veracity',
    desc: 'Every plot is backed by rigorous legal due diligence, transparent boundary demarcation, and our dedicated local office team in Balaghat.',
    icon: Shield,
  },
];

const ScrollStorySection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#002620] text-white py-24 md:py-36 px-5 md:px-10 lg:px-16 relative overflow-hidden border-t border-b border-gold/15" ref={ref}>
      
      {/* Background radial gold glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8B879]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
              THE DEVELOPMENT STANDARD
            </span>
          </div>

          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Engineered for Value. <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              Preserved for Life.
            </span>
          </h2>
        </div>

        {/* ── Interactive Split Story Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 4-Pillar Accordion / Tabs (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#001D18] border-gold shadow-gold'
                      : 'bg-white/5 border-white/10 hover:border-gold/40 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-playfair font-bold text-2xl ${isActive ? 'text-gold' : 'text-white/30'}`}>
                        {item.id}
                      </span>
                      <div>
                        <div className="text-[10px] font-inter text-gold tracking-widest uppercase font-semibold">
                          {item.tag}
                        </div>
                        <h3 className="font-playfair font-bold text-lg sm:text-xl text-white mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-gold text-[#002620]' : 'bg-white/10 text-white/50'
                    }`}>
                      <Icon size={16} />
                    </div>
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="font-inter text-white/75 text-xs sm:text-sm font-light leading-relaxed mt-4 pt-4 border-t border-white/10"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Architectural Photography Frame (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-tl-[120px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-gold/40 shadow-2xl group">
              <img
                src={whyImg}
                alt="Vanam Valley Masterplan Overview"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left">
                <div className="text-[10px] font-inter text-gold uppercase tracking-widest">
                  Live Planning Metric
                </div>
                <div className="text-xs font-playfair text-white font-bold mt-0.5">
                  Balaghat Regional Development Axis
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ScrollStorySection;

