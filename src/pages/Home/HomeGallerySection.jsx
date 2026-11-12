

// src/pages/Home/HomeGallerySection.jsx
// Section 08: Gallery — Explore Vanam Valley

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, ArrowRight, Eye, Image as ImageIcon } from 'lucide-react';
import { galleryImages, galleryCategories } from '../../data/siteData';

const HomeGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category === activeCategory;
  });

  return (
    <>
      <section className="bg-[#001713] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden border-t border-b border-[#D8B879]/15">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#075C4A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
                <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
                  Section 08 · Visual Gallery
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
                Explore <br />
                <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                  Vanam Valley.
                </span>
              </h2>
            </div>

            <p className="font-inter text-white/70 text-sm sm:text-base max-w-md font-light leading-relaxed">
              Curated visual perspectives illustrating plotted land divisions, road alignments, residential sectors, and natural surroundings.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-inter font-medium tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-[#D8B879] text-[#001D18] shadow-md font-semibold'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#001D18] border border-white/10 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88]"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#D8B879] uppercase">
                  <span>{item.category}</span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-inter text-xs text-white/90 line-clamp-2 leading-relaxed">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-inter font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
            >
              <ImageIcon className="w-4 h-4 text-[#D8B879]" />
              <span>View All Gallery Perspectives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

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
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D8B879] block mb-1">
                  {lightboxImage.category}
                </span>
                <p className="font-inter text-sm text-white/90">
                  {lightboxImage.alt}
                </p>
              </div>

              <span className="text-[11px] font-mono text-white/50">
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

