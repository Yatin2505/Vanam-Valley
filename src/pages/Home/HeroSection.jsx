// src/pages/Home/HeroSection.jsx
// Redesigned Luxury Hero Section with Perfect Proportions & Visual Balance
// 50/50 Balanced Layout: Bold Typographic Left Column & Striking 3D Island Visual

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mouse,
  MapPin,
  Home,
  ShieldCheck,
  TreePine,
  BarChart3,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen select-none overflow-hidden">
      {/* ───── BACKGROUND (RIGHT SIDE 100% PURE WHITE, LEFT ARCHITECTURAL CURVES) ───── */}
      {/* 1. Base Canvas: 100% Crisp White Base */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      {/* 2. Dedicated Right-Side Pure White Canvas (ensures right side remains pure white) */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-white pointer-events-none z-0" />

      {/* 3. Left-Side Architectural Organic Curves & Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        
        {/* Sweeping Left Organic Curved Green Shape – flows from top-left downwards */}
        <div
          className="absolute"
          style={{
            top: '-15%',
            left: '-12%',
            width: '52%',
            height: '85%',
            borderRadius: '0 0 65% 0',
            background: 'linear-gradient(135deg, rgba(26,60,42,0.07) 0%, rgba(45,90,67,0.13) 60%, rgba(45,90,67,0.01) 100%)',
          }}
        />

        {/* Inner Accent Curve – elegant sage contour */}
        <div
          className="absolute"
          style={{
            top: '-10%',
            left: '-8%',
            width: '44%',
            height: '75%',
            borderRadius: '0 0 60% 0',
            borderRight: '1.5px solid rgba(45,90,67,0.14)',
            borderBottom: '1.5px solid rgba(45,90,67,0.14)',
          }}
        />

        {/* Subtle Gold Hairline Accent Line tracing the left curve */}
        <div
          className="absolute"
          style={{
            top: '-5%',
            left: '-5%',
            width: '39%',
            height: '70%',
            borderRadius: '0 0 55% 0',
            borderRight: '1px solid rgba(216,184,121,0.3)',
            borderBottom: '1px solid rgba(216,184,121,0.3)',
          }}
        />

        {/* Left-Mid Topographic Survey Arc Accent */}
        <div
          className="absolute"
          style={{
            top: '55%',
            left: '3%',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            border: '1.5px solid rgba(45,90,67,0.08)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '0%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(45,90,67,0.06)',
          }}
        />

        {/* Soft Golden Warm Ambient Glow behind Left Headline */}
        <div
          className="absolute"
          style={{
            top: '20%',
            left: '5%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(216,184,121,0.07) 0%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Fine Architectural Vertical Hairline – far left edge */}
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: '4px',
            background: 'linear-gradient(to bottom, transparent 10%, rgba(45,90,67,0.16) 40%, rgba(45,90,67,0.16) 60%, transparent 90%)',
          }}
        />

        {/* Lower Left Horizontal Transition Line */}
        <div
          className="absolute left-0"
          style={{
            bottom: '18%',
            width: '45%',
            height: '1px',
            background: 'linear-gradient(to right, rgba(45,90,67,0.12), transparent)',
          }}
        />

      </div>


        {/* ───── MAIN CONTENT CONTAINER ───── */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-12 flex-1 flex flex-col justify-center">

          {/* 50/50 Golden Ratio Grid: 6 cols Left, 6 cols Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── LEFT COLUMN: Bold Typography, Subtext & Actions (6 Cols) ── */}
            <div className="lg:col-span-6 space-y-7 text-left">

              {/* Category Pill Badge */}
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2D5A43]/10 border border-[#2D5A43]/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse" />
                <span className="text-xs font-outfit font-bold tracking-[0.22em] uppercase text-[#2D5A43]">
                  Premium Plotted Development · Balaghat
                </span>
              </motion.div>

              {/* Grand Headline with Cursive Underline */}
              <motion.h1
                className="font-outfit font-black text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.08] tracking-tight"
                {...fadeUp(0.12)}
              >
                Building a <br />
                <span className="relative inline-block font-playfair italic font-normal text-[#2D5A43]">
                  Better Tomorrow
                  {/* Decorative underline matching reference */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5"
                    viewBox="0 0 260 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 4 10 C 50 3, 140 4, 210 7.5 C 235 8.5, 252 10, 258 7 C 242 12.5, 185 13.5, 125 11.5 C 70 10, 30 12, 4 10 Z"
                      fill="#2D5A43"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Sub-headline Paragraph (Enlarged & Substantial) */}
              <motion.p
                className="font-inter text-base sm:text-lg lg:text-xl text-[#1a1a1a]/75 max-w-xl leading-relaxed"
                {...fadeUp(0.24)}
              >
                At <strong className="text-[#1a1a1a] font-semibold">Vanam Valley</strong>, we believe in creating more than just plots — we create opportunities for a better life, stronger families, and a prosperous future in Balaghat.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-2"
                {...fadeUp(0.36)}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-[#1a3c2a]/25 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <span>Explore Our Projects</span>
                  <span className="w-6 h-6 rounded-full bg-[#D8B879] flex items-center justify-center text-[#1a3c2a]">
                    <ArrowRight size={13} />
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#FAF8F3] text-[#1a3c2a] border border-[#1a3c2a]/20 font-outfit font-semibold text-sm sm:text-base tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <Calendar size={16} className="text-[#2D5A43]" />
                  <span>Schedule Site Visit</span>
                </button>
              </motion.div>

              {/* Subtle Trust Badges directly under CTAs */}
              <motion.div
                className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-outfit font-semibold text-[#1a1a1a]/75"
                {...fadeUp(0.44)}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#2D5A43]" />
                  <span>100% Freehold Title</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#2D5A43]" />
                  <span>30–40 Ft Paved Roads</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#2D5A43]" />
                  <span>On-Ground Demarcation</span>
                </div>
              </motion.div>

            </div>

            {/* ── RIGHT COLUMN: Full 3D Animated Isometric Island with Realistic Reflection & Multi-Layer Shadows ── */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center lg:justify-end [perspective:1500px]">

              {/* Environmental Ambient Light Glow behind Island (Embeds it into background) */}
              <div
                className="pointer-events-none absolute -top-10 right-0 w-[550px] lg:w-[680px] h-[550px] rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(45,90,67,0.18) 0%, rgba(216,184,121,0.12) 40%, transparent 70%)',
                }}
              />

              {/* Floating Top-Right "High Investment Value" Badge */}
              <motion.div
                className="absolute -top-5 right-2 sm:right-6 lg:right-4 z-30 bg-[#1a3c2a] text-white rounded-2xl px-5 py-3.5 shadow-2xl border border-white/15 flex items-center gap-3 backdrop-blur-md"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  scale: 1,
                }}
                transition={{
                  y: { duration: 5, ease: 'easeInOut', repeat: Infinity },
                  opacity: { delay: 0.4, duration: 0.6 },
                }}
              >
                <span className="w-9 h-9 rounded-xl bg-[#D8B879]/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={18} className="text-[#D8B879]" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-outfit font-bold leading-tight">High Investment</p>
                  <p className="text-xs font-outfit font-bold leading-tight text-[#D8B879]">Value Corridor</p>
                </div>
                <ArrowRight size={14} className="text-white/60 ml-1" />
              </motion.div>

              {/* Floating Bottom-Left "Demarcated Masterplan Plots" Badge */}
              <motion.div
                className="absolute top-[58%] -left-2 sm:left-4 z-30 hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-[#1a3c2a] text-[11px] font-outfit font-bold shadow-xl border border-white/60"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 6, 0],
                }}
                transition={{
                  y: { duration: 5.5, ease: 'easeInOut', repeat: Infinity },
                  opacity: { delay: 0.7, duration: 0.6 },
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A43] animate-ping" />
                <span>Demarcated Masterplan Plots</span>
              </motion.div>

              {/* ── 3D FLOATING ISLAND WRAPPER ── */}
              <motion.div
                className="relative z-20 w-full flex justify-center lg:justify-end [transform-style:preserve-3d]"
                animate={{
                  y: [-14, 14, -14],
                  rotateX: [2.5, -2.5, 2.5],
                  rotateY: [-3.5, 3.5, -3.5],
                  rotateZ: [-0.6, 0.6, -0.6],
                }}
                transition={{
                  duration: 6,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              >
                {/* Center Pin Animated Glowing Beacon / Radar Rings */}
                <div className="absolute top-[22%] left-[56%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
                  <span className="absolute -inset-5 rounded-full bg-[#D8B879]/35 blur-md animate-pulse" />
                  <span className="absolute -inset-3 rounded-full border-2 border-[#D8B879] animate-ping opacity-70" />
                  <span className="w-4 h-4 rounded-full bg-[#D8B879] shadow-[0_0_25px_#D8B879] block ring-2 ring-white" />
                </div>

                {/* Primary Island Image with Smooth Anti-Aliasing */}
                <img
                  src="/images/hero/hero-island.png"
                  alt="Vanam Valley 3D Isometric Plotted Development"
                  className="w-full max-w-[560px] sm:max-w-[650px] lg:max-w-[720px] xl:max-w-[780px] object-contain drop-shadow-[0_20px_30px_rgba(10,25,18,0.25)] drop-shadow-[0_35px_55px_rgba(10,25,18,0.18)] transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                />
              </motion.div>

              {/* ── DUAL 3D CONTACT & AMBIENT GROUND SHADOWS ── */}
              <div className="relative w-full flex flex-col items-center justify-center lg:items-end pointer-events-none select-none z-10 -mt-6">
                {/* 1. Deep Core Contact Shadow (Direct Grounding) */}
                <motion.div
                  className="w-[45%] max-w-[340px] h-4 bg-[#05140d]/65 rounded-full blur-sm"
                  animate={{
                    scale: [0.94, 1.06, 0.94],
                    opacity: [0.55, 0.75, 0.55],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />

                {/* 2. Soft Ambient Diffuse Shadow (Broad Optical Footprint) */}
                <motion.div
                  className="w-[78%] max-w-[580px] h-10 bg-[#0c261b]/30 rounded-full blur-xl -mt-2"
                  animate={{
                    scale: [0.92, 1.08, 0.92],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* ── 3D GROUND MIRROR REFLECTION WITH VERTICAL GRADIENT FADE ── */}
              <motion.div
                className="relative w-full flex justify-center lg:justify-end overflow-hidden select-none pointer-events-none -mt-5"
                style={{
                  height: '160px',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.04) 55%, transparent 85%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.04) 55%, transparent 85%)',
                }}
                animate={{
                  opacity: [0.32, 0.52, 0.32],
                  y: [6, -6, 6],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 6,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              >
                <img
                  src="/images/hero/hero-island.png"
                  alt="Vanam Valley 3D Ground Reflection"
                  className="w-full max-w-[560px] sm:max-w-[650px] lg:max-w-[720px] xl:max-w-[780px] object-contain transform scale-y-[-1] origin-top blur-[1.5px]"
                />
              </motion.div>

            </div>

          </div>

          {/* ───── BOTTOM FEATURES BAR ───── */}
          <motion.div
            className="mt-14 lg:mt-20 pt-8 border-t border-[#1a1a1a]/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            {...fadeUp(0.55)}
          >
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { icon: Home, label: 'Planned', sub: '30–40ft Roads' },
                { icon: ShieldCheck, label: 'Clear Title', sub: '100% Freehold' },
                { icon: TreePine, label: 'Green Living', sub: 'Serene Buffer Zones' },
                { icon: MapPin, label: 'Prime Location', sub: 'Balaghat, M.P.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#1a3c2a]">
                  <span className="w-9 h-9 rounded-xl bg-[#1a3c2a]/[0.08] flex items-center justify-center flex-shrink-0">
                    <item.icon size={17} />
                  </span>
                  <div className="leading-tight text-left">
                    <p className="text-xs font-outfit font-bold text-[#1a1a1a]">{item.label}</p>
                    <p className="text-[11px] font-outfit text-[#1a3c2a]/75">{item.sub}</p>
                  </div>
                  {i < 3 && (
                    <span className="hidden md:block w-px h-6 bg-[#1a1a1a]/10 ml-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Location Pill */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1a3c2a]/[0.06] hover:bg-[#1a3c2a]/[0.12] border border-[#1a3c2a]/10 transition-all text-xs font-outfit font-semibold text-[#1a3c2a] group"
            >
              <span className="w-6 h-6 rounded-full bg-[#1a3c2a] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={12} />
              </span>
              <span>Near Hariom Nagar, Balaghat</span>
              <ArrowRight size={13} className="text-[#1a3c2a]/60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>

      </section>

      {/* Accessible Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Schedule an On-Ground Site Visit"
        subtitle="Our local Balaghat property desk will arrange an escorted tour across our plotted developments."
        source="hero_schedule_visit"
      />
    </>
  );
};

export default HeroSection;
