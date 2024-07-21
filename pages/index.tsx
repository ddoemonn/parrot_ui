import { Inter } from 'next/font/google';

import BreadcrumbExample from '@/examples/Breadcrumb';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <BreadcrumbExample />
    </main>
  );
}
