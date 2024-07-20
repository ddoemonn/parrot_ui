import { Inter } from 'next/font/google';

import Accordion from '@/components/Accordion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const accordionItems = [
    {
      title: 'What is Lorem Ipsum?',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      color: 'blue',
    },
    {
      title: 'Why do we use it?',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      color: 'green',
    },
    {
      title: 'Where does it come from?',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      color: 'red',
    },
    {
      title: 'Where can I get some?',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",

      color: 'purple',
    },
  ];

  return (
    <main className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="max-w-lg mx-auto mt-10">
        <Accordion items={accordionItems} />
      </div>
    </main>
  );
}
