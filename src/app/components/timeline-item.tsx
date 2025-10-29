import { cn } from '@/lib/utils';
import { CheckCircle, Circle, Loader } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  isLeft: boolean;
};

const statusIcons = {
  completed: <CheckCircle className="h-6 w-6 text-green-500" />,
  'in-progress': <Loader className="h-6 w-6 text-blue-500 animate-spin" />,
  upcoming: <Circle className="h-6 w-6 text-muted-foreground" />,
};

const statusColors = {
    completed: 'border-green-500/50',
    'in-progress': 'border-blue-500/50',
    upcoming: 'border-muted-foreground/50',
}

export default function TimelineItem({
  date,
  title,
  description,
  status,
  isLeft,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        'relative flex items-center w-full',
        isLeft ? 'justify-start' : 'justify-end'
      )}
    >
      <div className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-background rounded-full border-2',
          statusColors[status]
          )}>
        {statusIcons[status]}
      </div>
      <div className={cn('w-[calc(50%-2rem)]', isLeft ? 'pr-8' : 'pl-8')}>
        <Card className={cn("shadow-md hover:shadow-xl transition-shadow", `border-l-4 ${statusColors[status]}`)}>
          <CardHeader>
            <p className="text-sm text-muted-foreground">{date}</p>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
