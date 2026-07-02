import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { PROPERTIES } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';

export const metadata: Metadata = {
  title: 'Commercial Real Estate in Bangladesh',
  description: 'Grade-A office space, retail, and commercial properties in Dhaka, Chattogram, and beyond.',
};

export default function CommercialPage() {
  const commercial = PROPERTIES.filter((p) => p.type === 'commercial' || p.type === 'office' || p.type === 'shop');
  return (
    <>
      <PageHeader
        eyebrow="Commercial"
        title="Grade-A commercial space, in Bangladesh's prime corridors."
        description="Office buildings, retail, and commercial properties for the country's leading businesses."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Commercial' }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400"
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercial.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
