import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, BarChart2, ShieldCheck, CheckCircle } from 'lucide-react';

export default function InvestmentPage() {
  const financialMetrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Proyección EBITDA',
      value: 'USD 53.2M/año',
      description: 'Ganancias proyectadas antes de intereses, impuestos, depreciación y amortización.',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: 'Inversión Total',
      value: 'USD 1,020M',
      description: 'Inversión requerida para la implementación completa del proyecto.',
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-yellow-500" />,
      title: 'Viabilidad Confirmada',
      value: 'Alta',
      description: 'Viabilidad técnica, financiera, ambiental y social confirmada.',
    },
  ];

  const maintenanceInfra = [
      'Equipos principales de alta gama.',
      'Obras civiles y construcción robusta.',
      'Tecnología IoT para monitoreo en tiempo real.',
      'Software CMMS para gestión de mantenimiento.',
      'Estrategias de mantenimiento predictivo y preventivo.'
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Análisis Financiero y Viabilidad
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Una mirada transparente a la solidez financiera y el potencial de inversión del proyecto Agua Nueva Esparta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {financialMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck/> Viabilidad del Proyecto</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li><span className="font-semibold">Viabilidad Técnica:</span> Confirmada.</li>
                    <li><span className="font-semibold">Viabilidad Financiera:</span> Confirmada.</li>
                    <li><span className="font-semibold">Viabilidad Ambiental:</span> Confirmada.</li>
                    <li><span className="font-semibold">Viabilidad Social:</span> Confirmada.</li>
                    <li><span className="font-semibold">Atractivo para Inversión:</span> Excepcional.</li>
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle/> Infraestructura y Mantenimiento</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {maintenanceInfra.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
