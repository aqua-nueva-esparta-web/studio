import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Contact Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to answer your questions. Reach out to us and we'll respond as soon as we can.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Send us an email for inquiries.</p>
                    <a href="mailto:info@aguanuevaesparta.com" className="text-primary hover:underline">
                        info@aguanuevaesparta.com
                    </a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Give us a call during business hours.</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                    </a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Office</h3>
                    <p className="text-muted-foreground">Visit our project office.</p>
                    <p className="text-primary">123 Innovation Drive, Porlamar, Nueva Esparta</p>
                </div>
            </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
