import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { PROPERTIES } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';

export const metadata: Metadata = {
  title: 'Land for Sale in Bangladesh',
  description: 'Residential and commercial land across Bangladesh — Purbachal, Keraniganj, Gulshan, and more. RAJUK-approved plots with full title verification.',
};

export default function LandPage() {
  const land = PROPERTIES.filter((p) => p.type === 'land');
  return (
    <>
      <PageHeader
        eyebrow="Land"
        title="Land investments that compound."
        description="A curated selection of RAJUK-approved residential and commercial plots in the country's most strategic locations."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Land' }]}
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2400"
      />
      <section className="py-20 md:py-28">
        <Container>
          {land.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {land.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          ) : (
            <p className="text-center text-primary-900/60">No land listings at the moment. Please check back soon.</p>
          )}
        </Container>
      </section>
    </>
  );
}
