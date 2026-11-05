// src/pages/Home/LocationGallerySection.jsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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
    <section className="bg-[#002620] py-20 md:py-28 px-5 md:px-10 lg:px-16 border-t border-gold/15 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* ── LEFT: OUR LOCATION ── */}
        <motion.div
          className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-card-dark"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Text on left */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between h-full">
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
                Stay tuned for the exact location of our upcoming plotted development.
              </p>
            </div>

            <div>
              <Link to="/contact" className="btn-outline-gold text-xs px-5 py-2.5">
                View on Map
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
        </motion.div>

        {/* ── RIGHT: GALLERY PREVIEW ── */}
        <motion.div
          className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-card-dark"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Text on left */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-inter font-semibold text-gold tracking-[0.25em] uppercase text-xs">
                  GALLERY
                </span>
                <div className="h-px w-6 bg-gold/40" />
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
                A Glimpse of <span className="italic text-gradient-gold">Vanam Valley</span>
              </h3>

              <p className="font-inter text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Explore our project's beautiful surroundings and development.
              </p>
            </div>

            <div>
              <Link to="/gallery" className="btn-outline-gold text-xs px-5 py-2.5">
                View Gallery
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 2x2 Image Grid on right */}
          <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2.5">
            {galleryPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(index)}
                className="aspect-[4/3] rounded-xl overflow-hidden border border-gold/20 relative group cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#001D18]/25 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-gold/90 text-[#002620] flex items-center justify-center">
                      <ZoomIn size={15} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image modal"
            >
              <X size={26} />
            </button>

            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-all z-20"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-all z-20"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={activePhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryPhotos[activePhoto].src}
                alt={galleryPhotos[activePhoto].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-gold/30 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LocationGallerySection;
