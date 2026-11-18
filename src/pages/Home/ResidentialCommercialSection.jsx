// src/pages/Home/ResidentialCommercialSection.jsx
// Section 03: Residential and Commercial Plots — Find a Plot That Fits Your Needs

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home, Building2, PhoneCall, FileText } from 'lucide-react';
import residentialImg from '../../assets/images/residential-plots.jpg';
import commercialImg from '../../assets/images/commercial-roadside-plot.jpg';
import EnquiryModal from '../../components/EnquiryModal';
import InteractivePlotCalculator from '../../components/InteractivePlotCalculator';

const ResidentialCommercialSection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, interest: 'residential', title: '' });

  const openEnquiry = (interest, title) => {
    setModalState({ isOpen: true, interest, title });
  };

  return (
    <>
      <section className="bg-[#001D18] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075C4A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
                Section 03 · Plot Opportunities
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5">
              Find a Plot That <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                Fits Your Needs.
              </span>
            </h2>

            <p className="font-inter text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Whether you are planning your family home or seeking roadside frontage for your business, Vanam Valley provides planned, demarcated plots in Balaghat.
            </p>
          </div>

          {/* Two Distinct Showcases */}
          <div className="space-y-12 lg:space-y-16">
            
            {/* ── Showcase 01: Residential Plots ── */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D8B879]/30 bg-[#001410] shadow-2xl flex flex-col lg:flex-row items-stretch group">
              {/* Image Half */}
              <div className="relative lg:w-1/2 min-h-[320px] sm:min-h-[400px] overflow-hidden">
                <img
                  src={residentialImg}
                  alt="Planned Residential Plots at Vanam Valley, Balaghat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001410] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001713]/85 backdrop-blur-md border border-[#D8B879]/40 text-[#D8B879] text-xs font-inter font-semibold tracking-wide">
                  <Home className="w-3.5 h-3.5" />
                  <span>FOR HOME BUILDERS</span>
                </div>
              </div>

              {/* Text & Action Half */}
              <div className="lg:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Category 01</div>
                  <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Residential Plots
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    Designed for families ready to build their custom home in a peaceful, planned setting. Enjoy clear boundaries, designated internal roads, and healthy green surroundings away from city congestion.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Clear boundary demarcations',
                      'Internal approach avenue access',
                      'Peaceful residential zoning',
                      'Individual plot registration support'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-inter text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Separate Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-6 border-t border-white/10">
                  <Link
                    to="/projects/residential"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D8B879] text-[#001D18] font-inter font-semibold text-xs tracking-wider uppercase hover:bg-[#F4E9D4] transition-colors shadow-md"
                  >
                    <span>Explore Residential Plots</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiry('residential', 'Enquire for Residential Plots')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-inter font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#D8B879]" />
                    <span>Enquire for Residential</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Showcase 02: Commercial Plots ── */}
            <div className="relative rounded-3xl overflow-hidden border border-[#075C4A]/50 bg-[#001410] shadow-2xl flex flex-col lg:flex-row-reverse items-stretch group">
              {/* Image Half */}
              <div className="relative lg:w-1/2 min-h-[320px] sm:min-h-[400px] overflow-hidden">
                <img
                  src={commercialImg}
                  alt="High-Visibility Commercial Plots at Vanam Valley, Balaghat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001410] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001713]/85 backdrop-blur-md border border-[#075C4A] text-emerald-400 text-xs font-inter font-semibold tracking-wide">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>FOR BUSINESS &amp; ENTERPRISE</span>
                </div>
              </div>

              {/* Text & Action Half */}
              <div className="lg:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Category 02</div>
                  <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Commercial Plots
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    Positioned along key road access corridors to maximize visibility and customer footfall. Ideal for commercial establishments, retail outlets, professional clinics, and business investments in Balaghat.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Direct main road access & frontage',
                      'High vehicular exposure corridor',
                      'Adaptable plot frontage depths',
                      'Straightforward commercial documentation'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-inter text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Separate Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-6 border-t border-white/10">
                  <Link
                    to="/projects/commercial"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#075C4A] hover:bg-[#097760] text-white font-inter font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
                  >
                    <span>Explore Commercial Plots</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiry('commercial', 'Enquire for Commercial Plots')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-inter font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>Enquire for Commercial</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Interactive Plot Sizing & Setback Valuation Calculator ── */}
            <div className="pt-6">
              <InteractivePlotCalculator 
                onOpenEnquiry={() => openEnquiry('residential', 'Custom Plot Area & Setback Calculation')}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Global Accessible Modal for Priority Direct Inquiries */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, interest: 'residential', title: '' })}
        defaultPropertyInterest={modalState.interest}
        title={modalState.title}
        source="homepage_section_03"
      />
    </>
  );
};

export default ResidentialCommercialSection;

