'use client';

import { Search, MapPin, Home as HomeIcon, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { AREAS, PROPERTY_TYPES, STATUS } from '@/lib/site';
import { Select, Input, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SearchBox() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [budget, setBudget] = useState('');

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('area', location);
    if (type) params.set('type', type);
    if (status) params.set('status', status);
    if (budget) params.set('max', budget);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form onSubmit={onSearch} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
      <div className="lg:col-span-1">
        <Label htmlFor="search-location" className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> Location
        </Label>
        <Select id="search-location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Any area</option>
          {AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="search-type" className="flex items-center gap-1.5">
          <HomeIcon className="h-3.5 w-3.5" /> Type
        </Label>
        <Select id="search-type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          {PROPERTY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="search-status">Status</Label>
        <Select id="search-status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Any Status</option>
          {STATUS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="search-budget" className="flex items-center gap-1.5">
          <DollarSign className="h-3.5 w-3.5" /> Max Budget
        </Label>
        <Select id="search-budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Any</option>
          <option value="10000000">Up to ৳1 Cr</option>
          <option value="25000000">Up to ৳2.5 Cr</option>
          <option value="50000000">Up to ৳5 Cr</option>
          <option value="100000000">Up to ৳10 Cr</option>
          <option value="100000001">৳10 Cr+</option>
        </Select>
      </div>
      <div className="flex items-end">
        <Button variant="primary" size="lg" type="submit" className="w-full">
          <Search className="h-4 w-4" /> Search
        </Button>
      </div>
    </form>
  );
}
