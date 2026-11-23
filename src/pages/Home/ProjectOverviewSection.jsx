// src/pages/Home/ProjectOverviewSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  Building2,
  Compass,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
} from 'lucide-react';
import { projectOverview } from '../../data/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ProjectOverviewSection = () => {
  const { services } = projectOverview;
  const residential = services.find((s) => s.id === 'residential') || services[0];
  const commercial = services.find((s) => s.id === 'commercial') || services[1];
  const consulting = services.find((s) => s.id === 'consulting') || services[2];

  const stats = [
    { value: '50+', label: 'Plots Available', icon: Home },
    { value: '100%', label: 'Clear Title', icon: Shield },
    { value: '200+', label: 'Happy Families', icon: Users },
    { value: '3x', label: 'Growth Potential', icon: TrendingUp },
  ];

  const serviceCards = [
    {
      ...residential,
      icon: Home,
      color: '#2D5A43',
      tagline: 'Build Your Dream Home',
      features: ['Demarcated Plot Corners', '30-40 Ft Paved Roads', '100% Freehold Title'],
    },
    {
      ...commercial,
      icon: Building2,
      color: '#1a3c2a',
      tagline: 'Grow Your Business',
      features: ['High-Visibility Frontage', 'Heavy Vehicle Access', 'Flexible Plot Sizes'],
    },
    {
      ...consulting,
      icon: Compass,
      color: '#0c5945',
      tagline: 'Expert Guidance',
      features: ['Site Inspection Tours', 'Title Deed Verification', 'Local Market Insights'],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2D5A43]/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#2D5A43]/[0.03] blur-3xl" />
      <div
        className="pointer-events-none absolute top-20 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(45,90,67,0.08), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-[0.2em] uppercase text-[#2D5A43]">
              What We Offer
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-5"
          >
            Your Property Journey{' '}
            <span className="font-playfair italic font-normal text-[#2D5A43]">
              Starts Here
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg text-[#1a1a1a]/60 font-inter leading-relaxed"
          >
            Vanam Valley curates strategic land parcels in Balaghat for families,
            businesses, and investors — with complete transparency and clear documentation.
          </motion.p>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          {...fadeUp(0.25)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#f8faf9] border border-[#2D5A43]/[0.06] hover:border-[#2D5A43]/15 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-[#2D5A43]/[0.08] flex items-center justify-center flex-shrink-0">
                <stat.icon size={20} className="text-[#2D5A43]" />
              </span>
              <div>
                <p className="font-outfit font-bold text-2xl text-[#1a1a1a]">{stat.value}</p>
                <p className="font-inter text-xs text-[#1a1a1a]/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.id}
              {...fadeUp(0.3 + i * 0.1)}
              className="group bg-white rounded-3xl border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2D5A43]/[0.06] flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-outfit font-bold tracking-wider uppercase text-[#2D5A43]">
                  <card.icon size={12} />
                  <span>{card.id}</span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-outfit font-semibold tracking-wider uppercase text-[#D8B879] mb-1">
                    {card.tagline}
                  </p>
                  <h3 className="font-outfit text-xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-inter text-sm text-[#1a1a1a]/65 leading-relaxed mb-5">
                    {card.summary}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {card.features.map((feat, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2.5 text-xs font-outfit text-[#1a1a1a]/80"
                      >
                        <CheckCircle2 size={14} className="text-[#2D5A43] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={card.path}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1a1a1a]/[0.06] text-xs font-outfit font-bold tracking-wider uppercase text-[#2D5A43] group-hover:text-[#1a3c2a] transition-colors"
                >
                  <span>Explore {card.id}</span>
                  <span className="w-7 h-7 rounded-full bg-[#2D5A43]/[0.08] group-hover:bg-[#2D5A43] flex items-center justify-center transition-all">
                    <ArrowRight size={12} className="text-[#2D5A43] group-hover:text-white transition-colors" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
