import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Join Golden Heights',
  description: 'Build a career at one of Bangladesh\'s most respected luxury real estate companies.',
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
