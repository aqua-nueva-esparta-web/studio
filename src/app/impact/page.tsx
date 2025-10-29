'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImpactCharts } from '@/components/charts';
import { DollarSign, Droplet, Leaf, Users } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Impact Dashboard
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Visualizing the transformative effect of Agua Nueva Esparta on the community, environment, and economy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Social Impact</CardTitle>
            </div>
            <CardDescription>
              Improving lives by providing reliable access to clean water.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImpactCharts chartType="social" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <CardTitle>Environmental Impact</CardTitle>
            </div>
            <CardDescription>
              Reducing carbon footprint and promoting sustainability.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImpactCharts chartType="environmental" />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-4">
              <DollarSign className="h-6 w-6 text-yellow-500" />
              <CardTitle>Economic Impact</CardTitle>
            </div>
            <CardDescription>
              Fostering economic growth through job creation and stable resources.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImpactCharts chartType="economic" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
