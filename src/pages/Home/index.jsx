// src/pages/Home/index.jsx
// Master Homepage for Vanam Valley — Real Estate, Plotting & Property Consulting in Balaghat
// Implements the approved 9 sections in strict sequential order

import React from 'react';
import HeroSection from './HeroSection';
import ProjectOverviewSection from './ProjectOverviewSection';
import ResidentialCommercialSection from './ResidentialCommercialSection';
import InteractiveMasterplanSection from './InteractiveMasterplanSection';
import ProjectDevelopmentSection from './ProjectDevelopmentSection';
import PropertyConsultingSection from './PropertyConsultingSection';
import LocationConnectivitySection from './LocationConnectivitySection';
import HomeGallerySection from './HomeGallerySection';
import LeadGenerationCTASection from './LeadGenerationCTASection';

const HomePage = () => {
  return (
    <main className="w-full bg-[#001410] overflow-hidden">
      {/* SECTION 01 — Cinematic Real Estate Hero */}
      <HeroSection />

      {/* SECTION 02 — Project Overview */}
      <ProjectOverviewSection />

      {/* SECTION 03 — Residential and Commercial Plots */}
      <ResidentialCommercialSection />

      {/* SECTION 04 — Interactive Masterplan / Plotting Map */}
      <InteractiveMasterplanSection />

      {/* SECTION 05 — Project Development and Features */}
      <ProjectDevelopmentSection />

      {/* SECTION 06 — Property Consulting Services */}
      <PropertyConsultingSection />

      {/* SECTION 07 — Location and Connectivity */}
      <LocationConnectivitySection />

      {/* SECTION 08 — Gallery */}
      <HomeGallerySection />

      {/* SECTION 09 — Lead Generation CTA */}
      <LeadGenerationCTASection />
    </main>
  );
};

export default HomePage;
