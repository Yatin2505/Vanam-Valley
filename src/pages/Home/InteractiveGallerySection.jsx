// src/pages/Home/InteractiveGallerySection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import g1 from '../../assets/images/gallery-image-01.jpg';
import g2 from '../../assets/images/gallery-image-02.jpg';
import g3 from '../../assets/images/gallery-image-03.jpg';
import g4 from '../../assets/images/gallery-image-04.jpg';
import gHero from '../../assets/images/hero-plotted-development.jpg';
import gAbout from '../../assets/images/about-landscape.jpg';

const galleryItems = [
  { id: 1, src: gHero, title: 'Panoramic Aerial Horizon', category: 'Aerial Vistas', span: 'col-span-12 md:col-span-8 aspect-[16/9]' },
  { id: 2, src: g1, title: 'Engineered Access Corridor', category: 'Infrastructure', span: 'col-span-12 md:col-span-4 aspect-[4/3] md:aspect-auto' },
  { id: 3, src: g2, title: 'Indigenous Forest Canopy', category: 'Ecosystem', span: 'col-span-12 md:col-span-4 aspect-[4/3]' },
  { id: 4, src: g3, title: 'Demarcated Parcel Layout', category: 'Plotted Land', span: 'col-span-12 md:col-span-4 aspect-[4/3]' },
  { id: 5, src: g4, title: 'Golden Hour Access Avenue', category: 'Infrastructure', span: 'col-span-12 md:col-span-4 aspect-[4/3]' },
];

const InteractiveGallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhoto === null) return;
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowLeft') setActivePhoto((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
      if (e.key === 'ArrowRight') setActivePhoto((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

  return (
    <section className="bg-[#001713] text-white py-24 md:py-36 px-5 md:px-10 lg:px-16 relative overflow-hidden">
      
      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
              VISUAL CHRONICLE
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Perspectives of <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              Vanam Valley
            </span>
          </h2>
        </div>

        <p className="font-inter text-white/70 text-xs sm:text-sm max-w-md font-light leading-relaxed text-left">
          Explore standalone photographic perspectives highlighting the topography, serene air quality, and spatial potential of our Balaghat plotted development.
        </p>
      </div>

      {/* ── Asymmetric Editorial Image Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-5 sm:gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(idx)}
            className={`${item.span} relative rounded-2xl md:rounded-3xl overflow-hidden border border-gold/25 group cursor-pointer shadow-xl`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
              loading="lazy"
            />
            {/* Dark gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D18] via-[#001D18]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Hover Caption Pill */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] font-inter text-gold uppercase tracking-widest font-semibold">
                  {item.category}
                </span>
                <h4 className="font-playfair font-bold text-base sm:text-lg text-white">
                  {item.title}
                </h4>
              </div>

              <div className="w-9 h-9 rounded-full bg-gold/90 text-[#001D18] flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-gold">
                <ZoomIn size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal with Keyboard Navigation ── */}
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
              className="absolute top-6 right-6 text-white/70 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/80 transition-all z-30"
              onClick={() => setActivePhoto(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 transition-all z-30"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 transition-all z-30"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={26} />
            </button>

            <motion.div
              key={activePhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[activePhoto].src}
                alt={galleryItems[activePhoto].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-gold/30 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-[10px] font-inter text-gold uppercase tracking-widest">
                  {galleryItems[activePhoto].category}
                </span>
                <div className="font-playfair text-lg text-white font-bold">
                  {galleryItems[activePhoto].title}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveGallerySection;

