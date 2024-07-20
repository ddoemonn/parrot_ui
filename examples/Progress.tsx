import Progress from '@/components/Progress';

export default function ProgressExample() {
  return (
    <div className="p-4 flex flex-col justify-between  w-full">
      <h1 className="text-lg font-semibold mb-4">Progress Bar Example</h1>
      <Progress
        value={70}
        color="bg-green-500"
        height="h-6"
      />
      <Progress
        value={30}
        color="bg-red-500"
      />
    </div>
  );
}
