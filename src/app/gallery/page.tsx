import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { PROPERTIES } from '@/lib/properties';
import { PROJECTS } from '@/lib/projects';
import Image from 'next/image';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A visual journey through our properties, projects, and completed residences across Bangladesh.',
};

const images = [
  ...PROPERTIES.flatMap((p) => p.images).slice(0, 24),
  ...PROJECTS.map((p) => p.hero),
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A visual journey."
        description="Photography from our properties, projects, and completed residences across Bangladesh."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((src, i) => (
              <StaggerItem key={i}>
                <div className={`relative overflow-hidden rounded-2xl group ${i % 7 === 0 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/40 transition-colors" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
