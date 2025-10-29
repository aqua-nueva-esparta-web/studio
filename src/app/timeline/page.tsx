
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const timelineData = [
  {
    phase: "Fase II: Expansión",
    details: "Años 2-3, USD 408M, expansión AWG, energía complementaria, autonomía, producción de sal comercial."
  },
  {
    phase: "Fase III: Consolidación y Escalamiento",
    details: "Certificaciones internacionales, exportación, innovación, replicación regional, liderazgo."
  }
];

const milestones = [
    { month: "Mes 6", task: "Ingeniería y permisos" },
    { month: "Mes 12", task: "Obras civiles" },
    { month: "Mes 20", task: "Energía renovable" },
    { month: "Mes 24", task: "Desalinización" },
    { month: "Mes 36", task: "Capacidad total" },
    { month: "Mes 48", task: "Certificaciones" },
    { month: "Mes 60", task: "Exportación y replicación" }
];


export default function TimelinePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Cronograma del Proyecto</h1>

            <div className="grid gap-8 md:grid-cols-2">
                {timelineData.map(item => (
                    <Card key={item.phase}>
                        <CardHeader>
                            <CardTitle>{item.phase}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{item.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">Hitos Críticos del Proyecto</h2>
                <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary after:left-0">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative mb-8 pl-8">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                            <p className="font-bold text-lg text-primary">{milestone.month}</p>
                            <p className="text-muted-foreground">{milestone.task}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
