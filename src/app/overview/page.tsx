import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AlertTriangle, Droplets, Goal, Users, Wind, Sun } from 'lucide-react';
import Image from 'next/image';

export default function OverviewPage() {
  const overviewImage = PlaceHolderImages.find((img) => img.id === 'overview-1');

  const currentLimitations = [
    'Tubería Submarina: Deterioro avanzado, rupturas frecuentes, alta vulnerabilidad, dependencia externa.',
    'Pozos Locales: Sobreexplotación, salinización progresiva, calidad variable, insostenible.',
    'Camiones Cisterna: Costo alto, calidad no garantizada, servicio irregular, impacto ambiental, riesgos de contaminación.',
  ];

  const projectJustification = [
    'Independencia estratégica.',
    'Desarrollo turístico.',
    'Catálisis económica y calidad de vida.',
    'Sostenibilidad ambiental y liderazgo regional.',
    'Análisis costo-beneficio e impacto social positivo.',
  ];
  
  const climateChangeFactors = [
    'Reducción de precipitaciones (18% en 15 años).',
    'Aumento de sequías y del nivel del mar, salinización de acuíferos, temperatura +1.2°C.',
    'Necesidad de adaptación urgente: solución resiliente con energía 100% renovable y modelo escalable.',
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Introducción y Visión del Proyecto
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Transformar Nueva Esparta en referente regional de autosuficiencia hídrica 100% sostenible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Visión 2030: Agua Segura</h2>
          <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
            “Convertir Nueva Esparta en la primera región insular de América Latina autosuficiente y modelo internacional en desalinización con energía renovable.”
          </blockquote>
          <p className="text-muted-foreground">
            Garantizar suministro continuo, independencia hídrica, innovación, empleo y liderazgo.
          </p>
        </div>
        {overviewImage && (
          <div className="relative h-80 w-full">
            <Image
              src={overviewImage.imageUrl}
              alt={overviewImage.description}
              fill
              className="object-cover rounded-lg shadow-md"
              data-ai-hint={overviewImage.imageHint}
            />
          </div>
        )}
      </div>

      <div className="mt-16 md:mt-24 space-y-16">

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Contexto y Problemática Hídrica</CardTitle>
            <CardDescription>Crisis hídrica estructural que afecta a 500,000 habitantes y economía turística.</CardDescription>
          </CardHeader>
          <CardContent>
              <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
                  <li>Suministro actual: 40,000 m³/día (40% de demanda).</li>
                  <li>Racionamiento: 85% de la población recibe agua 2-3 días/semana.</li>
                  <li>Pérdidas económicas y sociales, enfermedades y sobreexplotación de acuíferos.</li>
              </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <CardTitle className="text-3xl">Fuentes de Suministro Actual y sus Limitaciones</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className='mb-4 text-muted-foreground'>El sistema de abastecimiento actual solo proporciona 40,000 m³/día, cubriendo solo el 40% de la demanda real. Las vulnerabilidades incluyen pérdidas en red (35%), interrupciones frecuentes, alto costo operativo, dependencia externa, y un impacto negativo en turismo y salud.</p>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {currentLimitations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Factores de Cambio Climático</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {climateChangeFactors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Goal className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">Justificación Integral del Proyecto</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {projectJustification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Conclusiones y Recomendaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
                <li>Viabilidad técnica, financiera, ambiental y social confirmada.</li>
                <li>Proyecto estratégico de alto valor para Venezuela y la región.</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
