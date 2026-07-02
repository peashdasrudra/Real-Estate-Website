export const SITE = {
  name: 'Golden Heights Properties',
  shortName: 'Golden Heights',
  tagline: 'Luxury Living, Crafted in Bangladesh',
  description:
    'Bangladesh\'s most trusted luxury real estate developer. Premium apartments, commercial spaces, and land investments in Dhaka, Chattogram, Sylhet and beyond.',
  url: 'https://goldenheights.com.bd',
  email: 'info@goldenheights.com.bd',
  phone: '+880 1711-000000',
  whatsapp: '+8801711000000',
  address: 'House 24, Road 11, Gulshan 1, Dhaka 1212, Bangladesh',
  hours: 'Sat - Thu: 9:00 AM - 7:00 PM',
  established: 2008,
  social: {
    facebook: 'https://facebook.com/goldenheights',
    instagram: 'https://instagram.com/goldenheights',
    youtube: 'https://youtube.com/@goldenheights',
    linkedin: 'https://linkedin.com/company/goldenheights',
    twitter: 'https://twitter.com/goldenheights',
  },
} as const;

export const NAV = {
  primary: [
    { label: 'Home', href: '/' },
    {
      label: 'Properties',
      href: '/properties',
      children: [
        { label: 'All Properties', href: '/properties' },
        { label: 'Luxury Apartments', href: '/properties?type=apartment' },
        { label: 'Commercial Space', href: '/properties?type=commercial' },
        { label: 'Land', href: '/properties?type=land' },
        { label: 'Ready Apartments', href: '/properties?status=ready' },
        { label: 'Ongoing Projects', href: '/projects' },
      ],
    },
    {
      label: 'Projects',
      href: '/projects',
      children: [
        { label: 'All Projects', href: '/projects' },
        { label: 'Ongoing', href: '/projects?status=ongoing' },
        { label: 'Upcoming', href: '/projects?status=upcoming' },
        { label: 'Completed', href: '/projects?status=completed' },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Investment', href: '/investment' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const DIVISIONS = [
  { name: 'Dhaka', count: 42, slug: 'dhaka' },
  { name: 'Chattogram', count: 18, slug: 'chattogram' },
  { name: 'Sylhet', count: 9, slug: 'sylhet' },
  { name: 'Khulna', count: 7, slug: 'khulna' },
  { name: 'Rajshahi', count: 6, slug: 'rajshahi' },
  { name: 'Barishal', count: 4, slug: 'barishal' },
  { name: 'Rangpur', count: 3, slug: 'rangpur' },
  { name: 'Mymensingh', count: 5, slug: 'mymensingh' },
] as const;

export const AREAS = [
  'Gulshan',
  'Banani',
  'Bashundhara',
  'Uttara',
  'Dhanmondi',
  'Mirpur',
  'Purbachal',
  'Keraniganj',
  'Mohammadpur',
  'Baridhara',
  'Tejgaon',
  'Khilgaon',
] as const;

export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'villa', label: 'Villa' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'land', label: 'Land' },
  { value: 'shop', label: 'Shop' },
  { value: 'office', label: 'Office Space' },
] as const;

export const STATUS = [
  { value: 'ready', label: 'Ready' },
  { value: 'ongoing', label: 'Under Construction' },
  { value: 'upcoming', label: 'Upcoming' },
] as const;

export const AMENITIES = [
  'Swimming Pool',
  'Rooftop Garden',
  'Gymnasium',
  'Sauna & Steam',
  'Children\'s Play Area',
  'Community Hall',
  '24/7 Security',
  'CCTV Surveillance',
  'Power Backup',
  'Concierge Service',
  'Private Elevator',
  'Smart Home',
  'EV Charging',
  'Sports Complex',
  'Yoga Deck',
  'Library',
  'Mini Theatre',
  'Banquet Hall',
  'Sky Lounge',
  'Indoor Games',
] as const;
