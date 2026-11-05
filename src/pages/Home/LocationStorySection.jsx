// src/pages/Home/LocationStorySection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Building, Compass, ArrowUpRight, AlertCircle } from 'lucide-react';
import { business } from '../../data/siteData';

const LocationStorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#001D18] text-white py-24 md:py-32 px-5 md:px-10 lg:px-16 relative overflow-hidden border-t border-gold/15" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
              GEOGRAPHIC PRESENCE
            </span>
          </div>

          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Rooted in Balaghat. <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              Connecting Regional Corridors.
            </span>
          </h2>
        </div>

        {/* ── Two-Card Split: Conceptual Radar vs Registered Office ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left: Conceptual Radar Map Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#002620] to-[#001713] border border-gold/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Background Radar Vector */}
            <div className="absolute right-0 top-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none opacity-20">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
                <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[10px] font-inter text-gold uppercase tracking-widest font-semibold mb-6">
                <Compass size={13} />
                <span>Project Development Site</span>
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-3">
                Project Site Location Pending Official Demarcation
              </h3>

              <p className="font-inter text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-8">
                In strict adherence to consumer transparency, the exact plotted project boundaries will be published upon conclusion of formal land survey releases. We do not publish speculative coordinates or unverified connectivity claims.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-inter text-gold/90">
              <AlertCircle size={16} className="text-gold flex-shrink-0" />
              <span>Register interest to receive official geolocation releases directly.</span>
            </div>
          </motion.div>

          {/* Right: Registered Business Office (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-[#002620]/90 border border-gold/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-inter text-white/80 uppercase tracking-widest font-semibold mb-6">
                <Building size={13} />
                <span>Corporate Headquarters</span>
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-4">
                Vanam Valley Group
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-inter text-white/80 mb-8 font-light">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-gold flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    {business.address.street},<br />
                    Near Hariom Nagar, {business.address.city},<br />
                    {business.address.state} – {business.address.pin}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Phone size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <a href={`tel:${business.phone[0]}`} className="hover:text-gold transition-colors font-medium">
                      +91 {business.phone[0]}
                    </a>
                    <a href={`tel:${business.phone[1]}`} className="hover:text-gold transition-colors font-medium">
                      +91 {business.phone[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kumar Furniture Road Near Hariom Nagar Balaghat')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full justify-center text-xs py-3"
              >
                <span>Navigate to Office on Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LocationStorySection;

