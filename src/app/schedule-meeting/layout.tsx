import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Meeting',
  description: 'Book a virtual or in-person meeting with a senior property consultant at a time that suits you.',
};

export default function ScheduleMeetingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
