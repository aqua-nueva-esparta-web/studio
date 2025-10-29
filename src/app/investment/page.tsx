import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InvestmentAIForm } from '@/components/investment-ai-form';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

export default function InvestmentPage() {
  const financialMetrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Projected ROI',
      value: '15-20%',
      description: 'Over a 10-year period, based on current market projections.',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: 'Projected EBITDA',
      value: '$25M/year',
      description: 'Expected annual earnings before interest, taxes, depreciation, and amortization by year 5.',
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-yellow-500" />,
      title: 'Cost-Benefit Ratio',
      value: '1.8',
      description: 'Indicating strong positive returns relative to project costs.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Investment Viability
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A transparent look at the financial robustness and investment potential of the Agua Nueva Esparta project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {financialMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Investment Viability Analysis</CardTitle>
          <CardDescription>
            Have a question about the project's financials? Our AI-powered tool can provide insights based on our comprehensive financial model. Enter your question below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvestmentAIForm />
        </CardContent>
      </Card>
    </div>
  );
}
