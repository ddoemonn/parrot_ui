import { Inter } from 'next/font/google';

import NavigationMenuExample from '@/examples/NavigationMenu';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-around p-24 ${inter.className}`}>
      <NavigationMenuExample />
    </main>
  );
}
