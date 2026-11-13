// src/pages/Commercial.jsx
// Professional Editorial Page for Commercial Plots at Vanam Valley — Balaghat, M.P.

import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, TrendingUp, Compass, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PlotCard from '../components/PlotCard';
import { commercialPlots, business } from '../data/siteData';
import bannerImg from '../assets/images/commercial-roadside-plot.jpg';
import featureImg from '../assets/images/road-infrastructure-plots.jpg';

const features = [
  'High-visibility roadside frontage tailored for enterprise setups',
  'Wide vehicular approach roads designed for seamless customer access',
  '100% clear title legal documentation & direct registry support',
  'Direct arterial connectivity to Balaghat commercial corridors',
  'Rapidly appreciating commercial development zone in Balaghat',
  'Flexible depth & frontage ratios for retail, showrooms, or offices',
];

const CommercialPage = () => {
  return (
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="Commercial Plots"
        subtitle="Prime Business Corridors & Frontage Parcels"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Commercial Plots' }]}
        image={bannerImg}
      />

      {/* ── Overview & Features: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                COMMERCIAL CORRIDORS
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-5">
              The Right Space for Your <br />
              <span className="italic font-normal text-[#075C4A]">Business to Expand in Balaghat.</span>
            </h2>

            <p className="font-inter text-[#18231F]/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Vanam Valley’s commercial parcels are strategically positioned along prime vehicular corridors to give your venture maximum visibility, seamless accessibility, and direct connectivity to surrounding districts in Madhya Pradesh.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[#18231F]/85 font-inter text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#075C4A] flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3.5 px-7 shadow-lg"
              >
                <span>Enquire for Commercial Parcels</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/80 border border-[#002D26]/20 text-[#002D26] font-inter font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Request Commercial Brochure</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Image container with strict relative positioning to prevent any full-width overlap */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
              <img
                src={featureImg}
                alt="Commercial approach corridor at Vanam Valley"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                  Commercial Road Frontage
                </span>
                <p className="text-xs font-playfair font-bold text-white mt-0.5">
                  High-Visibility Growth Corridors
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Commercial Formats Grid: Deep Forest Emerald Section ── */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#D8B879]/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                BUSINESS PLOTTING
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Commercial Plot Options
            </h2>
            <p className="font-inter text-white/70 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              These illustrative configurations feature dedicated road access suitable for retail shops, offices, warehousing, and commercial ventures in Balaghat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Consultation CTA: Luxury Ivory Transition ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-16 md:py-20 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#002D26] mb-3">
            Discuss Your Commercial Space Requirements
          </h2>
          <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mb-6 font-light leading-relaxed">
            Our Balaghat commercial desk provides custom frontage allocations and site feasibility guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3 px-7 shadow-md"
            >
              <span>Schedule Commercial Advisory</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${business.phone[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF8F2] border border-[#002D26]/20 text-[#002D26] font-inter font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <Phone size={14} className="text-[#075C4A]" />
              <span>Call +91 {business.phone[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPage;
