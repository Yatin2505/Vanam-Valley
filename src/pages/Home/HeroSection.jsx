// src/pages/Home/HeroSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X, CheckCircle2, ChevronDown } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#001410] pt-28 pb-10 md:pt-36 md:pb-14 px-5 md:px-10 lg:px-16">

        {/* ── Background Looping Aerial Plotted Development Video ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

          {/* Clean contrast gradient on left (right side remains clear for real-estate footage) */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#001713]/92 via-[#001713]/65 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#001410] to-transparent" />
        </div>

        {/* ── Main Hero Narrative ── */}
        <div className="relative z-10 max-w-3xl w-full my-auto text-left">
          <div>
            {/* Category Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-gold/40 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold font-inter font-semibold text-[11px] tracking-[0.25em] uppercase">
                Real Estate · Plotting · Property Consulting
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-5">
              Find the Right Plot for <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                Your Future.
              </span>
            </h1>

            {/* Clear, Accessible Subtitle */}
            <p className="font-inter font-light text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Explore residential and commercial plots in Balaghat with planned road connectivity, verified documentation, and transparent property guidance.
            </p>

            {/* 3 Clear Conversion CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Link
                to="/projects/residential"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002620] font-inter font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_24px_rgba(216,184,121,0.4)] hover:scale-[1.02] active:scale-95"
              >
                <span>Residential Plots</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/projects/commercial"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-gold/50 text-white font-inter font-medium text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Commercial Plots</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#002620]/80 hover:bg-[#002620] border border-gold/40 text-gold font-inter font-medium text-xs tracking-wider uppercase px-5 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Verified Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-inter text-white/75 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold" />
                <span>Clear Title Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold" />
                <span>Internal Road Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold" />
                <span>Balaghat Local Office</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Scroll Indicator ── */}
        <div className="relative z-10 pt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 text-white/70 font-inter text-[10px] tracking-wider uppercase backdrop-blur-sm bg-black/30">
            <ChevronDown size={12} className="text-gold animate-bounce" />
            <span>EXPLORE PROJECT DETAILS</span>
          </div>

          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-inter text-white/80 hover:text-gold transition-colors"
          >
            <Play size={13} className="text-gold" />
            <span>Watch Aerial View</span>
          </button>
        </div>

      </section>

      {/* ── Video Lightbox ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#001D18] border border-gold/40 rounded-3xl overflow-hidden aspect-video shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-black/60"
                onClick={() => setVideoOpen(false)}
                aria-label="Close"
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

      {/* ── Enquiry Modal ── */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Enquire About Plots in Balaghat"
        subtitle="Tell us whether you are looking for residential plots, commercial frontage, or property consulting."
        source="hero_section"
      />
    </>
  );
};

export default HeroSection;
