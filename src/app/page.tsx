import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  BarChart,
  Briefcase,
  Calendar,
  Contact,
  Droplets,
  GalleryVertical,
  Goal,
  Lightbulb,
  LineChart,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  const features = [
    {
      icon: <Goal className="size-8 text-primary" />,
      title: 'Project Overview',
      description: 'Learn about our mission, goals, and the challenges we address.',
      href: '/overview',
    },
    {
      icon: <Droplets className="size-8 text-primary" />,
      title: 'Technical Model',
      description: 'Explore the innovative technology behind our water solutions.',
      href: '/technical-model',
    },
    {
      icon: <BarChart className="size-8 text-primary" />,
      title: 'Impact Dashboard',
      description: 'Visualize the positive social and environmental impact of our project.',
      href: '/impact',
    },
    {
      icon: <LineChart className="size-8 text-primary" />,
      title: 'Investment Viability',
      description: 'Analyze the financial projections and investment opportunities.',
      href: '/investment',
    },
    {
      icon: <Calendar className="size-8 text-primary" />,
      title: 'Progress Timeline',
      description: 'Follow our journey and track key project milestones.',
      href: '/timeline',
    },
    {
      icon: <GalleryVertical className="size-8 text-primary" />,
      title: 'Gallery',
      description: 'View project plans, diagrams, and 3D renderings.',
      href: '/gallery',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Agua Nueva Esparta
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            A sustainable water solution for a thriving future.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/overview">Discover the Project</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Explore the Future of Water
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Delve into the details of the Agua Nueva Esparta project and discover how we're building a resilient water infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline">
                    <Link href={feature.href}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <Lightbulb className="mx-auto size-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Have Questions?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to provide you with the information you need. Get in touch with us today.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
