import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Sun, Wind,Cpu, HardHat, Plug } from 'lucide-react';

const mainEquip = [
    'Bombas alta presión',
    'Membranas DuPont FilmTec',
    'Dispositivos recuperación energética',
    'Paneles solares',
    'Baterías',
    'Turbinas eólicas',
];

const renewableEquip = [
    'Tecnología de punta: paneles bifaciales',
    'Inversores Huawei/SMA',
    'Baterías LiFePO₄',
    'Turbinas eólicas 20-25 años de vida útil',
];

export default function TechnicalModelPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Modelo Técnico Completo
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Un sistema híbrido que combina Desalinización (75%) y Generadores Atmosféricos de Agua (AWG) (25%), para un total de 100,000 m³/día.
        </p>
      </div>

      <div className="space-y-12">

        <Tabs defaultValue="desalination" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="desalination" className="gap-2">
                <Droplets className="h-5 w-5" /> Desalinización (75%)
            </TabsTrigger>
            <TabsTrigger value="awg" className="gap-2">
                <Wind className="h-5 w-5" /> AWG (25%)
            </TabsTrigger>
            <TabsTrigger value="energy" className="gap-2">
                <Sun className="h-5 w-5" /> Energía Renovable
            </TabsTrigger>
            </TabsList>

            <TabsContent value="desalination">
                <Card>
                    <CardHeader>
                        <CardTitle>Plantas de Desalinización</CardTitle>
                        <CardDescription>Capacidad de 75,000 m³/día utilizando tecnología de ósmosis inversa en dos plantas estratégicamente ubicadas.</CardDescription>
                    </CardHeader>
                </Card>
            </TabsContent>
            <TabsContent value="awg">
                <Card>
                    <CardHeader>
                        <CardTitle>Generadores Atmosféricos de Agua (AWG)</CardTitle>
                        <CardDescription>Capacidad de 25,000 m³/día a través de 5,556 unidades con filtración avanzada, conectividad IoT y mantenimiento predictivo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h4 className="font-semibold mb-2">Detalles de los Generadores AWG:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Modelo de generación y distribución AWG.</li>
                            <li>Telemetría y monitoreo IoT para operación remota.</li>
                            <li>Consumo energético optimizado.</li>
                            <li>Ubicaciones estratégicas en hoteles, centros de servicios y comunidades.</li>
                            <li>Especificaciones: 4,500 L/día por unidad, filtración multi-etapa.</li>
                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="energy">
                <Card>
                    <CardHeader>
                        <CardTitle>Sistema de Energía 100% Renovable</CardTitle>
                        <CardDescription>Capacidad total de 250 MW, con 200 MW de energía solar y 50 MW de energía eólica, respaldado por 18 GWh de almacenamiento en baterías.</CardDescription>
                    </CardHeader>
                     <CardContent>
                        <h4 className="font-semibold mb-2">Características Clave:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Paneles solares bifaciales para máxima eficiencia.</li>
                            <li>Turbinas eólicas de última generación.</li>
                            <li>Sistema de Gestión de Energía (EMS) con IA predictiva.</li>
                            <li>Cero emisiones de carbono y ahorro significativo de CO₂.</li>
                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><HardHat />Infraestructura y Capacidades</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                El proyecto se desarrollará en un complejo industrial de 25 hectáreas, incluyendo obras civiles, una nueva red de tuberías, subestaciones eléctricas, un laboratorio de calidad del agua, sistemas de seguridad perimetral y un centro de control avanzado con sistema SCADA.
                </p>
            </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Cpu />Equipos Principales</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {mainEquip.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Plug />Equipos de Energía Renovable</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {renewableEquip.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
