// src/pages/Home/ProjectOverviewSection.jsx
// Section 02: Project Overview — Real Estate, Plotting & Property Consulting in Balaghat
// Upgraded: Asymmetric Editorial Composition (avoids repetitive 3-card grid)

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, Compass, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { projectOverview } from '../../data/siteData';

const ProjectOverviewSection = () => {
  const { headline, subheadline, description, services } = projectOverview;
  const residential = services.find((s) => s.id === 'residential') || services[0];
  const commercial = services.find((s) => s.id === 'commercial') || services[1];
  const consulting = services.find((s) => s.id === 'consulting') || services[2];

  return (
    <section id="overview-section" className="relative py-24 md:py-32 bg-[#F8F6EF] text-[#18231F] overflow-hidden">
      
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#002D26 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#002D26]/5 border border-[#002D26]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#075C4A]" />
            <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
              Section 02 · Project Overview
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] tracking-tight leading-[1.15] mb-5">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-[#075C4A] font-inter font-semibold leading-relaxed mb-3">
            {subheadline}
          </p>

          <p className="text-sm sm:text-base text-[#18231F]/70 font-inter leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* ── Asymmetric Editorial Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ── Primary Hero Pillar: Residential Plotting (7 Columns) ── */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#002D26]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Large Image Aspect Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#001713]/10">
              <img
                src={residential.image}
                alt={residential.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Badge & Number */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#002D26] text-xs font-inter font-bold tracking-wider shadow-sm">
                <Home className="w-3.5 h-3.5 text-[#075C4A]" />
                <span>PRIMARY SECTOR · RESIDENTIAL</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-xs text-[#D8B879] uppercase tracking-widest block mb-1">
                  PLANNED PARCEL DEVELOPMENT
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  {residential.title}
                </h3>
              </div>
            </div>

            {/* Description & Feature Checklist */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-inter text-sm sm:text-base text-[#18231F]/80 leading-relaxed mb-6">
                  {residential.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {residential.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-inter text-[#18231F]/90 bg-[#F8F6EF] p-2.5 rounded-xl border border-[#002D26]/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075C4A] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#002D26]/10 flex items-center justify-between">
                <span className="text-xs font-inter text-[#18231F]/60">
                  Ideal for custom single-family residences
                </span>
                <Link
                  to={residential.path}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002D26] hover:bg-[#075C4A] text-[#D8B879] font-inter font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <span>Explore Residential</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* ── Secondary Pillars: Stacked Commercial & Property Consulting (5 Columns) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Commercial Plotting Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#002D26]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full overflow-hidden bg-[#001713]/10">
                <img
                  src={commercial.image}
                  alt={commercial.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 text-[10px] font-mono tracking-wide font-semibold">
                  <Building2 className="w-3 h-3" />
                  <span>COMMERCIAL</span>
                </div>
              </div>

              <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#002D26] mb-2 group-hover:text-[#075C4A] transition-colors">
                    {commercial.title}
                  </h3>
                  <p className="font-inter text-xs text-[#18231F]/75 leading-relaxed mb-4">
                    {commercial.summary}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {commercial.points.slice(0, 2).map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-inter text-[#18231F]/85">
                        <CheckCircle2 className="w-3 h-3 text-[#075C4A] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={commercial.path}
                  className="inline-flex items-center justify-between text-xs font-inter font-semibold tracking-wider uppercase text-[#002D26] group-hover:text-[#075C4A] pt-3 border-t border-[#002D26]/10"
                >
                  <span>Explore Commercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Property Consulting Card */}
            <div className="bg-[#002D26] text-white rounded-3xl overflow-hidden border border-[#D8B879]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full overflow-hidden bg-black/20">
                <img
                  src={consulting.image}
                  alt={consulting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#001713]/90 text-[#D8B879] text-[10px] font-mono tracking-wide font-semibold border border-[#D8B879]/30">
                  <Compass className="w-3 h-3" />
                  <span>CONSULTING</span>
                </div>
              </div>

              <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-[#D8B879] transition-colors">
                    {consulting.title}
                  </h3>
                  <p className="font-inter text-xs text-white/75 leading-relaxed mb-4">
                    {consulting.summary}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {consulting.points.slice(0, 2).map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-inter text-white/85">
                        <CheckCircle2 className="w-3 h-3 text-[#D8B879] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={consulting.path}
                  className="inline-flex items-center justify-between text-xs font-inter font-semibold tracking-wider uppercase text-[#D8B879] hover:text-[#F4E9D4] pt-3 border-t border-white/10"
                >
                  <span>Talk to Consulting</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectOverviewSection;
