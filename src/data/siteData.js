// src/data/siteData.js
// Central data file — update with real content when available

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
  mapEmbedPlaceholder: true, // Replace with actual Google Maps embed URL when confirmed
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
  badge: 'Vanam Valley',
  headline: 'Where Nature Meets',
  headlineItalic: 'Your Future.',
  subheadline: 'Premium Residential & Commercial Plots',
  location: 'in the heart of Balaghat',
  cta1: { label: 'Explore Projects', path: '/projects' },
  cta2: { label: 'View Video', action: 'video' },
};

export const aboutHighlights = [
  {
    id: 1,
    icon: 'Trees',
    title: 'Green & Serene Environment',
    desc: 'Surrounded by natural landscapes for peaceful living.',
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Trusted Investment Opportunity',
    desc: 'Transparent dealings and clear documentation.',
  },
  {
    id: 3,
    icon: 'Gem',
    title: 'Well-Planned Development',
    desc: 'Thoughtfully laid out plots with wide roads and utilities.',
  },
];

export const whyHighlights = [
  {
    id: 1,
    icon: 'Trees',
    title: 'Green Surroundings',
    desc: 'Lush natural greenery creating a serene living environment.',
  },
  {
    id: 2,
    icon: 'MapPin',
    title: 'Prime Location',
    desc: 'Strategically located with excellent connectivity to Balaghat city.',
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: 'Reliable Investment',
    desc: 'Real estate in a growing region offering long-term value.',
  },
  {
    id: 4,
    icon: 'Star',
    title: 'Future Growth',
    desc: 'Part of a rapidly developing area with strong infrastructure.',
  },
];

export const projectCategories = [
  {
    id: 'residential',
    title: 'Residential Plots',
    description: 'Build your dream home in a peaceful environment.',
    icon: 'Home',
    path: '/projects/residential',
    btnLabel: 'Explore Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    imageAlt: 'Premium residential plot development',
  },
  {
    id: 'commercial',
    title: 'Commercial Plots',
    description: 'Grow your business in a prime location.',
    icon: 'Building2',
    path: '/projects/commercial',
    btnLabel: 'Explore Commercial',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    imageAlt: 'Premium commercial plot development',
  },
];

export const residentialPlots = [
  {
    id: 'r1',
    title: 'Garden View Plot – Type A',
    size: '1,200 sq.ft',
    price: 'On Request',
    facing: 'East Facing',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    id: 'r2',
    title: 'Valley View Plot – Type B',
    size: '1,500 sq.ft',
    price: 'On Request',
    facing: 'North Facing',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  },
  {
    id: 'r3',
    title: 'Premium Corner Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Corner Plot',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
];

export const commercialPlots = [
  {
    id: 'c1',
    title: 'High Street Commercial – Type A',
    size: '800 sq.ft',
    price: 'On Request',
    facing: 'Main Road Facing',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    id: 'c2',
    title: 'Business Hub Plot – Type B',
    size: '1,200 sq.ft',
    price: 'On Request',
    facing: 'Corner Location',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    id: 'c3',
    title: 'Prime Commercial Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Double Road Access',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
];

export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=70',
    alt: 'Green plotted development aerial view',
    category: 'Development',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=70',
    alt: 'Lush green landscape',
    category: 'Nature',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&q=70',
    alt: 'Road through green valley',
    category: 'Development',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=400&q=70',
    alt: 'Morning landscape view',
    category: 'Nature',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=70',
    alt: 'Modern residential home',
    category: 'Residential',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70',
    alt: 'Commercial development',
    category: 'Commercial',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
    alt: 'Premium villa plot',
    category: 'Residential',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70',
    alt: 'Greenery and infrastructure',
    category: 'Nature',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=70',
    alt: 'Commercial buildings',
    category: 'Commercial',
  },
];

export const galleryCategories = ['All', 'Development', 'Nature', 'Residential', 'Commercial'];

