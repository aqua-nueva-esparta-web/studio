
'use client';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ImageLightboxProps {
  images: ImagePlaceholder[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

  if (!images || images.length === 0) {
    return null;
  }

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:top-0 md:-right-12 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/80 transition-colors"
          aria-label="Cerrar visor de imágenes"
        >
          <X className="size-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-contain"
                data-ai-hint={image.imageHint}
            />
        </div>

        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/80 transition-colors md:-left-12"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="size-8" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/80 transition-colors md:-right-12"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="size-8" />
        </button>
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm p-2 rounded-md">
            {image.description}
        </div>
      </div>
    </div>
  );
}
