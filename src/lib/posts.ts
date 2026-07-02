export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  tags: string[];
  cover: string;
  author: string;
  authorPhoto: string;
  publishedAt: string;
  readMinutes: number;
};

export const POSTS: BlogPost[] = [
  {
    id: 'b-001',
    slug: 'investing-in-dhaka-luxury-real-estate-2026',
    title: 'The 2026 Investor\'s Guide to Luxury Real Estate in Dhaka',
    excerpt:
      'Why prime Dhaka addresses continue to outperform gold, equities, and T-bills — and what sophisticated investors are buying now.',
    body: [
      'For the second consecutive year, prime residential property in Gulshan, Banani, and Baridhara has delivered capital appreciation of 12–18%, comfortably outpacing the 6.4% return on a five-year Bangladesh Government T-Bill and the 4.1% average gain in gold (measured in BDT).',
      'Three structural drivers underpin this performance: chronic undersupply of Grade-A inventory, a wave of NRB capital returning to the country, and a young demographic (median age 28) entering the wealth-formation phase of life.',
      'For investors with a 5–7 year horizon, we see the most compelling opportunities in 3–4 BHK apartments in established gated communities, with a strong preference for buildings under 5 years old and within 1 km of an MRT station.',
      'Our 2026 outlook: continued double-digit appreciation in prime areas, with a mild premium for ESG-certified buildings and smart-home enabled units.',
    ],
    category: 'Investment',
    tags: ['Investment', 'Dhaka', 'Luxury', 'NRB'],
    cover: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
    author: 'Rakib Hasan',
    authorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    publishedAt: '2026-06-12',
    readMinutes: 7,
  },
  {
    id: 'b-002',
    slug: 'choosing-between-gulshan-bashundhara-purbachal',
    title: 'Gulshan vs. Bashundhara vs. Purbachal: Where Should You Buy?',
    excerpt:
      'A side-by-side comparison of Dhaka\'s three most discussed residential corridors, from a buyer\'s perspective.',
    body: [
      'The three names every serious buyer asks about: Gulshan, Bashundhara, and Purbachal. Each represents a different lifestyle, a different price point, and a different investment thesis.',
      'Gulshan remains the gold standard for established wealth — embassy district, mature infrastructure, low inventory, high liquidity. Expect to pay a premium of 25–40% over comparable Bashundhara stock.',
      'Bashundhara offers the best balance for growing families: 21st-century infrastructure, top schools, gated communities, and a deep rental market. Returns have been steady and the entry ticket is meaningful but accessible.',
      'Purbachal is the long game. Purbachal New Town is the country\'s most ambitious planned city, and the metro extension (under construction) will fundamentally re-rate the area. Land investors with a 7–10 year horizon are positioning here now.',
    ],
    category: 'Buying Guide',
    tags: ['Gulshan', 'Bashundhara', 'Purbachal', 'Buying Guide'],
    cover: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600',
    author: 'Nusrat Jahan',
    authorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    publishedAt: '2026-05-28',
    readMinutes: 9,
  },
  {
    id: 'b-003',
    slug: 'nrb-guide-buying-property-remotely',
    title: 'The NRB\'s Complete Guide to Buying Property Remotely in Bangladesh',
    excerpt:
      'Living abroad and want to invest in Bangladesh real estate? Here\'s exactly how to do it — safely, legally, and tax-efficiently.',
    body: [
      'More than 7 million Bangladeshis live abroad, and the diaspora sent home over $23 billion in 2025. An increasing share of this capital is moving into domestic real estate.',
      'For NRBs, the right process is: (1) Form a Special Purpose Vehicle (Bangladeshi private limited company) to hold property, allowing remittance at the official rate. (2) Appoint a regulated property consultant with a physical office. (3) Conduct title due diligence through a RAJUK-registered surveyor. (4) Register the deed at the relevant sub-registry office.',
      'Tax considerations: capital gains on property held over 5 years are taxed at a reduced rate. Rental income must be declared. Working with a chartered accountant and a tax advisor is essential.',
      'Property management: invest in a company that offers full property management (tenant sourcing, rent collection, maintenance, tax filing). This is the single biggest determinant of whether an NRB investment is enjoyable or a headache.',
    ],
    category: 'NRB',
    tags: ['NRB', 'Investment', 'Legal', 'Tax'],
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
    author: 'Mahmuda Khan',
    authorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    publishedAt: '2026-05-04',
    readMinutes: 11,
  },
  {
    id: 'b-004',
    slug: 'why-leed-certified-buildings-cost-less',
    title: 'Why LEED-Certified Buildings Cost Less Over Their Lifetime',
    excerpt:
      'Green-certified buildings command a 6–8% rental premium and reduce operating costs by 20–30%. Here\'s the data.',
    body: [
      'It\'s no longer a debate: green-certified buildings outperform. We analysed 42 LEED-certified commercial buildings in Dhaka over the past 7 years and the data is conclusive.',
      'Operating cost savings of 20–30% come from: reduced electricity (LED + efficient HVAC), lower water bills (rainwater harvesting + low-flow fixtures), and lower maintenance (durable materials).',
      'Rental premiums of 6–8% are now standard for LEED Platinum or Gold buildings, driven by corporate ESG mandates and the willingness of multinational tenants to pay a premium for certified space.',
      'For residential: a LEED-certified building has measurably better indoor air quality, thermal comfort, and natural light — all of which translate to measurable health and productivity benefits.',
    ],
    category: 'Sustainability',
    tags: ['LEED', 'Sustainability', 'Green Building'],
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
    author: 'Tanvir Ahmed',
    authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    publishedAt: '2026-04-19',
    readMinutes: 6,
  },
  {
    id: 'b-005',
    slug: 'mortgage-vs-cash-2026',
    title: 'Mortgage or Cash? The Definitive 2026 Math for Bangladesh',
    excerpt:
      'When leverage makes you richer, and when paying cash is the only smart move.',
    body: [
      'Bangladesh\'s housing finance market has matured. As of 2026, the top 12 banks offer mortgages at 9.5–11.5% (floating) with a 20–25 year tenure and 70–80% LTV.',
      'The math is straightforward. If your mortgage rate is 11% and the property appreciates 14% annually, the leverage amplifies your equity returns by 2.5x. If the rate is 11% and appreciation is 7%, leverage still modestly outperforms cash, but the risk is higher.',
      'The cash-payer\'s case: zero interest cost, zero income tax verification, zero stress if rates rise, and the negotiating leverage of immediate settlement (3–5% discount is standard in our market).',
      'Our advice: if you have a stable, documented income, mortgage is the right answer for most buyers. If your income is irregular (business owner) or you are NRB, cash is the right answer.',
    ],
    category: 'Finance',
    tags: ['Mortgage', 'Finance', 'EMI'],
    cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600',
    author: 'Rakib Hasan',
    authorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    publishedAt: '2026-04-02',
    readMinutes: 8,
  },
  {
    id: 'b-006',
    slug: 'purbachal-new-town-explained',
    title: 'Purbachal New Town, Explained: The 25-Year Master Plan',
    excerpt:
      'Bangladesh\'s largest planned city. We break down the zoning, the timeline, and the investment thesis.',
    body: [
      'Purbachal New Town covers 6,227 acres on the eastern edge of Dhaka. Designed in 1995 and approved in 2004, the master plan is now approximately 60% complete.',
      'The vision: a satellite city for 1.2 million residents, with 60% of the area allocated to residential, 12% commercial, 15% green and water bodies, and the balance to civic infrastructure.',
      'Key catalysts: the Dhaka-Sylhet highway, the Purbachal Expressway, the metro extension (under construction), and the long-anticipated shift of the capital\'s eastern growth axis toward Purbachal.',
      'Investment thesis: residential land has appreciated 18% CAGR over the past 5 years. With major infrastructure deliveries scheduled for 2027–2030, the next leg of appreciation is structural, not speculative.',
    ],
    category: 'Investment',
    tags: ['Purbachal', 'Land', 'Master Plan'],
    cover: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600',
    author: 'Faisal Karim',
    authorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    publishedAt: '2026-03-22',
    readMinutes: 10,
  },
];

export const CATEGORIES = ['All', 'Investment', 'Buying Guide', 'NRB', 'Finance', 'Sustainability', 'Lifestyle'] as const;

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
