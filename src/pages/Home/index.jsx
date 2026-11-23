// src/pages/Home/index.jsx
// Redesigned Vanam Valley Home Page
// Streamlined, high-performance luxury layout matching the approved design aesthetic
// Removed unwanted heavy sections (Three.js WebGL masterplan & redundant timeline) for instant load speed

import React from 'react';
import HeroSection from './HeroSection';
import ProjectOverviewSection from './ProjectOverviewSection';
import ResidentialCommercialSection from './ResidentialCommercialSection';
import HomeAdvantageSection from './HomeAdvantageSection';
import LocationConnectivitySection from './LocationConnectivitySection';
import HomeGallerySection from './HomeGallerySection';
import LeadGenerationCTASection from './LeadGenerationCTASection';

const HomePage = () => {
  return (
    <main className="w-full bg-[#FAF8F3] overflow-hidden">
      <HeroSection />
      <ProjectOverviewSection />
      <ResidentialCommercialSection />
      <HomeAdvantageSection />
      <LocationConnectivitySection />
      <HomeGallerySection />
      <LeadGenerationCTASection />
    </main>
  );
};

export default HomePage;
