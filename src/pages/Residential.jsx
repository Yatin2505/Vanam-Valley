// src/pages/Residential.jsx
// Professional Editorial Page for Residential Plots at Vanam Valley — Balaghat, M.P.

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Trees, Compass, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PlotCard from '../components/PlotCard';
import { residentialPlots, business } from '../data/siteData';
import bannerImg from '../assets/images/residential-plots.jpg';
import featureImg from '../assets/images/aerial-plotted-land.jpg';

const features = [
  'Wide planned internal roads with direct avenue connectivity',
  'Lush green landscape surroundings & fresh living environment',
  'Planned residential layout design tailored for independent homes',
  '100% clear title documentation & verified land survey records',
  'Quick proximity to Balaghat commercial center & amenities',
  'Natural gradient drainage planning with open buffer zones',
];

const ResidentialPage = () => {
  return (
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="Residential Plots"
        subtitle="A Sanctuary Crafted for Private Living"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Residential Plots' }]}
        image={bannerImg}
      />

      {/* ── Overview & Features: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                RESIDENTIAL SANCTUARY
              </span>
            </div>
            
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-5">
              Build Your Dream Home in a <br />
              <span className="italic font-normal text-[#075C4A]">Peaceful Environment.</span>
            </h2>
            
            <p className="font-inter text-[#18231F]/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Our residential plots are thoughtfully laid out to give you the ideal canvas for a bespoke home. Set amidst the natural tranquility of Balaghat, these parcels provide undisturbed privacy, fresh air, and long-term security for growing families.
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
                <span>Enquire for Residential Plots</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/80 border border-[#002D26]/20 text-[#002D26] font-inter font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Get Layout PDF</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Image container with strict relative positioning to prevent any full-width overlap */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
              <img
                src={featureImg}
                alt="Panoramic green surroundings at Vanam Valley"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                  Peaceful Community Living
                </span>
                <p className="text-xs font-playfair font-bold text-white mt-0.5">
                  Demarcated Parcels in Balaghat, M.P.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Available Plot Formats: Deep Forest Emerald Section ── */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#D8B879]/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                LAYOUT SPECIFICATIONS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Illustrative Residential Formats
            </h2>
            <p className="font-inter text-white/70 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              The formats below depict illustrative plot proportions (1,200 – 2,000 Sq.ft approx). Connect with our Balaghat office for sector allocations, road facing options, and current pricing.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#001D18] border border-[#D8B879]/30 text-center max-w-2xl mx-auto shadow-xl">
            <h4 className="font-playfair text-xl font-bold text-white mb-2">
              Need a Custom Dimension or Corner Plot?
            </h4>
            <p className="text-white/70 text-xs sm:text-sm font-inter font-light mb-5">
              Speak with our local engineers to discuss specific spatial requirements or East/North facing plot preferences in Balaghat.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Request Custom Specification</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── Consultation CTA: Luxury Ivory Transition ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-16 md:py-20 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#002D26] mb-3">
            Schedule an On-Ground Site Walk in Balaghat
          </h2>
          <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mb-6 font-light leading-relaxed">
            Our local advisors arrange escorted site visits to walk you through the plotted land, internal road widths, and demarcated boundaries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3 px-7 shadow-md"
            >
              <span>Book Site Visit</span>
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

export default ResidentialPage;
