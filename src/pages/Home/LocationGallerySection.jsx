// src/pages/Home/LocationGallerySection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import g1 from '../../assets/images/gallery-image-01.jpg';
import g2 from '../../assets/images/gallery-image-02.jpg';
import g3 from '../../assets/images/gallery-image-03.jpg';
import g4 from '../../assets/images/gallery-image-04.jpg';

const galleryPhotos = [
  { id: 1, src: g1, alt: 'Aerial road corridor through plotted land' },
  { id: 2, src: g2, alt: 'Green tree-lined open landscape' },
  { id: 3, src: g3, alt: 'Plotted development with demarcations' },
  { id: 4, src: g4, alt: 'Paved access road through green fields' },
];

const LocationGallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev > 0 ? prev - 1 : galleryPhotos.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev < galleryPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="bg-[#002620] py-20 md:py-28 px-5 md:px-10 lg:px-16 border-t border-gold/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* ── LEFT: OUR LOCATION ── */}
        <div className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-card-dark">
          {/* Text on left */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-inter font-semibold text-gold tracking-[0.25em] uppercase text-xs">
                  OUR LOCATION
                </span>
                <div className="h-px w-6 bg-gold/40" />
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
                Project location to be confirmed
              </h3>

              <p className="font-inter text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Stay tuned for the exact location of our upcoming plotted development in Balaghat.
              </p>
            </div>

            <div>
              <Link to="/contact" className="btn-outline-gold text-xs px-5 py-2.5 inline-flex items-center gap-2">
                <span>View on Map</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Map Graphic on right */}
          <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto sm:h-52 rounded-2xl overflow-hidden bg-[#001713] border border-gold/25 relative flex items-center justify-center p-4">
            <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 w-full h-full opacity-35">
              <path
                d="M50 40 C80 20 130 30 160 50 C180 80 185 130 150 160 C120 185 70 180 40 150 C20 120 25 65 50 40 Z"
                fill="#002620"
                stroke="#D8B879"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <circle cx="100" cy="100" r="30" stroke="#D8B879" strokeWidth="0.8" opacity="0.6"/>
              <circle cx="100" cy="100" r="55" stroke="#D8B879" strokeWidth="0.8" opacity="0.4"/>
            </svg>

            {/* Glowing Centered Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gold/25 border-2 border-gold flex items-center justify-center text-gold shadow-gold animate-pulse">
                <MapPin size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: GALLERY PREVIEW ── */}
        <div className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-card-dark">
          {/* Text on left */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-inter font-semibold text-gold tracking-[0.25em] uppercase text-xs">
                  GALLERY
                </span>
                <div className="h-px w-6 bg-gold/40" />
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
                A Glimpse of Vanam Valley
              </h3>

              <p className="font-inter text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Explore our project's authentic surroundings and plotted landscape progress.
              </p>
            </div>

            <div>
              <Link to="/gallery" className="btn-outline-gold text-xs px-5 py-2.5 inline-flex items-center gap-2">
                <span>View Gallery</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 4-Photo 2x2 Grid on right */}
          <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto sm:h-52 grid grid-cols-2 gap-2.5">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(idx)}
                className="relative rounded-xl overflow-hidden border border-gold/25 group cursor-pointer aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#001D18]/0 group-hover:bg-[#001D18]/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Photo Lightbox Modal ── */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setActivePhoto(null)}
            >
              <X size={26} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={activePhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryPhotos[activePhoto]?.src}
                alt={galleryPhotos[activePhoto]?.alt}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="bg-[#001D18] p-3 text-center text-xs font-inter text-gold/80">
                {activePhoto + 1} / {galleryPhotos.length} — {galleryPhotos[activePhoto]?.alt}
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default LocationGallerySection;
