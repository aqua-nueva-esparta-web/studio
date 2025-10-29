import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TechnicalModelPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Modelo Técnico</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Modelo Técnico Completo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Sistema híbrido: Desalinización (75%) + AWG (25%), 100,000 m³/día combinados.</li>
              <li>Desalinización: 75,000 m³/día, tecnología ósmosis inversa en dos plantas.</li>
              <li>AWG: 25,000 m³/día en 5,556 unidades con filtración, IoT y mantenimiento predictivo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generadores Atmosféricos de Agua (AWG)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Especificaciones: 4,500 L/día por unidad, 5,556 unidades en hoteles, centros y servicios; filtración multi-etapa, monitoreo IoT, mantenimiento remoto.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Infraestructura y Capacidades</CardTitle>
          </CardHeader>
          <CardContent>
            <p>25 hectáreas de complejo industrial, obras civiles, red de tuberías, subestaciones, laboratorio, seguridad, sistema SCADA avanzado.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sistema de Energía Renovable 100%</CardTitle>
          </CardHeader>
          <CardContent>
            <p>250 MW: 200 MW solar, 50 MW eólica, 18 GWh almacenamiento en baterías.</p>
            <p className="mt-2">Paneles bifaciales, turbinas eólicas, sistema EMS con IA predictiva, cero emisiones, ahorro CO₂.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipos Principales y Especificaciones Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bombas alta presión</li>
              <li>Membranas DuPont FilmTec</li>
              <li>Dispositivos recuperación energética</li>
              <li>Paneles solares</li>
              <li>Baterías</li>
              <li>Turbinas eólicas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipos de Energía Renovable</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tecnología de punta: paneles bifaciales, inversores Huawei/SMA, baterías LiFePO₄, turbinas eólicas 20-25 años de vida útil.</p>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Generadores AWG (detalle)</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-6 space-y-2">
                <li>Modelo de generación y distribución AWG</li>
                <li>Telemetría</li>
                <li>Consumo energético y ubicaciones</li>
             </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
