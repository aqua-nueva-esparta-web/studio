import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Impacto Social y Ambiental</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Justificación Integral del Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Independencia estratégica.</li>
              <li>Desarrollo turístico.</li>
              <li>Catálisis económica y calidad de vida.</li>
              <li>Sostenibilidad ambiental y liderazgo regional.</li>
              <li>Análisis costo-beneficio e impacto social positivo.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Impacto Social Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>500,000 beneficiarios.</li>
              <li>1,071 empleos.</li>
              <li>Reducción de enfermedades hídricas.</li>
              <li>Generación de empleo directo e indirecto.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Impacto Ambiental Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cero emisiones operativas.</li>
              <li>Reducción de extracción acuíferos.</li>
              <li>Certificaciones ISO y LEED.</li>
              <li>Alineación con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
