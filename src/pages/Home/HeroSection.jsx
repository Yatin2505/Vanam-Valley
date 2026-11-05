// src/pages/Home/HeroSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X } from 'lucide-react';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-10 lg:px-16">
        
        {/* ── Looping Background Drone Aerial Video ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Forest green cinematic gradient overlays for pristine readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D18] via-[#002620]/70 to-[#001D18]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D18]/90 via-[#001D18]/50 to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,29,24,0.75)]" />
        </div>

        {/* ── Hero Main Content ── */}
        <div className="relative z-10 max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Expressive Headline - Never Clipped, Responsive */}
            <h1 className="font-playfair font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-1">
              Where Nature
            </h1>

            <h1 className="font-playfair font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-2">
              <span className="text-white">Meets</span>
            </h1>

            <h1 className="font-playfair font-bold italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight text-[#D8B879] mb-6">
              Your Future.
            </h1>

            {/* Sub-headline */}
            <p className="font-inter font-light text-white/90 text-sm sm:text-base md:text-xl leading-relaxed mb-8 max-w-xl">
              Premium Residential &amp; Commercial Plots in Balaghat
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/projects" className="btn-gold shadow-gold text-xs px-7 py-3.5">
                Explore Projects
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="btn-glass text-xs px-6 py-3.5"
                aria-label="View Project Film"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white mr-1">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </div>
                View Video
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 text-white/60">
              <div className="w-5 h-8 rounded-full border border-gold/50 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-1.5 rounded-full bg-gold"
                />
              </div>
              <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/70">
                SCROLL TO EXPLORE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Project Video Lightbox Modal ── */}
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
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[#002620] border border-gold/30 rounded-3xl overflow-hidden aspect-video flex flex-col items-center justify-center shadow-card-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                onClick={() => setVideoOpen(false)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="/hero-poster.jpg"
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
