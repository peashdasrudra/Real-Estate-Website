'use client';

import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';
import { cn } from '@/lib/utils';

export function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 6000 })]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on('select', onSelect);
    onSelect();
  }, [embla]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
              <div className="group h-full p-8 bg-white rounded-3xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all duration-500 flex flex-col">
                <Quote className="h-8 w-8 text-secondary-500 mb-4" strokeWidth={1.5} />
                <p className="text-primary-900/80 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-primary-900/5 flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-primary-900/60">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-secondary-500 text-secondary-500" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-xs text-primary-900/40">{t.property}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => embla?.scrollPrev()}
          className="h-10 w-10 rounded-full border border-primary-900/10 flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === selected ? 'w-8 bg-primary-900' : 'w-1.5 bg-primary-900/20'
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => embla?.scrollNext()}
          className="h-10 w-10 rounded-full border border-primary-900/10 flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
