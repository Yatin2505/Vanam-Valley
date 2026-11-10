// src/pages/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { projectCategories } from '../data/siteData';
import bannerImg from '../assets/images/why-vanam-valley.jpg';

const iconMap = { Home, Building2 };

const ProjectsPage = () => {
  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Choose Your Land Parcel in Balaghat"
        breadcrumb={[{ label: 'Projects' }]}
        image={bannerImg}
      />

      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                DUAL PLOTTING SECTORS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight">
              Curated Land Formats
            </h2>
            <p className="font-inter text-[#18231F]/70 text-sm sm:text-base mt-4 font-light">
              Whether you are planning a private residential retreat or securing a commercial asset along prime frontage, Vanam Valley delivers planned acreage infrastructure.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projectCategories.map((project, i) => {
              const Icon = iconMap[project.icon] || Home;
              return (
                <motion.div
                  key={project.id}
                  className="rounded-3xl overflow-hidden border border-[#002D26]/15 hover:border-[#D8B879] transition-all duration-300 shadow-xl bg-white group text-left flex flex-col justify-between"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/90 via-[#001D18]/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gold text-[#002620] flex items-center justify-center shadow-md">
                        <Icon size={20} />
                      </div>
                      <span className="font-playfair font-bold text-xl sm:text-2xl text-white">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="font-inter text-[#18231F]/75 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    <Link to={project.path} className="btn-gold inline-flex items-center gap-2 text-xs">
                      <span>{project.btnLabel}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002620] text-white py-16 px-5 text-center border-t border-gold/15">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Looking for Guidance on Plot Selection?
          </h2>
          <p className="font-inter text-white/70 text-xs sm:text-sm mb-6 font-light">
            Our Balaghat property desk will review your spatial needs and recommend suitable plot configurations.
          </p>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
            <span>Schedule Property Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
