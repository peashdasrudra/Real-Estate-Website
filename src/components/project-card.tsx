'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { formatBDT } from '@/lib/utils';

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-3xl overflow-hidden bg-white border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-shadow"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.status === 'ongoing' && <Badge variant="accent">Ongoing · {project.progress}%</Badge>}
            {project.status === 'upcoming' && <Badge variant="gold">Upcoming</Badge>}
            {project.status === 'completed' && <Badge variant="success">Completed</Badge>}
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <Badge variant="glass" size="sm" className="bg-white/15 mb-3">
              <MapPin className="h-3 w-3" />
              {project.location}
            </Badge>
            <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">{project.title}</h3>
            <p className="mt-1 text-sm opacity-80 line-clamp-1">{project.subtitle}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-primary-900/50">Total Units</p>
              <p className="font-heading text-lg font-semibold text-primary-900 mt-0.5">{project.totalUnits}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-primary-900/50">Floors</p>
              <p className="font-heading text-lg font-semibold text-primary-900 mt-0.5">{project.floors}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-primary-900/50">From</p>
              <p className="font-heading text-lg font-semibold text-primary-900 mt-0.5">{formatBDT(project.starting)}</p>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-primary-900/5 flex items-center justify-between">
            <span className="text-xs text-primary-900/60">Handover: {project.handover}</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-900 group-hover:text-accent-500 transition-colors">
              Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
