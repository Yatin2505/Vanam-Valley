// src/pages/PropertyConsulting.jsx
// Complete Redesign for Vanam Valley Property Consulting Page
// Honest, transparent advisory for home buyers and real estate investors in Balaghat

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  FileSearch,
  Scale,
  Users,
  Calendar,
  Building2,
  FileCheck,
} from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import { business } from '../data/siteData';
import consultingImg from '../assets/images/property-consulting-discussion.jpg';
import surveyImg from '../assets/images/property-siteplan-survey.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const consultationSteps = [
  {
    num: '01',
    title: 'Understand Your Requirements',
    desc: 'We listen to your specific spatial and budget needs — whether planning a family residence, securing roadside frontage, or long-term asset growth in Balaghat.',
  },
  {
    num: '02',
    title: 'Evaluate Suitable Land Formats',
    desc: 'We review plot dimensions, road connectivity, orientation (East/North facing), and sector accessibility across Balaghat.',
  },
  {
    num: '03',
    title: 'Transparent Paperwork Review',
    desc: 'We guide you through title deeds, demarcation records, mutation procedures, and registry documentation with complete transparency.',
  },
  {
    num: '04',
    title: 'Guided On-Ground Site Walk',
    desc: 'We arrange an escorted on-site walk in Balaghat so you can personally inspect marked boundary corners, road widths, and surroundings.',
  },
];

const guidanceTopics = [
  'Selecting the right plot size for your budget and architectural house plan',
  'Commercial location assessment for retail shops, showrooms, or office spaces',
  'Understanding land survey demarcations, corner pins, and approach road widths',
  'Orientation guidelines (East/North facing options for peaceful living)',
  'Guidance for first-time land buyers across Balaghat and surrounding districts',
  'Arranging escorted physical site visits with our local engineering desk',
];

const PropertyConsultingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
                Property Consulting Services
              </span>
              <span className="h-px w-16 bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[58px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.08] tracking-tight"
            >
              Honest Guidance for Your{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Property Journey
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-base sm:text-lg text-[#1a1a1a]/70 leading-relaxed max-w-xl"
            >
              Buying land is one of the most critical decisions you will ever make. Our property consulting team in Balaghat provides clear, transparent guidance to help you find the right residential or commercial parcel.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Talk to Property Team</span>
                <ArrowRight size={13} />
              </button>

              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/15 text-[#1a1a1a] font-outfit font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <Phone size={14} className="text-[#2D5A43]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[4/3] bg-[#1a3c2a] group">
              <img
                src={consultingImg}
                alt="Property Consulting at Vanam Valley Balaghat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] font-outfit font-bold text-[#D8B879] uppercase tracking-wider block mb-0.5">
                  Direct Local Advisory
                </span>
                <p className="text-sm font-outfit font-bold">
                  Balaghat Office Consultation · M.P.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4-STEP ADVISORY PROCESS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white border-y border-[#1a1a1a]/[0.06]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Our Advisory Process
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
            >
              How We Guide You to the Right Decision
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
            >
              A structured, transparent four-step walkthrough ensuring complete clarity from initial inquiry to final land registry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="p-7 rounded-3xl bg-[#FAF8F3] border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 hover:shadow-xl transition-all space-y-4 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#1a3c2a] text-[#D8B879] flex items-center justify-center font-outfit font-bold text-sm shadow-md mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-[#1a1a1a] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-outfit text-[#2D5A43] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>Step 0{i + 1} Milestone</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS COVERED SECTION ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Scope of Consultation
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight leading-tight"
            >
              What Our Advisory Covers
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
            >
              Whether you are an individual building your first home or an investor acquiring multi-plot acreage, our local advisory desk provides direct support.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {guidanceTopics.map((topic, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.2 + i * 0.05)}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#1a1a1a]/[0.06] text-xs font-outfit font-medium text-[#1a1a1a]/85"
                >
                  <CheckCircle2 size={15} className="text-[#2D5A43] flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual Card */}
          <motion.div {...fadeUp(0.25)} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a1a]/10 aspect-[4/3] bg-[#1a3c2a] group">
              <img
                src={surveyImg}
                alt="On-ground land survey documentation at Vanam Valley"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] font-outfit font-bold text-[#D8B879] uppercase tracking-wider block mb-0.5">
                  Legal & Survey Verification
                </span>
                <p className="text-sm font-outfit font-bold">
                  Accurate Corner Pins & Registry Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONSULTATION CTA BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#122e22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              Schedule A Session
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight">
              Ready to Discuss Your Property Plans?
            </h2>
            <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
              Connect with our local team for a free consultation at our Balaghat office or on-site at Vanam Valley.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
              >
                <span>Book Consultation</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#1a1a1a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>WhatsApp Property Desk</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="consulting"
        title="Schedule a Property Consultation"
        subtitle="Speak directly with our Balaghat property guidance team. We will arrange a call or office visit at your convenience."
        source="consulting_page"
      />
    </div>
  );
};

export default PropertyConsultingPage;
