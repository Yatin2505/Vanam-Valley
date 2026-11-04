// src/pages/Home/HeroSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, ChevronDown } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1920&q=90';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Vanam Valley aerial view of premium plotted development"
            className="w-full h-full object-cover object-center"
            priority="true"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-hero-overlay" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/40 via-transparent to-transparent" />
        </div>

        {/* Gold decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-32">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="flex items-center gap-2 mb-5">
              <span className="section-label tracking-[0.3em]">Vanam Valley</span>
              <div className="h-px w-10 bg-gold/50" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="font-playfair font-bold text-white leading-[1.1] mb-2"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Where Nature Meets
            </motion.h1>
            <motion.h1
              variants={item}
              className="font-playfair font-bold italic text-gold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Your Future.
            </motion.h1>

            {/* Sub-headline */}
            <motion.div variants={item} className="mb-8">
              <p className="text-white/90 font-inter text-lg md:text-xl font-light leading-snug">
                Premium Residential &amp; Commercial Plots
              </p>
              <p className="text-white/60 font-inter text-base mt-1">
                in the heart of Balaghat
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-gold text-sm px-6 py-3">
                Explore Projects
                <ArrowRight size={15} />
              </Link>
              <button
                className="btn-outline-white text-sm px-6 py-3"
                onClick={() => setVideoOpen(true)}
              >
                <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                  <Play size={10} fill="white" className="ml-0.5" />
                </div>
                View Video
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="flex items-center gap-2 mt-12 text-white/50"
            >
              <div className="scroll-indicator">
                <ChevronDown size={18} />
              </div>
              <span className="font-inter text-xs tracking-[0.2em] uppercase">Scroll to Explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-forest-deep rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <Play size={24} className="text-gold ml-1" />
                </div>
                <p className="font-playfair text-white text-xl mb-2">Project Video</p>
                <p className="font-inter text-white/50 text-sm">
                  Video content will be added here. Please contact us for a site visit.
                </p>
              </div>
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white"
                onClick={() => setVideoOpen(false)}
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;

