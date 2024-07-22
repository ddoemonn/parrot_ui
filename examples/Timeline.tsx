import Timeline from '@/components/Timeline';

const timelineItems = [
  { date: '2024-01-01', content: "New Year's Day" },
  { date: '2024-02-14', content: "Valentine's Day" },
  { date: '2024-04-01', content: "April Fool's Day" },
];

const TimelineExample: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default TimelineExample;
