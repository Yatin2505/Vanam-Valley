// src/data/siteData.js
// Central Data File for Vanam Valley — Real Estate, Plotting & Property Consulting

import g1 from '../assets/images/gallery-image-01.jpg';
import g2 from '../assets/images/gallery-image-02.jpg';
import g3 from '../assets/images/gallery-image-03.jpg';
import g4 from '../assets/images/gallery-image-04.jpg';
import heroImg from '../assets/images/hero-plotted-development.jpg';
import resImg from '../assets/images/residential-plots.jpg';
import commImg from '../assets/images/commercial-plots.jpg';
import whyImg from '../assets/images/why-vanam-valley.jpg';

// Newly downloaded authentic real-estate photography
import commRoadImg from '../assets/images/commercial-roadside-plot.jpg';
import consultImg from '../assets/images/property-consulting-discussion.jpg';
import surveyImg from '../assets/images/property-siteplan-survey.jpg';
import aerialImg from '../assets/images/aerial-plotted-land.jpg';
import roadImg from '../assets/images/road-infrastructure-plots.jpg';

export const business = {
  name: 'Vanam Valley',
  legalName: 'Vanam Valley Group',
  tagline: 'Residential Plots • Commercial Plots • Property Consulting',
  category: 'Real Estate & Plot Development',
  city: 'Balaghat',
  state: 'Madhya Pradesh',
  country: 'India',
  phone: ['8120167005', '7999869436'],
  address: {
    street: 'Kumar Furniture Road, Near Hariom Nagar',
    city: 'Balaghat',
    state: 'Madhya Pradesh',
    pin: '481001',
    full: 'Kumar Furniture Road, Near Hariom Nagar, Balaghat, Madhya Pradesh – 481001',
  },
  instagram: 'vanamvalley.group',
  instagramUrl: 'https://www.instagram.com/vanamvalley.group',
  whatsappNumber: '918120167005',
  whatsappUrl: 'https://wa.me/918120167005?text=Hello%2C%20I%20am%20interested%20in%20Vanam%20Valley%20plots.',
  whatsappTemplates: {
    residential: 'Hello, I am interested in Residential Plots at Vanam Valley, Balaghat. Please share more details.',
    commercial: 'Hello, I would like to know more about Commercial Plots at Vanam Valley.',
    consulting: 'Hello, I am looking for property consulting assistance. Please contact me.',
    siteVisit: 'Hello, I would like to arrange a site visit to Vanam Valley, Balaghat.',
    general: 'Hello, I would like to enquire about Vanam Valley property opportunities.',
  },
  year: '2025',
};

