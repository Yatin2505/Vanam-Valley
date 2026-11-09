// src/pages/Home/index.jsx
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import WhySection from './WhySection';
import LocationGallerySection from './LocationGallerySection';
import CTASection from './CTASection';

const HomePage = () => {
  return (
    <>
      {/* 1. Immersive Hero with Looping Drone Video & Monumental Typography */}
      <HeroSection />

      {/* 2. Editorial About Story: A Sanctuary Crafted for Generations */}
      <AboutSection />

      {/* 3. Curated Property Showcases: Land for Life. Space to Grow */}
      <ProjectsSection />

      {/* 4. Architectural Feature Highlights: A Better Balance of Nature & Opportunity */}
      <WhySection />

      {/* 5. Split Section: Balaghat Location & Visual Gallery Highlights */}
      <LocationGallerySection />

      {/* 6. Closing Invitation & Multi-channel Consultation CTA */}
      <CTASection />
    </>
  );
};

export default HomePage;
