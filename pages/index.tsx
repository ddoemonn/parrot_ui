import { Inter } from 'next/font/google';

import Alert from '@/examples/Alert';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="max-w-lg mx-auto mt-10">
        <Alert />
      </div>
    </main>
  );
}
