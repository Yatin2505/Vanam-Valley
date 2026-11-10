// src/data/siteData.js
// Central verified data file for Vanam Valley Group

import g1 from '../assets/images/gallery-image-01.jpg';
import g2 from '../assets/images/gallery-image-02.jpg';
import g3 from '../assets/images/gallery-image-03.jpg';
import g4 from '../assets/images/gallery-image-04.jpg';
import heroImg from '../assets/images/hero-plotted-development.jpg';
import aboutImg from '../assets/images/about-landscape.jpg';
import resImg from '../assets/images/residential-plots.jpg';
import commImg from '../assets/images/commercial-plots.jpg';
import whyImg from '../assets/images/why-vanam-valley.jpg';

export const business = {
  name: 'Vanam Valley Group',
  tagline: 'Nature • Lifestyle • Investment',
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
  whatsappUrl: 'https://wa.me/918120167005?text=Hello%2C%20I%27m%20interested%20in%20Vanam%20Valley%20plots.',
  mapEmbedPlaceholder: true,
  year: '2025',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Projects',
    path: '/projects',
    dropdown: [
      { label: 'Residential Plots', path: '/projects/residential' },
      { label: 'Commercial Plots', path: '/projects/commercial' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Location', path: '/contact#location' },
  { label: 'Contact', path: '/contact' },
];

export const heroContent = {
  badge: 'Vanam Valley Group · Balaghat, M.P.',
  headline: 'Where Nature Meets',
  headlineItalic: 'Your Future.',
  subheadline: 'Premium Residential & Commercial Plots in Balaghat',
  cta1: { label: 'Explore Projects', path: '/projects' },
  cta2: { label: 'View Video', action: 'video' },
};

export const aboutHighlights = [
  {
    id: 1,
    icon: 'Trees',
    title: 'Natural Environment',
    desc: 'Harmonious plotted layouts nestled in Balaghat’s scenic greenery.',
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Legal Transparency',
    desc: 'Clear title documentation and registered office assistance.',
  },
  {
    id: 3,
    icon: 'Gem',
    title: 'Planned Infrastructure',
    desc: 'Wide planned avenues, demarcated parcels, and open green zones.',
  },
];

export const projectCategories = [
  {
    id: 'residential',
    title: 'Residential Plots',
    description: 'Build your dream home in a peaceful, master-planned environment.',
    icon: 'Home',
    path: '/projects/residential',
    btnLabel: 'Explore Residential',
    image: resImg,
    imageAlt: 'Aerial view of residential plotted development with internal roads',
  },
  {
    id: 'commercial',
    title: 'Commercial Plots',
    description: 'High-visibility commercial parcels positioned along active road corridors.',
    icon: 'Building2',
    path: '/projects/commercial',
    btnLabel: 'Explore Commercial',
    image: commImg,
    imageAlt: 'Commercial plotted land along prime road frontage',
  },
];

export const residentialPlots = [
  {
    id: 'r1',
    title: 'Sanctuary Enclave – Format A',
    size: '1,200 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'East Facing Orientation',
    note: 'Conceptual layout format. Contact our Balaghat office for confirmed parcel dimensions.',
    image: resImg,
  },
  {
    id: 'r2',
    title: 'Valley Garden Plot – Format B',
    size: '1,500 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'North Facing Orientation',
    note: 'Conceptual layout format. Contact our Balaghat office for confirmed parcel dimensions.',
    image: aboutImg,
  },
  {
    id: 'r3',
    title: 'Grand Corner Estate – Format C',
    size: '2,000 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'Corner Plot / Dual Access',
    note: 'Conceptual layout format. Contact our Balaghat office for confirmed parcel dimensions.',
    image: heroImg,
  },
];

export const commercialPlots = [
  {
    id: 'c1',
    title: 'Commercial Frontage – Format A',
    size: '800 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'Main Corridor Frontage',
    note: 'High-visibility parcel suitable for retail or commercial offices.',
    image: commImg,
  },
  {
    id: 'c2',
    title: 'Commercial Corner – Format B',
    size: '1,200 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'Corner Axis Frontage',
    note: 'High-visibility parcel suitable for showrooms or business centres.',
    image: g1,
  },
  {
    id: 'c3',
    title: 'Enterprise Parcel – Format C',
    size: '2,000 sq.ft (Illustrative)',
    price: 'Price on Request',
    facing: 'Double Road Frontage',
    note: 'High-visibility parcel suitable for commercial development.',
    image: g4,
  },
];

// Curated Project Gallery using authentic project photography only
export const galleryImages = [
  {
    id: 1,
    src: heroImg,
    thumb: heroImg,
    alt: 'Panoramic Aerial Horizon — Vanam Valley Plotted Development',
    category: 'Development',
  },
  {
    id: 2,
    src: g1,
    thumb: g1,
    alt: 'Engineered Internal Access Avenue & Road Corridors',
    category: 'Infrastructure',
  },
  {
    id: 3,
    src: resImg,
    thumb: resImg,
    alt: 'Residential Parcel Demarcations & Green Buffer Zones',
    category: 'Residential',
  },
  {
    id: 4,
    src: commImg,
    thumb: commImg,
    alt: 'Commercial Sector Frontage & Access Infrastructure',
    category: 'Commercial',
  },
  {
    id: 5,
    src: aboutImg,
    thumb: aboutImg,
    alt: 'Scenic Natural Topography & Verdant Valley Surroundings',
    category: 'Nature',
  },
  {
    id: 6,
    src: g2,
    thumb: g2,
    alt: 'Preserved Tree Canopy & Environmental Open Spaces',
    category: 'Nature',
  },
  {
    id: 7,
    src: g3,
    thumb: g3,
    alt: 'Plotted Layout Demarcations & Planned Avenues',
    category: 'Development',
  },
  {
    id: 8,
    src: g4,
    thumb: g4,
    alt: 'Paved Approach Avenue & Plotted Parcel Access',
    category: 'Infrastructure',
  },
  {
    id: 9,
    src: whyImg,
    thumb: whyImg,
    alt: 'Masterplan Overview — Harmonious Integration with Nature',
    category: 'Development',
  },
];

export const galleryCategories = ['All', 'Development', 'Infrastructure', 'Residential', 'Commercial', 'Nature'];
