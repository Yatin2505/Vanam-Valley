// src/pages/Home/ResidentialCommercialSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Home, Building2, FileText } from 'lucide-react';
import residentialImg from '../../assets/images/residential-plots.jpg';
import commercialImg from '../../assets/images/commercial-roadside-plot.jpg';
import EnquiryModal from '../../components/EnquiryModal';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ResidentialCommercialSection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, interest: 'residential', title: '' });
  const [activeTab, setActiveTab] = useState('residential');

  const openEnquiry = (interest, title) => {
    setModalState({ isOpen: true, interest, title });
  };

  const tabs = [
    {
      id: 'residential',
      label: 'Residential Plots',
      icon: Home,
      image: residentialImg,
      tagline: 'For Home Builders',
      heading: 'Build Your Dream Home',
      desc: 'Designed for families ready to build their custom home in a peaceful, planned setting. Enjoy clear boundaries, designated internal roads, and healthy green surroundings away from city congestion.',
      features: [
        'Clear boundary demarcations',
        'Internal approach avenue access',
        'Peaceful residential zoning',
        'Individual plot registration support',
      ],
      path: '/projects/residential',
      ctaLabel: 'Explore Residential',
      enquiryLabel: 'Enquire for Residential',
    },
    {
      id: 'commercial',
      label: 'Commercial Plots',
      icon: Building2,
      image: commercialImg,
      tagline: 'For Business & Enterprise',
      heading: 'Grow Your Business',
      desc: 'Positioned along key road access corridors to maximize visibility and customer footfall. Ideal for commercial establishments, retail outlets, professional clinics, and business investments.',
      features: [
        'Direct main road access & frontage',
        'High vehicular exposure corridor',
        'Adaptable plot frontage depths',
        'Straightforward commercial documentation',
      ],
      path: '/projects/commercial',
      ctaLabel: 'Explore Commercial',
      enquiryLabel: 'Enquire for Commercial',
    },
  ];

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <>
      <section className="relative py-24 md:py-32 bg-[#f8faf9] overflow-hidden">
        {/* Background accents */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, transparent 60%, rgba(45,90,67,0.04) 100%)',
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#2D5A43]/[0.04]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-[0.2em] uppercase text-[#2D5A43]">
                Plot Opportunities
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-5"
            >
              Find a Plot That{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Fits Your Needs
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="text-base text-[#1a1a1a]/55 font-inter leading-relaxed"
            >
              Whether you are planning your family home or seeking roadside frontage for your business,
              Vanam Valley provides planned, demarcated plots in Balaghat.
            </motion.p>
          </div>

          {/* Tab Switcher */}
          <motion.div {...fadeUp(0.25)} className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 border border-[#1a1a1a]/[0.06] shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-outfit font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#1a3c2a] text-white shadow-md'
                      : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a]'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active Tab Content */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#1a1a1a]/[0.06] shadow-lg flex flex-col lg:flex-row items-stretch"
          >
            {/* Image Side */}
            <div className="relative lg:w-1/2 min-h-[320px] sm:min-h-[420px] overflow-hidden group">
              <img
                src={active.image}
                alt={active.heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-outfit font-bold tracking-wider uppercase text-[#2D5A43]">
                <active.icon size={13} />
                <span>{active.tagline}</span>
              </div>

              {/* Overlay heading */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white">
                  {active.heading}
                </h3>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed mb-7">
                  {active.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {active.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8faf9] border border-[#2D5A43]/[0.06] text-xs font-outfit text-[#1a1a1a]/80"
                    >
                      <CheckCircle2 size={14} className="text-[#2D5A43] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[#1a1a1a]/[0.06]">
                <Link
                  to={active.path}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1a3c2a] hover:bg-[#15492f] text-white font-outfit font-semibold text-sm tracking-wide transition-colors shadow-md"
                >
                  {active.ctaLabel}
                  <ArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  onClick={() => openEnquiry(active.id, `Enquire for ${active.label}`)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-[#1a1a1a]/10 hover:border-[#2D5A43]/30 text-[#1a1a1a]/70 font-outfit font-semibold text-sm tracking-wide transition-colors"
                >
                  <FileText size={14} className="text-[#2D5A43]" />
                  {active.enquiryLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, interest: 'residential', title: '' })}
        defaultPropertyInterest={modalState.interest}
        title={modalState.title}
        source="homepage_section_03"
      />
    </>
  );
};

export default ResidentialCommercialSection;
