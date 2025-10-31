
'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import ImageLightbox from '@/components/image-lightbox';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(image => image.id.startsWith('gallery-'));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Galería de Planos y Diseños</h1>
      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="overflow-hidden cursor-pointer" onClick={() => openLightbox(index)}>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-secondary">
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
            <p className="text-muted-foreground">No hay imágenes en la galería todavía.</p>
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrevious}
        />
      )}
    </div>
  );
}
