import { Inter } from 'next/font/google';

import CalendarExample from '@/examples/Calendar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="w-full mt-10">
        <CalendarExample />
      </div>
    </main>
  );
}
