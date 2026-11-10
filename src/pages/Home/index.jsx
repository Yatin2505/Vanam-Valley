// src/pages/Home/index.jsx
import React, { lazy, Suspense } from 'react';
import HeroSection from './HeroSection';
import BrandStorySection from './BrandStorySection';
import PropertyCollectionSection from './PropertyCollectionSection';
import ScrollStorySection from './ScrollStorySection';
import LocationGallerySection from './LocationGallerySection';
import EnquiryConciergeSection from './EnquiryConciergeSection';

// Lazy-load Three.js canvas — avoids blocking initial bundle
const ThreeLandscapeSection = lazy(() => import('./ThreeLandscapeSection'));

// Lightweight photographic fallback for mobile / reduced-motion
const ThreeMobileFallback = () => (
  <section className="relative bg-[#001713] text-white py-20 px-5 md:px-10 lg:px-16 overflow-hidden border-t border-b border-gold/15">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
            CONCEPTUAL TOPOGRAPHY
          </span>
        </div>
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white leading-tight">
          Topographical Elevation &amp; <br />
          <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
            Conceptual Landscape
          </span>
        </h2>
      </div>
      <div className="relative rounded-3xl overflow-hidden border border-gold/25 shadow-2xl">
        <img
          src="/hero-poster.jpg"
          alt="Vanam Valley Aerial Development Overview"
          className="w-full aspect-video object-cover brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001713]/85 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-inter text-white/70">
          Conceptual Topographical Visualization. Actual layout demarcations and masterplan will be confirmed upon formal land survey releases.
        </div>
      </div>
    </div>
  </section>
);

const isMobileOrReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const HomePage = () => {
  const skip3D = isMobileOrReducedMotion();

  return (
    <>
      {/* 1. Cinematic Hero — The Land Reveals Itself */}
      <HeroSection />

      {/* 2. Interactive 3D Terrain Experience — Explore the Land */}
      {skip3D ? (
        <ThreeMobileFallback />
      ) : (
        <Suspense
          fallback={
            <section
              className="bg-[#001713] border-t border-b border-gold/15 flex items-center justify-center"
              style={{ minHeight: 520 }}
            >
              <div className="flex flex-col items-center gap-4 text-white/50">
                <div className="w-10 h-10 rounded-full border-2 border-gold/40 border-t-gold animate-spin" />
                <span className="font-inter text-xs tracking-widest uppercase text-gold/70">
                  Loading 3D Terrain…
                </span>
              </div>
            </section>
          }
        >
          <ThreeLandscapeSection />
        </Suspense>
      )}

      {/* 3. Brand Story — A Sanctuary Crafted for Generations */}
      <BrandStorySection />

      {/* 4. Residential & Commercial Projects Showcase */}
      <PropertyCollectionSection />

      {/* 5. Development Vision — A Better Balance of Nature & Opportunity */}
      <ScrollStorySection />

      {/* 6. Location & Gallery Experience */}
      <LocationGallerySection />

      {/* 7. Cinematic Enquiry CTA */}
      <EnquiryConciergeSection />
    </>
  );
};

export default HomePage;
