import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Project Gallery
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A collection of project plans, elevations, diagrams, and 3D renderings that bring the Agua Nueva Esparta vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-w-4 aspect-h-3">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CardContent>
            <div className="p-4 bg-card">
                <p className="text-sm text-muted-foreground">{image.description}</p>
            </div>
          </Card>
        ))}
        {galleryImages.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
                The gallery is currently empty. Please check back later.
            </p>
        )}
      </div>
    </div>
  );
}
