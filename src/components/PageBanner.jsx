// src/components/PageBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, breadcrumb = [], image }) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=85';

  return (
    <section
      className="relative min-h-[22rem] md:min-h-[26rem] flex items-end pt-36 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${image || defaultImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Cinematic multi-tier gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001D18] via-[#002620]/80 to-[#001D18]/60 pointer-events-none" />

      {/* Decorative gold hairline rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 w-full">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-4 text-xs font-inter tracking-wider">
            <Link to="/" className="text-white/60 hover:text-gold transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={12} className="text-gold/60" />
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2.5 mb-2.5"
          >
            <span className="editorial-tag text-gold">
              {subtitle}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageBanner;
