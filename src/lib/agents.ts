export type Agent = {
  id: string;
  slug: string;
  name: string;
  role: string;
  experience: number;
  languages: string[];
  specialty: string[];
  phone: string;
  whatsapp: string;
  email: string;
  photo: string;
  bio: string;
  social: { facebook?: string; linkedin?: string; instagram?: string };
  closedDeals: number;
};

export const AGENTS: Agent[] = [
  {
    id: 'a-001',
    slug: 'rakib-hasan',
    name: 'Rakib Hasan',
    role: 'Head of Sales',
    experience: 12,
    languages: ['Bangla', 'English', 'Hindi'],
    specialty: ['Luxury Apartments', 'NRB Investment', 'Penthouse'],
    phone: '+880 1711-111111',
    whatsapp: '8801711111111',
    email: 'rakib@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    bio: 'Rakib leads our luxury sales practice with over a decade of experience advising high-net-worth clients in Dhaka, Dubai, and London.',
    social: { linkedin: '#', facebook: '#' },
    closedDeals: 240,
  },
  {
    id: 'a-002',
    slug: 'nusrat-jahan',
    name: 'Nusrat Jahan',
    role: 'Senior Property Consultant',
    experience: 8,
    languages: ['Bangla', 'English'],
    specialty: ['Family Apartments', 'Bashundhara', 'Uttara'],
    phone: '+880 1711-222222',
    whatsapp: '8801711222222',
    email: 'nusrat@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    bio: 'Nusrat is known for her patient, consultative approach and her deep knowledge of Dhaka\'s family neighbourhoods.',
    social: { linkedin: '#', instagram: '#' },
    closedDeals: 168,
  },
  {
    id: 'a-003',
    slug: 'tanvir-ahmed',
    name: 'Tanvir Ahmed',
    role: 'Commercial Property Specialist',
    experience: 10,
    languages: ['Bangla', 'English', 'Japanese'],
    specialty: ['Commercial', 'Grade-A Office', 'Corporate Buyers'],
    phone: '+880 1711-333333',
    whatsapp: '8801711333333',
    email: 'tanvir@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    bio: 'Tanvir advises corporate and institutional clients on Grade-A commercial acquisitions across Dhaka and Chattogram.',
    social: { linkedin: '#' },
    closedDeals: 96,
  },
  {
    id: 'a-004',
    slug: 'mahmuda-khan',
    name: 'Mahmuda Khan',
    role: 'NRB Investment Advisor',
    experience: 9,
    languages: ['Bangla', 'English', 'Arabic'],
    specialty: ['NRB', 'Investment', 'Diaspora'],
    phone: '+880 1711-444444',
    whatsapp: '8801711444444',
    email: 'mahmuda@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800',
    bio: 'Mahmuda specialises in non-resident Bangladeshi investors, providing end-to-end acquisition and property management support.',
    social: { linkedin: '#' },
    closedDeals: 132,
  },
  {
    id: 'a-005',
    slug: 'faisal-karim',
    name: 'Faisal Karim',
    role: 'Land & Township Specialist',
    experience: 14,
    languages: ['Bangla', 'English'],
    specialty: ['Land', 'Township', 'Purbachal'],
    phone: '+880 1711-555555',
    whatsapp: '8801711555555',
    email: 'faisal@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
    bio: 'Faisal brings 14 years of expertise in land acquisition, township planning, and large-scale investments across the country.',
    social: {},
    closedDeals: 78,
  },
  {
    id: 'a-006',
    slug: 'sadia-rahman',
    name: 'Sadia Rahman',
    role: 'Property Management Lead',
    experience: 7,
    languages: ['Bangla', 'English'],
    specialty: ['Management', 'Rentals', 'After-sales'],
    phone: '+880 1711-666666',
    whatsapp: '8801711666666',
    email: 'sadia@goldenheights.com.bd',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
    bio: 'Sadia leads our property management division, ensuring owners and tenants enjoy a seamless experience.',
    social: {},
    closedDeals: 64,
  },
];

export function getAgent(slug: string) {
  return AGENTS.find((a) => a.slug === slug);
}
