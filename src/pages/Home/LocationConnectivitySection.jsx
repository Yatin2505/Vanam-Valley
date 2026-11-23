// src/pages/Home/LocationConnectivitySection.jsx
// Section 07: Location and Connectivity — Find Us in Balaghat

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, PhoneCall, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { business } from '../../data/siteData';
import EnquiryModal from '../../components/EnquiryModal';

const connectivityHighlights = [
  {
    title: 'Balaghat Town Center',
    desc: 'Convenient access to local commercial centers, schools, and banking facilities.',
    tag: 'LOCAL ACCESS',
  },
  {
    title: 'Railway & Transit Routes',
    desc: 'Direct road connectivity linking to Balaghat Junction and regional transport arteries.',
    tag: 'TRANSIT',
  },
  {
    title: 'Surrounding Green Buffer',
    desc: 'Located in an open, developing corridor offering fresh air and room for long-term growth.',
    tag: 'ENVIRONMENT',
  },
  {
    title: 'Kumar Furniture Road Corridor',
    desc: 'Near Hariom Nagar, with well-established approach roads suitable for daily vehicular commute.',
    tag: 'CORRIDOR',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const LocationConnectivitySection = () => {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f8faf9] text-[#1a1a1a] py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#2D5A43]/[0.03] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D8B879]/[0.04] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-[0.2em] uppercase text-[#2D5A43]">
                Section 07 · Location &amp; Connectivity
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4"
            >
              Find Us in{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Balaghat
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-base sm:text-lg text-[#1a1a1a]/60 leading-relaxed"
            >
              Situated in Balaghat, Madhya Pradesh, Vanam Valley balances accessibility to key city amenities with the calm and openness of a planned plotted environment.
            </motion.p>
          </div>

          {/* Grid Layout: Location Details on Left, Interactive / Visual Map Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left / Location Highlights (6 Columns) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Dual Location Cards: Registered Office vs Project Site */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Registered Business Office */}
                <motion.div
                  {...fadeUp(0.15)}
                  className="bg-white p-6 rounded-3xl border border-[#1a1a1a]/[0.06] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-outfit tracking-widest uppercase text-[#2D5A43] font-bold block">
                          REGISTERED OFFICE
                        </span>
                        <h4 className="font-outfit text-base font-bold text-[#1a1a1a]">
                          Balaghat Office
                        </h4>
                      </div>
                    </div>

                    <p className="font-inter text-xs text-[#1a1a1a]/70 leading-relaxed mb-4">
                      {business.address.full}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1a1a1a]/[0.06] text-[11px] font-inter text-[#1a1a1a]/50">
                    Meeting point for discussions &amp; paperwork
                  </div>
                </motion.div>

                {/* 2. Actual Project Site Corridor */}
                <motion.div
                  {...fadeUp(0.22)}
                  className="bg-white p-6 rounded-3xl border border-[#D8B879]/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#D8B879]/20 text-[#1a3c2a] flex items-center justify-center flex-shrink-0">
                        <Navigation className="w-4 h-4 text-[#1a3c2a]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-outfit tracking-widest uppercase text-[#1a3c2a] font-bold block">
                          PROJECT SITE LOCATION
                        </span>
                        <h4 className="font-outfit text-base font-bold text-[#1a1a1a]">
                          Vanam Valley Land Parcel
                        </h4>
                      </div>
                    </div>

                    <p className="font-inter text-xs text-[#1a1a1a]/70 leading-relaxed mb-4">
                      Development Corridor, Balaghat, Madhya Pradesh. Accompanied site visits depart directly from the registered office.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1a1a1a]/[0.06] text-[11px] font-outfit text-[#2D5A43] font-semibold">
                    * Confirmed survey bounds released upon launch
                  </div>
                </motion.div>
              </div>

              {/* 4 Connectivity Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {connectivityHighlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp(0.25 + idx * 0.06)}
                    className="bg-white p-5 rounded-2xl border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/20 transition-colors"
                  >
                    <span className="text-[10px] font-outfit tracking-widest uppercase text-[#2D5A43] font-bold mb-1 block">
                      {item.tag}
                    </span>
                    <h4 className="font-outfit font-bold text-base text-[#1a1a1a] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="font-inter text-xs text-[#1a1a1a]/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Site Visit Conversion Card */}
              <motion.div
                {...fadeUp(0.35)}
                className="bg-[#1a3c2a] text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-outfit uppercase tracking-widest text-[#D8B879] mb-1 font-bold">
                    On-Ground Inspection
                  </div>
                  <h4 className="font-outfit text-xl font-bold">
                    Schedule a Guided Site Visit
                  </h4>
                  <p className="font-inter text-xs text-white/70 mt-1">
                    Our team will receive you at the office and guide you through the property layout.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSiteVisitOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#1a3c2a] font-outfit font-bold text-xs tracking-wider uppercase transition-all flex-shrink-0 shadow-md hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit</span>
                </button>
              </motion.div>
            </div>

            {/* Right / Map Presentation Stage (6 Columns) */}
            <motion.div
              {...fadeUp(0.25)}
              className="lg:col-span-6 bg-white rounded-3xl border border-[#1a1a1a]/[0.06] p-5 sm:p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-outfit tracking-widest uppercase text-[#2D5A43] font-bold">
                      MAP &amp; DIRECTIONS
                    </span>
                    <h3 className="font-outfit text-xl font-bold text-[#1a1a1a]">
                      Balaghat, Madhya Pradesh
                    </h3>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Balaghat+Madhya+Pradesh+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2D5A43]/[0.08] hover:bg-[#2D5A43]/15 text-[#2D5A43] text-xs font-outfit font-semibold transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Styled Map Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1a1a1a]/10 bg-[#001D18] shadow-inner flex items-center justify-center">
                  {/* Stylized Architectural Roadmap SVG of Balaghat */}
                  <svg
                    viewBox="0 0 400 300"
                    className="w-full h-full select-none"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Background Terrain */}
                    <rect width="400" height="300" fill="#001D18" />
                    
                    {/* River Wainganga Green Belt */}
                    <path
                      d="M -20 220 C 80 180, 180 260, 420 190"
                      fill="none"
                      stroke="#075C4A"
                      strokeWidth="24"
                      opacity="0.4"
                    />
                    <text x="320" y="215" fill="#52B788" fontSize="8" fontStyle="italic" opacity="0.6">
                      Wainganga Corridor
                    </text>

                    {/* Regional Grid Roads */}
                    <path d="M 0 100 L 400 100" stroke="#18231F" strokeWidth="6" />
                    <path d="M 0 160 L 400 160" stroke="#18231F" strokeWidth="8" />
                    <path d="M 120 0 L 120 300" stroke="#18231F" strokeWidth="6" />
                    <path d="M 260 0 L 260 300" stroke="#18231F" strokeWidth="8" />

                    {/* State Highway & Main Access Arteries */}
                    <path d="M 40 280 L 360 20" stroke="#2A3832" strokeWidth="4" strokeDasharray="4 2" />
                    <text x="60" y="250" fill="#94A3B8" fontSize="7" opacity="0.7">
                      SH-26 Transit Corridor
                    </text>

                    {/* Kumar Furniture Road */}
                    <path d="M 120 160 L 280 160" stroke="#D8B879" strokeWidth="4" />
                    <text x="200" y="152" fill="#D8B879" fontSize="8" fontWeight="bold" textAnchor="middle">
                      Kumar Furniture Road
                    </text>

                    {/* Balaghat Railway Junction Marker */}
                    <g transform="translate(120, 100)">
                      <rect x="-6" y="-6" width="12" height="12" rx="3" fill="#18231F" stroke="#94A3B8" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="2.5" fill="#94A3B8" />
                      <text x="10" y="3" fill="#CBD5E1" fontSize="7.5" fontWeight="500">
                        Balaghat Junction
                      </text>
                    </g>

                    {/* Hariom Nagar Area Marker */}
                    <g transform="translate(190, 185)">
                      <circle cx="0" cy="0" r="3" fill="#075C4A" stroke="#52B788" strokeWidth="1" />
                      <text x="8" y="2" fill="#A7F3D0" fontSize="7">
                        Near Hariom Nagar
                      </text>
                    </g>

                    {/* Main Vanam Valley Office Pin */}
                    <g transform="translate(230, 160)">
                      <circle cx="0" cy="0" r="16" fill="#D8B879" opacity="0.2" className="animate-ping" />
                      <circle cx="0" cy="0" r="10" fill="#D8B879" stroke="#001D18" strokeWidth="2" />
                      <circle cx="0" cy="0" r="4" fill="#001D18" />
                      <rect x="-65" y="-36" width="130" height="24" rx="6" fill="#001410" stroke="#D8B879" strokeWidth="1" />
                      <text x="0" y="-21" fill="#D8B879" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                        VANAM VALLEY OFFICE
                      </text>
                    </g>
                  </svg>

                  {/* Open in Google Maps Floating Overlay */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href="https://maps.google.com/?q=Balaghat+Madhya+Pradesh+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#1a3c2a] hover:bg-white text-xs font-outfit font-bold shadow-lg transition-transform hover:scale-105"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#2D5A43]" />
                      <span>Navigate via Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="mt-5 pt-4 border-t border-[#1a1a1a]/[0.06] flex items-center justify-between text-xs font-inter text-[#1a1a1a]/50">
                <span>Coordinates: Balaghat, MP (481001)</span>
                <span>Pre-booking requested for weekend site visits</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Visit Modal */}
      <EnquiryModal
        isOpen={siteVisitOpen}
        onClose={() => setSiteVisitOpen(false)}
        defaultPropertyInterest="residential"
        title="Schedule a Site Visit in Balaghat"
        subtitle="Experience the layout demarcations, internal avenues, and surroundings in person. Our Balaghat team will confirm your preferred timing."
        source="homepage_section_07_site_visit"
      />
    </>
  );
};

export default LocationConnectivitySection;
