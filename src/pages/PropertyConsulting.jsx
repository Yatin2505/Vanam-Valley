// src/pages/PropertyConsulting.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2, Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin, Compass } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';
import bannerImg from '../assets/images/property-consulting-discussion.jpg';
import consultingImg from '../assets/images/property-siteplan-survey.jpg';

const consultationSteps = [
  {
    num: '01',
    title: 'Understand Your Requirements',
    desc: 'We listen to your specific needs — whether you are planning to build a family home or acquire commercial frontage for your business.',
  },
  {
    num: '02',
    title: 'Evaluate Plot Options',
    desc: 'We review suitable plot dimensions, road connectivity, orientation, and sector accessibility across Balaghat.',
  },
  {
    num: '03',
    title: 'Transparent Paperwork Review',
    desc: 'We walk you through title documentation, layout markings, and purchase procedures with complete clarity and no hidden surprises.',
  },
  {
    num: '04',
    title: 'On-Ground Site Visit',
    desc: 'We arrange an accompanied on-site inspection in Balaghat so you can personally assess the land and surrounding area.',
  },
];

const guidanceTopics = [
  'Selecting the right plot size for your budget and future house plan',
  'Commercial location assessment for retail, showroom or office frontage',
  'Understanding land survey demarcations and approach roads',
  'Orientation guidelines (East/North facing options)',
  'Guidance for first-time land buyers in Balaghat and surrounding regions',
  'Arranging guided physical site visits with our local team',
];

const PropertyConsultingPage = () => {
  return (
    <>
      <PageBanner
        title="Property Consulting"
        subtitle="Honest Guidance for Your Land Decisions in Balaghat"
        breadcrumb={[{ label: 'Services', path: '/services/property-consulting' }, { label: 'Property Consulting' }]}
        image={bannerImg}
      />

      {/* ── Intro Narrative ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
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
              Buying land is one of the most important decisions you will make. Whether you are buying your first residential plot or expanding your business footprint, you need straightforward, honest guidance without confusing jargon or high-pressure tactics.
            </p>

            <p className="font-inter text-[#18231F]/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
              At Vanam Valley, our property consulting service connects you with local land advisors in Balaghat who take time to understand your vision, explain realistic options, and ensure total transparency throughout.
            </p>

            {/* Topics Covered */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#002D26]/10 shadow-sm mb-8">
              <h3 className="font-playfair font-bold text-lg text-[#002D26] mb-4">
                How We Assist Land Buyers:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {guidanceTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-[#18231F]/80">
                    <CheckCircle2 size={16} className="text-[#075C4A] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
                <span>Talk to Our Property Team</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappTemplates.consulting)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center gap-2 text-xs text-[#002D26] border-[#002D26]/30 hover:border-[#002D26]"
              >
                <MessageSquare size={14} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
              <img
                src={consultingImg}
                alt="Property consulting and masterplan discussion at Vanam Valley"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-6 bg-white border-t border-[#002D26]/10 text-left">
                <span className="text-[10px] font-inter text-[#075C4A] font-semibold tracking-wider uppercase block mb-1">
                  Local Expertise in Balaghat
                </span>
                <p className="text-xs sm:text-sm font-inter text-[#002D26] font-medium">
                  Direct guidance from people who know the local terrain, access routes, and development direction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4-Step Consultation Process ── */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-5 md:px-10 lg:px-16 border-t border-b border-gold/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                SIMPLE &amp; TRANSPARENT
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Our 4-Step Property Advisory
            </h2>
            <p className="font-inter text-white/70 text-xs sm:text-sm mt-3 font-light">
              A straightforward process designed to give you clarity and confidence before any purchase commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-7 text-left flex flex-col justify-between hover:border-gold/50 transition-all shadow-xl"
              >
                <div>
                  <span className="font-playfair font-bold text-4xl text-gold/30 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-playfair font-bold text-lg text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-inter text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Direct Advisory Callout CTA ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#075C4A]/10 text-[#075C4A] flex items-center justify-center mx-auto mb-5">
            <Phone size={24} />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#002D26] mb-3">
            Have Questions About Land in Balaghat?
          </h2>
          <p className="font-inter text-[#18231F]/70 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            You don't need to commit right away. Call our Balaghat property desk or drop by our office on Kumar Furniture Road for an honest conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${business.phone[0]}`}
              className="btn-gold inline-flex items-center gap-2 text-xs"
            >
              <Phone size={14} />
              <span>Call +91 {business.phone[0]}</span>
            </a>
            <Link to="/contact" className="btn-forest inline-flex items-center gap-2 text-xs">
              <span>Book an In-Person Meeting</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyConsultingPage;

