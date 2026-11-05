// src/components/PlotCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Compass, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlotCard = ({ plot, contactPath = '/contact' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#002620] border border-gold/25 hover:border-gold/60 rounded-3xl overflow-hidden shadow-card-dark transition-all duration-300 group flex flex-col justify-between"
    >
      {/* Image with Tag */}
      <div>
        <div className="relative h-56 overflow-hidden">
          <img
            src={plot.image}
            alt={plot.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002620] via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-4 left-4">
            <span className="bg-[#001D18]/90 backdrop-blur-md text-gold border border-gold/30 font-inter font-semibold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider">
              {plot.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-playfair font-bold text-white text-xl leading-snug mb-3">
            {plot.title}
          </h3>

          <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-white/10">
            <span className="flex items-center gap-1.5 text-xs text-white/70 font-inter">
              <Maximize2 size={13} className="text-gold" />
              {plot.size}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70 font-inter">
              <Compass size={13} className="text-gold" />
              {plot.facing}
            </span>
          </div>

          {/* Illustrative Disclaimer */}
          <div className="flex items-start gap-2.5 bg-[#001D18]/60 border border-gold/15 rounded-xl p-3 mb-6">
            <AlertCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
            <p className="text-white/55 font-inter text-[11px] leading-relaxed">
              {plot.note}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link to={contactPath} className="btn-gold w-full justify-center text-xs py-3">
          Enquire About This Plot
          <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
};

export default PlotCard;
