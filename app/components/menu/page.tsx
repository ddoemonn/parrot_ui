'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { 
  Settings, 
  User, 
  LogOut, 
  Mail, 
  Bell, 
  Plus,
  Edit,
  Trash,
  Share,
  MoreVertical,
  ChevronRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Menu } from '@parrot-ui/react';
import { Settings, User, LogOut } from 'lucide-react';

function App() {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Open Menu</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item icon={<User />}>Profile</Menu.Item>
        <Menu.Item icon={<Settings />}>Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item icon={<LogOut />} variant="danger">
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}`;

const submenuCode = `<Menu>
  <Menu.Trigger>
    <Button>More Actions</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item>Edit</Menu.Item>
    <Menu.Sub>
      <Menu.SubTrigger>Share</Menu.SubTrigger>
      <Menu.SubContent>
        <Menu.Item>Copy Link</Menu.Item>
        <Menu.Item>Email</Menu.Item>
        <Menu.Item>Social</Menu.Item>
      </Menu.SubContent>
    </Menu.Sub>
    <Menu.Item>Delete</Menu.Item>
  </Menu.Content>
</Menu>`;

const checkableCode = `<Menu>
  <Menu.Trigger>
    <Button>Options</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.CheckboxItem checked={checked1} onChange={setChecked1}>
      Show Notifications
    </Menu.CheckboxItem>
    <Menu.CheckboxItem checked={checked2} onChange={setChecked2}>
      Auto Update
    </Menu.CheckboxItem>
  </Menu.Content>
</Menu>`;

export default function MenuPage() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [radioValue, setRadioValue] = useState('light');

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Menu
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile menu component for dropdowns, context menus, and more.
        </p>

        {/* Installation */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Installation</h2>
          <CodeBlock code={installCode} language="bash" />
        </section>

        {/* Usage */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Usage</h2>
          <CodeBlock code={usageCode} language="tsx" />
        </section>

        {/* Examples */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-text mb-4">Examples</h2>
          
          {/* Basic Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Menu</h3>
            <div className="flex gap-4">
              <Menu>
                <Menu.Trigger>
                  <Button>Account Menu</Button>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item icon={<User />}>Profile</Menu.Item>
                  <Menu.Item icon={<Settings />}>Settings</Menu.Item>
                  <Menu.Item icon={<Bell />}>Notifications</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item icon={<LogOut />} variant="danger">
                    Logout
                  </Menu.Item>
                </Menu.Content>
              </Menu>

              <Menu>
                <Menu.Trigger>
                  <Button variant="outline" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item icon={<Edit />}>Edit</Menu.Item>
                  <Menu.Item icon={<Share />}>Share</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item icon={<Trash />} variant="danger">
                    Delete
                  </Menu.Item>
                </Menu.Content>
              </Menu>
            </div>
          </div>

          {/* Submenus */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Submenus</h3>
            <CodeBlock code={submenuCode} language="tsx" />
            <Menu>
              <Menu.Trigger>
                <Button>File Actions</Button>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.Item icon={<Edit />}>Edit</Menu.Item>
                <Menu.Sub>
                  <Menu.SubTrigger icon={<Share />}>
                    Share
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Menu.SubTrigger>
                  <Menu.SubContent>
                    <Menu.Item icon={<Mail />}>Email</Menu.Item>
                    <Menu.Item icon={<Link href={'/'} />}>Copy Link</Menu.Item>
                    <Menu.Sub>
                      <Menu.SubTrigger>
                        More Options
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </Menu.SubTrigger>
                      <Menu.SubContent>
                        <Menu.Item>Option 1</Menu.Item>
                        <Menu.Item>Option 2</Menu.Item>
                      </Menu.SubContent>
                    </Menu.Sub>
                  </Menu.SubContent>
                </Menu.Sub>
                <Menu.Separator />
                <Menu.Item icon={<Trash />} variant="danger">
                  Delete
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>

          {/* Checkable Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Checkable Items</h3>
            <CodeBlock code={checkableCode} language="tsx" />
            <Menu>
              <Menu.Trigger>
                <Button>Settings</Button>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.CheckboxItem 
                  checked={checked1}
                  onChange={setChecked1}
                  icon={<Bell />}
                >
                  Show Notifications
                </Menu.CheckboxItem>
                <Menu.CheckboxItem 
                  checked={checked2}
                  onChange={setChecked2}
                  icon={<Settings />}
                >
                  Auto Update
                </Menu.CheckboxItem>
                <Menu.Separator />
                <Menu.RadioGroup value={radioValue} onChange={setRadioValue}>
                  <Menu.RadioItem value="light">Light Theme</Menu.RadioItem>
                  <Menu.RadioItem value="dark">Dark Theme</Menu.RadioItem>
                  <Menu.RadioItem value="system">System Theme</Menu.RadioItem>
                </Menu.RadioGroup>
              </Menu.Content>
            </Menu>
          </div>

          {/* Context Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Context Menu</h3>
            <Menu type="context">
              <div className="h-32 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center text-white/60">
                Right click here
              </div>
              <Menu.Content>
                <Menu.Item icon={<Plus />}>New</Menu.Item>
                <Menu.Item icon={<Edit />}>Edit</Menu.Item>
                <Menu.Separator />
                <Menu.Item icon={<Trash />} variant="danger">
                  Delete
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Component</th>
                  <th className="py-4 px-6 text-text">Prop</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Default</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu</td>
                  <td className="py-4 px-6">type</td>
                  <td className="py-4 px-6">dropdown | context</td>
                  <td className="py-4 px-6">dropdown</td>
                  <td className="py-4 px-6">Menu type</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu.Item</td>
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Item icon</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu.Item</td>
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | danger</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Item style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu.CheckboxItem</td>
                  <td className="py-4 px-6">checked</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Checkbox state</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu.RadioGroup</td>
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Selected value</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Menu.Sub</td>
                  <td className="py-4 px-6">defaultOpen</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Initial open state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}