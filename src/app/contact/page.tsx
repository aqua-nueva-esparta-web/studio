
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Información</CardTitle>
              <CardDescription>
                Complete el formulario para obtener más detalles sobre el proyecto y las oportunidades de inversión.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Su nombre" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="su@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="Su número de teléfono" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de su empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Área de Interés</Label>
                  <Input id="interest" placeholder="Ej: Inversión, Tecnología, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Escriba su mensaje aquí." />
                </div>
                <Button type="submit" className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Información de Contacto</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="size-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Ubicación</h3>
                        <p className="text-muted-foreground">Isla de Nueva Esparta, Venezuela</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="size-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contacto@aguanuevaesparta.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="size-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Teléfono</h3>
                        <p className="text-muted-foreground">+58 123 456 7890</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Clock className="size-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Horario</h3>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
            <div className="pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Oportunidades para Inversionistas</h3>
                <p className="text-muted-foreground">
                    Este proyecto representa una oportunidad única para invertir en un futuro sostenible y rentable. Contáctenos para recibir un dossier de inversión detallado.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
