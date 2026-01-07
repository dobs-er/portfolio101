'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface FullScreenImageViewerProps {
  images: ImagePlaceholder[];
  startIndex: number;
  onClose: () => void;
}

export function FullScreenImageViewer({ images, startIndex, onClose }: FullScreenImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious, onClose]);
  
  const currentImage = images[currentIndex];

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-black/80 backdrop-blur-sm border-none p-0 w-screen h-screen max-w-full max-h-full flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={currentImage.imageUrl}
              alt={currentImage.description}
              fill
              className="object-contain"
              data-ai-hint={currentImage.imageHint}
              quality={100}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 hover:text-white"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous Image</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next Image</span>
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
