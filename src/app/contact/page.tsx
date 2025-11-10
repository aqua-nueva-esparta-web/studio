import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Contacto</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Información de Contacto</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-muted-foreground">Isla de Nueva Esparta, Venezuela</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a 
                  href="mailto:Vittonic@proton.me" 
                  className="text-primary hover:underline text-lg"
                >
                  Vittonic@proton.me
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="size-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t mt-8">
            <h3 className="text-xl font-bold mb-4">Oportunidades para Inversionistas</h3>
            <p className="text-muted-foreground">
              Este proyecto representa una oportunidad única para invertir en un futuro sostenible y rentable. 
              Contáctenos para recibir un dossier de inversión detallado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
