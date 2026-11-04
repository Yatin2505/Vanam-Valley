// src/pages/Home/LocationGallerySection.jsx
// Combined split section matching reference: Location (left) | Gallery preview (right)
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { business, galleryImages } from '../../data/siteData';

const LocationGallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const previewImages = galleryImages.slice(0, 4);

  return (
    <section className="bg-forest-deep" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT — Location */}
        <motion.div
          className="px-8 md:px-12 lg:px-16 py-16 md:py-20 border-r border-white/10"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label text-gold/70 mb-2">Our Location</p>
          <span className="block w-10 h-0.5 bg-gold mb-5" />
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
            Strategically Located in Balaghat
          </h2>
          <p className="font-inter text-white/55 text-sm leading-relaxed mb-6">
            Connect easily to what matters most. Vanam Valley is situated with excellent access to major roads, schools, hospitals and commercial areas in Balaghat.
          </p>

          {/* Address */}
          <div className="flex items-start gap-3 mb-6 p-4 rounded-xl border border-gold/20 bg-white/5">
            <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white/80 font-inter text-sm leading-relaxed">
                {business.address.street},<br />
                {business.address.city}, {business.address.state} – {business.address.pin}
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative h-40 rounded-xl overflow-hidden border border-gold/20 mb-6 bg-forest/50 flex items-center justify-center">
            {/* Decorative MP state shape */}
            <svg viewBox="0 0 200 160" className="w-40 opacity-30" fill="none">
              <path
                d="M20 80 Q40 30 80 40 Q120 50 140 30 Q170 20 180 60 Q190 100 170 120 Q150 140 120 130 Q90 120 70 140 Q50 150 30 130 Q10 110 20 80Z"
                fill="#D8B879"
                stroke="#D8B879"
                strokeWidth="1"
              />
            </svg>
            {/* Pin */}
            <div className="absolute w-5 h-5 rounded-full bg-gold border-2 border-white shadow-gold animate-pulse" />
            <p className="absolute bottom-3 left-0 right-0 text-center text-gold/60 font-inter text-xs">
              Map placeholder — exact project location to be confirmed
            </p>
          </div>

          <a
            href={`https://maps.google.com/?q=Balaghat,Madhya+Pradesh`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex text-sm"
          >
            View on Map
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* RIGHT — Gallery Preview */}
        <motion.div
          className="px-8 md:px-12 lg:px-16 py-16 md:py-20"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="section-label text-gold/70 mb-2">Gallery</p>
          <span className="block w-10 h-0.5 bg-gold mb-5" />
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
            A Glimpse of Vanam Valley
          </h2>
          <p className="font-inter text-white/55 text-sm leading-relaxed mb-6">
            Explore our project's beautiful surroundings and development.
          </p>

          {/* Preview grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {previewImages.map((img, i) => (
              <motion.div
                key={img.id}
                className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest-deep/20 group-hover:bg-transparent transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <Link to="/gallery" className="btn-outline-gold inline-flex text-sm">
            View Gallery
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationGallerySection;

