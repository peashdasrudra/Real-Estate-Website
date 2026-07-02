'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/posts';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-3xl overflow-hidden bg-white border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant="glass" size="sm" className="bg-white/15 backdrop-blur-xl text-white">
              {post.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-primary-900/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readMinutes} min read
            </span>
          </div>
          <h3 className="font-heading text-lg font-semibold mt-3 line-clamp-2 group-hover:text-accent-500 transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-primary-900/60 line-clamp-2">{post.excerpt}</p>
          <div className="mt-5 pt-5 border-t border-primary-900/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 rounded-full overflow-hidden">
                <Image src={post.authorPhoto} alt={post.author} fill sizes="28px" className="object-cover" />
              </div>
              <span className="text-xs font-medium">{post.author}</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-primary-900/40 group-hover:text-accent-500 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
