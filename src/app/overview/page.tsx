import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Resumen del Proyecto</h1>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Introducción y Visión del Proyecto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Transformar Nueva Esparta en referente regional de autosuficiencia hídrica 100% sostenible.
            </p>
            <p><strong>Visión 2030:</strong> Agua segura. “Convertir Nueva Esparta en la primera región insular de América Latina autosuficiente y modelo internacional en desalinización con energía renovable.”</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Garantizar suministro continuo, independencia hídrica, innovación, empleo y liderazgo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fuentes de Suministro Actual y sus Limitaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tubería Submarina:</strong> Deterioro avanzado, rupturas frecuentes, alta vulnerabilidad, dependencia externa.</li>
              <li><strong>Pozos Locales:</strong> Sobreexplotación, salinización progresiva, calidad variable, insostenible.</li>
              <li><strong>Camiones Cisterna:</strong> Costo alto, calidad no garantizada, servicio irregular, impacto ambiental, riesgos de contaminación.</li>
            </ul>
            <p>El sistema de abastecimiento actual solo proporciona 40,000 m³/día, cubriendo solo el 40% de la demanda real.</p>
            <p><strong>Vulnerabilidades:</strong> pérdidas en red (35%), interrupciones frecuentes, alto costo operativo, dependencia externa, impacto en turismo y salud.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contexto y Problemática Hídrica Completa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <ul className="list-disc pl-6 space-y-2">
                <li>Suministro actual: 40,000 m³/día (40% de demanda).</li>
                <li>Racionamiento: 85% de la población recibe agua 2-3 días/semana.</li>
                <li>Pérdidas económicas y sociales, enfermedades y sobreexplotación de acuíferos.</li>
             </ul>
             <p>Crisis hídrica estructural que afecta a 500,000 habitantes y economía turística.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Factores de Cambio Climático</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
                <li>Reducción de precipitaciones (18% en 15 años).</li>
                <li>Aumento de sequías y del nivel del mar, salinización de acuíferos, temperatura +1.2°C.</li>
                <li>Necesidad de adaptación urgente: solución resiliente con energía 100% renovable y modelo escalable.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
