import { Inter } from 'next/font/google';

import Button from '@/examples/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="w-full mt-10">
        <Button />
      </div>
    </main>
  );
}
