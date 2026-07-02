import type { Metadata } from 'next';
import { PROPERTIES } from '@/lib/properties';
import { PropertiesClient } from '../properties/properties-client';

export const metadata: Metadata = {
  title: 'Search Properties',
};

export default function SearchPage() {
  return <PropertiesClient properties={PROPERTIES} />;
}
