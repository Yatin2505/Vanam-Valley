// src/pages/Home/HeroSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, Sparkles, MapPin, Compass } from 'lucide-react';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 px-5 md:px-10 lg:px-16 bg-[#001713]">
        
        {/* ── Background Looping Aerial Plotted Development Video ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Left half green shadow ONLY for text contrast (Right half of the video is 100% visible and clear) */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#001D18]/90 via-[#001D18]/60 to-transparent pointer-events-none" />

          {/* Subtle top shade for navbar legibility */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

          {/* Subtle bottom fade to transition to the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#001713] to-transparent pointer-events-none" />
        </div>

        {/* ── Main Hero Narrative ── */}
        <div className="relative z-10 max-w-4xl w-full my-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Architectural Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span className="text-gold font-inter font-medium text-[11px] tracking-[0.25em] uppercase">
                Vanam Valley Group • Balaghat, M.P.
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-playfair font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.75rem] leading-[1.05] tracking-tight mb-6">
              Beyond Ordinary <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                Living.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="font-inter font-light text-white/85 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Discover a new perspective on residential and commercial opportunities at Vanam Valley. Master-planned plotted acreage rooted in nature and shaped for generations.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/projects"
                className="btn-gold shadow-gold hover:shadow-gold-glow text-xs px-8 py-4"
              >
                <span>Explore Masterplan</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="btn-glass text-xs px-7 py-4 group"
                aria-label="Experience Video Tour"
              >
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-white mr-1 group-hover:bg-gold group-hover:text-[#002620] transition-colors">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </div>
                <span>Experience Film</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Metric Ribbon & Scroll Indicator ── */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-left">
            <div>
              <div className="font-playfair font-bold text-xl sm:text-2xl text-white">
                Residential &amp; Commercial
              </div>
              <div className="text-[11px] font-inter text-gold/80 tracking-wider uppercase mt-0.5">
                Dual Plotting Categories
              </div>
            </div>

            <div>
              <div className="font-playfair font-bold text-xl sm:text-2xl text-white">
                100% Clear Title
              </div>
              <div className="text-[11px] font-inter text-gold/80 tracking-wider uppercase mt-0.5">
                Transparent Verification
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="font-playfair font-bold text-xl sm:text-2xl text-white">
                Balaghat Region
              </div>
              <div className="text-[11px] font-inter text-gold/80 tracking-wider uppercase mt-0.5">
                Strategic Development Zone
              </div>
            </div>
          </div>

          {/* Scroll Down Anchor */}
          <div className="hidden lg:flex items-center gap-3 text-white/50">
            <div className="w-5 h-8 rounded-full border border-gold/40 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-gold"
              />
            </div>
            <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/60">
              EXPLORE BELOW
            </span>
          </div>

        </div>
      </section>

      {/* ── Interactive Full-Screen Video Lightbox Modal ── */}
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[#001D18] border border-gold/40 rounded-3xl overflow-hidden aspect-video flex flex-col items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-black/60 hover:bg-black/90 transition-colors"
                onClick={() => setVideoOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
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
