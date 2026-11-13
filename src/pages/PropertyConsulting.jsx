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
    <div className="bg-[#001713] text-[#F8F6EF] min-h-screen">
      {/* ── Page Banner ── */}
      <PageBanner
        title="Property Consulting"
        subtitle="Honest Guidance for Your Land Decisions in Balaghat"
        breadcrumb={[{ label: 'Services', path: '/services/property-consulting' }, { label: 'Property Consulting' }]}
        image={bannerImg}
      />

      {/* ── Intro Narrative ── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#D8B879]/30 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                PROPERTY CONSULTING SERVICES
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Need Help Finding the <br />
              <span className="italic font-normal text-[#E5C378]">Right Property in Balaghat?</span>
            </h2>

            <p className="font-inter text-white/80 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Buying land is one of the most critical financial and emotional milestones in life. Whether buying your first residential plot or expanding your business footprint, you need straightforward, honest guidance without confusing jargon or high-pressure sales tactics.
            </p>

            <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
              At Vanam Valley, our property consulting desk connects you directly with local land specialists in Balaghat who listen to your goals, review genuine property records, and ensure complete transparency every step of the way.
            </p>

            {/* Topics Covered */}
            <div className="bg-[#00221B]/90 rounded-3xl p-6 sm:p-7 border border-[#D8B879]/25 shadow-xl mb-8">
              <h3 className="font-playfair font-bold text-lg text-white mb-4">
                What Our Advisory Covers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guidanceTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-inter text-white/80">
                    <CheckCircle2 size={15} className="text-[#D8B879] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <span>Book Free Property Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={14} className="text-[#D8B879]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D8B879]/30 bg-[#00221B] group">
              <img
                src={consultingImg}
                alt="Property site plan discussion and land survey in Balaghat"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-left">
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

      {/* ── 4-Step Consultation Framework ── */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20 bg-[#00201A]">
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

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 text-center bg-[#001713]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Speak Directly with a Balaghat Property Advisor
          </h2>
          <p className="font-inter text-white/70 text-xs sm:text-sm mb-6 font-light">
            No intermediaries, no confusion. Get genuine insights on land valuation, boundaries, and growth corridors in Balaghat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Schedule Free Call</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-inter font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all"
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
