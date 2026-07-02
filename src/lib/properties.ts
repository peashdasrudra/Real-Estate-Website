export type Property = {
  id: string;
  slug: string;
  title: string;
  type: 'apartment' | 'penthouse' | 'duplex' | 'villa' | 'commercial' | 'land' | 'shop' | 'office';
  status: 'ready' | 'ongoing' | 'upcoming';
  purpose: 'sale' | 'rent';
  price: number;
  pricePerSqft?: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  floor?: number;
  address: string;
  area_name: string;
  city: string;
  division: string;
  latitude: number;
  longitude: number;
  images: string[];
  video?: string;
  brochure?: string;
  floorPlans: string[];
  amenities: string[];
  description: string;
  features: { label: string; value: string }[];
  nearby: { type: string; name: string; distance: string }[];
  developer: string;
  yearBuilt?: number;
  featured?: boolean;
  luxury?: boolean;
  tags?: string[];
};

export const PROPERTIES: Property[] = [
  {
    id: 'p-001',
    slug: 'golden-heights-skyline-residence',
    title: 'Golden Heights Skyline Residence',
    type: 'apartment',
    status: 'ready',
    purpose: 'sale',
    price: 32500000,
    pricePerSqft: 12500,
    area: 2600,
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    floor: 18,
    address: 'Road 11, Gulshan 1',
    area_name: 'Gulshan',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.7925,
    longitude: 90.4078,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600',
    ],
    video: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-modern-buildings-3949/1080p.mp4',
    brochure: '/downloads/golden-heights-skyline.pdf',
    floorPlans: ['/plans/skyline-4bhk.pdf', '/plans/skyline-3bhk.pdf'],
    amenities: ['Swimming Pool', 'Gymnasium', 'Rooftop Garden', '24/7 Security', 'Power Backup', 'Concierge Service', 'Private Elevator', 'Smart Home', 'EV Charging', 'Sky Lounge'],
    description:
      'An architectural triumph in the heart of Gulshan, the Skyline Residence sets a new standard for luxury vertical living. Floor-to-ceiling windows frame panoramic views of the Dhaka skyline, while a curated palette of Italian marble, oak hardwood, and brushed brass finishes compose interiors of timeless sophistication. Each residence is appointed with a private foyer, dual-aspect living spaces, and a designer kitchen featuring integrated Gaggenau appliances. The Skyline is more than an address — it is a private sanctuary above the city.',
    features: [
      { label: 'Developer', value: 'Golden Heights Properties' },
      { label: 'Year Built', value: '2023' },
      { label: 'Total Floors', value: '28' },
      { label: 'Total Units', value: '84' },
      { label: 'Car Parking', value: '2 (Allocated)' },
      { label: 'Facing', value: 'North-East, Lake View' },
      { label: 'Service Charge', value: '৳18 / sqft / month' },
      { label: 'Handover', value: 'Ready' },
    ],
    nearby: [
      { type: 'school', name: 'International School Dhaka', distance: '0.8 km' },
      { type: 'hospital', name: 'United Hospital', distance: '1.2 km' },
      { type: 'market', name: 'Gulshan 2 Market', distance: '0.6 km' },
      { type: 'mosque', name: 'Gulshan Lake Park Mosque', distance: '0.4 km' },
      { type: 'metro', name: 'MRT Line 6 - Gulshan', distance: '1.5 km' },
    ],
    developer: 'Golden Heights Properties',
    yearBuilt: 2023,
    featured: true,
    luxury: true,
    tags: ['Lake View', 'Corner Unit', 'Smart Home', 'Italian Marble'],
  },
  {
    id: 'p-002',
    slug: 'the-obsidian-penthouse',
    title: 'The Obsidian Penthouse',
    type: 'penthouse',
    status: 'ready',
    purpose: 'sale',
    price: 85000000,
    pricePerSqft: 18500,
    area: 4600,
    bedrooms: 5,
    bathrooms: 6,
    balconies: 4,
    floor: 26,
    address: 'Road 7, Banani',
    area_name: 'Banani',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.7937,
    longitude: 90.4066,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600',
    ],
    brochure: '/downloads/obsidian-penthouse.pdf',
    floorPlans: ['/plans/obsidian-penthouse.pdf'],
    amenities: ['Private Pool', 'Rooftop Garden', 'Private Elevator', 'Smart Home', 'Sauna & Steam', 'Wine Cellar', 'Mini Theatre', 'Sky Lounge', 'Butler Service', 'EV Charging'],
    description:
      'Crowning the Obsidian Tower, this triplex penthouse is the apex of Dhaka luxury. A private elevator opens directly into a 4600 sqft residence featuring double-height ceilings, a cantilevered infinity pool, and a wraparound terrace that commands uninterrupted views of the city and the Buriganga. Hand-finished millwork, marble imported from Calacatta, and bespoke furnishings create an atmosphere of quiet, considered opulence.',
    features: [
      { label: 'Developer', value: 'Golden Heights Properties' },
      { label: 'Year Built', value: '2024' },
      { label: 'Total Floors', value: '28' },
      { label: 'Car Parking', value: '3 (Allocated)' },
      { label: 'Facing', value: 'South-West, City Skyline' },
      { label: 'Handover', value: 'Ready' },
    ],
    nearby: [
      { type: 'school', name: 'Manarat Dhaka International School', distance: '1.0 km' },
      { type: 'hospital', name: 'Apollo Hospital', distance: '1.5 km' },
      { type: 'market', name: 'Banani Super Market', distance: '0.5 km' },
      { type: 'metro', name: 'MRT Line 6 - Banani', distance: '0.8 km' },
    ],
    developer: 'Golden Heights Properties',
    yearBuilt: 2024,
    featured: true,
    luxury: true,
    tags: ['Triplex', 'Private Pool', 'Penthouse', 'Skyline View'],
  },
  {
    id: 'p-003',
    slug: 'emerald-court-apartments',
    title: 'Emerald Court Apartments',
    type: 'apartment',
    status: 'ongoing',
    purpose: 'sale',
    price: 18500000,
    pricePerSqft: 9500,
    area: 1950,
    bedrooms: 3,
    bathrooms: 4,
    balconies: 2,
    floor: 12,
    address: 'Bashundhara R/A, Block D',
    area_name: 'Bashundhara',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.8156,
    longitude: 90.4253,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600',
    ],
    brochure: '/downloads/emerald-court.pdf',
    floorPlans: ['/plans/emerald-court-3bhk.pdf'],
    amenities: ['Swimming Pool', 'Gymnasium', 'Children\'s Play Area', 'Community Hall', '24/7 Security', 'CCTV Surveillance', 'Power Backup', 'Sports Complex', 'Yoga Deck'],
    description:
      'Set within the coveted enclave of Bashundhara, Emerald Court offers an exceptional family lifestyle amid landscaped gardens and tranquil water features. Apartment layouts are crafted for modern living with airy bedrooms, well-appointed kitchens, and private balconies overlooking the courtyard. Anticipated possession: December 2026.',
    features: [
      { label: 'Developer', value: 'Golden Heights Properties' },
      { label: 'Year Built', value: '2026 (Expected)' },
      { label: 'Total Floors', value: '22' },
      { label: 'Handover', value: 'Dec 2026' },
    ],
    nearby: [
      { type: 'school', name: 'South Breeze School', distance: '0.5 km' },
      { type: 'hospital', name: 'Evercare Hospital', distance: '1.8 km' },
      { type: 'market', name: 'Bashundhara City', distance: '2.2 km' },
    ],
    developer: 'Golden Heights Properties',
    yearBuilt: 2026,
    featured: true,
    tags: ['Family', 'Garden View', 'Gated Community'],
  },
  {
    id: 'p-004',
    slug: 'purbachal-prime-plot',
    title: 'Purbachal Prime Residential Plot',
    type: 'land',
    status: 'ready',
    purpose: 'sale',
    price: 14500000,
    area: 5,
    address: 'Sector 4, Purbachal New Town',
    area_name: 'Purbachal',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.8412,
    longitude: 90.4591,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600',
    ],
    brochure: '/downloads/purbachal-plot.pdf',
    floorPlans: [],
    amenities: ['Gated Community', 'Underground Utilities', 'Paved Roads', 'Parks Nearby'],
    description:
      'A 5 katha residential plot in Purbachal New Town — Dhaka\'s most strategically planned satellite city. Located in Sector 4 with all utilities connected, this ready-to-build plot offers a rare opportunity to design your forever home in a future-ready neighbourhood.',
    features: [
      { label: 'Plot Size', value: '5 Katha (1,800 sqft)' },
      { label: 'Facing', value: 'South' },
      { label: 'Road Width', value: '30 ft' },
      { label: 'Utilities', value: 'Gas, Water, Sewage, Power' },
      { label: 'Ownership', value: 'Freehold' },
    ],
    nearby: [
      { type: 'school', name: 'Purbachal Govt. School', distance: '0.4 km' },
      { type: 'market', name: 'Purbachal Market', distance: '0.8 km' },
      { type: 'mosque', name: 'Sector 4 Mosque', distance: '0.2 km' },
    ],
    developer: 'Purbachal Development Authority',
    featured: true,
    tags: ['Investment', 'Ready to Build', 'Gated'],
  },
  {
    id: 'p-005',
    slug: 'the-crescent-commercial-tower',
    title: 'The Crescent Commercial Tower',
    type: 'commercial',
    status: 'ongoing',
    purpose: 'sale',
    price: 24000000,
    pricePerSqft: 14000,
    area: 1700,
    floor: 8,
    address: 'Gulshan Avenue',
    area_name: 'Gulshan',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.7915,
    longitude: 90.4105,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600',
    ],
    brochure: '/downloads/crescent-commercial.pdf',
    floorPlans: ['/plans/crescent-commercial.pdf'],
    amenities: ['24/7 Security', 'CCTV', 'Power Backup', 'High-Speed Elevators', 'Fire Safety', 'Central AC', 'Underground Parking'],
    description:
      'Grade-A commercial space on Gulshan Avenue. Designed for forward-thinking businesses, The Crescent offers column-free floor plates, raised access flooring, and a striking double-height lobby. Pre-leasing inquiries welcome.',
    features: [
      { label: 'Developer', value: 'Golden Heights Properties' },
      { label: 'Total Floors', value: '32' },
      { label: 'Handover', value: 'Mar 2027' },
    ],
    nearby: [
      { type: 'school', name: 'International School Dhaka', distance: '0.9 km' },
      { type: 'hospital', name: 'United Hospital', distance: '1.0 km' },
      { type: 'metro', name: 'MRT Line 6', distance: '0.6 km' },
    ],
    developer: 'Golden Heights Properties',
    yearBuilt: 2027,
    featured: true,
    tags: ['Grade A', 'Commercial', 'Investment'],
  },
  {
    id: 'p-006',
    slug: 'serene-villa-uttara',
    title: 'Serene Villa — Uttara',
    type: 'villa',
    status: 'ready',
    purpose: 'sale',
    price: 65000000,
    area: 4500,
    bedrooms: 5,
    bathrooms: 6,
    balconies: 3,
    address: 'Sector 7, Uttara',
    area_name: 'Uttara',
    city: 'Dhaka',
    division: 'Dhaka',
    latitude: 23.8759,
    longitude: 90.3795,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600',
    ],
    brochure: '/downloads/serene-villa.pdf',
    floorPlans: ['/plans/serene-villa.pdf'],
    amenities: ['Private Garden', 'Swimming Pool', 'Servant Quarter', 'Garage (3 cars)', 'Smart Home', 'BBQ Area', 'Power Backup'],
    description:
      'A modern tropical villa in the diplomatic sector of Uttara, with private garden, pool, and a thoughtfully designed 4500 sqft interior. Built with cross-ventilation, double-glazed windows, and high-end fixtures throughout.',
    features: [
      { label: 'Land Area', value: '6 Katha' },
      { label: 'Year Built', value: '2023' },
      { label: 'Facing', value: 'South' },
    ],
    nearby: [
      { type: 'school', name: 'Uttara Model School', distance: '0.6 km' },
      { type: 'hospital', name: 'Kurmitola General Hospital', distance: '1.4 km' },
    ],
    developer: 'Golden Heights Properties',
    yearBuilt: 2023,
    luxury: true,
    tags: ['Villa', 'Private Pool', 'Garden'],
  },
  {
    id: 'p-007',
    slug: 'chattogram-bayview-residences',
    title: 'Chattogram Bayview Residences',
    type: 'apartment',
    status: 'upcoming',
    purpose: 'sale',
    price: 22000000,
    pricePerSqft: 10500,
    area: 2100,
    bedrooms: 3,
    bathrooms: 4,
    balconies: 2,
    address: 'Khulshi Hills',
    area_name: 'Khulshi',
    city: 'Chattogram',
    division: 'Chattogram',
    latitude: 22.3540,
    longitude: 91.8123,
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    ],
    brochure: '/downloads/chattogram-bayview.pdf',
    floorPlans: [],
    amenities: ['Swimming Pool', 'Gymnasium', 'Sea View Lounge', '24/7 Security', 'Power Backup', 'Rooftop Garden'],
    description:
      'Perched in the Khulshi Hills, Bayview Residences offers an unmatched blend of natural beauty and urban convenience. Anticipated launch: Q2 2026.',
    features: [
      { label: 'Handover', value: 'Jun 2028' },
    ],
    nearby: [
      { type: 'school', name: 'Chittagong Grammar School', distance: '1.2 km' },
      { type: 'hospital', name: 'CMCH', distance: '2.0 km' },
    ],
    developer: 'Golden Heights Properties',
    featured: false,
    tags: ['Upcoming', 'Sea View', 'Hillside'],
  },
  {
    id: 'p-008',
    slug: 'sylhet-tea-garden-retreat',
    title: 'Sylhet Tea Garden Retreat',
    type: 'villa',
    status: 'ongoing',
    purpose: 'sale',
    price: 48000000,
    area: 3800,
    bedrooms: 4,
    bathrooms: 5,
    address: 'Moulvibazar Road',
    area_name: 'Sreemangal',
    city: 'Sylhet',
    division: 'Sylhet',
    latitude: 24.3065,
    longitude: 91.7297,
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    ],
    brochure: '/downloads/sylhet-retreat.pdf',
    floorPlans: [],
    amenities: ['Tea Garden View', 'Private Pool', 'Outdoor Kitchen', 'Fire Pit', 'Nature Trails', 'Solar Power'],
    description:
      'A boutique hillside villa development in the heart of Sreemangal\'s tea country. Each villa is thoughtfully positioned to capture uninterrupted views of the surrounding gardens and rolling hills.',
    features: [
      { label: 'Handover', value: 'Dec 2026' },
    ],
    nearby: [
      { type: 'tourism', name: 'Lawachara National Park', distance: '3.5 km' },
    ],
    developer: 'Golden Heights Properties',
    luxury: true,
    tags: ['Retreat', 'Tea Garden', 'Eco'],
  },
];

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function relatedProperties(slug: string, count = 3) {
  const cur = getProperty(slug);
  if (!cur) return PROPERTIES.slice(0, count);
  return PROPERTIES.filter((p) => p.slug !== slug && (p.area_name === cur.area_name || p.type === cur.type)).slice(0, count);
}
