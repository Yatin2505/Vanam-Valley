// src/pages/Home/HomeAdvantageSection.jsx
// Signature Advantage & Trust Section matching the reference layout
// Includes: 5-Point Checklist, 3-Panel Slanted Photo Collage, and "Growing Together" Stats Wave

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Home,
  Users,
  MapPin,
  Handshake,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const HomeAdvantageSection = () => {
  const checklist = [
    'Prime Location in Balaghat',
    'Planned Infrastructure (30–40ft roads)',
    '100% Clear Title Land',
    'Professional Property Consulting',
    'On-Ground Assistance & Demarcation',
  ];

  const stats = [
    { value: '100+', label: 'Plots Developed', icon: Home },
    { value: '500+', label: 'Happy Families', icon: Users },
    { value: '1', label: 'Prime Location', icon: MapPin },
    { value: '100%', label: 'Customer Satisfaction', icon: Handshake },
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* ── THE VANAM VALLEY ADVANTAGE ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Headline, Description & 5-Point Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
                Why Choose Us
              </span>
              <span className="h-px w-16 bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold text-[#1a1a1a] leading-[1.12] tracking-tight"
            >
              The Vanam Valley <br />
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Advantage
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
            >
              We go beyond just land. We offer a complete{' '}
              <strong className="text-[#1a1a1a] font-semibold">real estate experience</strong>{' '}
              with trust, transparency and unparalleled support.
            </motion.p>

            {/* 5-Point Checklist */}
            <motion.ul {...fadeUp(0.25)} className="space-y-3.5 pt-1">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-outfit font-semibold text-[#1a1a1a]/85">
                  <span className="w-5 h-5 rounded-full bg-[#2D5A43] flex items-center justify-center text-white flex-shrink-0">
                    <CheckCircle2 size={13} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div {...fadeUp(0.3)} className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
              >
                <span>Get in Touch</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Right: 3-Panel Slanted Photo Collage matching reference */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-7 relative">
            
            {/* Floating Trust Badge */}
            <div className="absolute -top-5 right-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#1a3c2a] text-white text-xs font-outfit font-semibold shadow-xl border border-white/10">
              <ShieldCheck size={16} className="text-[#D8B879]" />
              <div className="leading-tight">
                <span className="block text-[9px] uppercase tracking-wider text-white/70">Trusted by</span>
                <span className="text-white font-bold">Hundreds of Families</span>
              </div>
            </div>

            {/* 3 Angled Panels */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6">
              {/* Panel 1: Main Road */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#1a1a1a]/10 aspect-[9/16] -rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#1a3c2a] group">
                <img
                  src="/images/ui/panel-road.jpg"
                  alt="Vanam Valley Planned Paved Road"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-[10px] font-outfit font-bold text-white uppercase tracking-wider">
                  40ft Avenues
                </span>
              </div>

              {/* Panel 2: Open Green Park */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#1a1a1a]/10 aspect-[9/16] -translate-y-4 hover:translate-y-0 transition-transform duration-500 bg-[#1a3c2a] group">
                <img
                  src="/images/ui/panel-park.jpg"
                  alt="Vanam Valley Green Open Spaces"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-[10px] font-outfit font-bold text-white uppercase tracking-wider">
                  Green Living
                </span>
              </div>

              {/* Panel 3: Happy Family */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#1a1a1a]/10 aspect-[9/16] rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#1a3c2a] group">
                <img
                  src="/images/ui/panel-family.jpg"
                  alt="Happy Family at Vanam Valley"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-[10px] font-outfit font-bold text-white uppercase tracking-wider">
                  Peaceful Homes
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ── OUR JOURNEY: GROWING TOGETHER (Dark Wave Stats Band) ── */}
      <section className="relative bg-[#102920] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        
        {/* Soft atmospheric gradients */}
        <div className="pointer-events-none absolute -top-20 left-1/4 w-96 h-96 bg-[#2D5A43]/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-[#D8B879]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left text */}
          <div className="lg:col-span-5 space-y-3">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#D8B879]/50" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#D8B879]">
                Our Journey
              </span>
            </motion.div>

            <motion.h3
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight"
            >
              Growing{' '}
              <span className="font-playfair italic font-normal text-[#D8B879]">
                Together
              </span>
            </motion.h3>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm text-white/70 leading-relaxed max-w-md"
            >
              A journey of trust, growth and countless happy families building their dreams in Balaghat.
            </motion.p>
          </div>

          {/* Right 4 stats */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(0.1 + idx * 0.08)}
                  className="space-y-2 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-9 h-9 mx-auto rounded-xl bg-[#2D5A43]/40 text-[#D8B879] flex items-center justify-center">
                    <StatIcon size={18} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-outfit uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeAdvantageSection;
