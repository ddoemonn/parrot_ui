'use client';

import { Sidebar } from '@/components/sidebar';

export function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      <main className="flex-1 ml-[19rem]">
        {children}
      </main>
    </div>
  );
}