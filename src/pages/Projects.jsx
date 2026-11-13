// src/pages/Projects.jsx
// Professional Overview of Vanam Valley Plotted Projects — Balaghat, M.P.

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight, ShieldCheck, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { projectCategories, business } from '../data/siteData';
import bannerImg from '../assets/images/why-vanam-valley.jpg';

const iconMap = { Home, Building2 };

const ProjectsPage = () => {
  return (
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="Our Projects"
        subtitle="Choose Your Land Parcel in Balaghat"
        breadcrumb={[{ label: 'Projects' }]}
        image={bannerImg}
      />

      {/* ── Dual Sectors Showcase: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                DUAL PLOTTING SECTORS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight">
              Curated Land Formats
            </h2>
            <p className="font-inter text-[#18231F]/75 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Whether you are planning a private residential retreat or securing a commercial asset along prime frontage, Vanam Valley delivers planned acreage infrastructure in Balaghat.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projectCategories.map((project, i) => {
              const Icon = iconMap[project.icon] || Home;
              return (
                <motion.div
                  key={project.id}
                  className="rounded-3xl overflow-hidden border border-[#002D26]/15 hover:border-[#D8B879] transition-all duration-300 shadow-xl hover:shadow-2xl bg-white group text-left flex flex-col justify-between"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-72 sm:h-84 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D18] via-[#001D18]/30 to-transparent" />
                    
                    <div className="absolute top-5 right-5">
                      <span className="px-3.5 py-1 rounded-full bg-black/60 border border-white/20 text-white font-inter text-xs backdrop-blur-md">
                        Balaghat, M.P.
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#D8B879] text-[#002620] flex items-center justify-center shadow-lg font-bold">
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                            Plotted Development
                          </span>
                          <span className="font-playfair font-bold text-xl sm:text-2xl text-white">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <p className="font-inter text-[#18231F]/75 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    
                    <div className="border-t border-[#002D26]/10 pt-5 flex items-center justify-between">
                      <Link
                        to={project.path}
                        className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3 px-6 shadow-md"
                      >
                        <span>{project.btnLabel}</span>
                        <ArrowRight size={14} />
                      </Link>

                      <Link
                        to="/contact"
                        className="text-xs font-inter text-[#075C4A] hover:text-[#002D26] font-semibold transition-colors underline"
                      >
                        Schedule Site Visit
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Consultation Banner: Deep Forest Section ── */}
      <section className="bg-[#002620] text-white py-16 px-4 sm:px-6 lg:px-10 text-center border-t border-[#D8B879]/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Looking for Guidance on Plot Selection?
          </h2>
          <p className="font-inter text-white/70 text-xs sm:text-sm mb-6 font-light leading-relaxed">
            Our Balaghat property desk will review your spatial needs and recommend suitable plot configurations with full title documentation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Schedule Property Consultation</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-inter font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-sm"
            >
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
