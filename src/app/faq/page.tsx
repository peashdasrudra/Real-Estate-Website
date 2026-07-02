import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FAQ } from '@/components/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about buying, investing, financing, and managing property with Golden Heights.',
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions."
        description="Answers to the questions we hear most — from buyers, investors, NRBs, and partners."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FAQ />
    </>
  );
}
