// src/pages/Commercial.jsx
// Complete Redesign for Vanam Valley Commercial Plots Page
// High-visibility commercial frontage & enterprise parcel showcase

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Compass,
  Phone,
  Calendar,
  FileText,
  Briefcase,
  Store,
  Navigation,
} from 'lucide-react';
import PlotCard from '../components/PlotCard';
import EnquiryModal from '../components/EnquiryModal';
import { commercialPlots, business } from '../data/siteData';
import featureImg from '../assets/images/commercial-roadside-plot.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const commercialAdvantages = [
  {
    icon: Navigation,
    title: 'High-Visibility Road Frontage',
    desc: 'Direct arterial highway exposure designed to capture maximum daily vehicular and pedestrian footfall in Balaghat.',
  },
  {
    icon: Building2,
    title: 'Flexible Frontage & Depth',
    desc: 'Adaptable parcel dimensions ideal for retail showrooms, medical clinics, offices, and multi-tenant commercial complexes.',
  },
  {
    icon: TrendingUp,
    title: 'High Appreciation Corridor',
    desc: 'Situated along an expanding infrastructure axis with accelerating land valuation and long-term rental demand.',
  },
  {
    icon: Briefcase,
    title: 'Heavy Vehicle & Logistics Access',
    desc: 'Wide arterial approach roads allowing unhindered commercial logistics transit, customer parking, and supply delivery.',
  },
  {
    icon: CheckCircle2,
    title: '100% Freehold Documentation',
    desc: 'Crystal-clear commercial title records, mutation guidance, and seamless registry execution from day one.',
  },
  {
    icon: Compass,
    title: 'Strategic Balaghat Connectivity',
    desc: 'Seamless transit linking to town centers, transit corridors, and regional districts in Madhya Pradesh.',
  },
];

const CommercialPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('commercial');

  const openEnquiry = (format = 'commercial') => {
    setSelectedFormat(format);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAF8F3] text-[#1a1a1a] select-none overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
                Commercial Corridors · Balaghat
              </span>
              <span className="h-px w-16 bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[58px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.08] tracking-tight"
            >
              Prime Business Corridors in{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Balaghat
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-base sm:text-lg text-[#1a1a1a]/70 leading-relaxed max-w-xl"
            >
              Vanam Valley’s commercial parcels are strategically positioned along prime vehicular corridors to give your business maximum visibility, seamless accessibility, and high asset appreciation.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiry('commercial')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Enquire for Commercial</span>
                <ArrowRight size={13} />
              </button>

              <a
                href="#commercial-formats"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/15 text-[#1a1a1a] font-outfit font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <span>View Frontage Formats</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[4/3] bg-[#1a3c2a] group">
              <img
                src={featureImg}
                alt="Commercial approach corridor at Vanam Valley"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] font-outfit font-bold text-[#D8B879] uppercase tracking-wider block mb-0.5">
                  Arterial Highway Frontage
                </span>
                <p className="text-sm font-outfit font-bold">
                  High-Visibility Growth Corridors · Balaghat, M.P.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6 COMMERCIAL ADVANTAGES ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white border-y border-[#1a1a1a]/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Enterprise Advantages
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
            >
              Engineered for Enterprise Success
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialAdvantages.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="p-7 rounded-3xl bg-[#FAF8F3] border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-outfit font-bold text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL FORMATS ── */}
      <section id="commercial-formats" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
              Frontage Specifications
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
          >
            Commercial Parcel Formats
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
          >
            Review illustrative frontage dimensions tailored for retail setups, showrooms, and enterprise ventures. Connect with our advisory desk for on-ground demarcations and frontage allocations.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialPlots.map((plot) => (
            <PlotCard key={plot.id} plot={plot} />
          ))}
        </div>
      </section>

      {/* ── COMMERCIAL CTA BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#122e22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              Commercial Real Estate Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight">
              Expand Your Business Footprint in Balaghat
            </h2>
            <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
              Our commercial advisory desk assists business owners and investors with frontage assessments, customer footfall data, and registration procedures.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiry('Commercial Parcel Enquiry')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
              >
                <span>Request Commercial Consultation</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#1a1a1a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>WhatsApp Business Desk</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="commercial"
        title="Enquire for Commercial Plots"
        subtitle="Connect with our Balaghat team for commercial frontage plans, arterial road width dimensions, and booking details."
        source="commercial_page"
      />
    </div>
  );
};

export default CommercialPage;
