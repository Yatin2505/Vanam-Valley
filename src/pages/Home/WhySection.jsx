// src/pages/Home/WhySection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Trees, MapPin, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { whyHighlights } from '../../data/siteData';

const iconMap = { Trees, MapPin, TrendingUp, Star };

const WHY_IMAGE =
  'https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&q=85';

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-ivory section-pad overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Left — text and highlights */}
        <div className="lg:col-span-7">
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Vanam Valley
          </motion.p>
          <span className="gold-line" />
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-text leading-tight mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Perfect Blend of{' '}
            <span className="text-forest">Nature &amp; Opportunity</span>
          </motion.h2>

          <motion.p
            className="font-inter text-dark-text/65 text-base leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From lush green surroundings to excellent connectivity, Vanam Valley offers the ideal location for living and business. A place where nature and opportunity meet.
          </motion.p>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {whyHighlights.map((h, i) => {
              const Icon = iconMap[h.icon] || Star;
              return (
                <motion.div
                  key={h.id}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-gold/40 bg-white flex items-center justify-center mx-auto mb-3 group-hover:border-gold group-hover:bg-forest/5 transition-all duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <p className="font-inter font-semibold text-dark-text text-sm leading-tight">
                    {h.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <Link to="/about" className="btn-gold inline-flex">
              Discover More
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <img
              src={WHY_IMAGE}
              alt="Green road through Vanam Valley development"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none" />
            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20 -z-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #D8B879 1.5px, transparent 1.5px)',
                backgroundSize: '8px 8px',
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySection;

