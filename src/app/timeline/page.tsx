import TimelineItem from '@/components/timeline-item';

const timelineData = [
  {
    date: 'Q1 2024',
    title: 'Project Initiation and Feasibility Studies',
    description: 'Completed comprehensive feasibility studies, securing initial funding and partnerships. Environmental impact assessments finalized.',
    status: 'completed',
  },
  {
    date: 'Q3 2024',
    title: 'Engineering and Design Phase',
    description: 'Finalized the detailed engineering plans for desalination plants, AWG unit deployment, and renewable energy infrastructure.',
    status: 'completed',
  },
  {
    date: 'Q1 2025',
    title: 'Groundbreaking and Construction Start',
    description: 'Official groundbreaking ceremony and commencement of construction for the main desalination facility.',
    status: 'in-progress',
  },
  {
    date: 'Q4 2025',
    title: 'Renewable Energy System Installation',
    description: 'Installation of solar panels and wind turbines begins to build the dedicated power grid for the project.',
    status: 'upcoming',
  },
  {
    date: 'Q2 2026',
    title: 'First Water Production Test',
    description: 'The first desalination plant unit is scheduled to come online for initial testing and water quality analysis.',
    status: 'upcoming',
  },
  {
    date: 'Q4 2026',
    title: 'Phase 1 Operational',
    description: 'Phase 1 of the project becomes fully operational, supplying water to the first designated zones.',
    status: 'upcoming',
  },
  {
    date: '2027',
    title: 'Full Project Completion',
    description: 'All project phases are completed, and the system reaches its full design capacity, ensuring water security for the region.',
    status: 'upcoming',
  },
];

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Project Timeline
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Follow our journey from conception to completion. We are committed to transparency and keeping our stakeholders informed of our progress.
        </p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.title}
              date={item.date}
              title={item.title}
              description={item.description}
              status={item.status as 'completed' | 'in-progress' | 'upcoming'}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
