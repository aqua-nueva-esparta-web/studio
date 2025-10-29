import TimelineItem from '@/components/timeline-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const timelineData = [
  {
    date: 'Mes 6',
    title: 'Ingeniería y Permisos',
    description: 'Fase de ingeniería de detalle y obtención de todos los permisos necesarios.',
    status: 'upcoming',
  },
  {
    date: 'Mes 12',
    title: 'Inicio de Obras Civiles',
    description: 'Comienzo de la construcción de las principales infraestructuras.',
    status: 'upcoming',
  },
  {
    date: 'Mes 20',
    title: 'Instalación Sistema de Energía Renovable',
    description: 'Montaje de paneles solares y turbinas eólicas.',
    status: 'upcoming',
  },
  {
    date: 'Mes 24',
    title: 'Puesta en Marcha Desalinización',
    description: 'Inicio de operaciones de la primera planta de desalinización.',
    status: 'upcoming',
  },
  {
    date: 'Mes 36',
    title: 'Capacidad Total Operativa',
    description: 'El proyecto alcanza el 100% de su capacidad de producción de agua.',
    status: 'upcoming',
  },
  {
    date: 'Mes 48',
    title: 'Obtención de Certificaciones Internacionales',
    description: 'Certificaciones de calidad y sostenibilidad como ISO y LEED.',
    status: 'upcoming',
  },
  {
    date: 'Mes 60',
    title: 'Expansión y Replicación',
    description: 'Inicio de la exportación de tecnología y replicación del modelo en otras regiones.',
    status: 'upcoming',
  },
];

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Cronograma del Proyecto
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Siga nuestro viaje desde la concepción hasta la finalización. Estamos comprometidos con la transparencia y en mantener informados a nuestros stakeholders sobre nuestro progreso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card>
            <CardHeader>
                <CardTitle>FASE II: Expansión (Años 2-3)</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Inversión: USD 408M</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Expansión de la red de generadores AWG.</li>
                    <li>Instalación de energía complementaria.</li>
                    <li>Desarrollo de autonomía en producción de componentes.</li>
                    <li>Producción de sal de alta calidad para fines comerciales.</li>
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>FASE III: Consolidación y Escalamiento</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Obtención de certificaciones internacionales adicionales.</li>
                    <li>Exportación de tecnología y know-how.</li>
                    <li>Innovación continua en procesos y sostenibilidad.</li>
                    <li>Replicación del modelo en otras regiones del Caribe.</li>
                    <li>Consolidación como líder regional en gestión hídrica.</li>
                </ul>
            </CardContent>
        </Card>
      </div>


      <h2 className="text-3xl font-bold text-center mb-12">Hitos Críticos del Proyecto</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.title}
              date={item.date}
              title={item.title}
              description={item.description}
              status={item.status as 'completed' | 'in-progress' | 'upcoming'}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

