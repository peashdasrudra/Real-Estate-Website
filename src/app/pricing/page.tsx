import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FadeUp } from '@/components/ui/motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Service Plans',
  description: 'Transparent pricing for buying, selling, property management, and NRB services.',
};

const plans = [
  {
    name: 'Buying Service',
    price: 'Free',
    period: 'for buyers',
    desc: 'We are paid by the developer, not by you. Our buying service is at no cost to qualified buyers.',
    features: ['Dedicated consultant', 'Property shortlisting', 'Site visits', 'Negotiation', 'Documentation support', 'RAJUK verification'],
    cta: 'Get Started',
    href: '/contact',
    featured: false,
  },
  {
    name: 'Property Management',
    price: '6%',
    period: 'of monthly rent',
    desc: 'Full-service management for owners who want a hands-off experience and optimal occupancy.',
    features: ['Tenant sourcing', 'Rent collection', 'Maintenance', 'Tax filing', '24/7 support', 'Monthly statements', 'Quarterly inspections', 'Annual reviews'],
    cta: 'Onboard Now',
    href: '/property-management',
    featured: true,
  },
  {
    name: 'Selling Service',
    price: '1%',
    period: 'of sale price',
    desc: 'Lower than the industry average. Includes professional media, qualified buyers, and closing support.',
    features: ['Professional photography', 'Listed on 6 portals', 'Qualified buyer matching', 'Negotiation', 'Closing support', 'RAJUK compliance'],
    cta: 'List Your Property',
    href: '/contact',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent fees. No surprises."
        description="What you see is what you pay. No hidden charges, no commissions dressed as fees."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`h-full p-8 rounded-3xl border ${p.featured ? 'bg-primary-950 text-white border-primary-950 scale-105 shadow-premium-lg' : 'bg-white border-primary-900/5 shadow-premium'}`}>
                  {p.featured && <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-secondary-500 text-primary-950 mb-4">Most Popular</span>}
                  <h3 className="font-heading text-2xl font-bold">{p.name}</h3>
                  <p className={`text-sm mt-1 ${p.featured ? 'text-white/60' : 'text-primary-900/60'}`}>{p.desc}</p>
                  <div className="mt-6">
                    <span className="font-heading text-5xl font-bold gradient-text">{p.price}</span>
                    <span className={`text-sm ml-2 ${p.featured ? 'text-white/60' : 'text-primary-900/60'}`}>{p.period}</span>
                  </div>
                  <ul className="mt-8 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.featured ? 'text-secondary-500' : 'text-secondary-700'}`} />
                        <span className={p.featured ? 'text-white/80' : 'text-primary-900/80'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={p.href} className="block mt-8">
                    <Button variant={p.featured ? 'gold' : 'primary'} size="lg" className="w-full">{p.cta}</Button>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
