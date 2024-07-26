import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'] });
import NavigationMenu from '@/components/NavigationMenu';

const navItems = [
  {
    href: '/',
    renderItem: (
      <div className="flex items-center">
        <p className="ml-2 font-semibold text-2xl mt-1 bg-gradient-to-r from-indigo-400 via-green-500 to-yellow-500 text-transparent bg-clip-text">
          ParrotUI 🦜
        </p>
      </div>
    ),
  },
  {
    href: '/examples',
    renderItem: <span className="text-blue-500 hover:underline decoration-blue-500 text-lg font-semibold">Examples</span>,
  },
  {
    href: '/components',
    renderItem: <span className="text-green-500 hover:underline decoration-green-500 text-lg font-semibold">Components</span>,
  },
  {
    href: 'https://www.github.com',
    renderItem: <GitHubLogoIcon className="w-6 h-6" />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={` overflow-hidden max-h-screen  flex flex-col z-10  ${exo.className} `}>
      <NavigationMenu
        items={navItems}
        direction="vertical"
      />
      {children}
    </main>
  );
}
