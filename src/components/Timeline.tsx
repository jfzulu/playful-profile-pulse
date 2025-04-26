
import { Card } from "@/components/ui/card";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
}

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 group">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <div className="w-0.5 h-full bg-gray-200 group-hover:bg-primary/50 transition-colors" />
          </div>
          <Card className="p-6 flex-1 hover:shadow-lg transition-shadow group-hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
