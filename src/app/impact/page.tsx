'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImpactCharts } from '@/components/charts';
import { DollarSign, Leaf, Users, ShieldCheck, CheckCircle } from 'lucide-react';

export default function ImpactPage() {
  const socialImpacts = [
    '500,000 beneficiarios directos con acceso a agua potable segura y continua.',
    'Creación de 1,071 empleos directos e indirectos durante las fases de construcción y operación.',
    'Reducción drástica de enfermedades hídricas y mejora en la salud pública.',
    'Mejora en la calidad de vida y bienestar de la comunidad.'
  ];

  const environmentalImpacts = [
    'Cero emisiones operativas gracias al uso de energía 100% renovable.',
    'Reducción significativa de la extracción de acuíferos sobreexplotados.',
    'Alineación con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.',
    'Obtención de certificaciones ambientales como ISO 14001 y LEED.'
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Impacto del Proyecto
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Visualizando el efecto transformador de Agua Nueva Esparta en la comunidad, el medio ambiente y la economía.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>Impacto Social Completo</CardTitle>
            </div>
            <CardDescription>
              Mejorando vidas al proporcionar acceso fiable a agua limpia.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {socialImpacts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <CardTitle>Impacto Ambiental Completo</CardTitle>
            </div>
            <CardDescription>
              Reduciendo la huella de carbono y promoviendo la sostenibilidad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {environmentalImpacts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
