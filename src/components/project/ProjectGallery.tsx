'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type Image as ImageType } from '@/lib/data';
import { FullScreenImageViewer } from './FullScreenImageViewer';

export function ProjectGallery({ designs }: { designs: ImageType[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setSelectedImageIndex(index);
  const closeViewer = () => setSelectedImageIndex(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div
            key={design.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3"
            onClick={() => openViewer(index)}
          >
            <Image
              src={design.imageUrl}
              alt={design.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={design.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold text-lg">View Image</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <FullScreenImageViewer
          images={designs}
          startIndex={selectedImageIndex}
          onClose={closeViewer}
        />
      )}
    </>
  );
}
