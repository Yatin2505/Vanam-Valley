// src/pages/Projects.jsx
// Complete Redesign for Vanam Valley Projects Page
// Modern, luxury layout matching the unified Vanam Valley aesthetic

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  FileText,
} from 'lucide-react';
import { projectCategories, business } from '../data/siteData';
import EnquiryModal from '../components/EnquiryModal';
import residentialImg from '../assets/images/residential-plots.jpg';
import commercialImg from '../assets/images/commercial-roadside-plot.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ProjectsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState('residential');

  const openEnquiry = (interest = 'residential') => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  const sectors = [
    {
      id: 'residential',
      tag: 'RESIDENTIAL ENCLAVE',
      title: 'Residential Plots',
      subtitle: 'Build Your Family Home in a Peaceful Setting',
      desc: 'Thoughtfully planned residential acreage designed for custom home builders. Enjoy wide internal avenues, demarcated corners, and peaceful green surroundings away from urban congestion.',
      specs: [
        '1,200 – 2,000 Sq.Ft Planned Sizes',
        '30–40 Ft Wide Paved Roads',
        '100% Clear Freehold Title',
        'Vastu-Compliant East/North Facing',
      ],
      image: residentialImg,
      link: '/projects/residential',
      actionText: 'Explore Residential',
    },
    {
      id: 'commercial',
      tag: 'COMMERCIAL CORRIDOR',
      title: 'Commercial Plots',
      subtitle: 'High-Visibility Arterial Frontage for Business',
      desc: 'Prime business parcels positioned along key road access corridors to maximize customer visibility and heavy vehicle access for showrooms, clinics, and enterprises.',
      specs: [
        'Direct Main Road Frontage Access',
        'Flexible Plot Frontage & Depth Ratios',
        'Rapidly Appreciating Commercial Zone',
        'Complete Legal Documentation Support',
      ],
      image: commercialImg,
      link: '/projects/commercial',
      actionText: 'Explore Commercial',
    },
  ];

  return (
    <div className="bg-[#FAF8F3] text-[#1a1a1a] select-none overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
              Vanam Valley Portfolio
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-[56px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight"
          >
            Curated Land Formats in{' '}
            <span className="font-playfair italic font-normal text-[#2D5A43]">
              Balaghat
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-base sm:text-lg text-[#1a1a1a]/65 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are planning a private residential retreat or securing a commercial asset with arterial road frontage, Vanam Valley delivers planned plotted infrastructure with 100% legal clarity.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#residential"
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/10 text-xs font-outfit font-semibold text-[#1a1a1a] shadow-sm transition-colors"
            >
              Residential Plots
            </a>
            <a
              href="#commercial"
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/10 text-xs font-outfit font-semibold text-[#1a1a1a] shadow-sm transition-colors"
            >
              Commercial Plots
            </a>
            <button
              type="button"
              onClick={() => openEnquiry('both')}
              className="px-6 py-2.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white text-xs font-outfit font-semibold shadow-sm transition-colors"
            >
              Schedule Site Visit
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── DUAL SECTORS SHOWCASE ── */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {sectors.map((sector, idx) => (
          <div
            key={sector.id}
            id={sector.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Card */}
            <motion.div
              {...fadeUp(0.1)}
              className={`lg:col-span-6 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[16/11] bg-[#1a3c2a] group">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#2D5A43] text-[10px] font-outfit font-bold tracking-wider uppercase">
                  <span>{sector.tag}</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-outfit font-semibold text-[#D8B879] uppercase tracking-wider block mb-1">
                    Balaghat, M.P.
                  </span>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-bold">
                    {sector.title}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Description & Action */}
            <motion.div
              {...fadeUp(0.2)}
              className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A43]/[0.08] text-[#2D5A43] text-xs font-outfit font-bold tracking-wider uppercase">
                <span>Category 0{idx + 1}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight">
                {sector.subtitle}
              </h2>

              <p className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed">
                {sector.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {sector.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#1a1a1a]/[0.06] text-xs font-outfit font-medium text-[#1a1a1a]/80"
                  >
                    <CheckCircle2 size={15} className="text-[#2D5A43] flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={sector.link}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
                >
                  <span>{sector.actionText}</span>
                  <ArrowRight size={13} />
                </Link>

                <button
                  type="button"
                  onClick={() => openEnquiry(sector.id)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/15 text-[#1a1a1a] font-outfit font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <FileText size={14} className="text-[#2D5A43]" />
                  <span>Enquire Formats</span>
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ── CONSULTATION CTA BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#122f24] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30 text-center"
        >
          <div className="pointer-events-none absolute -top-20 left-1/4 w-80 h-80 bg-[#2D5A43]/40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-[#D8B879]/10 rounded-full blur-2xl" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              Balaghat Local Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight">
              Looking for Guidance on Plot Selection?
            </h2>
            <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
              Our Balaghat property desk will review your spatial needs, budget, and orientation preferences to recommend suitable plot configurations with full title documentation.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiry('both')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#1a1a1a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest={modalInterest}
        title="Schedule a Plot Consultation"
        subtitle="Connect with our Balaghat team for layout maps, sector availability, and on-ground site walk arrangements."
        source="projects_page"
      />
    </div>
  );
};

export default ProjectsPage;
