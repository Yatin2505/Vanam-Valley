// src/pages/Residential.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PlotCard from '../components/PlotCard';
import { residentialPlots } from '../data/siteData';
import bannerImg from '../assets/images/residential-plots.jpg';
import featureImg from '../assets/images/about-landscape.jpg';

const features = [
  'Wide planned internal roads',
  'Lush green landscape surroundings',
  'Planned residential layout design',
  '100% clear title documentation',
  'Proximity to Balaghat city center',
  'Natural gradient drainage planning',
];

const ResidentialPage = () => {
  return (
    <>
      <PageBanner
        title="Residential Plots"
        subtitle="A Sanctuary Crafted for Private Living"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Residential Plots' }]}
        image={bannerImg}
      />

      {/* Intro */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
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
              Our residential plots are thoughtfully laid out to give you the ideal canvas for a bespoke home. Set amidst the natural tranquility of Balaghat, these parcels provide undisturbed privacy, fresh air, and long-term security.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[#18231F]/80 font-inter text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#075C4A] flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
              <span>Enquire for Residential Plots</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
              <img
                src={featureImg}
                alt="Panoramic green surroundings at Vanam Valley"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Available Plot Formats */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-5 md:px-10 lg:px-16 border-t border-b border-gold/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                LAYOUT SPECIFICATIONS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Illustrative Residential Formats
            </h2>
            <p className="font-inter text-white/60 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              The formats below depict illustrative plot proportions. Please connect with our Balaghat office for confirmed sector layouts, current availability, and pricing.
            </p>
          </div>

          {/* Cards Grid — always visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialPlots.map((plot) => (
              <div key={plot.id}>
                <PlotCard plot={plot} category="residential" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#002D26] mb-3">
            Interested in a Residential Plot?
          </h2>
          <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-light">
            Contact our Balaghat property desk to discuss exact dimensions, orientation options, and site visits.
          </p>
          <Link to="/contact" className="btn-forest inline-flex items-center gap-2 text-xs">
            <span>Contact Property Desk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ResidentialPage;
