// src/pages/Home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, ChevronDown } from 'lucide-react';

// Staggered word-reveal animation
const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#001410]">

        {/* ── Background Looping Drone Video ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Vignette: darkens only the outer edges; left panel only for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001410]/88 via-[#001410]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001410]/70 via-transparent to-[#001410]/50" />
          {/* Very subtle right edge darkening */}
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#001410]/30 to-transparent" />
        </div>

        {/* ── Monumental Hero Content ── */}
        <div className="relative z-10 flex flex-col justify-center flex-1 px-5 md:px-10 lg:px-16 pt-32 pb-10 md:pt-44 md:pb-14">
          <div className="max-w-4xl">

            {/* Eyebrow location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
              <span className="text-gold font-inter font-medium text-[11px] tracking-[0.28em] uppercase">
                Vanam Valley Group · Balaghat, M.P.
              </span>
            </motion.div>

            {/* Monumental editorial headline — word-stagger */}
            <h1 className="font-playfair font-normal leading-[1.05] tracking-tight mb-6 overflow-hidden">
              {/* Line 1: "Where Nature" */}
              <span className="block text-white text-[clamp(2.6rem,7.5vw,7rem)]">
                {['Where', 'Nature'].map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i + 1}
                    variants={wordVariants}
                    initial="hidden"
                    animate={loaded ? 'visible' : 'hidden'}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2: "Meets" */}
              <span className="block text-white text-[clamp(2.6rem,7.5vw,7rem)]">
                <motion.span
                  custom={3}
                  variants={wordVariants}
                  initial="hidden"
                  animate={loaded ? 'visible' : 'hidden'}
                  className="inline-block"
                >
                  Meets
                </motion.span>
              </span>
              {/* Line 3: "Your Future." in italic champagne gold */}
              <span className="block text-[clamp(2.6rem,7.5vw,7rem)]">
                <motion.span
                  custom={4}
                  variants={wordVariants}
                  initial="hidden"
                  animate={loaded ? 'visible' : 'hidden'}
                  className="inline-block italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent"
                >
                  Your Future.
                </motion.span>
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.6 }}
              className="font-inter font-light text-white/85 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Premium Residential &amp; Commercial Plots in Balaghat
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002620] font-inter font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(216,184,121,0.45)] hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 bg-white/8 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 text-white font-inter font-medium text-xs tracking-wider uppercase px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                aria-label="Play Video Tour"
              >
                <span className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-gold group-hover:text-[#002620] flex items-center justify-center transition-colors duration-200">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </span>
                <span>View Video</span>
              </button>
            </motion.div>

            {/* Key stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/10"
            >
              {[
                { label: 'Residential & Commercial', sub: 'Dual Plot Categories' },
                { label: 'Clear Title', sub: 'Transparent Documentation' },
                { label: 'Balaghat, M.P.', sub: 'Strategic Location' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-playfair font-semibold text-white text-sm sm:text-base">{stat.label}</div>
                  <div className="font-inter text-gold/80 text-[10px] tracking-widest uppercase mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="relative z-10 pb-7 px-5 md:px-10 lg:px-16 flex items-center gap-3"
        >
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <ChevronDown size={12} className="text-white/60 animate-bounce" />
            <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/60">SCROLL TO EXPLORE</span>
          </div>
        </motion.div>

      </section>

      {/* ── Video Lightbox ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-[#001D18] border border-gold/40 rounded-3xl overflow-hidden aspect-video shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-black/60 hover:bg-black/90 transition-colors"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
              >
                <X size={20} />
              </button>
              <video controls autoPlay className="w-full h-full object-cover" poster="/hero-poster.jpg">
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
