// src/pages/Home/HomeGallerySection.jsx
// Section 08: Gallery — Explore Vanam Valley

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ArrowRight, Eye, Image as ImageIcon } from 'lucide-react';
import { galleryImages, galleryCategories } from '../../data/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const HomeGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category === activeCategory;
  });

  return (
    <>
      <section className="bg-white text-[#1a1a1a] py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2D5A43]/[0.03] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D8B879]/[0.04] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-[0.2em] uppercase text-[#2D5A43]">
                Section 08 · Visual Gallery
              </span>
              <span className="w-8 h-px bg-[#2D5A43]/30" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4"
            >
              Explore{' '}
              <span className="font-playfair italic font-normal text-[#2D5A43]">
                Vanam Valley
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-base text-[#1a1a1a]/60 leading-relaxed"
            >
              Curated visual perspectives illustrating plotted land divisions, road alignments, residential sectors, and natural surroundings.
            </motion.p>
          </div>

          {/* Category Filter Tabs */}
          <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-outfit font-semibold tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-[#1a3c2a] text-white shadow-md'
                    : 'bg-[#f8faf9] hover:bg-[#2D5A43]/[0.08] text-[#1a1a1a]/60 hover:text-[#1a1a1a] border border-[#1a1a1a]/[0.06]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.slice(0, 6).map((item, idx) => (
              <motion.div
                key={item.id}
                {...fadeUp(0.1 + idx * 0.08)}
                onClick={() => setLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#001D18] border border-[#1a1a1a]/10 aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-outfit font-bold tracking-wider text-[#2D5A43] uppercase">
                  <span>{item.category}</span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-inter text-xs text-white/90 line-clamp-2 leading-relaxed">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Gallery CTA */}
          <motion.div {...fadeUp(0.35)} className="mt-14 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1a3c2a] hover:bg-[#15492f] text-white font-outfit font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl"
            >
              <ImageIcon className="w-4 h-4 text-[#D8B879]" />
              <span>View All Gallery Perspectives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#001713] rounded-3xl overflow-hidden border border-[#D8B879]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#001713] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-outfit font-bold tracking-widest uppercase text-[#D8B879] block mb-1">
                  {lightboxImage.category}
                </span>
                <p className="font-inter text-sm text-white/90">
                  {lightboxImage.alt}
                </p>
              </div>

              <span className="text-[11px] font-outfit text-white/50">
                Representative Real Estate Visual
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeGallerySection;
