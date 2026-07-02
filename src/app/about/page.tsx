import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { TIMELINE, VALUES, AWARDS } from '@/lib/content';
import { AGENTS } from '@/lib/agents';
import { AgentCard } from '@/components/agent-card';
import { Button } from '@/components/ui/button';
import { Award, Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';
import { CSR } from '@/lib/content';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Golden Heights — Bangladesh\'s Most Trusted Developer',
  description: 'Seventeen years of building luxury real estate in Bangladesh. 248 projects, 12,500 families, and an unwavering commitment to craftsmanship.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Seventeen years of building Bangladesh's finest addresses."
        description="A story not of speed, but of patience. Not of size, but of substance."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400"
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"
                  alt="Golden Heights"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> Our Story
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                Built for the long view.
              </h2>
              <div className="mt-6 space-y-4 text-primary-900/80 leading-relaxed text-lg">
                <p>
                  Founded in 2008 by Ahsan Karim, Golden Heights began with a single, considered belief: that Bangladesh deserved real estate built to international standards.
                </p>
                <p>
                  We have grown — but not quickly. We have expanded — but never away from our principles. Today, with 248 delivered projects, 12,500 families served, and a presence across 9 divisions, we remain a privately held company with a singular focus on craft.
                </p>
                <p>
                  Our buildings are designed to last 100 years. Our company is designed to last longer.
                </p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Target, title: 'Mission', body: 'To build Bangladesh\'s finest addresses — homes and workspaces that endure, that delight, and that elevate the lives of those who inhabit them.' },
              { Icon: Eye, title: 'Vision', body: 'To be the most trusted, most respected real estate company in South Asia within a generation, recognised for craft, service, and integrity.' },
              { Icon: Heart, title: 'Values', body: 'Craftsmanship, transparency, longevity, and service — the four principles we measure every decision against.' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="group h-full p-8 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all">
                  <div className="h-12 w-12 rounded-xl bg-primary-900 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                    <s.Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mt-5">{s.title}</h3>
                  <p className="mt-3 text-primary-900/70 leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Journey */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Journey
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">Seventeen years, milestone by milestone.</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-500 via-primary-900/20 to-transparent" />
            {TIMELINE.map((t, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className={`relative grid md:grid-cols-2 gap-8 mb-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <p className="font-heading text-4xl md:text-5xl font-bold gradient-text">{t.year}</p>
                    <h3 className="font-heading text-xl font-semibold mt-2">{t.title}</h3>
                    <p className="mt-2 text-primary-900/70">{t.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2">
                    <div className="h-3 w-3 rounded-full bg-secondary-500 ring-4 ring-secondary-500/20" />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Chairman's message */}
      <section className="py-20 md:py-28 bg-primary-950 text-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-sm mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
                  alt="Ahsan Karim"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> Chairman's Message
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                "We build for the next generation, not the next quarter."
              </h2>
              <div className="mt-8 space-y-4 text-white/80 leading-relaxed text-lg">
                <p>
                  When we started Golden Heights in 2008, we had a simple but audacious idea: that Bangladeshis deserved the same quality of real estate as anywhere in the world. Not in time — now.
                </p>
                <p>
                  Seventeen years on, that idea has not aged. It has deepened. We are no longer the only ones who believe it. But we remain, perhaps, the most patient about its execution.
                </p>
                <p>
                  To our clients — past, present, and future — thank you for trusting us with the buildings you call home.
                </p>
              </div>
              <p className="mt-8 font-heading text-2xl font-bold">Ahsan Karim</p>
              <p className="text-white/60">Founder & Chairman</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Leadership
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">The people behind the work.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENTS.slice(0, 6).map((a) => <AgentCard key={a.id} agent={a} />)}
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Recognition
            </div>
            <h2 className="font-heading text-display-md mt-4">Awarded. Independent. Respected.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {AWARDS.map((a, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-primary-900/5">
                <p className="font-heading text-3xl font-bold gradient-text">{a.year}</p>
                <p className="mt-3 font-semibold text-sm">{a.title}</p>
                <p className="text-xs text-primary-900/50 mt-1">{a.org}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CSR */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> CSR
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">Building Bangladesh, beyond buildings.</h2>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                Our work is not only about buildings. Through the Golden Heights Foundation, we invest 1.5% of annual revenue in education, climate, and heritage — the three pillars we believe will define Bangladesh's next century.
              </p>
            </div>
            <div className="space-y-4">
              {CSR.map((c, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-primary-900/5">
                  <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={c.image} alt={c.title} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-semibold">{c.title}</p>
                    <p className="text-sm text-primary-900/70 mt-1">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary-950 text-white">
        <Container className="text-center">
          <h2 className="font-heading text-display-md text-balance max-w-2xl mx-auto">Work with us. Live with us. Invest with us.</h2>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/contact"><Button variant="gold" size="xl">Get in Touch</Button></Link>
            <Link href="/career"><Button variant="glass" size="xl">Careers</Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
