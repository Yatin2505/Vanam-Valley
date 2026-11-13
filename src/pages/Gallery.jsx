// src/pages/Gallery.jsx
// Professional Photographic Chronicle of Vanam Valley — Balaghat, M.P.

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, ArrowRight, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { galleryImages, galleryCategories, business } from '../data/siteData';
import bannerImg from '../assets/images/hero-plotted-development.jpg';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="Visual Chronicle"
        subtitle="A Glimpse of Vanam Valley in Balaghat"
        breadcrumb={[{ label: 'Gallery' }]}
        image={bannerImg}
      />

      {/* ── Gallery Grid & Filter Section: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
              <Camera className="w-3.5 h-3.5 text-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                AUTHENTIC SITE PHOTOGRAPHY
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight">
              Explore Vanam Valley
            </h2>
            <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Photographic documentation of our plotted development, natural landscape, demarcated roads, and surroundings in Balaghat.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-sm ${
                  activeCategory === cat
                    ? 'bg-[#D8B879] text-[#001D18] shadow-md'
                    : 'bg-white text-[#18231F]/80 hover:text-[#002D26] border border-[#002D26]/15 hover:border-[#D8B879]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id || idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-3xl overflow-hidden border border-[#002D26]/12 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#D8B879] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title || item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Zoom Icon Pill */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={16} />
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-left">
                      <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                        {item.category}
                      </span>
                      <h4 className="font-playfair font-bold text-sm text-white mt-0.5 line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── Interactive Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            {/* Prev Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            {/* Modal Image Display */}
            <div
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D8B879]">
                  {filtered[lightboxIndex].category} · {lightboxIndex + 1} of {filtered.length}
                </span>
                <h3 className="font-playfair text-xl font-bold text-white mt-1">
                  {filtered[lightboxIndex].title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Consultation CTA: Deep Forest Emerald Section ── */}
      <section className="bg-[#002620] text-white py-16 px-4 sm:px-6 lg:px-10 text-center border-t border-[#D8B879]/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Experience the Land in Person
          </h2>
          <p className="font-inter text-white/70 text-xs sm:text-sm mb-6 font-light">
            Photographs only capture part of the beauty. Schedule a free escorted site visit with our local Balaghat advisors.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Schedule On-Ground Site Walk</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`tel:${business.phone[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <Phone size={14} className="text-[#D8B879]" />
              <span>Call +91 {business.phone[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
