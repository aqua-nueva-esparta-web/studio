import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InvestmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Inversión y Viabilidad</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Infraestructura, Mantenimiento, Análisis Financiero</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Equipos principales, obras, tecnología IoT.</li>
              <li>Software CMMS, mantenimiento predictivo.</li>
              <li>Viabilidad financiera y proyección EBITDA USD 53.2M/año.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Viabilidad del Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Viabilidad técnica, financiera, ambiental, social.</li>
              <li>Atractivo para inversión.</li>
              <li>Sostenibilidad excepcional.</li>
              <li>Impacto positivo.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Conclusiones y Recomendaciones Estratégicas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
                <li>Viabilidad técnica, financiera, ambiental y social confirmada.</li>
                <li>Proyecto estratégico de alto valor para Venezuela y la región.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
