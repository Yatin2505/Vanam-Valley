// src/pages/PropertyConsulting.jsx
// Professional Editorial Page for Property Consulting at Vanam Valley — Balaghat, M.P.

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Compass,
  FileCheck,
  Scale,
  Users,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';
import bannerImg from '../assets/images/property-consulting-discussion.jpg';
import consultingImg from '../assets/images/property-siteplan-survey.jpg';

const consultationSteps = [
  {
    num: '01',
    title: 'Understand Your Requirements',
    desc: 'We listen to your specific spatial and budget needs — whether planning a family residence, securing roadside frontage, or long-term asset growth.',
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
    desc: 'We arrange an escorted on-site walk in Balaghat so you can personally inspect marked boundary corners and internal roads.',
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
  return (
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="Property Consulting"
        subtitle="Honest Guidance for Your Land Decisions in Balaghat"
        breadcrumb={[{ label: 'Services', path: '/services/property-consulting' }, { label: 'Property Consulting' }]}
        image={bannerImg}
      />

      {/* ── Intro Narrative: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                PROPERTY CONSULTING SERVICES
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-5">
              Need Help Finding the <br />
              <span className="italic font-normal text-[#075C4A]">Right Property in Balaghat?</span>
            </h2>

            <p className="font-inter text-[#18231F]/80 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Buying land is one of the most critical financial and emotional milestones in life. Whether buying your first residential plot or expanding your business footprint, you need straightforward, honest guidance without confusing jargon or high-pressure sales tactics.
            </p>

            <p className="font-inter text-[#18231F]/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
              At Vanam Valley, our property consulting desk connects you directly with local land specialists in Balaghat who listen to your goals, review genuine property records, and ensure complete transparency every step of the way.
            </p>

            {/* Topics Covered */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#002D26]/15 shadow-md mb-8">
              <h3 className="font-playfair font-bold text-lg text-[#002D26] mb-4">
                What Our Advisory Covers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {guidanceTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-inter text-[#18231F]/85">
                    <CheckCircle2 size={16} className="text-[#075C4A] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3.5 px-7 shadow-lg"
              >
                <span>Book Free Property Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/80 border border-[#002D26]/20 text-[#002D26] font-inter font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone size={14} className="text-[#075C4A]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Image container with strict relative positioning */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
              <img
                src={consultingImg}
                alt="Property site plan discussion and land survey in Balaghat"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                  On-Site Technical Review
                </span>
                <p className="text-xs font-playfair font-bold text-white mt-0.5">
                  Balaghat Cadastral &amp; Boundary Mapping
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4-Step Consultation Framework: Deep Forest Emerald Section ── */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#D8B879]/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                STRUCTURED PROCESS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Our 4-Step Advisory Approach
            </h2>
            <p className="font-inter text-white/70 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              We eliminate guesswork with a straightforward step-by-step roadmap from initial query to verified ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationSteps.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl bg-[#001D18]/90 border border-[#D8B879]/25 shadow-xl text-left hover:border-[#D8B879]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-[#D8B879] mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-inter text-white/70 text-xs leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Consultation CTA: Luxury Ivory Transition ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-16 md:py-20 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#002D26] mb-3">
            Speak Directly with a Balaghat Property Advisor
          </h2>
          <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mb-6 font-light leading-relaxed">
            No intermediaries, no confusion. Get genuine insights on land valuation, boundaries, and growth corridors in Balaghat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3 px-7 shadow-md"
            >
              <span>Schedule Free Call</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-inter font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-sm"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyConsultingPage;
