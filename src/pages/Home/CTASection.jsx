// src/pages/Home/CTASection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { business } from '../../data/siteData';

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative py-20 md:py-24 px-5 md:px-10 lg:px-16 overflow-hidden bg-[#002620] border-t border-b border-gold/15"
      ref={ref}
    >
      {/* Decorative botanical leaves watermark on left and right */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none opacity-20 text-[#25D366]/40 select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M0 100 C40 30 100 40 140 70 C160 85 190 85 200 60 C170 120 120 140 80 120 C40 100 10 130 0 100 Z"/>
          <path d="M20 140 C60 70 120 80 160 110 C180 125 210 125 220 100 C190 160 140 180 100 160 C60 140 30 170 20 140 Z" opacity="0.6"/>
        </svg>
      </div>

      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none opacity-20 text-[#25D366]/40 select-none rotate-180">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M0 100 C40 30 100 40 140 70 C160 85 190 85 200 60 C170 120 120 140 80 120 C40 100 10 130 0 100 Z"/>
          <path d="M20 140 C60 70 120 80 160 110 C180 125 210 125 220 100 C190 160 140 180 100 160 C60 140 30 170 20 140 Z" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          className="font-playfair font-normal text-3xl sm:text-4xl md:text-5xl text-white mb-3 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Your Next Chapter Starts Here.
        </motion.h2>

        {/* Narrative Subtitle */}
        <motion.p
          className="font-inter text-white/70 text-xs sm:text-sm md:text-base mb-8 max-w-xl mx-auto font-light"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get in touch with us for more details and bookings.
        </motion.p>

        {/* Dual Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D8B879] hover:bg-[#e4ca93] text-[#002620] font-inter font-medium text-xs px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Contact Us</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#001D18]/80 hover:bg-[#001D18] border border-gold/30 hover:border-gold/60 text-white font-inter text-xs px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="#25D366" width="14" height="14">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
