// src/pages/Home/WhySection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sprout, MapPin, Handshake, TrendingUp } from 'lucide-react';
import whyAerialImg from '../../assets/images/why-vanam-valley.jpg';

const features = [
  {
    icon: Sprout,
    title: 'Green Surroundings',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
  },
  {
    icon: Handshake,
    title: 'Thoughtful Planning',
  },
  {
    icon: TrendingUp,
    title: 'Future Growth',
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#F8F6EF] text-[#1D2D26] py-20 md:py-28 px-5 md:px-10 lg:px-16 overflow-hidden relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & 4 Features */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-inter font-semibold text-xs tracking-[0.25em] uppercase text-[#004D40]">
                  WHY VANAM VALLEY
                </span>
                <div className="h-px w-10 bg-[#004D40]/30" />
              </div>
            </motion.div>

            <motion.h2
              className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-[#002620] leading-[1.18] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              A Better Balance of <span className="italic font-normal">Nature &amp; Opportunity</span>
            </motion.h2>

            <motion.p
              className="font-inter text-[#25372F]/75 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From lush green surroundings to excellent connectivity, Vanam Valley offers the ideal location for living and business.
            </motion.p>

            {/* 4 Feature Highlights with Vertical Dividers */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#004D40]/20 border-y border-[#004D40]/20 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center px-2 py-3 sm:py-1">
                    <div className="w-10 h-10 rounded-full bg-[#004D40]/8 flex items-center justify-center text-[#004D40] mb-2">
                      <Icon size={18} />
                    </div>
                    <span className="font-inter font-medium text-xs sm:text-sm text-[#002620]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Architectural Arched Aerial Photo */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-tl-[110px] md:rounded-tl-[130px] rounded-br-3xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-card border border-[#004D40]/20 group">
              <img
                src={whyAerialImg}
                alt="Aerial view of green plotted land with internal roads and trees in Balaghat"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
