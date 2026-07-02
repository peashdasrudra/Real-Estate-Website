import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { POSTS, CATEGORIES } from '@/lib/posts';
import { BlogCard } from '@/components/blog-card';
import { Input } from '@/components/ui/form';
import { Search, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Journal — Insights on Bangladesh Real Estate',
  description: 'Research, commentary, and analysis on the Bangladesh real estate market — investing, buying guides, NRB insights, and more.',
};

export default function BlogPage() {
  const allTags = Array.from(new Set(POSTS.flatMap((p) => p.tags))).slice(0, 12);
  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title="Insights, guides, and analysis."
        description="Original research and considered commentary on the Bangladesh real estate market."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-900/40" />
                  <Input placeholder="Search articles" className="pl-10" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold mb-3">Categories</h4>
                  <ul className="space-y-1">
                    {CATEGORIES.map((c) => (
                      <li key={c}>
                        <button className="w-full text-left text-sm text-primary-900/70 hover:text-primary-900 py-1.5">{c}</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold mb-3 flex items-center gap-1.5">
                    <Tag className="h-3 w-3" /> Popular Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {allTags.map((t) => (
                      <Link key={t} href={`/blog?tag=${t.toLowerCase()}`} className="px-2.5 py-1 text-xs bg-primary-900/5 text-primary-900/70 rounded-md hover:bg-primary-900 hover:text-white">
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <div className="lg:col-span-3">
              {/* Featured */}
              <Link href={`/blog/${POSTS[0].slug}`} className="group block mb-10 rounded-3xl overflow-hidden bg-white border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image src={POSTS[0].cover} alt={POSTS[0].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="self-start mb-3">Featured</Badge>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-accent-500 transition-colors text-balance">{POSTS[0].title}</h2>
                    <p className="mt-3 text-primary-900/70">{POSTS[0].excerpt}</p>
                    <div className="mt-6 flex items-center gap-3 text-xs text-primary-900/50">
                      <span>{POSTS[0].author}</span>
                      <span>·</span>
                      <span>{POSTS[0].readMinutes} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="grid sm:grid-cols-2 gap-6">
                {POSTS.slice(1).map((p) => <BlogCard key={p.id} post={p} />)}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
