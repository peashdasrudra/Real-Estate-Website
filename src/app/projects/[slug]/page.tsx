import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, getProject } from '@/lib/projects';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { ArrowRight, MapPin, Building2, Calendar, Layers, Maximize, Phone, MessageCircle, Check } from 'lucide-react';
import { formatBDT } from '@/lib/utils';
import { SITE } from '@/lib/site';

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: 'Not found' };
  return {
    title: `${p.title} — ${p.location}`,
    description: p.description.slice(0, 160),
    openGraph: { title: p.title, description: p.description.slice(0, 160), images: [p.hero] },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I am interested in ${p.title}.`)}`;

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <Image src={p.hero} alt={p.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-primary-950/20" />
        <div className="absolute inset-x-0 bottom-0 pb-12 pt-20">
          <Container>
            <FadeUp>
              <Badge variant="gold" className="bg-secondary-500 text-primary-950 mb-4">
                {p.status === 'ongoing' ? `Ongoing · ${p.progress}% Complete` : p.status === 'upcoming' ? 'Upcoming' : 'Completed'}
              </Badge>
              <h1 className="font-heading text-display-xl text-white text-balance max-w-3xl">{p.title}</h1>
              <p className="mt-3 text-xl text-white/80 max-w-2xl">{p.subtitle}</p>
              <p className="mt-3 text-sm text-white/60 flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {p.location}
              </p>
            </FadeUp>
          </Container>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAFA] border-b border-primary-900/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { Icon: Building2, l: 'Total Units', v: p.totalUnits },
              { Icon: Layers, l: 'Floors', v: p.floors },
              { Icon: Maximize, l: 'Total Area', v: p.totalArea },
              { Icon: Calendar, l: 'Handover', v: p.handover },
              { Icon: Check, l: 'From', v: formatBDT(p.starting) },
            ].map((s, i) => (
              <div key={i} className="text-center md:border-r last:border-r-0 border-primary-900/5">
                <s.Icon className="h-5 w-5 mx-auto text-primary-900/40" />
                <p className="font-heading text-2xl font-bold mt-2">{s.v}</p>
                <p className="text-xs text-primary-900/50 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {p.status === 'ongoing' && (
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">Construction Progress</h3>
                  <Progress value={p.progress} />
                  <div className="mt-4 grid grid-cols-5 gap-2 text-xs text-center">
                    {['Foundation', 'Structure', 'Envelope', 'MEP & Finishes', 'Handover'].map((s, i) => (
                      <div key={s} className={p.progress > i * 20 ? 'text-primary-900 font-medium' : 'text-primary-900/40'}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-heading text-2xl font-semibold mb-4">About the Project</h3>
                <p className="text-primary-900/80 leading-relaxed text-lg">{p.description}</p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">Highlights</h3>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
                  {p.highlights.map((h) => (
                    <StaggerItem key={h}>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-900/5">
                        <Check className="h-4 w-4 text-secondary-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{h}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">Amenities</h3>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
                  {p.amenities.map((a) => (
                    <StaggerItem key={a}>
                      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-primary-900/5">
                        <span className="h-2 w-2 rounded-full bg-secondary-500" />
                        <span className="text-sm">{a}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {p.gallery.length > 1 && (
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-6">Gallery</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {p.gallery.map((g, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image src={g} alt="" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside>
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-2xl border border-primary-900/5 shadow-premium p-6">
                  <p className="text-xs uppercase tracking-wider text-primary-900/50">Starting From</p>
                  <p className="font-heading text-3xl font-bold gradient-text mt-1">{formatBDT(p.starting)}</p>
                  <div className="mt-6 space-y-3">
                    <Link href="/contact">
                      <Button variant="primary" size="lg" className="w-full">
                        Book Site Visit
                      </Button>
                    </Link>
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      <Button variant="whatsapp" size="lg" className="w-full">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </Button>
                    </a>
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="h-4 w-4" /> Call Agent
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="bg-primary-950 text-white rounded-2xl p-6 text-sm">
                  <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">Downloads</p>
                  <ul className="mt-4 space-y-2">
                    <li><a href="#" className="flex items-center justify-between py-2 border-b border-white/10 hover:text-secondary-500">Brochure.pdf <ArrowRight className="h-3 w-3" /></a></li>
                    <li><a href="#" className="flex items-center justify-between py-2 border-b border-white/10 hover:text-secondary-500">Floor Plans.pdf <ArrowRight className="h-3 w-3" /></a></li>
                    <li><a href="#" className="flex items-center justify-between py-2 hover:text-secondary-500">Payment Plan.pdf <ArrowRight className="h-3 w-3" /></a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
