import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AlertTriangle, Droplets, Goal, Users } from 'lucide-react';
import Image from 'next/image';

export default function OverviewPage() {
  const overviewImage = PlaceHolderImages.find((img) => img.id === 'overview-1');

  const goals = [
    'Ensure a reliable and continuous supply of drinking water for the population.',
    'Promote sustainable economic development by guaranteeing water for industrial and tourist activities.',
    'Reduce dependence on traditional, often unreliable water sources.',
    'Implement a resilient infrastructure capable of withstanding climate variations.',
  ];

  const supplySources = [
    {
      title: 'Seawater Desalination Plants',
      description: 'The core of our project, utilizing reverse osmosis technology to produce high-quality fresh water from the sea.',
      icon: <Droplets className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Atmospheric Water Generators (AWGs)',
      description: 'Innovative units that extract moisture from the air, providing a decentralized and resilient water source.',
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ];

  const challenges = [
    'High initial investment for infrastructure.',
    'Energy consumption for desalination processes.',
    'Logistical complexity of project implementation.',
    'Need for specialized technical personnel for operation and maintenance.',
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Project Overview
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Agua Nueva Esparta is a forward-thinking initiative designed to solve the critical water scarcity issues in the region through innovative and sustainable technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to provide a definitive and sustainable solution to the historical problem of water shortages in Nueva Esparta. By integrating advanced technologies like seawater desalination and atmospheric water generation, powered by renewable energy, we aim to create a resilient and self-sufficient water supply system that fosters social well-being and economic growth for generations to come.
          </p>
        </div>
        {overviewImage && (
          <div className="relative h-80 w-full">
            <Image
              src={overviewImage.imageUrl}
              alt={overviewImage.description}
              fill
              className="object-cover rounded-lg shadow-md"
              data-ai-hint={overviewImage.imageHint}
            />
          </div>
        )}
      </div>

      <div className="mt-16 md:mt-24 space-y-16">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Goal className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">Project Goals</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Our Supply Sources</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {supplySources.map((source) => (
              <div key={source.title} className="flex gap-4">
                <div>{source.icon}</div>
                <div>
                  <h3 className="font-semibold">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <CardTitle className="text-3xl">Challenges Addressed</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              The project is designed to overcome significant hurdles. Our strategies include securing long-term financing, integrating a dedicated renewable energy system to minimize operational costs and environmental impact, and establishing comprehensive training programs.
            </p>
            <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
