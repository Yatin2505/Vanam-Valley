// src/pages/Home/ProjectsSection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import projResImg from '../../assets/images/residential-plots.jpg';
import projCommImg from '../../assets/images/commercial-plots.jpg';

const projects = [
  {
    num: '01',
    title: 'Residential Plots',
    desc: 'Build your dream home in a peaceful environment.',
    linkText: 'Explore Residential',
    path: '/projects/residential',
    image: projResImg,
    alt: 'Aerial residential plotted development with internal roads and green plots',
  },
  {
    num: '02',
    title: 'Commercial Plots',
    desc: 'Find the right space for your business.',
    linkText: 'Explore Commercial',
    path: '/projects/commercial',
    image: projCommImg,
    alt: 'Commercial plots with visible access roads and open land parcels',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#002620] py-20 md:py-28 px-5 md:px-10 lg:px-16 relative overflow-hidden" ref={ref}>
      
      {/* Decorative leaf flourishes on edges */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-10 text-gold">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M20 180C30 140 70 110 120 120C170 130 190 170 190 190C170 190 130 170 20 180Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-inter font-semibold text-gold tracking-[0.25em] uppercase text-xs">
              OUR PROJECTS
            </span>
            <div className="h-px w-8 bg-gold/50" />
          </div>

          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Land for <span className="italic text-gradient-gold">Life. Space to Grow.</span>
          </h2>
        </motion.div>

        {/* 2 Large Image-Led Property Showcases Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-500 shadow-card-dark group"
            >
              {/* Full-bleed Aerial Photograph */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001713]/95 via-[#001713]/55 to-transparent pointer-events-none" />

              {/* Bottom Card Content with Large Watermark Number */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Large 01 / 02 Watermark Number */}
                  <span className="font-playfair font-bold text-5xl sm:text-6xl text-gold/30 select-none flex-shrink-0">
                    {item.num}
                  </span>

                  <div>
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-inter text-white/75 text-xs sm:text-sm max-w-xs mb-3 font-light leading-snug">
                      {item.desc}
                    </p>
                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-gold hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
