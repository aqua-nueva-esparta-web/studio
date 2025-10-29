import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(image => image.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Galería de Planos y Diseños</h1>
      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map(image => (
            <Card key={image.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover"
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
    </div>
  );
}
