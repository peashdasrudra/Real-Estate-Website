export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  photo: string;
  rating: number;
  quote: string;
  property: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-001',
    name: 'Tahmid Rahman',
    role: 'Founder & CEO',
    company: 'Northstar Capital',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    quote:
      'I bought my Skyline Residence as an NRB investor without ever setting foot in Dhaka. The Golden Heights team handled title due diligence, paperwork, and property management end-to-end. The asset has appreciated 18% in 18 months and has been tenanted for the entire period. Flawless execution.',
    property: 'Golden Heights Skyline Residence',
  },
  {
    id: 't-002',
    name: 'Dr. Farzana Akhter',
    role: 'Consultant Surgeon',
    company: 'United Hospital',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    rating: 5,
    quote:
      'We have worked with three developers in the past decade. Golden Heights stands apart. The build quality is exceptional, the handover was on time, and the after-sales service has been impeccable. Our family home in the Obsidian is everything we hoped for.',
    property: 'The Obsidian Penthouse',
  },
  {
    id: 't-003',
    name: 'Kazim Iqbal',
    role: 'Managing Director',
    company: 'Maple Leaf Textiles',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 5,
    quote:
      'Our corporate headquarters at The Crescent is a Grade-A building that matches what our team experienced in Singapore and London. The fit-out, the elevators, the service — all best-in-class. Golden Heights understands international standards.',
    property: 'The Crescent Commercial Tower',
  },
  {
    id: 't-004',
    name: 'Sanjana Ahmed',
    role: 'Investor',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5,
    quote:
      'I was nervous about buying land for the first time. Faisal walked me through every step, introduced me to a trusted RAJUK surveyor, and even attended the registry with me. Two years later, I have a beautiful plot in Purbachal and a developer I trust.',
    property: 'Purbachal Prime Plot',
  },
  {
    id: 't-005',
    name: 'Moshiur Rahman',
    role: 'NRB, Software Engineer',
    company: 'Google Singapore',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 5,
    quote:
      'Living in Singapore, I needed a partner I could trust. Mahmuda and the Golden Heights team managed my entire investment remotely — from selection to registration to ongoing management. The quarterly statements arrive on time, every time.',
    property: 'Emerald Court',
  },
  {
    id: 't-006',
    name: 'Nadia Huq',
    role: 'Interior Designer',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 5,
    quote:
      'The Obsidian Penthouse is the most well-designed building I have worked in. The ceiling heights, the column-free layouts, the natural light — every detail considered. My clients are always thrilled.',
    property: 'The Obsidian Penthouse',
  },
];
