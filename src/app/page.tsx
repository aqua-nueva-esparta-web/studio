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
      href: 'gallery',
    },
  ];

  const stats = [
    { value: "100,000 m³/día", label: "Producción de Agua" },
    { value: "USD 1,020M", label: "Inversión" },
    { value: "100% Renovable", label: "Energía" },
    { value: "500,000", label: "Beneficiarios" },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] w-full">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Agua Nueva Esparta
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Transformando Nueva Esparta en referente de sostenibilidad hídrica.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center w-full max-w-4xl">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm md:text-base text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8">
            <Link href="/overview">Descubre el Proyecto</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Explora el Futuro del Agua
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Profundice en los detalles del proyecto Agua Nueva Esparta y descubra cómo estamos construyendo una infraestructura hídrica resiliente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline">
                    <Link href={feature.href}>Aprende más</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold">¿Tienes preguntas?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Nuestro equipo está listo para brindarle la información que necesita. Póngase en contacto con nosotros hoy.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contáctanos</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
