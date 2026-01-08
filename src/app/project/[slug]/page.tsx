import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Image as ImageType } from '@/lib/data';


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
            </Link>
        </div>
        
        <header className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">{project.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{project.longDescription}</p>
        </header>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-12">
            <Image
                src={project.coverImage.imageUrl}
                alt={project.coverImage.description}
                fill
                className="object-cover"
                data-ai-hint={project.coverImage.imageHint}
                priority
            />
        </div>

        <Separator className="my-12" />
        
        <ProjectGallery designs={project.designs} />
      </div>
    </div>
  );
}
