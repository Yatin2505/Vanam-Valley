// src/pages/Projects.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Home, Building2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { projectCategories } from '../data/siteData';

const iconMap = { Home, Building2 };

const ProjectsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Choose Your Plot"
        breadcrumb={[{ label: 'Projects' }]}
        image="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1600&q=85"
      />

      <section className="bg-ivory section-pad" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Our Projects</p>
            <span className="block w-12 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight">
              Choose Your Perfect Plot
            </h2>
            <p className="font-inter text-dark-text/60 text-base mt-4 max-w-xl mx-auto">
              Whether you're looking for a serene home site or a prime commercial location, Vanam Valley has the right plot for you.
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((project, i) => {
              const Icon = iconMap[project.icon] || Home;
              return (
                <motion.div
                  key={project.id}
                  className="property-card gold-border-card group overflow-hidden rounded-2xl bg-white"
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gold/90 flex items-center justify-center">
                        <Icon size={18} className="text-forest-deep" />
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-playfair text-2xl font-semibold text-dark-text mb-2">
                      {project.title}
                    </h3>
                    <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <Link to={project.path} className="btn-gold inline-flex">
                      {project.btnLabel}
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
      <section className="bg-forest py-16 px-4 text-center">
        <h2 className="font-playfair text-3xl font-semibold text-white mb-4">Not Sure Which Plot Suits You?</h2>
        <p className="font-inter text-white/55 text-sm mb-6">Our team will help you find the perfect match for your requirements.</p>
        <Link to="/contact" className="btn-gold inline-flex">
          Talk to Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
};

export default ProjectsPage;

