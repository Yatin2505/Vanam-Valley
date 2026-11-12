// src/pages/Home/PropertyConsultingSection.jsx
// Section 06: Property Consulting Services — Need Help Finding the Right Property?

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle2, PhoneCall, ArrowRight, MessageSquare, ShieldCheck, FileSearch } from 'lucide-react';
import consultImg from '../../assets/images/property-consulting-discussion.jpg';
import EnquiryModal from '../../components/EnquiryModal';
import { business } from '../../data/siteData';

const consultingPillars = [
  {
    icon: Compass,
    title: 'Understanding Your Goals',
    desc: 'We sit with you to understand your budget, preferred plot dimensions, construction timeline, or business requirements in Balaghat.',
  },
  {
    icon: FileSearch,
    title: 'Exploring Viable Options',
    desc: 'Compare residential versus commercial plot layouts, road connectivity factors, and long-term utility before deciding.',
  },
  {
    icon: ShieldCheck,
    title: 'Documentation Clarity',
    desc: 'Straightforward walkthrough of registry processes, layout approvals, and title verifications without technical ambiguity.',
  },
  {
    icon: MessageSquare,
    title: 'On-Ground Site Assistance',
    desc: 'Accompanied site visits with our local team so you can inspect plot boundaries, access avenues, and surrounding surroundings in person.',
  },
];

const PropertyConsultingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#002D26] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#075C4A]/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* ── Left Column: Editorial Content (7 Columns) ── */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
                <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
                  Section 06 · Property Consulting
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5">
                Need Help Finding the <br />
                <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                  Right Property?
                </span>
              </h2>

              <p className="font-inter text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                Buying land is one of the most important decisions you will ever make. Our property consulting team in Balaghat provides clear, transparent guidance to help you find the right residential or commercial parcel.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {consultingPillars.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8B879]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#D8B879]/15 text-[#D8B879] flex items-center justify-center mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-playfair font-bold text-base text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-inter text-xs text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002D26] font-inter font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to Our Property Team</span>
                </button>

                <Link
                  to="/services/property-consulting"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-inter font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <span>Learn About Consulting Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ── Right Column: Visual Stage (5 Columns) ── */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#D8B879]/30 bg-[#001713] shadow-2xl p-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={consultImg}
                    alt="Property Consultation in Balaghat"
                    className="w-full h-full object-cover brightness-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001713] via-transparent to-transparent" />
                  
                  {/* Floating Trust Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#001713]/90 backdrop-blur-md border border-[#D8B879]/40 text-white">
                    <div className="flex items-center gap-2 mb-2 text-[#D8B879]">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-xs font-mono font-bold tracking-widest uppercase">
                        BALAGHAT LOCAL EXPERTISE
                      </span>
                    </div>
                    <h4 className="font-playfair text-lg font-bold mb-1">
                      Direct Guidance, Zero Ambiguity
                    </h4>
                    <p className="font-inter text-xs text-white/70 leading-relaxed">
                      Consult with our on-ground team before finalizing any plot purchase. We are based right here in Balaghat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="consulting"
        title="Schedule a Property Consultation"
        subtitle="Speak directly with our Balaghat property guidance team. We will arrange a call or office visit at your convenience."
        source="homepage_section_06_consulting"
      />
    </>
  );
};

export default PropertyConsultingSection;

