import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProperty, PROPERTIES, relatedProperties } from '@/lib/properties';
import { PropertyDetailClient } from './detail-client';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: 'Not found' };
  return {
    title: `${property.title} — ${property.area_name}, ${property.city}`,
    description: property.description.slice(0, 160),
    openGraph: {
      title: property.title,
      description: property.description.slice(0, 160),
      images: [property.images[0]],
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();
  const related = relatedProperties(slug);
  return <PropertyDetailClient property={property} related={related} />;
}
