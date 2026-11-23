// src/pages/Gallery.jsx
// Complete Redesign for Vanam Valley Gallery Page
// Authentic photographic chronicle with interactive lightbox and category filtering

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  ArrowRight,
  Phone,
  Calendar,
  Image as ImageIcon,
} from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import { galleryImages, galleryCategories, business } from '../data/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, prevImage, nextImage, closeLightbox]);

  // Body scroll lock during lightbox
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <div className="bg-[#FAF8F3] text-[#1a1a1a] select-none overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
              Authentic Site Photography
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-[56px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight"
          >
            Explore Vanam Valley Through{' '}
            <span className="font-playfair italic font-normal text-[#2D5A43]">
              Our Lens
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-base sm:text-lg text-[#1a1a1a]/65 leading-relaxed max-w-2xl mx-auto"
          >
            Curated photographic chronicle of plotted developments, road alignments, residential enclaves, and natural surroundings in Balaghat.
          </motion.p>
        </div>
      </section>

      {/* ── GALLERY SECTION & FILTERS ── */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-10">
        {/* Category Filter Pills */}
        <motion.div {...fadeUp(0.25)} className="flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-outfit font-semibold tracking-wide transition-all shadow-sm ${
                activeCategory === cat
                  ? 'bg-[#1a3c2a] text-white shadow-md'
                  : 'bg-white hover:bg-[#2D5A43]/[0.08] text-[#1a1a1a]/70 hover:text-[#1a1a1a] border border-[#1a1a1a]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              {...fadeUp(0.05 + idx * 0.05)}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-[#1a3c2a] border border-[#1a1a1a]/10 aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-outfit font-bold tracking-wider text-[#2D5A43] uppercase">
                <span>{item.category}</span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <Maximize2 size={16} />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-inter text-xs text-white/95 line-clamp-2 leading-relaxed">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SCHEDULE VISIT BANNER ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          {...fadeUp(0)}
          className="bg-[#122e22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8B879]/30 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-outfit font-bold tracking-widest uppercase text-[#D8B879]">
              Witness On-Ground
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight">
              See Vanam Valley with Your Own Eyes
            </h2>
            <p className="font-inter text-sm sm:text-base text-white/75 leading-relaxed">
              Photographs only tell part of the story. Schedule a guided on-ground visit to walk through the internal roads, green buffer zones, and demarcated plots.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
              >
                <span>Schedule Site Walk</span>
                <Calendar size={14} />
              </button>
              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-outfit font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={14} className="text-[#D8B879]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0c241c] rounded-3xl overflow-hidden border border-[#D8B879]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#0c241c] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-outfit font-bold tracking-widest uppercase text-[#D8B879] block mb-1">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="font-inter text-sm text-white/90">
                  {filtered[lightboxIndex].alt}
                </p>
              </div>

              <span className="text-[11px] font-outfit text-white/50">
                Photo {lightboxIndex + 1} of {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertyInterest="both"
        title="Schedule a Site Walk in Balaghat"
        subtitle="Our team will accompany you for an in-person physical tour of the plotted land."
        source="gallery_page"
      />
    </div>
  );
};

export default GalleryPage;
