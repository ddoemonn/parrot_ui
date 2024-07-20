import { Inter } from 'next/font/google';

import Accordion from '@/examples/Accordion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="max-w-lg mx-auto mt-10">
        <Accordion />
      </div>
    </main>
  );
}
