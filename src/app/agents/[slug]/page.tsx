import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AGENTS, getAgent } from '@/lib/agents';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, Linkedin, Star, Award, Briefcase, Languages, Check } from 'lucide-react';
import { SITE } from '@/lib/site';
import Image from 'next/image';

export async function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) return { title: 'Not found' };
  return { title: a.name, description: a.bio };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) notFound();
  const wa = `https://wa.me/${a.whatsapp}?text=${encodeURIComponent('Hi, I would like to discuss a property with you.')}`;

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={a.name}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Agents', href: '/agents' }, { label: a.name }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image src={a.photo} alt={a.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a href={`tel:${a.phone.replace(/\s/g, '')}`}>
                    <Button variant="call" size="lg" className="w-full"><Phone className="h-4 w-4" /> Call {a.name.split(' ')[0]}</Button>
                  </a>
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg" className="w-full"><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
                  </a>
                  <Link href="/schedule-meeting">
                    <Button variant="primary" size="lg" className="w-full">Schedule Meeting</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Badge className="mb-3">{a.role}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">{a.name}</h2>
              <p className="mt-4 text-lg text-primary-900/70 leading-relaxed">{a.bio}</p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-primary-900/5">
                  <Briefcase className="h-4 w-4 text-primary-900/40" />
                  <p className="font-heading text-2xl font-bold mt-2">{a.experience}</p>
                  <p className="text-xs text-primary-900/60">Years experience</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary-900/5">
                  <Award className="h-4 w-4 text-primary-900/40" />
                  <p className="font-heading text-2xl font-bold mt-2">{a.closedDeals}+</p>
                  <p className="text-xs text-primary-900/60">Deals closed</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary-900/5">
                  <Languages className="h-4 w-4 text-primary-900/40" />
                  <p className="text-sm font-bold mt-2">{a.languages.length}</p>
                  <p className="text-xs text-primary-900/60">Languages</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary-900/5">
                  <Star className="h-4 w-4 fill-secondary-500 text-secondary-500" />
                  <p className="text-sm font-bold mt-2">4.9/5</p>
                  <p className="text-xs text-primary-900/60">Client rating</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-heading text-xl font-semibold">Specialty</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.specialty.map((s) => (
                    <span key={s} className="px-3 py-1.5 text-xs font-medium bg-primary-900/5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-heading text-xl font-semibold">Languages</h3>
                <p className="mt-2 text-primary-900/70">{a.languages.join(' · ')}</p>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-primary-950 text-white">
                <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">Contact Directly</p>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-secondary-500">
                    <Phone className="h-4 w-4 text-secondary-500" /> {a.phone}
                  </a>
                  <a href={`mailto:${a.email}`} className="flex items-center gap-3 hover:text-secondary-500">
                    <Mail className="h-4 w-4 text-secondary-500" /> {a.email}
                  </a>
                  {a.social.linkedin && (
                    <a href={a.social.linkedin} className="flex items-center gap-3 hover:text-secondary-500">
                      <Linkedin className="h-4 w-4 text-secondary-500" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Badge } from '@/components/ui/badge';
