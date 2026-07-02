'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bed, Bath, Maximize, MapPin, Heart, Share2, Phone, MessageCircle, Download, Calendar, ChevronLeft, ChevronRight,
  X, ZoomIn, FileText, Calculator, Building2, TreePine, School, Hospital, ShoppingBag, Building, Train, Home as HomeIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input, Textarea, Label, Select } from '@/components/ui/form';
import { formatBDT, calculateEMI } from '@/lib/utils';
import type { Property } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';
import { SITE } from '@/lib/site';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('@/components/property-map').then((mod) => mod.PropertyMap), {
  ssr: false,
});

export function PropertyDetailClient({ property, related }: { property: Property; related: Property[] }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [tab, setTab] = useState<'description' | 'specs' | 'amenities' | 'payment' | 'location'>('description');
  const [emiPrincipal, setEmiPrincipal] = useState(property.price);
  const [emiRate, setEmiRate] = useState(10);
  const [emiTenure, setEmiTenure] = useState(20);

  const emi = calculateEMI(emiPrincipal, emiRate, emiTenure);

  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I am interested in ${property.title} (${formatBDT(property.price)}). Please share more details.`)}`;

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Inquiry sent', { description: 'A senior consultant will contact you within 24 hours.' });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Header / breadcrumb */}
      <section className="pt-28 pb-6 bg-[#FAFAFA] border-b border-primary-900/5">
        <Container>
          <div className="flex items-center gap-2 text-xs text-primary-900/50 mb-4">
            <Link href="/" className="hover:text-primary-900">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary-900">Properties</Link>
            <span>/</span>
            <span className="text-primary-900 truncate">{property.title}</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-end">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="gold">Luxury</Badge>
                {property.status === 'ready' && <Badge variant="success">Ready to Move</Badge>}
                {property.status === 'ongoing' && <Badge variant="accent">Ongoing</Badge>}
                {property.status === 'upcoming' && <Badge variant="default">Upcoming</Badge>}
                <Badge variant="outline">{property.type}</Badge>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                {property.title}
              </h1>
              <p className="mt-2 text-primary-900/60 flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {property.address}, {property.area_name}, {property.city}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-xs uppercase tracking-wider text-primary-900/50">Price</p>
              <p className="font-heading text-4xl md:text-5xl font-bold gradient-text mt-1">
                {formatBDT(property.price)}
              </p>
              {property.pricePerSqft && (
                <p className="text-xs text-primary-900/50 mt-1">৳{property.pricePerSqft.toLocaleString()} per sqft</p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-[#FAFAFA]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[16/9] rounded-3xl overflow-hidden">
                <button
                  onClick={() => { setActiveImg(0); setLightbox(true); }}
                  className="col-span-2 row-span-2 relative group overflow-hidden"
                >
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
                {property.images.slice(1, 5).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveImg(i + 1); setLightbox(true); }}
                    className="relative group overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${property.title} ${i + 2}`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors" />
                    {i === 3 && property.images.length > 5 && (
                      <div className="absolute inset-0 bg-primary-950/70 flex items-center justify-center text-white text-sm font-medium">
                        +{property.images.length - 5} more
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Quick info bar */}
              <div className="bg-white rounded-2xl p-6 border border-primary-900/5 shadow-premium">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {property.bedrooms !== undefined && (
                    <div>
                      <Bed className="h-5 w-5 text-primary-900/40 mx-auto" />
                      <p className="font-heading text-2xl font-bold mt-2">{property.bedrooms}</p>
                      <p className="text-xs text-primary-900/50">Bedrooms</p>
                    </div>
                  )}
                  {property.bathrooms !== undefined && (
                    <div>
                      <Bath className="h-5 w-5 text-primary-900/40 mx-auto" />
                      <p className="font-heading text-2xl font-bold mt-2">{property.bathrooms}</p>
                      <p className="text-xs text-primary-900/50">Bathrooms</p>
                    </div>
                  )}
                  <div>
                    <Maximize className="h-5 w-5 text-primary-900/40 mx-auto" />
                    <p className="font-heading text-2xl font-bold mt-2">{property.area.toLocaleString()}</p>
                    <p className="text-xs text-primary-900/50">Sq Ft</p>
                  </div>
                  {property.floor !== undefined && (
                    <div>
                      <Building2 className="h-5 w-5 text-primary-900/40 mx-auto" />
                      <p className="font-heading text-2xl font-bold mt-2">{property.floor}</p>
                      <p className="text-xs text-primary-900/50">Floor</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-2xl border border-primary-900/5 shadow-premium overflow-hidden">
                <div className="border-b border-primary-900/5 overflow-x-auto no-scrollbar">
                  <div className="flex">
                    {[
                      { k: 'description', l: 'Description' },
                      { k: 'specs', l: 'Specifications' },
                      { k: 'amenities', l: 'Amenities' },
                      { k: 'payment', l: 'Payment & EMI' },
                      { k: 'location', l: 'Location' },
                    ].map((t) => (
                      <button
                        key={t.k}
                        onClick={() => setTab(t.k as any)}
                        className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                          tab === t.k
                            ? 'border-primary-900 text-primary-900'
                            : 'border-transparent text-primary-900/60 hover:text-primary-900'
                        }`}
                      >
                        {t.l}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  {tab === 'description' && (
                    <div className="prose max-w-none">
                      <p className="text-primary-900/80 leading-relaxed text-lg">{property.description}</p>
                      {property.tags && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {property.tags.map((t) => (
                            <Badge key={t} variant="default">{t}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {tab === 'specs' && (
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {property.features.map((f) => (
                        <div key={f.label} className="flex items-center justify-between py-3 border-b border-primary-900/5">
                          <span className="text-sm text-primary-900/60">{f.label}</span>
                          <span className="text-sm font-medium">{f.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === 'amenities' && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {property.amenities.map((a) => (
                        <div key={a} className="flex items-center gap-2.5 p-3 rounded-xl bg-primary-900/5">
                          <div className="h-2 w-2 rounded-full bg-secondary-500" />
                          <span className="text-sm">{a}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === 'payment' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">Payment Plan</h3>
                        <div className="grid sm:grid-cols-4 gap-3">
                          {[
                            { stage: 'Booking', pct: '20%' },
                            { stage: 'Construction', pct: '30%' },
                            { stage: 'On Handover', pct: '40%' },
                            { stage: 'Post Handover', pct: '10%' },
                          ].map((p) => (
                            <div key={p.stage} className="p-4 rounded-2xl bg-primary-900/5 text-center">
                              <p className="font-heading text-2xl font-bold gradient-text">{p.pct}</p>
                              <p className="text-xs text-primary-900/60 mt-1">{p.stage}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">EMI Calculator</h3>
                        <div className="grid sm:grid-cols-3 gap-4 mb-4">
                          <div>
                            <Label>Loan Amount (BDT)</Label>
                            <Input type="number" value={emiPrincipal} onChange={(e) => setEmiPrincipal(Number(e.target.value))} />
                          </div>
                          <div>
                            <Label>Interest Rate (%)</Label>
                            <Input type="number" step="0.1" value={emiRate} onChange={(e) => setEmiRate(Number(e.target.value))} />
                          </div>
                          <div>
                            <Label>Tenure (Years)</Label>
                            <Input type="number" value={emiTenure} onChange={(e) => setEmiTenure(Number(e.target.value))} />
                          </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-gold text-primary-950 text-center">
                          <p className="text-xs uppercase tracking-wider opacity-70">Monthly EMI</p>
                          <p className="font-heading text-3xl md:text-4xl font-bold mt-1">
                            ৳{Math.round(emi).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === 'location' && (
                    <div className="space-y-6">
                      <PropertyMap properties={[property]} />
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">What's Nearby</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {property.nearby.map((n, i) => {
                            const Icon = { school: School, hospital: Hospital, market: ShoppingBag, mosque: Building, metro: Train, tourism: TreePine }[n.type] || Building;
                            return (
                              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary-900/5">
                                <Icon className="h-4 w-4 text-primary-900/60" />
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{n.name}</p>
                                </div>
                                <span className="text-xs text-primary-900/50">{n.distance}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floor plans placeholder */}
              {property.floorPlans.length > 0 && (
                <div className="bg-white rounded-2xl border border-primary-900/5 shadow-premium p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold mb-4">Floor Plans</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {property.floorPlans.map((fp, i) => (
                      <a
                        key={i}
                        href={fp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 rounded-2xl border border-primary-900/5 hover:border-secondary-500 hover:shadow-premium transition-all"
                      >
                        <div className="h-10 w-10 rounded-xl bg-primary-900/5 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Floor Plan {i + 1}</p>
                          <p className="text-xs text-primary-900/50">PDF · View / Download</p>
                        </div>
                        <Download className="h-4 w-4 text-primary-900/40" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Video */}
              {property.video && (
                <div className="bg-white rounded-2xl border border-primary-900/5 shadow-premium p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold mb-4">Property Video</h3>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-primary-900">
                    <video src={property.video} controls className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-2xl border border-primary-900/5 shadow-premium p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-heading text-lg font-semibold">Schedule a Site Visit</h3>
                  </div>
                  <form onSubmit={submitInquiry} className="space-y-3">
                    <div>
                      <Label>Full Name</Label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input required type="tel" placeholder="+880 1XXX-XXXXXX" />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input required type="email" placeholder="you@email.com" />
                    </div>
                    <div>
                      <Label>Preferred Date</Label>
                      <Input required type="date" min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div>
                      <Label>Message</Label>
                      <Textarea placeholder={`I'm interested in ${property.title}...`} />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <Calendar className="h-4 w-4" /> Book Site Visit
                    </Button>
                  </form>
                </div>

                <div className="bg-primary-950 rounded-2xl p-6 text-white">
                  <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">Or contact directly</p>
                  <p className="font-heading text-2xl font-bold mt-2">{SITE.phone}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>
                      <Button variant="call" size="md" className="w-full">
                        <Phone className="h-3.5 w-3.5" /> Call
                      </Button>
                    </a>
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      <Button variant="whatsapp" size="md" className="w-full">
                        <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                      </Button>
                    </a>
                  </div>
                  {property.brochure && (
                    <a
                      href={property.brochure}
                      className="mt-3 flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium"
                    >
                      <Download className="h-4 w-4" /> Download Brochure
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="md" className="flex-1">
                    <Heart className="h-4 w-4" /> Save
                  </Button>
                  <Button variant="outline" size="md" className="flex-1">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Related properties</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => <PropertyCard key={p.id} property={p} />)}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-primary-950/95 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImg((i) => (i - 1 + property.images.length) % property.images.length); }}
              className="absolute left-4 h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImg((i) => (i + 1) % property.images.length); }}
              className="absolute right-4 h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={activeImg}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
            >
              <Image src={property.images[activeImg]} alt={property.title} fill sizes="100vw" className="object-contain bg-black" />
            </motion.div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {activeImg + 1} / {property.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
