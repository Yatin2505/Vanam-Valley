// src/pages/Gallery.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { galleryImages, galleryCategories } from '../data/siteData';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="A Glimpse of Vanam Valley"
        breadcrumb={[{ label: 'Gallery' }]}
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85"
      />

      <section className="bg-ivory section-pad" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="section-label">Our Gallery</p>
            <span className="block w-12 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text">
              Explore Vanam Valley
            </h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-inter text-sm font-medium transition-all duration-250 ${
                  activeCategory === cat
                    ? 'bg-gold text-forest-deep shadow-gold'
                    : 'border border-gold/30 text-dark-text/60 hover:border-gold hover:text-dark-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry grid */}
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            layout
          >
            <AnimatePresence>
              {filtered.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer border border-gold/15 hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-gold"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                        <ZoomIn size={18} className="text-forest-deep" />
                      </div>
                    </div>
                  </div>
                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-forest-deep/80 text-gold font-inter text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-dark-text/40 font-inter text-sm">
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white z-10 p-2"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Prev button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-3 rounded-full border border-white/20 hover:border-white/50 transition-all"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-white/60 font-inter text-xs bg-black/30 px-3 py-1 rounded-full">
                  {lightboxIndex + 1} / {filtered.length} — {filtered[lightboxIndex]?.alt}
                </span>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-3 rounded-full border border-white/20 hover:border-white/50 transition-all"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
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

