import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import TableExample from '@/examples/Table';

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <TableExample />
    </main>
  );
}
