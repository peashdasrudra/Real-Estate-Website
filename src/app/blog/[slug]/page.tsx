import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { POSTS, getPost } from '@/lib/posts';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { BlogCard } from '@/components/blog-card';

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: 'Not found' };
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt, images: [p.cover], type: 'article' },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = POSTS.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-12 bg-[#FAFAFA]">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary-900/60 hover:text-primary-900 mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">{p.category}</Badge>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-balance">{p.title}</h1>
            <p className="mt-4 text-lg text-primary-900/70">{p.excerpt}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src={p.authorPhoto} alt={p.author} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">{p.author}</p>
                <div className="flex items-center gap-2 text-xs text-primary-900/50">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(p.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes} min read</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden max-w-5xl">
            <Image src={p.cover} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 80vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="prose prose-lg max-w-3xl mx-auto">
            {p.body.map((para, i) => (
              <p key={i} className="text-primary-900/80 leading-relaxed text-lg mb-6">{para}</p>
            ))}
          </article>

          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-primary-900/5 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-primary-900/50">Tags:</span>
            {p.tags.map((t) => (
              <Link key={t} href={`/blog?tag=${t.toLowerCase()}`} className="px-2.5 py-1 text-xs bg-primary-900/5 text-primary-900/70 rounded-md hover:bg-primary-900 hover:text-white">
                {t}
              </Link>
            ))}
            <div className="ml-auto flex gap-2">
              <button className="h-9 w-9 rounded-lg border border-primary-900/10 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-lg border border-primary-900/10 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors" aria-label="Save">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[#FAFAFA]">
        <Container>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
