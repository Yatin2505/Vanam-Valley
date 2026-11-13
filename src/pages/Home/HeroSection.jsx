// src/pages/Home/HeroSection.jsx
// Final Visual Refinement — World-Class Real Estate Landing Hero
// Directly communicates: Residential & Commercial Plotting and Property Consulting in Balaghat, M.P.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  X,
  CheckCircle2,
  MapPin,
  Compass,
  Building2,
  Home,
  PhoneCall,
  Calendar,
  Layers,
  ChevronDown,
  Sparkles,
  Maximize2
} from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import { business } from '../../data/siteData';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState('video'); // 'video' | 'aerial'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#001410] pt-28 pb-10 md:pt-36 md:pb-12 px-5 sm:px-8 lg:px-14">
        
        {/* ── Background Media: Toggleable between Cinematic Video & Aerial Land Photo ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {activeMedia === 'video' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/hero-poster.jpg"
              className="w-full h-full object-cover object-center scale-[1.02] transform transition-opacity duration-1000"
              aria-hidden="true"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          ) : (
            <img
              src="/hero-poster.jpg"
              alt="Aerial View of Plotted Development Parcels — Vanam Valley"
              className="w-full h-full object-cover object-center filter contrast-105 brightness-95 animate-fadeIn"
            />
          )}

          {/* 
            Refined High-Contrast Gradients:
            Keeps the road, land demarcations, and development footage clearly visible in the center and right,
            while ensuring 100% typographic contrast on the left side.
          */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#001713]/95 via-[#001713]/70 to-transparent pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#001410]/80 via-[#001410]/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#001410] via-[#001410]/70 to-transparent pointer-events-none" />
        </div>

        {/* ── Top-Right Media Perspective Switcher ── */}
        <div className="absolute top-28 right-5 sm:right-8 lg:right-14 z-20 hidden sm:flex items-center gap-1.5 p-1 rounded-full bg-[#001713]/85 backdrop-blur-md border border-[#D8B879]/30 shadow-lg">
          <button
            type="button"
            onClick={() => setActiveMedia('video')}
            className={`px-3 py-1 rounded-full text-[11px] font-inter font-semibold transition-all ${
              activeMedia === 'video'
                ? 'bg-[#D8B879] text-[#001D18] shadow'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Avenue Video
          </button>
          <button
            type="button"
            onClick={() => setActiveMedia('aerial')}
            className={`px-3 py-1 rounded-full text-[11px] font-inter font-semibold transition-all ${
              activeMedia === 'aerial'
                ? 'bg-[#D8B879] text-[#001D18] shadow'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Aerial Land View
          </button>
        </div>

        {/* ── Hero Main Stage: Two-Column Architectural Composition ── */}
        <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left Column: Editorial Brand Headline & Conversion CTAs (7 Cols) ── */}
          <div className="lg:col-span-7 text-left">
            
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#D8B879]/40 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D8B879] animate-pulse" />
              <span className="text-[#D8B879] font-inter font-semibold text-[11px] sm:text-xs tracking-[0.22em] uppercase">
                Balaghat, M.P. · Residential &amp; Commercial Plotting
              </span>
            </div>

            {/* Monumental Real Estate Headline */}
            <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight mb-5">
              Find the Right Plot for <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                Your Future in Balaghat.
              </span>
            </h1>

            {/* Clear, Accessible Subtitle */}
            <p className="font-inter font-light text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Explore residential and commercial land parcels in Balaghat with planned internal road connectivity, demarcated boundaries, and transparent property consulting every step of the way.
            </p>

            {/* Three Distinct High-Conversion CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              {/* Primary: Residential Plots */}
              <Link
                to="/projects/residential"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002620] font-inter font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_6px_28px_rgba(216,184,121,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Home className="w-4 h-4 text-[#002620]" />
                <span>Explore Residential Plots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary: Commercial Plots */}
              <Link
                to="/projects/commercial"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-[#D8B879]/60 text-white font-inter font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Explore Commercial Plots</span>
              </Link>

              {/* Tertiary: Talk to Property Team */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#002620]/90 hover:bg-[#002620] border border-[#D8B879]/40 text-[#D8B879] font-inter font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Our Property Team</span>
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs font-inter text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                <span>Planned Avenues</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-inter text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                <span>Demarcated Parcels</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-inter text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                <span>Balaghat Office &amp; Team</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Floating Architectural "Project At A Glance" Card (5 Cols) ── */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-[#001713]/85 backdrop-blur-xl border border-[#D8B879]/35 shadow-2xl text-white">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    PROJECT STATUS: IN PLANNING
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  BALAGHAT, M.P.
                </span>
              </div>

              {/* Title & Micro Summary */}
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                Vanam Valley Land Development
              </h2>
              <p className="font-inter text-xs text-white/70 leading-relaxed mb-6">
                A planned plotted project designed to provide residential plots for home builders and high-frontage commercial plots for business ventures in Balaghat.
              </p>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8B879] block mb-0.5">
                    Residential Plots
                  </span>
                  <span className="font-playfair text-lg font-bold text-white">1,200 – 2,000</span>
                  <span className="text-[10px] text-white/60 block">sq.ft sample formats</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-0.5">
                    Commercial Plots
                  </span>
                  <span className="font-playfair text-lg font-bold text-white">Road Frontage</span>
                  <span className="text-[10px] text-white/60 block">High vehicular visibility</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => scrollToSection('masterplan-section')}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-inter text-xs font-semibold uppercase tracking-wider transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#D8B879]" />
                    <span>Explore 2D Layout Map</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 font-inter text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>Play Aerial Development Video</span>
                </button>
              </div>

              {/* Disclaimer micro-tag */}
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 text-center">
                * Conceptual representative overview · Balaghat, MP
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Section Anchors / Video Trigger ── */}
        <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl w-full mx-auto">
          <button
            type="button"
            onClick={() => scrollToSection('overview-section')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white font-inter text-xs tracking-wider uppercase backdrop-blur-md bg-black/40 transition-colors"
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#D8B879] animate-bounce" />
            <span>Scroll to Project Overview</span>
          </button>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-inter text-white/85 hover:text-[#D8B879] transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-[#D8B879]/20 flex items-center justify-center text-[#D8B879]">
              <Play className="w-3 h-3 fill-[#D8B879]" />
            </span>
            <span>Watch Drone Perspective Video</span>
          </button>
        </div>

      </section>

      {/* ── High-Definition Aerial Video Modal ── */}
      <AnimatePresence>
        {videoOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#001410] rounded-3xl overflow-hidden border border-[#D8B879]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  <source src="/hero-bg.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="p-4 sm:p-5 bg-[#001713] border-t border-white/10 flex items-center justify-between text-xs font-inter text-white/70">
                <span>Vanam Valley Plotted Development — Aerial Layout Perspective</span>
                <span className="font-mono text-[#D8B879]">Representative Video</span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Lead Generation Enquiry Modal ── */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="both"
        title="Connect with Our Balaghat Property Desk"
        subtitle="Speak with our property advisors regarding residential plot sizes, commercial road frontage, and accompanied site visits in Balaghat."
        source="homepage_hero_cta"
      />
    </>
  );
};

export default HeroSection;
