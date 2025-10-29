'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const socialData = [
  { name: 'Population with Access', value: 100, label: 'Population with Water Access (%)' },
  { name: 'Water-borne Illness', value: -85, label: 'Reduction in Water-borne Illnesses (%)' },
];

const environmentalData = [
  { name: 'CO2 Reduction', value: 60, unit: 'k tons' },
  { name: 'Water Recycled', value: 40, unit: 'M liters' },
];

const economicData = [
  { year: '2025', jobs: 500 },
  { year: '2026', jobs: 1200 },
  { year: '2027', jobs: 800 },
  { year: '2028', jobs: 400 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))'];

export function ImpactCharts({ chartType }: { chartType: 'social' | 'environmental' | 'economic' }) {
  if (chartType === 'social') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={socialData} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[-100, 100]} tickFormatter={(value) => `${value}%`} />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Metric
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {payload[0].payload.name}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Impact
                        </span>
                        <span className="font-bold">
                          {payload[0].value}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="value" >
             {socialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value > 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === 'environmental') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={environmentalData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, unit }) => `${name}: ${value} ${unit}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {environmentalData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
             content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <p className="font-bold">{`${payload[0].name}: ${payload[0].value} ${payload[0].payload.unit}`}</p>
                    </div>
                  );
                }
                return null;
              }}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === 'economic') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={economicData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <p className="font-bold">{`Jobs created in ${payload[0].payload.year}: ${payload[0].value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
          />
          <Bar dataKey="jobs" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return null;
}
