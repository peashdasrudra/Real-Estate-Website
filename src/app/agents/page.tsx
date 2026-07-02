import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { AGENTS } from '@/lib/agents';
import { AgentCard } from '@/components/agent-card';

export const metadata: Metadata = {
  title: 'Our Team — Property Specialists in Bangladesh',
  description: 'Meet the Golden Heights team. Property consultants, investment advisors, and after-sales specialists with 7-15 years of experience each.',
};

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Specialists, not salespeople."
        description="A team of experienced property consultants, each with deep specialisation in the area, property type, and client segment they serve."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Agents' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENTS.map((a) => <AgentCard key={a.id} agent={a} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
