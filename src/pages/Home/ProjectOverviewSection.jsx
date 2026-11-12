// src/pages/Home/ProjectOverviewSection.jsx
// Section 02: Project Overview — Real Estate, Plotting & Property Consulting in Balaghat

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, Compass, CheckCircle2 } from 'lucide-react';
import { projectOverview } from '../../data/siteData';

const iconMap = {
  residential: Home,
  commercial: Building2,
  consulting: Compass,
};

const ProjectOverviewSection = () => {
  const { headline, subheadline, description, services } = projectOverview;

  return (
    <section className="relative py-24 md:py-32 bg-[#F8F6EF] text-[#18231F] overflow-hidden">
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

          <p className="text-base sm:text-lg text-[#18231F]/80 font-inter leading-relaxed mb-3 font-medium">
            {subheadline}
          </p>

          <p className="text-sm sm:text-base text-[#18231F]/70 font-inter leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Home;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#002D26]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#001713]/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#002D26] text-xs font-inter font-semibold tracking-wide shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#075C4A]" />
                    <span>0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[#002D26] mb-3 group-hover:text-[#075C4A] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="font-inter text-sm text-[#18231F]/75 leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 pt-2 border-t border-[#002D26]/5">
                      {service.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-inter text-[#18231F]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#075C4A] flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-[#002D26]/10">
                    <Link
                      to={service.path}
                      className="inline-flex items-center justify-between w-full text-xs font-inter font-semibold tracking-wider uppercase text-[#002D26] group-hover:text-[#075C4A] transition-colors"
                    >
                      <span>Explore {service.title.split(' ')[0]}</span>
                      <span className="w-7 h-7 rounded-full bg-[#002D26]/5 group-hover:bg-[#075C4A] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;

