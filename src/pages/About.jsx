// src/pages/About.jsx
// Complete Redesign for Vanam Valley "About Us" Page
// Faithfully matches the approved reference layout:
// 1. Hero: "Building a Better Tomorrow" with Grand Entrance Gate
// 2. Who We Are: Plotted Aerial Card, Story, Signature, Vision/Mission/Values Cards
// 3. The Vanam Valley Advantage: 5-Point Checklist & 3-Panel Slanted Collage
// 4. Our Journey: "Growing Together" Curved Dark Band with 4 Key Stats
// 5. Our Team: "A Team That Cares" with 3-Photo Interactive Tiles
// 6. Ready to Build Your Future? CTA Banner with Luxury Villa & Enquiry Modal

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  Target,
  Gem,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Home,
  Users,
  Handshake,
  Calendar,
  Sparkles,
} from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState('residential');

  const openEnquiry = (interest = 'residential') => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAF8F3] text-[#1a1a1a] select-none overflow-hidden">

      {/* ──────────────────────────────────────────────────────────
          SECTION 1: HERO — "Building a Better Tomorrow"
      ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle ambient gradient & decorative elements */}
        <div className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
                About Vanam Valley
              </span>
              <span className="h-px w-20 bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[60px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.08] tracking-tight"
            >
              Building a <br />
              <span className="relative inline-block font-playfair italic font-normal text-[#2D5A43]">
                Better Tomorrow
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5"
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

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed max-w-lg"
            >
              At Vanam Valley, we believe in creating more than just plots — we create opportunities for a better life, stronger families and a prosperous future.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Our Projects</span>
                <span className="w-5 h-5 rounded-full bg-[#D8B879] flex items-center justify-center text-[#1a3c2a]">
                  <ArrowRight size={12} />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => openEnquiry('residential')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f3f0e6] text-[#1a3c2a] border border-[#1a3c2a]/20 font-outfit font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <Calendar size={14} className="text-[#2D5A43]" />
                <span>Schedule Visit</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Grand Entrance Archway Gate */}
          <motion.div {...fadeUp(0.25)} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[16/10] bg-[#1a3c2a] group">
              <img
                src="/images/ui/about-gate.jpg"
                alt="Vanam Valley Grand Entrance Monument Gate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                <span className="font-outfit font-semibold tracking-wide">
                  Grand Entrance Monument Gate · 40ft Main Avenue
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#D8B879] border border-white/10">
                  Balaghat, M.P.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: WHO WE ARE — Story, Signature & Values
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-white border-y border-[#1a1a1a]/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Aerial Plotted Development Card */}
            <motion.div {...fadeUp(0)} className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1a1a1a]/10 aspect-[4/3] bg-[#1a3c2a] group">
                <img
                  src="/images/ui/about-aerial.jpg"
                  alt="Vanam Valley Plotted Land Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Pin Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#1a3c2a] text-xs font-outfit font-bold shadow-lg border border-white/40">
                  <span className="w-6 h-6 rounded-lg bg-[#2D5A43]/10 flex items-center justify-center text-[#2D5A43] flex-shrink-0">
                    <MapPin size={14} />
                  </span>
                  <span>Premium Plotted Development in Balaghat</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Story & Cursive Signature */}
            <div className="lg:col-span-7 space-y-5">
              <motion.div {...fadeUp(0.1)} className="flex items-center gap-2">
                <span className="w-8 h-px bg-[#2D5A43]/30" />
                <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                  Who We Are
                </span>
              </motion.div>

              <motion.h2
                {...fadeUp(0.15)}
                className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-[#1a1a1a] tracking-tight leading-tight"
              >
                About{' '}
                <span className="font-playfair italic font-normal text-[#2D5A43]">
                  Vanam Valley
                </span>
              </motion.h2>

              <motion.p
                {...fadeUp(0.2)}
                className="font-inter text-sm sm:text-base text-[#1a1a1a]/75 leading-relaxed"
              >
                Vanam Valley is a premium plotted development project by{' '}
                <strong className="text-[#1a1a1a] font-semibold">Vanam Valley Group</strong>, designed to offer the perfect blend of modern living and natural serenity. Strategically located in Balaghat, our projects are thoughtfully planned to meet the growing needs of home buyers and investors.
              </motion.p>

              <motion.p
                {...fadeUp(0.25)}
                className="font-inter text-sm sm:text-base text-[#1a1a1a]/75 leading-relaxed"
              >
                With a commitment to quality, transparency and customer satisfaction, we aim to build long-term value — not just in land, but in life.
              </motion.p>

              {/* Signature Script Line */}
              <motion.div {...fadeUp(0.3)} className="pt-2">
                <p className="font-playfair italic text-3xl sm:text-4xl text-[#2D5A43] font-semibold tracking-wide">
                  Your Dream. Our Commitment.
                </p>
                <div className="w-56 h-1 bg-gradient-to-r from-[#2D5A43] to-transparent rounded-full mt-2" />
              </motion.div>
            </div>
          </div>

          {/* 3 Pillar Cards: Vision, Mission, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Vision */}
            <motion.div
              {...fadeUp(0.1)}
              className="bg-[#FAF8F3] p-8 rounded-3xl border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 transition-all hover:-translate-y-1 hover:shadow-xl space-y-4 text-center sm:text-left"
            >
              <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center mx-auto sm:mx-0">
                <Eye size={22} />
              </div>
              <h3 className="text-xl font-outfit font-bold text-[#1a1a1a]">Our Vision</h3>
              <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                To be the most trusted and preferred real estate brand in Central India.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...fadeUp(0.2)}
              className="bg-[#FAF8F3] p-8 rounded-3xl border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 transition-all hover:-translate-y-1 hover:shadow-xl space-y-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center mx-auto sm:mx-0">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-outfit font-bold text-[#1a1a1a]">Our Mission</h3>
              <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                To create well-planned, sustainable and value-driven communities.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              {...fadeUp(0.3)}
              className="bg-[#FAF8F3] p-8 rounded-3xl border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 transition-all hover:-translate-y-1 hover:shadow-xl space-y-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center mx-auto sm:mx-0">
                <Gem size={22} />
              </div>
              <h3 className="text-xl font-outfit font-bold text-[#1a1a1a]">Our Values</h3>
              <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                Integrity, Quality, Innovation and Customer First.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: THE VANAM VALLEY ADVANTAGE
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Checklist & Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div {...fadeUp(0)} className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-[#1a1a1a] tracking-tight leading-tight"
            >
              The Vanam Valley <br />
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Advantage
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/75 leading-relaxed"
            >
              We go beyond just land. We offer a complete{' '}
              <strong className="text-[#1a1a1a] font-semibold">real estate experience</strong> with trust, transparency and unparalleled support.
            </motion.p>

            <motion.ul {...fadeUp(0.25)} className="space-y-3.5 pt-2">
              {[
                'Prime Location in Balaghat',
                'Planned Infrastructure',
                'Clear Title Land',
                'Professional Property Consulting',
                'On-Ground Assistance',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#1a1a1a]/85 font-outfit font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#2D5A43] text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={13} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp(0.3)} className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <span>Get in Touch</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3-Panel Slanted Photo Collage */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-7 relative">
            {/* Floating Trust Badge */}
            <div className="absolute -top-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1a3c2a] text-white text-xs font-outfit font-bold shadow-xl border border-white/10">
              <ShieldCheck size={16} className="text-[#D8B879]" />
              <span>Trusted by Hundreds of Families</span>
            </div>

            <div className="grid grid-cols-3 gap-3.5 pt-6 sm:pt-4">
              {/* Panel 1: Paved Road */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] shadow-xl border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-500 bg-[#1a3c2a]">
                <img
                  src="/images/ui/panel-road.jpg"
                  alt="Paved Internal Roads"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Panel 2: Green Open Park */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] shadow-xl border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-500 translate-y-3 sm:translate-y-4 bg-[#1a3c2a]">
                <img
                  src="/images/ui/panel-park.jpg"
                  alt="Green Open Spaces & Parks"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Panel 3: Happy Family */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] shadow-xl border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-500 bg-[#1a3c2a]">
                <img
                  src="/images/ui/panel-family.jpg"
                  alt="Happy Families in Balaghat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4: OUR JOURNEY — "Growing Together" (Dark Band)
      ────────────────────────────────────────────────────────── */}
      <section className="bg-[#122e22] text-white py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle decorative radial gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-[#2D5A43]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative */}
          <motion.div {...fadeUp(0)} className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold leading-tight">
              Growing{' '}
              <span className="font-playfair italic font-normal text-[#D8B879]">
                Together
              </span>
            </h2>
            <p className="font-inter text-xs sm:text-sm text-white/70 max-w-sm">
              A journey of trust, growth and countless happy families.
            </p>
          </motion.div>

          {/* Right 4 Stats Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {/* Stat 1 */}
            <motion.div
              {...fadeUp(0.1)}
              className="p-5 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D8B879]/20 text-[#D8B879] flex items-center justify-center mx-auto">
                <Home size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#D8B879]">100+</div>
              <div className="text-xs font-outfit text-white/75 font-medium">Plots Developed</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              {...fadeUp(0.18)}
              className="p-5 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D8B879]/20 text-[#D8B879] flex items-center justify-center mx-auto">
                <Users size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#D8B879]">500+</div>
              <div className="text-xs font-outfit text-white/75 font-medium">Happy Families</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              {...fadeUp(0.26)}
              className="p-5 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D8B879]/20 text-[#D8B879] flex items-center justify-center mx-auto">
                <MapPin size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#D8B879]">1</div>
              <div className="text-xs font-outfit text-white/75 font-medium">Prime Location</div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              {...fadeUp(0.34)}
              className="p-5 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D8B879]/20 text-[#D8B879] flex items-center justify-center mx-auto">
                <Handshake size={20} />
              </div>
              <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#D8B879]">100%</div>
              <div className="text-xs font-outfit text-white/75 font-medium">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5: OUR TEAM — "A Team That Cares"
      ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div {...fadeUp(0)} className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Our Team
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-[#1a1a1a] tracking-tight leading-tight"
            >
              A Team That{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Cares
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/75 leading-relaxed"
            >
              Our team of experienced professionals is dedicated to turning your real estate dreams into reality with expertise and personalized support.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <span>Meet Our Team</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Right 3 Photo Tiles */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-7 grid grid-cols-3 gap-4">
            {/* Tile 1: Handshake */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-300 bg-[#1a3c2a]">
              <img
                src="/images/ui/team-handshake.jpg"
                alt="Property Advisory Handshake"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Tile 2: Villa Model */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-300 translate-y-3 bg-[#1a3c2a]">
              <img
                src="/images/ui/team-model.jpg"
                alt="Architectural Villa Layouts"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Tile 3: On-Site Engineer */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1a1a1a]/10 hover:scale-105 transition-transform duration-300 bg-[#1a3c2a]">
              <img
                src="/images/ui/team-engineer.jpg"
                alt="Civil Engineering Site Supervision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6: READY TO BUILD YOUR FUTURE? (CTA BANNER)
      ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-8">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#123126] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-[#2D5A43]/40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-[#D8B879]/10 rounded-full blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold tracking-tight">
                Ready to Build Your Future?
              </h2>
              <p className="font-inter text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                Discover premium plots at Vanam Valley and take the first step towards your dream home.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openEnquiry('residential')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Modern Villa Rendering */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/20 bg-black/40">
                <img
                  src="/images/ui/about-cta-villa.jpg"
                  alt="Modern Luxury Villa at Vanam Valley"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest={modalInterest}
        title="Schedule a Site Visit / Consultation"
        subtitle="Connect with our Balaghat team to receive full layout plans, title documentation, and on-ground availability."
        source="about_page_cta"
      />
    </div>
  );
};

export default AboutPage;
