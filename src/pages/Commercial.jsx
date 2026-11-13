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
    <div className="bg-[#001713] text-[#F8F6EF] min-h-screen">
      {/* ── Page Banner ── */}
      <PageBanner
        title="Commercial Plots"
        subtitle="Prime Business Corridors & Frontage Parcels"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Commercial Plots' }]}
        image={bannerImg}
      />

      {/* ── Overview & Features ── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#D8B879]/30 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                COMMERCIAL CORRIDORS
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              The Right Space for Your <br />
              <span className="italic font-normal text-[#E5C378]">Business to Expand in Balaghat.</span>
            </h2>

            <p className="font-inter text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Vanam Valley’s commercial parcels are strategically positioned along prime vehicular corridors to give your venture maximum visibility, seamless accessibility, and direct connectivity to surrounding districts in Madhya Pradesh.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/80 font-inter text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#D8B879] flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <span>Enquire for Commercial Parcels</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Request Commercial Brochure</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D8B879]/30 bg-[#00221B] group">
              <img
                src={featureImg}
                alt="Commercial approach corridor at Vanam Valley"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-left">
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

      {/* ── Commercial Formats Grid ── */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20 bg-[#00201A]">
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

      {/* ── Consultation CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 text-center bg-[#001713]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Discuss Your Commercial Space Requirements
          </h2>
          <p className="font-inter text-white/70 text-xs sm:text-sm mb-6 font-light">
            Our Balaghat commercial desk provides custom frontage allocations and site feasibility guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Schedule Commercial Advisory</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${business.phone[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <Phone size={14} className="text-[#D8B879]" />
              <span>Call +91 {business.phone[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPage;
