// src/pages/Home/PropertyConsultingSection.jsx
// Section 06: Property Consulting Services — Need Help Finding the Right Property?

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const PropertyConsultingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#122b22] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2D5A43]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Content (7 Columns) */}
            <div className="lg:col-span-7">
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
                <span className="text-[#D8B879] font-outfit font-semibold text-xs tracking-[0.2em] uppercase">
                  Section 06 · Property Consulting
                </span>
              </motion.div>

              <motion.h2
                {...fadeUp(0.1)}
                className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5"
              >
                Need Help Finding the <br />
                <span className="font-playfair italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                  Right Property?
                </span>
              </motion.h2>

              <motion.p
                {...fadeUp(0.2)}
                className="font-inter text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              >
                Buying land is one of the most important decisions you will ever make. Our property consulting team in Balaghat provides clear, transparent guidance to help you find the right residential or commercial parcel.
              </motion.p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {consultingPillars.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      {...fadeUp(0.25 + idx * 0.08)}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8B879]/40 hover:bg-white/[0.08] transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#D8B879]/15 text-[#D8B879] flex items-center justify-center mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-outfit font-bold text-base text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-inter text-xs text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#1a3c2a] font-outfit font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to Our Property Team</span>
                </button>

                <Link
                  to="/services/property-consulting"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <span>Learn About Consulting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Visual Stage (5 Columns) */}
            <motion.div {...fadeUp(0.3)} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#D8B879]/30 bg-[#0c241c] shadow-2xl p-2 group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={consultImg}
                    alt="Property Consultation in Balaghat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Trust Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-[#D8B879]/30 text-white">
                    <div className="flex items-center gap-2 mb-2 text-[#D8B879]">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-xs font-outfit font-bold tracking-widest uppercase">
                        BALAGHAT LOCAL EXPERTISE
                      </span>
                    </div>
                    <h4 className="font-outfit text-base sm:text-lg font-bold mb-1">
                      Direct Guidance, Zero Ambiguity
                    </h4>
                    <p className="font-inter text-xs text-white/75 leading-relaxed">
                      Consult with our on-ground team before finalizing any plot purchase. We are based right here in Balaghat.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
