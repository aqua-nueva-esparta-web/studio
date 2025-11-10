
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
        {/* Pyramid 3D Container */}
        <div className="relative max-w-4xl mx-auto py-12">
          <div className="relative" style={{ perspective: '1200px' }}>
            {milestones.map((milestone, index) => {
              const width = 100 - (index * 12); // Decreasing width for pyramid effect
              const colors = [
                'from-blue-500 to-cyan-400',
                'from-cyan-500 to-blue-400', 
                'from-blue-600 to-cyan-500',
                'from-cyan-600 to-blue-500',
                'from-blue-700 to-cyan-600',
                'from-cyan-700 to-blue-600',
                'from-blue-800 to-cyan-700'
              ];
              return (
                <div
                  key={index}
                  className="relative mx-auto mb-3 group cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{
                    width: `${width}%`,
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(5deg)'
                  }}
                >
                  {/* 3D Block */}
                  <div className={`relative bg-gradient-to-r ${colors[index]} rounded-lg shadow-2xl overflow-hidden`}
                       style={{
                         height: '80px',
                         transformStyle: 'preserve-3d',
                         boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 -3px 0 rgba(0,0,0,0.2)'
                       }}>
                    {/* 3D Top Edge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" 
                         style={{ height: '8px' }} />
                    
                    {/* Content */}
                    <div className="relative h-full flex items-center justify-between px-6 z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                          {milestone.month.replace('Mes ', '')}
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg drop-shadow-lg">{milestone.task}</p>
                          <p className="text-white/90 text-sm drop-shadow-md">{milestone.month}</p>
                        </div>
                      </div>
                      <div className="text-white/80 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* 3D Bottom Shadow */}
                    <div className="absolute bottom-0 inset-x-0 h-2 bg-black/30 blur-sm" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* 3D Side Face */}
                  <div className={`absolute top-0 left-0 w-full bg-gradient-to-r ${colors[index]} opacity-70`}
                       style={{
                         height: '80px',
                         transform: 'translateZ(-8px)',
                         transformStyle: 'preserve-3d',
                         filter: 'brightness(0.6)'
                       }} />
                </div>
              );
            })}
          </div>
          
          {/* Base Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-900/20 blur-2xl rounded-full" />
        </div>
      </div>        </div>
    );
}
