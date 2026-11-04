// src/pages/Home/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Building2, ArrowRight } from 'lucide-react';
import { projectCategories } from '../../data/siteData';

const iconMap = { Home, Building2 };

const ProjectCard = ({ project, index }) => {
  const Icon = iconMap[project.icon] || Home;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="property-card gold-border-card group overflow-hidden rounded-2xl"
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-forest/8 border border-forest/15 flex items-center justify-center flex-shrink-0">
            <Icon size={18} className="text-forest" />
          </div>
          <h3 className="font-playfair font-semibold text-dark-text text-xl">{project.title}</h3>
        </div>
        <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <Link to={project.path} className="btn-gold text-sm inline-flex">
          {project.btnLabel}
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-forest section-pad" ref={ref}>
      {/* Section header */}
      <motion.div
        className="text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label text-gold/70">Our Projects</p>
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mt-1">
          Choose Your Perfect Plot
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projectCategories.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

