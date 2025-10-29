import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, ChartLine, Droplets, GalleryVertical, Goal, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing } from "@/components/icons";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

const featureCards = [
  {
    title: "Resumen del Proyecto",
    description: "Conozca nuestra misión, objetivos y los desafíos que abordamos.",
    href: "/overview",
    icon: <Goal className="size-8 text-primary" />,
  },
  {
    title: "Modelo Técnico",
    description: "Explore la tecnología innovadora detrás de nuestras soluciones de agua.",
    href: "/technical-model",
    icon: <Droplets className="size-8 text-primary" />,
  },
  {
    title: "Panel de Impacto",
    description: "Visualice el impacto social y ambiental positivo de nuestro proyecto.",
    href: "/impact",
    icon: <ChartNoAxesColumnIncreasing className="size-8 text-primary" />,
  },
  {
    title: "Viabilidad de Inversión",
    description: "Analice las proyecciones financieras y las oportunidades de inversión.",
    href: "/investment",
    icon: <ChartLine className="size-8 text-primary" />,
  },
  {
    title: "Cronograma de Progreso",
    description: "Siga nuestro viaje y rastree los hitos clave del proyecto.",
    href: "/timeline",
    icon: <Calendar className="size-8 text-primary" />,
  },
  {
    title: "Galería",
    description: "Vea los planos del proyecto, diagramas y representaciones en 3D.",
    href: "/gallery",
    icon: <GalleryVertical className="size-8 text-primary" />,
  },
];


export default function Home() {
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
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold">100,000 m³/día</p>
              <p className="text-sm md:text-base text-primary-foreground/80">Producción de Agua</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold">USD 1,020M</p>
              <p className="text-sm md:text-base text-primary-foreground/80">Inversión</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold">100% Renovable</p>
              <p className="text-sm md:text-base text-primary-foreground/80">Energía</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold">500,000</p>
              <p className="text-sm md:text-base text-primary-foreground/80">Beneficiarios</p>
            </div>
          </div>

          <Button asChild size="lg" className="mt-8">
            <Link href="/overview">
              Descubre el Proyecto
            </Link>
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
            {featureCards.map((card) => (
              <Card key={card.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  {card.icon}
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href={card.href}>
                      Aprende más
                    </Link>
                  </Button>
                </CardFooter>
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
            <Link href="/contact">
              Contáctanos
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