// Primary Navbar Links (No "Location" link — location is accessible via Contact, Homepage and Footer)
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Projects',
    path: '/projects',
    dropdown: [
      { label: 'All Projects', path: '/projects', desc: 'Overview of plotting developments' },
      { label: 'Residential Plots', path: '/projects/residential', desc: 'Planned residential land parcels' },
      { label: 'Commercial Plots', path: '/projects/commercial', desc: 'High-visibility business frontage' },
    ],
  },
  {
    label: 'Services',
    path: '/services/property-consulting',
    dropdown: [
      { label: 'Property Consulting', path: '/services/property-consulting', desc: 'Honest guidance for land buyers' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// Project Overview Pillars (Section 02)
export const projectOverview = {
  headline: 'Your Next Property Opportunity Starts Here.',
  subheadline: 'Residential Plotting · Commercial Plotting · Property Consulting in Balaghat',
  description:
    'Vanam Valley is a real-estate and plotted-development venture based in Balaghat, Madhya Pradesh. We help families find the right land to build their homes, provide business owners with commercial plot opportunities, and offer straightforward property guidance every step of the way.',
  services: [
    {
      id: 'residential',
      title: 'Residential Plotting',
      summary: 'Planned residential plots for families and individuals ready to build custom homes in a peaceful environment.',
      path: '/projects/residential',
      image: resImg,
      points: ['Planned plot demarcations', 'Internal approach roads', 'Clear title verification'],
    },
    {
      id: 'commercial',
      title: 'Commercial Plotting',
      summary: 'Strategically positioned commercial plots offering high visibility and road frontage for businesses and showrooms.',
      path: '/projects/commercial',
      image: commRoadImg,
      points: ['Main road access', 'High footfall corridors', 'Flexible plot depths'],
    },
    {
      id: 'consulting',
      title: 'Property Consulting',
      summary: 'Local property guidance in Balaghat to help you assess land options, understand documentation, and make sound decisions.',
      path: '/services/property-consulting',
      image: consultImg,
      points: ['Local market insights', 'Requirement assessment', 'On-ground site assistance'],
    },
  ],
};

// Project Development Features (Section 05)
export const projectFeatures = [
  {
    id: 'layout',
    tag: 'SITE DESIGN',
    title: 'Plot Layout Planning',
    desc: 'Carefully organized parcel subdivisions that balance plot dimensions, natural orientation, and accessible internal avenues.',
    image: aerialImg,
  },
  {
    id: 'roads',
    tag: 'INFRASTRUCTURE',
    title: 'Road & Avenues Planning',
    desc: 'Thoughtfully planned internal roadway network ensuring smooth vehicle transit, wide corridors, and easy plot entry.',
    image: roadImg,
  },
  {
    id: 'development',
    tag: 'ON-GROUND PROGRESS',
    title: 'Site Preparation & Development',
    desc: 'Systematic land leveling, clear parcel boundary markings, and structured development tailored to Balaghat’s terrain.',
    image: surveyImg,
  },
  {
    id: 'entrance',
    tag: 'ARRIVAL',
    title: 'Project Entrance & Access Points',
    desc: 'Prominent project entrance designed for clean arrival, clear directional signage, and direct road connectivity.',
    image: g4,
  },
  {
    id: 'location',
    tag: 'CONNECTIVITY',
    title: 'Location & Regional Access',
    desc: 'Positioned within Balaghat with direct access to local markets, regional highways, and key transport routes.',
    image: whyImg,
  },
];

// Sample Interactive Masterplan Data (Section 04)
// Clearly labelled: Illustrative conceptual layout — not actual confirmed project plan
export const sampleMasterplanPlots = [
  { id: 'P-01', num: '01', type: 'residential', size: '1,200 sq.ft', facing: 'East', status: 'Sample Format', x: 18, y: 32, w: 12, h: 18, desc: 'East-facing residential plot format with internal avenue frontage.' },
  { id: 'P-02', num: '02', type: 'residential', size: '1,200 sq.ft', facing: 'East', status: 'Sample Format', x: 32, y: 32, w: 12, h: 18, desc: 'Standard residential format ideal for single-family construction.' },
  { id: 'P-03', num: '03', type: 'residential', size: '1,500 sq.ft', facing: 'North', status: 'Sample Format', x: 46, y: 32, w: 14, h: 18, desc: 'North-facing residential parcel with garden setback potential.' },
  { id: 'P-04', num: '04', type: 'residential', size: '1,500 sq.ft', facing: 'North', status: 'Sample Format', x: 62, y: 32, w: 14, h: 18, desc: 'Spacious residential format adjoining internal green corridor.' },
  { id: 'P-05', num: '05', type: 'residential', size: '2,000 sq.ft', facing: 'Corner', status: 'Sample Format', x: 78, y: 32, w: 16, h: 18, desc: 'Corner residential estate format with dual-road accessibility.' },
  { id: 'C-01', num: 'C1', type: 'commercial', size: '800 sq.ft', facing: 'Main Road', status: 'Sample Format', x: 18, y: 68, w: 14, h: 18, desc: 'High-visibility retail/commercial format with direct highway frontage.' },
  { id: 'C-02', num: 'C2', type: 'commercial', size: '1,200 sq.ft', facing: 'Main Road', status: 'Sample Format', x: 34, y: 68, w: 16, h: 18, desc: 'Commercial format suited for retail outlets or corporate office space.' },
  { id: 'C-03', num: 'C3', type: 'commercial', size: '1,500 sq.ft', facing: 'Main Road', status: 'Sample Format', x: 52, y: 68, w: 18, h: 18, desc: 'Prime commercial frontage format for business establishments.' },
  { id: 'C-04', num: 'C4', type: 'commercial', size: '2,000 sq.ft', facing: 'Corner', status: 'Sample Format', x: 72, y: 68, w: 22, h: 18, desc: 'Flagship commercial corner format with maximum vehicular exposure.' },
];

// Curated Gallery Items (Real Estate & Plotting Focus)
export const galleryImages = [
  {
    id: 1,
    src: heroImg,
    thumb: heroImg,
    alt: 'Aerial View of Plotted Land Layout — Vanam Valley',
    category: 'Aerial Views',
  },
  {
    id: 2,
    src: roadImg,
    thumb: roadImg,
    alt: 'Paved Internal Road & Avenue Infrastructure Planned for Plots',
    category: 'Project Development',
  },
  {
    id: 3,
    src: resImg,
    thumb: resImg,
    alt: 'Residential Plot Demarcations with Green Surroundings',
    category: 'Residential',
  },
  {
    id: 4,
    src: commRoadImg,
    thumb: commRoadImg,
    alt: 'Commercial Plotting Corridor along Road Frontage',
    category: 'Commercial',
  },
  {
    id: 5,
    src: whyImg,
    thumb: whyImg,
    alt: 'Conceptual Site Masterplan Overview and Land Parcels',
    category: 'Plot Layouts',
  },
  {
    id: 6,
    src: surveyImg,
    thumb: surveyImg,
    alt: 'Site Survey & Layout Boundary Demarcation Documentation',
    category: 'Project Development',
  },
  {
    id: 7,
    src: g4,
    thumb: g4,
    alt: 'Paved Approach Road Leading to Plot Sectors',
    category: 'Project Development',
  },
  {
    id: 8,
    src: aerialImg,
    thumb: aerialImg,
    alt: 'Divided Land Parcels with Open Green Surroundings',
    category: 'Aerial Views',
  },
  {
    id: 9,
    src: consultImg,
    thumb: consultImg,
    alt: 'On-Ground Property Consultation & Site Plan Discussion',
    category: 'Plot Layouts',
  },
];

// Project Categories Overview for Projects Page
export const projectCategories = [
  {
    id: 'residential',
    title: 'Residential Plots',
    tagline: 'A Sanctuary Crafted for Private Living',
    description: 'Planned residential plots for families ready to build custom homes with internal approach roads, demarcated boundaries, and green surroundings.',
    icon: 'Home',
    path: '/projects/residential',
    btnLabel: 'Explore Residential',
    image: resImg,
    imageAlt: 'Aerial view of residential plotted development in Balaghat',
  },
  {
    id: 'commercial',
    title: 'Commercial Plots',
    tagline: 'High-Visibility Business Frontage',
    description: 'Strategically positioned commercial plots offering high visibility and road frontage for businesses, showrooms, and retail opportunities.',
    icon: 'Building2',
    path: '/projects/commercial',
    btnLabel: 'Explore Commercial',
    image: commRoadImg,
    imageAlt: 'Commercial plotted land along prime road frontage in Balaghat',
  },
];

// Residential Plot Formats for Residential Page
export const residentialPlots = [
  {
    id: 'r1',
    title: 'Garden Residential Plot – Type A',
    size: '1,200 sq.ft',
    price: 'On Request',
    facing: 'East Facing',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: resImg,
  },
  {
    id: 'r2',
    title: 'Avenue Residential Plot – Type B',
    size: '1,500 sq.ft',
    price: 'On Request',
    facing: 'North Facing',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: aerialImg,
  },
  {
    id: 'r3',
    title: 'Premium Corner Estate Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Corner Dual Access',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: heroImg,
  },
];

// Commercial Plot Formats for Commercial Page
export const commercialPlots = [
  {
    id: 'c1',
    title: 'Highway Frontage Commercial – Type A',
    size: '800 sq.ft',
    price: 'On Request',
    facing: 'Main Road Frontage',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: commRoadImg,
  },
  {
    id: 'c2',
    title: 'High Street Business Plot – Type B',
    size: '1,200 sq.ft',
    price: 'On Request',
    facing: 'Corner Visibility',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: roadImg,
  },
  {
    id: 'c3',
    title: 'Flagship Commercial Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Double Road Frontage',
    note: 'Illustrative dimensions. Actual sizes will be confirmed upon survey. Contact us for confirmed pricing.',
    image: whyImg,
  },
];

export const galleryCategories = ['All', 'Aerial Views', 'Plot Layouts', 'Project Development', 'Residential', 'Commercial'];
