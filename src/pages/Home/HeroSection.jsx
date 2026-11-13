// src/pages/Home/HeroSection.jsx
// Strict Visual Reference Implementation matching uploaded designs
// Background: Vanam Valley Grand Entrance Sunset (Image 1)
// Layout & Composition: Editorial Real Estate Hero (Image 2)

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
      // Fallback scroll down to projects section if masterplan anchor is elsewhere
      const fallback = document.getElementById('projects-section') || document.getElementById('overview-section');
      if (fallback) fallback.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#001713] pt-28 sm:pt-32 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-14">
      
      {/* ── Background: Genuine Vanam Valley Entrance Sunset ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hero/vanam-hero-background.jpg"
          alt="Vanam Valley Grand Entrance Arch and Plotted Development in Balaghat"
          className="w-full h-full object-cover object-[center_right] md:object-center transform scale-[1.01]"
          loading="eager"
        />

        {/* 
          Directional Gradients:
          Deep emerald-black fade on left to ensure absolute text crispness,
          while preserving entrance archway, illuminated road, and sunset sky on right.
        */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-[58%] bg-gradient-to-r from-[#001410] via-[#001410]/85 to-transparent z-[1]" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#001410]/80 via-[#001410]/30 to-transparent z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#001410]/95 via-[#001410]/50 to-transparent z-[1]" />

        {/* Ambient Top & Bottom Foliage Framing Accents (Organic Silhouette) */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 opacity-40 pointer-events-none z-[2]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-950">
            <path d="M0 0C40 80 80 120 180 140C120 180 60 160 0 200V0Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* ── Main Two-Column Hero Stage ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto pt-6 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* ── Left Column: Editorial Content & Conversion Triggers ── */}
        <div className="lg:col-span-7 xl:col-span-7 text-left">
          
          {/* Eyebrow Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E5C378]" />
            <span className="text-white/90 font-inter text-xs font-medium tracking-wide">
              Balaghat, M.P. <span className="text-white/40 mx-1.5">|</span> Residential &amp; Commercial Plotting
            </span>
          </div>

          {/* Monumental Editorial Headline matching strict reference */}
          <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.08] tracking-tight mb-5">
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
          <p className="font-inter text-white/85 text-sm sm:text-base md:text-[15px] font-normal leading-relaxed mb-8 max-w-xl">
            Explore residential and commercial land parcels in Balaghat with planned internal road connectivity, landscaped green spaces, and transparent property consulting every step of the way.
          </p>

          {/* Two Prominent Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-9">
            {/* Primary Action: Gold Filled Pill */}
            <Link
              to="/projects/residential"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5C378] hover:bg-[#F5DA98] text-[#001D18] font-inter font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Residential Plots</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action: Frosted Video Pill */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white font-inter font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-[#E5C378]/70 hover:-translate-y-0.5"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* 4-Item Horizontal Value Proposition Strip */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-black/45 border border-white/15 backdrop-blur-md rounded-2xl p-3 sm:px-5 sm:py-3.5 shadow-xl max-w-2xl">
            {/* Value 1 */}
            <div className="flex items-center gap-3 px-3 py-2 sm:py-0 w-1/2 sm:w-auto">
              <Gem className="w-5 h-5 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Prime Location</div>
                <div className="text-[10px] font-inter text-white/60">In Balaghat</div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-3 px-3 py-2 sm:py-0 w-1/2 sm:w-auto">
              <ShieldCheck className="w-5 h-5 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Secure Investment</div>
                <div className="text-[10px] font-inter text-white/60">For a Better Tomorrow</div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-3 px-3 py-2 sm:py-0 w-1/2 sm:w-auto">
              <Trees className="w-5 h-5 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Green &amp; Peaceful</div>
                <div className="text-[10px] font-inter text-white/60">Living Environment</div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-center gap-3 px-3 py-2 sm:py-0 w-1/2 sm:w-auto">
              <Handshake className="w-5 h-5 text-[#E5C378] flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs font-inter font-semibold text-white leading-tight">Trusted by Many</div>
                <div className="text-[10px] font-inter text-white/60">Growing Community</div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Right Column: Floating Project Status & Specifications Card ── */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-end mt-4 lg:mt-0">
          <div className="w-full max-w-md bg-[#001D18]/85 border border-[#E5C378]/30 rounded-3xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden transition-all duration-300 hover:border-[#E5C378]/55">
            
            {/* Top Status Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003B30] border border-emerald-500/35">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-inter font-bold tracking-wider uppercase text-emerald-300">
                  Project Status
                </span>
              </div>
              <span className="text-white/60 font-inter text-xs">In Planning</span>
            </div>

            {/* Title + Plotted Layout Aerial Thumbnail */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-1">
                <h3 className="font-playfair font-bold text-white text-lg sm:text-xl leading-snug">
                  Vanam Valley Land Development
                </h3>
                <p className="font-inter text-white/70 text-xs leading-relaxed mt-1.5">
                  A planned plotted project designed to provide residential plots for home builders and investors in Balaghat.
                </p>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-emerald-500/30 shadow-md bg-emerald-950">
                <img
                  src="/images/hero/hero-plan-thumb.jpg"
                  alt="Vanam Valley Plotted Layout Thumbnail"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Metrics & Dimensions Row */}
            <div className="border-t border-white/10 pt-4 mb-4 grid grid-cols-2 gap-4">
              {/* Residential Metric */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#E5C378]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-inter text-white/60 uppercase tracking-wider">Residential Plots</div>
                  <div className="text-sm font-bold text-white font-inter mt-0.5">1,200 – 2,000</div>
                  <div className="text-[10px] font-inter text-white/50">Sq.ft. (approx. formats)</div>
                </div>
              </div>

              {/* Commercial Metric */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#E5C378]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M4 19L8 5" strokeLinecap="round" />
                    <path d="M20 19L16 5" strokeLinecap="round" />
                    <path d="M12 7V9" strokeLinecap="round" />
                    <path d="M12 13V15" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-inter text-white/60 uppercase tracking-wider">Commercial Plots</div>
                  <div className="text-sm font-bold text-white font-inter mt-0.5">Road Frontage</div>
                  <div className="text-[10px] font-inter text-white/50">High visibility &amp; accessibility</div>
                </div>
              </div>
            </div>

            {/* 2D Layout Map Full-Width Pill Button */}
            <button
              type="button"
              onClick={scrollToMasterplan}
              className="w-full py-2.5 px-4 rounded-full border border-[#E5C378]/40 bg-white/5 hover:bg-[#E5C378] text-[#E5C378] hover:text-[#001D18] font-inter text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
            >
              <span>→</span>
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore 2D Layout Map</span>
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom Anchor: Organic Wave & Scroll Indicator ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-4 flex items-center justify-between">
        
        {/* Curved Contour Wave & Scroll Button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={scrollToOverview}
            className="inline-flex items-center gap-2.5 text-xs font-inter text-white/80 hover:text-[#E5C378] transition-colors tracking-wide focus:outline-none group"
          >
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E5C378] transition-colors">
              <ChevronDown className="w-4 h-4 text-[#E5C378] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="font-medium text-xs">Scroll Down</span>
          </button>

          {/* Decorative subtle gold curve SVG along bottom left */}
          <div className="hidden sm:block w-48 h-6 overflow-hidden opacity-35">
            <svg viewBox="0 0 200 24" fill="none" className="w-full h-full text-[#E5C378]">
              <path d="M0 18C50 18 80 4 140 4C180 4 190 14 200 14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Development Location Tag */}
        <span className="text-[11px] font-mono text-white/40 tracking-wider uppercase">
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
