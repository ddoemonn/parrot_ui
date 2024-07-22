import { Inter } from 'next/font/google';

import PieChartExample from '@/examples/charts/PieChart';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <PieChartExample />
    </main>
  );
}
