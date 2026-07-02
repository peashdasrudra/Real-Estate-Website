export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  type: 'residential' | 'commercial' | 'mixed';
  location: string;
  city: string;
  totalArea: string;
  totalUnits: number;
  floors: number;
  handover: string;
  progress: number;
  starting: number;
  hero: string;
  gallery: string[];
  description: string;
  amenities: string[];
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'pr-001',
    slug: 'golden-skyline-tower',
    title: 'Golden Skyline Tower',
    subtitle: 'A new icon on the Gulshan skyline',
    status: 'completed',
    type: 'residential',
    location: 'Gulshan 1, Dhaka',
    city: 'Dhaka',
    totalArea: '1.2 Acres',
    totalUnits: 84,
    floors: 28,
    handover: '2023',
    progress: 100,
    starting: 28000000,
    hero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
    ],
    description:
      'Completed in 2023, Golden Skyline Tower remains the gold standard for luxury vertical living in Gulshan — a 28-storey landmark of considered architecture and uncompromising service.',
    amenities: ['Infinity Pool', 'Sky Lounge', 'Gymnasium', 'Concierge', 'Private Elevator'],
    highlights: ['LEED Gold Certified', 'Earthquake Resistant (BNBC 2020)', 'Triple-glazed windows', 'Italian Marble Lobby'],
  },
  {
    id: 'pr-002',
    slug: 'emerald-court',
    title: 'Emerald Court',
    subtitle: 'Family living, reimagined in Bashundhara',
    status: 'ongoing',
    type: 'residential',
    location: 'Bashundhara R/A, Dhaka',
    city: 'Dhaka',
    totalArea: '2.4 Acres',
    totalUnits: 132,
    floors: 22,
    handover: 'Dec 2026',
    progress: 65,
    starting: 18500000,
    hero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
    ],
    description:
      'A family-centric community of 132 residences, set amid 2.4 acres of landscaped gardens. Currently 65% complete, with handover scheduled for late 2026.',
    amenities: ['Swimming Pool', 'Sports Complex', 'Children\'s Park', 'Community Hall', 'Yoga Deck'],
    highlights: ['Gated Community', 'Solar Common Areas', '60% Open Space'],
  },
  {
    id: 'pr-003',
    slug: 'crescent-commercial-tower',
    title: 'The Crescent Commercial Tower',
    subtitle: 'Grade-A offices on Gulshan Avenue',
    status: 'ongoing',
    type: 'commercial',
    location: 'Gulshan Avenue, Dhaka',
    city: 'Dhaka',
    totalArea: '1.6 Acres',
    totalUnits: 96,
    floors: 32,
    handover: 'Mar 2027',
    progress: 48,
    starting: 22000000,
    hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
    ],
    description:
      'A 32-storey Grade-A commercial tower designed by one of Bangladesh\'s leading architecture firms. Column-free floor plates, raised flooring, and a double-height lobby set a new benchmark for the city\'s commercial real estate.',
    amenities: ['Central AC', 'High-Speed Elevators', 'Underground Parking', '24/7 Security'],
    highlights: ['LEED Platinum Target', 'Column-free Floor Plates', '3.2m Floor-to-Ceiling'],
  },
  {
    id: 'pr-004',
    slug: 'chattogram-bayview',
    title: 'Chattogram Bayview Residences',
    subtitle: 'Hillside residences with sea views',
    status: 'upcoming',
    type: 'residential',
    location: 'Khulshi Hills, Chattogram',
    city: 'Chattogram',
    totalArea: '3.8 Acres',
    totalUnits: 96,
    floors: 24,
    handover: 'Jun 2028',
    progress: 5,
    starting: 22000000,
    hero: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1920',
    gallery: ['https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1600'],
    description:
      'A master-planned hillside community in Chattogram\'s Khulshi district. Launching Q2 2026 with 96 residences, panoramic sea views, and a 24,000 sqft clubhouse.',
    amenities: ['Sea View Lounge', 'Swimming Pool', 'Gymnasium', 'Rooftop Garden'],
    highlights: ['Hilltop Location', 'Panoramic Bay Views', '24,000 sqft Clubhouse'],
  },
  {
    id: 'pr-005',
    slug: 'sylhet-tea-garden',
    title: 'Sylhet Tea Garden Retreat',
    subtitle: 'A boutique collection of 24 villas',
    status: 'ongoing',
    type: 'residential',
    location: 'Sreemangal, Sylhet',
    city: 'Sylhet',
    totalArea: '8.5 Acres',
    totalUnits: 24,
    floors: 2,
    handover: 'Dec 2026',
    progress: 55,
    starting: 48000000,
    hero: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920',
    gallery: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600'],
    description:
      'A low-density luxury villa development set within an active tea estate. Only 24 villas will ever be built — each sited for privacy, view, and natural ventilation.',
    amenities: ['Tea Garden', 'Private Pool', 'Nature Trails', 'Outdoor Kitchen'],
    highlights: ['Low Density', 'Eco-Conscious', 'Gated Estate'],
  },
  {
    id: 'pr-006',
    slug: 'purbachal-greens',
    title: 'Purbachal Greens',
    subtitle: 'Modern family homes in Purbachal',
    status: 'upcoming',
    type: 'residential',
    location: 'Purbachal New Town, Dhaka',
    city: 'Dhaka',
    totalArea: '4.2 Acres',
    totalUnits: 168,
    floors: 14,
    handover: 'Dec 2027',
    progress: 0,
    starting: 12500000,
    hero: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920',
    gallery: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600'],
    description:
      'A modern township of 168 family-sized apartments in the heart of Purbachal New Town. Designed around three landscaped courtyards with a 12,000 sqft clubhouse at its centre.',
    amenities: ['Clubhouse', 'Sports Court', 'Children\'s Park', 'Yoga Deck'],
    highlights: ['Three Courtyards', '12,000 sqft Clubhouse', 'Solar Common Areas'],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
