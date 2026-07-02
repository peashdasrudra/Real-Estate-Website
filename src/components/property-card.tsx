'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, Heart, ArrowUpRight, Calendar } from 'lucide-react';
import type { Property } from '@/lib/properties';
import { formatBDT } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link
        href={`/properties/${property.slug}`}
        className="block rounded-3xl overflow-hidden bg-white border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-shadow"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-primary-950/0 to-primary-950/0" />
          <div className="absolute top-3 left-3 flex gap-2">
            {property.luxury && (
              <Badge variant="gold" size="sm" className="bg-secondary-500/95 text-primary-950">
                Luxury
              </Badge>
            )}
            {property.status === 'ready' && (
              <Badge variant="success" size="sm">Ready</Badge>
            )}
            {property.status === 'ongoing' && (
              <Badge variant="accent" size="sm">Ongoing</Badge>
            )}
            {property.status === 'upcoming' && (
              <Badge variant="default" size="sm">Upcoming</Badge>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-primary-900 hover:text-secondary-700 transition-colors"
            aria-label="Save to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <Badge variant="glass" size="sm" className="bg-white/15 backdrop-blur-xl text-white">
              <MapPin className="h-3 w-3" />
              {property.area_name}, {property.city}
            </Badge>
            <div className="text-white text-right">
              <p className="text-[10px] uppercase tracking-wider opacity-70">From</p>
              <p className="font-heading text-lg font-bold leading-none">
                {formatBDT(property.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-primary-900 leading-snug line-clamp-1 group-hover:text-accent-500 transition-colors">
            {property.title}
          </h3>
          <p className="mt-1.5 text-sm text-primary-900/60 line-clamp-1">{property.address}</p>
          <div className="mt-4 pt-4 border-t border-primary-900/5 flex items-center gap-4 text-xs text-primary-900/70">
            {property.bedrooms !== undefined && (
              <span className="inline-flex items-center gap-1.5">
                <Bed className="h-3.5 w-3.5" />
                {property.bedrooms} Bed
              </span>
            )}
            {property.bathrooms !== undefined && (
              <span className="inline-flex items-center gap-1.5">
                <Bath className="h-3.5 w-3.5" />
                {property.bathrooms} Bath
              </span>
            )}
            {property.area && (
              <span className="inline-flex items-center gap-1.5">
                <Maximize className="h-3.5 w-3.5" />
                {property.area} sqft
              </span>
            )}
          </div>
        </div>
        <div className="px-5 pb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-900 group-hover:text-accent-500 transition-colors">
            View Details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
