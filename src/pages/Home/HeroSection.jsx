// src/pages/Home/HeroSection.jsx
// Exact Visual Reference Implementation matching reference image & background
// Background: Vanam Valley Grand Entrance Arch, Sunset, Car & Monument (Natural Unzoomed Aspect)
// Layout: Left Column (Eyebrow -> Headline -> Desc -> Buttons -> 4 Badges) & Bottom-Right Project Status Box

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  Play,
  Gem,
  ShieldCheck,
  Trees,
  Handshake,
  BookOpen,
  ChevronDown,
  X,
} from 'lucide-react';

const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const scrollToOverview = () => {
    const el = document.getElementById('overview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMasterplan = () => {
    const el = document.getElementById('masterplan-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const fallback = document.getElementById('projects-section') || document.getElementById('overview-section');
      if (fallback) fallback.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#001713] pt-24 sm:pt-28 pb-5 px-4 sm:px-6 lg:px-10">
      
      {/* ── Background: Natural Unzoomed Vanam Valley Entrance Sunset ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hero/vanam-hero-background.jpg"
          alt="Vanam Valley Grand Entrance Arch and Plotted Development in Balaghat"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* 
          Directional Gradients:
          Ensures absolute text legibility on the left,
          while keeping the car on the road, entrance archway, and Vanam Valley sign 100% clearly visible.
        */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-[50%] bg-gradient-to-r from-[#001410]/95 via-[#001410]/65 to-transparent z-[1]" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#001410]/80 via-[#001410]/20 to-transparent z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#001410]/90 via-[#001410]/30 to-transparent z-[1]" />

        {/* Ambient Top & Bottom Foliage Silhouette Accents */}
        <div className="absolute top-0 left-0 w-48 sm:w-60 h-48 sm:h-60 opacity-25 pointer-events-none z-[2]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-950">
            <path d="M0 0C40 80 80 120 180 140C120 180 60 160 0 200V0Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* ── Unified Hero Editorial Stage: Left Stack & Bottom-Right Project Status Box ── */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto my-auto pt-4 pb-2 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        
        {/* Left Column: Eyebrow -> Headline -> Description -> 2 CTAs -> 4 Badges Strip */}
        <div className="max-w-2xl lg:max-w-3xl text-left">
          
          {/* Eyebrow Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 border border-white/15 backdrop-blur-md mb-5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E5C378]" />
            <span className="text-white/90 font-inter text-xs font-medium tracking-wide">
              Balaghat, M.P. <span className="text-white/40 mx-1.5">|</span> Residential &amp; Commercial Plotting
            </span>
          </div>

          {/* Monumental Editorial Headline matching strict reference */}
          <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl xl:text-[64px] leading-[1.1] tracking-tight mb-4">
            Find the Right Plot for <br />
            <span className="italic font-normal text-[#E5C378] font-playfair tracking-normal">
              Your Future
            </span> <br />
            <span className="relative inline-block font-playfair italic font-normal text-white">
              in Balaghat
              {/* Hand-drawn Golden Underline Swoosh */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#E5C378]"
                viewBox="0 0 260 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C60 2 180 2 258 8C200 6 80 8 2 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="font-inter text-white/85 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
            Explore residential and commercial land parcels in Balaghat with planned internal road connectivity, landscaped green spaces, and transparent property consulting every step of the way.
          </p>

          {/* Two Prominent Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-7">
            {/* Primary Action: Gold Filled Pill */}
            <Link
              to="/projects/residential"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#E5C378] hover:bg-[#F5DA98] text-[#001D18] font-inter font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Residential Plots</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action: Frosted Video Pill */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white font-inter font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-[#E5C378]/70 hover:-translate-y-0.5"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* 4-Item Horizontal Value Proposition Strip (Immediately below buttons as in reference) */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-black/45 border border-white/15 backdrop-blur-md rounded-2xl p-2.5 sm:px-4 sm:py-3 shadow-xl max-w-2xl">
            {/* Value 1 */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 sm:py-0 w-1/2 sm:w-auto">
              <Gem className="w-4 h-4 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Prime Location</div>
                <div className="text-[10px] font-inter text-white/60">In Balaghat</div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 sm:py-0 w-1/2 sm:w-auto">
              <ShieldCheck className="w-4 h-4 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Secure Investment</div>
                <div className="text-[10px] font-inter text-white/60">For a Better Tomorrow</div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 sm:py-0 w-1/2 sm:w-auto">
              <Trees className="w-4 h-4 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Green &amp; Peaceful</div>
                <div className="text-[10px] font-inter text-white/60">Living Environment</div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 sm:py-0 w-1/2 sm:w-auto">
              <Handshake className="w-4 h-4 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Trusted by Many</div>
                <div className="text-[10px] font-inter text-white/60">Growing Community</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Floating Glass-Style Project Card ── */}
        <div className="w-full sm:w-[390px] lg:w-[410px] xl:w-[430px] flex-shrink-0">
          <div className="w-full bg-[#00221B]/90 border border-[#D8B879]/35 rounded-3xl p-5 backdrop-blur-xl shadow-2xl shadow-black/80 text-left relative overflow-hidden transition-all duration-300 hover:border-[#D8B879]/60">
            
            {/* Background Image across the upper / right part of the card */}
            <div className="absolute top-0 right-0 w-[55%] h-44 overflow-hidden pointer-events-none rounded-tr-3xl">
              <img
                src="/images/hero/hero-plan-thumb.jpg"
                alt="Plotted Layout Map Background"
                className="w-full h-full object-cover object-center filter brightness-90"
              />
              {/* Directional gradients so text on the left is 100% readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00221B] via-[#00221B]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00221B] via-[#00221B]/30 to-transparent" />
            </div>

            {/* Content on top */}
            <div className="relative z-10">
              {/* Top Status Header: PROJECT STATUS – In Planning */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00382D]/90 border border-emerald-500/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-inter font-bold tracking-wider uppercase text-emerald-300">
                    PROJECT STATUS
                  </span>
                </div>
                <span className="text-white/80 font-inter text-xs font-medium pr-1 drop-shadow">In Planning</span>
              </div>

              {/* Title & Description */}
              <div className="max-w-[270px] mb-4">
                <h3 className="font-playfair font-bold text-white text-base sm:text-lg leading-snug drop-shadow-sm">
                  Vanam Valley Land Development
                </h3>
                <p className="font-inter text-white/75 text-xs leading-relaxed mt-1 drop-shadow-sm">
                  A planned plotted project designed to provide residential plots for home builders and investors in Balaghat.
                </p>
              </div>

              {/* Two Information Sections: Residential & Commercial Plots */}
              <div className="border-t border-white/10 pt-3.5 mb-4 grid grid-cols-2 gap-3">
                {/* RESIDENTIAL PLOTS */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#D8B879]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-inter text-white/60 uppercase tracking-wider font-semibold">
                      RESIDENTIAL PLOTS
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white font-inter mt-0.5">
                      1,200 – 2,000
                    </div>
                    <div className="text-[10px] font-inter text-white/50 leading-tight">
                      Sq.ft. (approx. formats)
                    </div>
                  </div>
                </div>

                {/* COMMERCIAL PLOTS */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#D8B879]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M4 19L8 5" strokeLinecap="round" />
                      <path d="M20 19L16 5" strokeLinecap="round" />
                      <path d="M12 7V9" strokeLinecap="round" />
                      <path d="M12 13V15" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-inter text-white/60 uppercase tracking-wider font-semibold">
                      COMMERCIAL PLOTS
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white font-inter mt-0.5">
                      Road Frontage
                    </div>
                    <div className="text-[10px] font-inter text-white/50 leading-tight">
                      High visibility &amp; accessibility
                    </div>
                  </div>
                </div>
              </div>

              {/* Full-width Outlined Gold Button: "→ Explore 2D Layout Map" */}
              <button
                type="button"
                onClick={scrollToMasterplan}
                className="w-full py-2.5 px-4 rounded-full border border-[#D8B879] bg-transparent hover:bg-[#D8B879] text-[#D8B879] hover:text-[#001D18] font-inter text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>→</span>
                <span>Explore 2D Layout Map</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom Bar: Scroll Down & Branding ── */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto pt-3 flex items-center justify-between">
        
        {/* Curved Contour Wave & Scroll Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToOverview}
            className="inline-flex items-center gap-2 text-xs font-inter text-white/80 hover:text-[#E5C378] transition-colors tracking-wide focus:outline-none group"
          >
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E5C378] transition-colors">
              <ChevronDown className="w-3.5 h-3.5 text-[#E5C378] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="font-medium text-xs">Scroll Down</span>
          </button>

          {/* Decorative subtle gold curve SVG along bottom left */}
          <div className="hidden sm:block w-40 h-5 overflow-hidden opacity-30">
            <svg viewBox="0 0 200 24" fill="none" className="w-full h-full text-[#E5C378]">
              <path d="M0 18C50 18 80 4 140 4C180 4 190 14 200 14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Development Location Tag */}
        <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">
          Balaghat Plotted Development
        </span>
      </div>

      {/* ── Interactive Project Video Modal ── */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#001D18] border border-[#E5C378]/30 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#E5C378] fill-[#E5C378]" />
                  <span className="font-playfair text-white font-semibold text-sm">
                    Vanam Valley — Project Video Tour
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close video tour"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  src="/hero-bg.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-[#001410] flex items-center justify-between text-xs font-inter text-white/60">
                <span>Vanam Valley · Balaghat, Madhya Pradesh</span>
                <Link
                  to="/projects/residential"
                  onClick={() => setVideoModalOpen(false)}
                  className="text-[#E5C378] hover:underline font-semibold flex items-center gap-1"
                >
                  Explore Plots <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default HeroSection;
