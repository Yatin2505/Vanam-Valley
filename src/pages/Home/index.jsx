// src/pages/Home/index.jsx
import React from 'react';
import HeroSection from './HeroSection';
import ThreeLandscapeSection from './ThreeLandscapeSection';
import BrandStorySection from './BrandStorySection';
import PropertyCollectionSection from './PropertyCollectionSection';
import ScrollStorySection from './ScrollStorySection';
import InteractiveGallerySection from './InteractiveGallerySection';
import LocationStorySection from './LocationStorySection';
import EnquiryConciergeSection from './EnquiryConciergeSection';

const HomePage = () => {
  return (
    <>
      {/* 1. Cinematic Hero with Looping Drone Video & Monumental Typography */}
      <HeroSection />

      {/* 2. Interactive 3D WebGL Topographical Environment */}
      <ThreeLandscapeSection />

      {/* 3. Editorial Brand Story & Architectural Philosophy */}
      <BrandStorySection />

      {/* 4. Curated Property Collection (01 Residential & 02 Commercial) */}
      <PropertyCollectionSection />

      {/* 5. Progressive Development Standards & Infrastructure Timeline */}
      <ScrollStorySection />

      {/* 6. Interactive Visual Chronicle & Asymmetric Gallery */}
      <InteractiveGallerySection />

      {/* 7. Geographic Presence & Balaghat Headquarters */}
      <LocationStorySection />

      {/* 8. VIP Land Concierge & Private Consultation */}
      <EnquiryConciergeSection />
    </>
  );
};

export default HomePage;
