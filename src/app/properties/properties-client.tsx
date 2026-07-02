'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Grid3x3, List, MapIcon, X, Heart, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/layout';
import { PropertyCard } from '@/components/property-card';
import { Button } from '@/components/ui/button';
import { Input, Select, Label } from '@/components/ui/form';
import { AREAS, PROPERTY_TYPES, STATUS } from '@/lib/site';
import { AMENITIES } from '@/lib/site';
import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('@/components/property-map').then((mod) => mod.PropertyMap), {
  ssr: false,
});
import type { Property } from '@/lib/properties';
import { cn } from '@/lib/utils';

export function PropertiesClient({ properties }: { properties: Property[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const [view, setView] = useState<'grid' | 'list' | 'map'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    q: '',
    type: params.get('type') || '',
    status: params.get('status') || '',
    area: params.get('area') || '',
    division: params.get('division') || '',
    bedrooms: '',
    min: '',
    max: '',
    amenities: [] as string[],
    sort: 'featured',
  });

  const filtered = useMemo(() => {
    let list = [...properties];
    if (filters.q) list = list.filter((p) => p.title.toLowerCase().includes(filters.q.toLowerCase()) || p.area_name.toLowerCase().includes(filters.q.toLowerCase()));
    if (filters.type) list = list.filter((p) => p.type === filters.type);
    if (filters.status) list = list.filter((p) => p.status === filters.status);
    if (filters.area) list = list.filter((p) => p.area_name === filters.area);
    if (filters.division) list = list.filter((p) => p.division.toLowerCase() === filters.division);
    if (filters.bedrooms) list = list.filter((p) => p.bedrooms === Number(filters.bedrooms));
    if (filters.min) list = list.filter((p) => p.price >= Number(filters.min));
    if (filters.max) list = list.filter((p) => p.price <= Number(filters.max));
    if (filters.amenities.length) list = list.filter((p) => filters.amenities.every((a) => p.amenities.includes(a)));
    if (filters.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (filters.sort === 'area-desc') list.sort((a, b) => b.area - a.area);
    if (filters.sort === 'featured') list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list;
  }, [properties, filters]);

  const updateFilter = (k: string, v: any) => setFilters((f) => ({ ...f, [k]: v }));
  const clearFilters = () =>
    setFilters({ q: '', type: '', status: '', area: '', division: '', bedrooms: '', min: '', max: '', amenities: [], sort: 'featured' });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-primary-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950/95" />
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Collection
            </div>
            <h1 className="font-heading text-display-lg mt-4 text-balance">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} matching your criteria
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-2xl">
              Browse our curated collection of luxury apartments, penthouses, villas, commercial spaces, and land across Bangladesh.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-primary-900/5">
        <Container className="py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-900/40" />
              <Input
                placeholder="Search by name or area"
                value={filters.q}
                onChange={(e) => updateFilter('q', e.target.value)}
                className="pl-10 h-10 text-sm"
              />
            </div>
            <Button variant="outline" size="md" onClick={() => setFilterOpen((v) => !v)}>
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
            <Select value={filters.sort} onChange={(e) => updateFilter('sort', e.target.value)} className="h-10 w-auto text-sm">
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Largest First</option>
            </Select>
            <div className="ml-auto flex border border-primary-900/10 rounded-lg overflow-hidden">
              {[
                { v: 'grid', Icon: Grid3x3, l: 'Grid' },
                { v: 'list', Icon: List, l: 'List' },
                { v: 'map', Icon: MapIcon, l: 'Map' },
              ].map(({ v, Icon, l }) => (
                <button
                  key={v}
                  onClick={() => setView(v as any)}
                  className={cn(
                    'h-10 px-3 inline-flex items-center gap-1.5 text-xs font-medium transition-colors',
                    view === v ? 'bg-primary-900 text-white' : 'text-primary-900 hover:bg-primary-900/5'
                  )}
                  aria-label={l}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{l}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 py-4">
                  <div>
                    <Label>Type</Label>
                    <Select value={filters.type} onChange={(e) => updateFilter('type', e.target.value)}>
                      <option value="">All</option>
                      {PROPERTY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </Select>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Select value={filters.status} onChange={(e) => updateFilter('status', e.target.value)}>
                      <option value="">Any</option>
                      {STATUS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </Select>
                  </div>
                  <div>
                    <Label>Area</Label>
                    <Select value={filters.area} onChange={(e) => updateFilter('area', e.target.value)}>
                      <option value="">Any</option>
                      {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                    </Select>
                  </div>
                  <div>
                    <Label>Bedrooms</Label>
                    <Select value={filters.bedrooms} onChange={(e) => updateFilter('bedrooms', e.target.value)}>
                      <option value="">Any</option>
                      {[1, 2, 3, 4, 5].map((b) => <option key={b} value={b}>{b}+</option>)}
                    </Select>
                  </div>
                  <div>
                    <Label>Min Price (BDT)</Label>
                    <Input placeholder="0" type="number" value={filters.min} onChange={(e) => updateFilter('min', e.target.value)} />
                  </div>
                  <div>
                    <Label>Max Price (BDT)</Label>
                    <Input placeholder="Any" type="number" value={filters.max} onChange={(e) => updateFilter('max', e.target.value)} />
                  </div>
                  <div className="lg:col-span-2">
                    <Label>Amenities</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {AMENITIES.slice(0, 10).map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() =>
                            setFilters((f) => ({
                              ...f,
                              amenities: f.amenities.includes(a)
                                ? f.amenities.filter((x) => x !== a)
                                : [...f.amenities, a],
                            }))
                          }
                          className={cn(
                            'px-2.5 py-1.5 text-xs rounded-md border transition-colors',
                            filters.amenities.includes(a)
                              ? 'bg-primary-900 text-white border-primary-900'
                              : 'border-primary-900/15 text-primary-900/70 hover:border-primary-900'
                          )}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 pb-3">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>Clear all</Button>
                  <Button variant="primary" size="sm" onClick={() => setFilterOpen(false)}>Apply</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          {view === 'map' ? (
            <PropertyMap properties={filtered} />
          ) : filtered.length === 0 ? (
            <EmptyState onReset={clearFilters} />
          ) : (
            <div className={cn(view === 'list' ? 'space-y-4' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6')}>
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} priority={i < 3} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-20 max-w-md mx-auto">
      <div className="h-16 w-16 rounded-full bg-primary-900/5 mx-auto flex items-center justify-center">
        <Search className="h-6 w-6 text-primary-900/40" />
      </div>
      <h3 className="font-heading text-xl mt-5">No properties match your filters</h3>
      <p className="mt-2 text-primary-900/60">Try adjusting your criteria or resetting all filters.</p>
      <Button variant="primary" size="md" className="mt-6" onClick={onReset}>
        Reset filters
      </Button>
    </div>
  );
}
