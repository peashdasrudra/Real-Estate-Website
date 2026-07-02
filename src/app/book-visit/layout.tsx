import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Site Visit',
  description: 'Schedule a free, chauffeured site visit to any of our properties. Pick a date, pick a time, and we will take care of the rest.',
};

export default function BookVisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
