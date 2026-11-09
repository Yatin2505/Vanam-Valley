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
        <div className="relative z-10 max-w-3xl w-full my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Monumental Editorial Headline */}
            <h1 className="font-playfair font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-4">
              Where Nature <br />
              Meets <br />
              <span className="italic font-normal text-gradient-gold">
                Your Future.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-inter font-light text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-xl">
              Premium Residential &amp; Commercial Plots in Balaghat
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-[#D8B879] hover:bg-[#e4ca93] text-[#002620] font-inter font-medium text-xs px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 bg-black/25 hover:bg-black/40 border border-white/25 hover:border-white/50 text-white font-inter text-xs px-5 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-95"
                aria-label="View Video"
              >
                <Play size={12} fill="currentColor" />
                <span>View Video</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Scroll Indicator Pill (Exact match to reference) ── */}
        <div className="relative z-10 pt-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/25 text-white/70 font-inter text-[10px] tracking-wider uppercase backdrop-blur-sm bg-black/20">
            <span className="w-2 h-4 rounded-full border border-white/40 flex items-start justify-center p-0.5">
              <span className="w-0.5 h-1 bg-white/80 rounded-full animate-bounce" />
            </span>
            <span>SCROLL TO EXPLORE</span>
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
