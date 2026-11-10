// src/pages/Gallery.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { galleryImages, galleryCategories } from '../data/siteData';
import bannerImg from '../assets/images/hero-plotted-development.jpg';

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
    <>
      <PageBanner
        title="Visual Chronicle"
        subtitle="A Glimpse of Vanam Valley"
        breadcrumb={[{ label: 'Gallery' }]}
        image={bannerImg}
      />

      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                AUTHENTIC SITE PHOTOGRAPHY
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#002D26]">
              Explore Vanam Valley
            </h2>
            <p className="font-inter text-[#18231F]/70 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-light">
              High-resolution photographic documentation of our plotted development, natural landscape, and infrastructure corridors in Balaghat.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-inter text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#002D26] text-[#D8B879] shadow-md border border-[#002D26]'
                    : 'bg-white border border-[#002D26]/20 text-[#18231F]/70 hover:border-[#D8B879] hover:text-[#002D26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid View — all 9 items rendered reliably */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, index) => (
              <div
                key={img.id}
                className="rounded-2xl overflow-hidden relative group cursor-pointer border border-[#002D26]/10 hover:border-[#D8B879] transition-all duration-300 shadow-md hover:shadow-2xl bg-[#001D18]"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Gradient and Hover Information */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/90 via-[#001D18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-widest font-semibold mb-1">
                    {img.category}
                  </span>
                  <div className="text-xs font-inter text-white font-medium flex items-center justify-between">
                    <span>{img.alt}</span>
                    <ZoomIn size={16} className="text-[#D8B879] flex-shrink-0 ml-2" />
                  </div>
                </div>

                {/* Permanent subtle bottom label */}
                <div className="p-4 bg-white text-left border-t border-[#002D26]/10">
                  <span className="text-[9px] font-inter text-[#075C4A] font-semibold tracking-wider uppercase block mb-0.5">
                    {img.category}
                  </span>
                  <p className="text-xs font-inter text-[#002D26] font-medium truncate">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#18231F]/40 font-inter text-sm">
              No photographs in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2.5 rounded-full bg-black/50"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={26} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-[#D8B879]/40 bg-[#001D18]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
              <div className="w-full bg-[#001D18] p-4 text-center border-t border-white/10">
                <span className="text-[#D8B879] font-inter text-xs tracking-wider uppercase">
                  {lightboxIndex + 1} / {filtered.length} — {filtered[lightboxIndex]?.alt}
                </span>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
