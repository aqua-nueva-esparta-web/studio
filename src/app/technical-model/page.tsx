import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Sun, Wind } from 'lucide-react';

function TechCard({ title, description, imageId, imageHint }: { title: string; description: string; imageId: string; imageHint: string; }) {
  const image = PlaceHolderImages.find(img => img.id === imageId);
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {image && (
            <div className="relative aspect-video w-full">
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover rounded-md"
                data-ai-hint={imageHint}
            />
            </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function TechnicalModelPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Technical Model
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Explore the cutting-edge technology that powers Agua Nueva Esparta, ensuring a reliable and sustainable water supply.
        </p>
      </div>

      <Tabs defaultValue="desalination" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
          <TabsTrigger value="desalination" className="gap-2">
            <Droplets className="h-5 w-5" /> Desalination Plants
          </TabsTrigger>
          <TabsTrigger value="awg" className="gap-2">
            <Wind className="h-5 w-5" /> AWG Units
          </TabsTrigger>
          <TabsTrigger value="energy" className="gap-2">
            <Sun className="h-5 w-5" /> Renewable Energy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="desalination">
          <TechCard
            title="Seawater Desalination Plants"
            description="Our primary water source comes from state-of-the-art desalination plants. Using reverse osmosis, we efficiently convert seawater into potable water, meeting the highest quality standards. This technology forms the backbone of our water production capacity."
            imageId="tech-desalination"
            imageHint="desalination diagram"
          />
        </TabsContent>
        <TabsContent value="awg">
          <TechCard
            title="Atmospheric Water Generators (AWG)"
            description="To enhance resilience and provide decentralized water access, we deploy Atmospheric Water Generators. These units capture humidity from the air and condense it into pure drinking water, ideal for remote locations or as a backup supply."
            imageId="tech-awg"
            imageHint="AWG unit"
          />
        </TabsContent>
        <TabsContent value="energy">
          <TechCard
            title="Renewable Energy System"
            description="Sustainability is at our core. The project is powered by a dedicated renewable energy system, primarily solar and wind power. This not only reduces our carbon footprint but also significantly lowers long-term operational costs, making our water solution both green and economically viable."
            imageId="tech-renewable"
            imageHint="solar panels wind turbines"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
