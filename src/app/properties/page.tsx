import type { Metadata } from 'next';
import { PROPERTIES } from '@/lib/properties';
import { PropertiesClient } from './properties-client';

export const metadata: Metadata = {
  title: 'Properties for Sale & Rent in Bangladesh',
  description:
    'Browse luxury apartments, penthouses, villas, commercial spaces, and land across Bangladesh. Refined search, advanced filters, and a curated experience.',
  openGraph: {
    title: 'Properties — Golden Heights Properties',
    description: 'Browse luxury apartments, penthouses, villas, commercial spaces, and land across Bangladesh.',
  },
};

export default function PropertiesPage() {
  return <PropertiesClient properties={PROPERTIES} />;
}
