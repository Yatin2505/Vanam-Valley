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
    icon: 'LayoutGrid',
    title: 'Thoughtful Planning',
    desc: 'Well-laid plots with wide internal roads and organised layout.',
  },
  {
    id: 4,
    icon: 'Star',
    title: 'Future Potential',
    desc: 'Part of a rapidly developing area with strong growth outlook.',
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
    // Aerial view of residential plotted layout with roads and green surroundings
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    imageAlt: 'Aerial view of residential plotted development with internal roads',
  },
  {
    id: 'commercial',
    title: 'Commercial Plots',
    description: 'Find the right space for your business.',
    icon: 'Building2',
    path: '/projects/commercial',
    btnLabel: 'Explore Commercial',
    // Open land along a main road — commercial plot corridor
    image: 'https://images.unsplash.com/photo-1558618047-f4e70e9cb5a3?w=800&q=80',
    imageAlt: 'Commercial plotted land along prime road frontage',
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
    // Green plotted land with roads
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
  {
    id: 'r2',
    title: 'Valley View Plot – Type B',
    size: '1,500 sq.ft',
    price: 'On Request',
    facing: 'North Facing',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    // Open green land, serene setting
    image: 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=600&q=80',
  },
  {
    id: 'r3',
    title: 'Premium Corner Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Corner Plot',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    // Green landscape with trees
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80',
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
    // Open commercial land along road
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    id: 'c2',
    title: 'Business Hub Plot – Type B',
    size: '1,200 sq.ft',
    price: 'On Request',
    facing: 'Corner Location',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    // Open land development
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    id: 'c3',
    title: 'Prime Commercial Plot – Type C',
    size: '2,000 sq.ft',
    price: 'On Request',
    facing: 'Double Road Access',
    note: 'Illustrative dimensions. Actual sizes may vary. Contact us for confirmed pricing.',
    // Green open land / plot
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
];

export const galleryImages = [
  {
    id: 1,
    // Aerial green plotted development with roads
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=75',
    alt: 'Green plotted land with internal roads',
    category: 'Development',
  },
  {
    id: 2,
    // Open green nature landscape
    src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&q=75',
    alt: 'Tree-lined road through green valley',
    category: 'Nature',
  },
  {
    id: 3,
    // Plotted residential land — open land with boundary markings
    src: 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=500&q=75',
    alt: 'Residential plot with sunrise landscape',
    category: 'Residential',
  },
  {
    id: 4,
    // Lush green field/land
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&q=75',
    alt: 'Lush green nature surrounding the development',
    category: 'Nature',
  },
  {
    id: 5,
    // Open flat land / plot ready for development
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&q=75',
    alt: 'Open plotted land ready for development',
    category: 'Development',
  },
  {
    id: 6,
    // Road through open land — development area
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=75',
    alt: 'Wide road through plotted development area',
    category: 'Development',
  },
  {
    id: 7,
    // Countryside open land — residential
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=75',
    alt: 'Scenic green countryside landscape',
    category: 'Nature',
  },
  {
    id: 8,
    // Open commercial land / wide road approach
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=75',
    alt: 'Commercial plot with road access',
    category: 'Commercial',
  },
  {
    id: 9,
    // Sunrise over open land — golden light on plots
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=75',
    alt: 'Golden sunrise over open land',
    category: 'Nature',
  },
  {
    id: 10,
    // Green residential neighbourhood development
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=75',
    alt: 'Premium residential plot development',
    category: 'Residential',
  },
  {
    id: 11,
    // Open green field / nature
    src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&q=75',
    alt: 'Green natural landscape of the region',
    category: 'Nature',
  },
  {
    id: 12,
    // Commercial land area
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=75',
    alt: 'Commercial plot area',
    category: 'Commercial',
  },
];

export const galleryCategories = ['All', 'Development', 'Nature', 'Residential', 'Commercial'];

