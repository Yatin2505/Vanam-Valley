// src/pages/Residential.jsx
// Complete Redesign for Vanam Valley Residential Plots Page
// Clean, luxury aesthetic with interactive plot formats & enquiry integration

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Trees,
  Compass,
  Phone,
  Calendar,
  Sparkles,
} from 'lucide-react';
import PlotCard from '../components/PlotCard';
import EnquiryModal from '../components/EnquiryModal';
import { residentialPlots, business } from '../data/siteData';
import featureImg from '../assets/images/residential-plots.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const features = [
  {
    title: 'Wide Internal Avenues',
    desc: '30ft to 40ft planned paved roads ensuring smooth, unhampered vehicle access to every plot.',
  },
  {
    title: 'Lush Green Surroundings',
    desc: 'Surrounded by open nature, clean air, and peaceful buffer zones away from city traffic.',
  },
  {
    title: '100% Freehold Clear Title',
    desc: 'Complete legal documentation, transparent mutation guidance, and verified registry records.',
  },
  {
    title: 'Vastu-Compliant Layout',
    desc: 'Thoughtful orientation with prime East and North facing parcels designed for positive living.',
  },
  {
    title: 'Demarcated Boundaries',
    desc: 'Accurately marked corner points and boundary markers verified by physical land surveys.',
  },
  {
    title: 'Close Proximity to Balaghat',
    desc: 'Direct connectivity to Balaghat town center, railway station, schools, and essential amenities.',
  },
];

const ResidentialPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('residential');

  const openEnquiry = (format = 'residential') => {
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
                Residential Enclaves · Balaghat
              </span>
              <span className="h-px w-16 bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[58px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.08] tracking-tight"
            >
              Build Your Sanctuary in{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Nature
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-base sm:text-lg text-[#1a1a1a]/70 leading-relaxed max-w-xl"
            >
              Our residential plots are thoughtfully laid out to give you the ideal canvas for a bespoke home. Set amidst the tranquility of Balaghat, these parcels provide undisturbed privacy, fresh air, and long-term security.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiry('residential')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Enquire for Residential</span>
                <ArrowRight size={13} />
              </button>

              <a
                href="#formats"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/15 text-[#1a1a1a] font-outfit font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <span>View Plot Formats</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[4/3] bg-[#1a3c2a] group">
              <img
                src={featureImg}
                alt="Panoramic green surroundings at Vanam Valley"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] font-outfit font-bold text-[#D8B879] uppercase tracking-wider block mb-0.5">
                  Peaceful Community Living
                </span>
                <p className="text-sm font-outfit font-bold">
                  Demarcated Parcels in Balaghat, M.P.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6 KEY FEATURES GRID ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white border-y border-[#1a1a1a]/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Acreage Highlights
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
            >
              Why Families Choose{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Vanam Valley
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="p-7 rounded-3xl bg-[#FAF8F3] border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-lg font-outfit font-bold text-[#1a1a1a]">
                  {feat.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLOT FORMATS SECTION ── */}
      <section id="formats" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
              Layout Specifications
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
          >
            Illustrative Residential Formats
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
          >
            Explore popular plot configurations (1,200 – 2,000 Sq.Ft). Connect with our Balaghat desk for exact sector allocations, road-facing preferences, and on-ground availability.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialPlots.map((plot) => (
            <PlotCard key={plot.id} plot={plot} />
          ))}
        </div>

        {/* Custom Sizing Banner */}
        <motion.div
          {...fadeUp(0.3)}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#1a1a1a]/10 shadow-lg text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#2D5A43]">
            Custom Planning Support
          </span>
          <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-[#1a1a1a]">
            Need a Specific Dimension or Corner Plot?
          </h3>
          <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 max-w-xl mx-auto leading-relaxed">
            Speak with our local engineers to discuss specific architectural house plans, extra frontages, or East/North orientation in Balaghat.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openEnquiry('Custom Residential Plot')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              <span>Request Custom Specification</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── GUIDED SITE WALK CTA BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#122e22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              On-Ground Inspection
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight">
              Schedule an On-Ground Site Walk in Balaghat
            </h2>
            <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
              Our local advisors arrange escorted site visits to walk you through the plotted land, internal road widths, and demarcated boundaries.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiry('Site Visit')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
              >
                <span>Book Site Visit</span>
                <Calendar size={14} />
              </button>
              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-outfit font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={14} className="text-[#D8B879]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="residential"
        title="Enquire for Residential Plots"
        subtitle="Connect with our Balaghat team to receive detailed layout maps, plot dimensions, and pricing records."
        source="residential_page"
      />
    </div>
  );
};

export default ResidentialPage;
