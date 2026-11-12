// src/pages/Home/LeadGenerationCTASection.jsx
// Section 09: Lead Generation CTA — Looking for a Plot? Let's Talk.

import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { business } from '../../data/siteData';
import LeadForm from '../../components/LeadForm';
import EnquiryModal from '../../components/EnquiryModal';

const LeadGenerationCTASection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('residential');

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <section className="bg-[#002D26] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075C4A]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── Left Column: Value Proposition & Direct Contact (6 Columns) ── */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
                  <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
                    Section 09 · Let's Talk
                  </span>
                </div>

                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5">
                  Looking for a Plot? <br />
                  <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                    Let's Talk.
                  </span>
                </h2>

                <p className="font-inter text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
                  Tell us what you are looking for. Our team will help you with the next steps, provide layout drawings, and arrange on-ground site previews.
                </p>

                {/* Trust Badges */}
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-inter text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span>Direct discussion with on-ground Balaghat property advisors</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-inter text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span>No aggressive sales calls or misleading commitments</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-inter text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span>Complimentary site visits arranged at your preferred time</span>
                  </div>
                </div>
              </div>

              {/* 3 Quick Conversion Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 border-t border-white/10">
                
                {/* 1. Call Now */}
                <a
                  href={`tel:+91${business.phone[0]}`}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-start transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D8B879]/15 text-[#D8B879] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Call Directly</span>
                  <span className="text-xs font-semibold text-white mt-0.5">+91 {business.phone[0]}</span>
                </a>

                {/* 2. WhatsApp Us */}
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 flex flex-col items-start transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-widest">Instant Chat</span>
                  <span className="text-xs font-semibold text-white mt-0.5">WhatsApp Us</span>
                </a>

                {/* 3. Site Visit */}
                <button
                  type="button"
                  onClick={() => openModal('residential')}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-start transition-all group text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D8B879]/15 text-[#D8B879] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">On-Ground</span>
                  <span className="text-xs font-semibold text-white mt-0.5">Book Site Visit</span>
                </button>

              </div>
            </div>

            {/* ── Right Column: Lead Form Card (6 Columns) ── */}
            <div className="lg:col-span-6 bg-[#001D18] p-7 sm:p-9 rounded-3xl border border-[#D8B879]/30 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D8B879] block mb-1">
                  Direct Property Enquiry
                </span>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  Send Us Your Requirements
                </h3>
                <p className="font-inter text-xs text-white/70 mt-1">
                  Fill in your details below and our team will get in touch via phone or WhatsApp.
                </p>
              </div>

              {/* LeadForm Component */}
              <LeadForm source="homepage_section_09_cta" />
            </div>

          </div>

        </div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest={modalType}
        title="Schedule a Site Visit / Discussion"
        subtitle="Our Balaghat team will connect to coordinate dates, times, and layout walk-throughs."
        source="homepage_section_09_site_visit"
      />
    </>
  );
};

export default LeadGenerationCTASection;

