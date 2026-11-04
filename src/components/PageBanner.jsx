// src/components/PageBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, breadcrumb = [], image }) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85';

  return (
    <section
      className="relative h-64 md:h-80 lg:h-96 flex items-end pb-14 overflow-hidden"
      style={{
        backgroundImage: `url(${image || defaultImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-3">
            <Link to="/" className="text-white/60 hover:text-gold font-inter text-xs tracking-wide transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={12} className="text-white/40" />
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-gold font-inter text-xs tracking-wide transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold font-inter text-xs tracking-wide">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label mb-2"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageBanner;

