// src/components/PlotCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Tag, Compass, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlotCard = ({ plot, contactPath = '/contact' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="property-card gold-border-card bg-white group"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={plot.image}
          alt={plot.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="bg-gold text-forest-deep font-inter font-semibold text-xs px-3 py-1 rounded-full">
            {plot.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-playfair font-semibold text-dark-text text-lg leading-snug mb-3">
          {plot.title}
        </h3>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-dark-text/60 font-inter">
            <Maximize2 size={12} className="text-gold" />
            {plot.size}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-dark-text/60 font-inter">
            <Compass size={12} className="text-gold" />
            {plot.facing}
          </span>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 bg-ivory rounded-lg p-3 mb-4">
          <AlertCircle size={12} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-dark-text/50 font-inter text-xs leading-relaxed">
            {plot.note}
          </p>
        </div>

        <Link to={contactPath} className="btn-forest w-full justify-center text-sm py-2.5">
          Enquire About This Plot
        </Link>
      </div>
    </motion.div>
  );
};

export default PlotCard;

