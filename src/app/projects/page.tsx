import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { PROJECTS } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';
import Link from 'next/link';
import { FadeUp } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'Projects — Ongoing, Upcoming, Completed',
  description: 'Explore all Golden Heights projects — from under-construction landmarks to completed residences and upcoming launches across Bangladesh.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="The full portfolio."
        description="From Gulshan landmarks to Chattogram hillside villas, our projects represent the most considered real estate in Bangladesh."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Ongoing', 'Upcoming', 'Completed'].map((f, i) => (
              <button
                key={f}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  i === 0 ? 'bg-primary-900 text-white' : 'bg-primary-900/5 text-primary-900/70 hover:bg-primary-900/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.05}>
                <ProjectCard project={p} />
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
