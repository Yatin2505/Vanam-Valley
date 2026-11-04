// src/pages/Home/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trees, Shield, Gem, ArrowRight } from 'lucide-react';
import { aboutHighlights } from '../../data/siteData';

const iconMap = { Trees, Shield, Gem };

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const ABOUT_IMAGE =
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85';

  return (
    <section className="bg-ivory section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left — image */}
          <motion.div
            className="md:col-span-4 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <img
                src={ABOUT_IMAGE}
                alt="Family enjoying Vanam Valley landscape"
                className="rounded-2xl w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-gold/40 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold/20 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Center — text */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="section-label">About Vanam Valley</p>
            <span className="gold-line" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-5">
              A Vision for a Greener Tomorrow
            </h2>
            <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-6">
              Vanam Valley is more than just a plotted development — it's a promise of a better, greener and more prosperous future. Designed for modern living and smart investment, our thoughtfully planned community blends natural surroundings with the conveniences of contemporary life.
            </p>
            <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-8">
              Nestled in the heart of Balaghat, Madhya Pradesh, Vanam Valley offers carefully planned residential and commercial plots in a serene, nature-rich environment.
            </p>
            <Link to="/about" className="btn-gold inline-flex">
              Know More
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — highlights */}
          <motion.div
            className="md:col-span-3 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {aboutHighlights.map((h, i) => {
              const Icon = iconMap[h.icon] || Trees;
              return (
                <div
                  key={h.id}
                  className="flex gap-4 items-start p-4 rounded-xl border border-gold/20 bg-white hover:border-gold/50 hover:shadow-gold transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-forest/8 border border-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-dark-text text-sm leading-tight mb-1">
                      {h.title}
                    </p>
                    <p className="font-inter text-dark-text/55 text-xs leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

