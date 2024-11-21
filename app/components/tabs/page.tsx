'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';
import { Settings, User, Bell, Mail, Code, Layout, Palette } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Tabs } from '@parrot-ui/react';

function App() {
  return (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        Account settings content
      </Tabs.Content>
      <Tabs.Content value="password">
        Password settings content
      </Tabs.Content>
      <Tabs.Content value="settings">
        General settings content
      </Tabs.Content>
    </Tabs>
  );
}`;

const variantsCode = `// Pills variant
<Tabs variant="pills">
  {/* ... */}
</Tabs>

// Underline variant
<Tabs variant="underline">
  {/* ... */}
</Tabs>

// Gradient variant
<Tabs variant="gradient">
  {/* ... */}
</Tabs>`;

const verticalCode = `<Tabs orientation="vertical">
  <Tabs.List>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
    <Tabs.Trigger value="security">Security</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="profile">
    Profile settings content
  </Tabs.Content>
  {/* ... */}
</Tabs>`;

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Tabs
        </h1>
        <p className="text-lg text-muted mb-8">
          A versatile tabs component for organizing content into multiple sections.
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
          
          {/* Basic Tabs */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Tabs</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Tabs defaultValue="profile">
                <Tabs.List>
                  <Tabs.Trigger value="profile" icon={<User className="w-4 h-4" />}>
                    Profile
                  </Tabs.Trigger>
                  <Tabs.Trigger value="notifications" icon={<Bell className="w-4 h-4" />}>
                    Notifications
                  </Tabs.Trigger>
                  <Tabs.Trigger value="settings" icon={<Settings className="w-4 h-4" />}>
                    Settings
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="profile" className="p-4">
                  <h4 className="text-lg font-medium mb-2">Profile Settings</h4>
                  <p className="text-muted">Manage your account profile and preferences.</p>
                </Tabs.Content>
                <Tabs.Content value="notifications" className="p-4">
                  <h4 className="text-lg font-medium mb-2">Notification Preferences</h4>
                  <p className="text-muted">Control how and when you receive notifications.</p>
                </Tabs.Content>
                <Tabs.Content value="settings" className="p-4">
                  <h4 className="text-lg font-medium mb-2">General Settings</h4>
                  <p className="text-muted">Configure your application settings.</p>
                </Tabs.Content>
              </Tabs>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Variants</h3>
            <CodeBlock code={variantsCode} language="tsx" />
            <div className="space-y-8">
              {['pills', 'underline', 'gradient'].map((variant) => (
                <div key={variant} className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-muted mb-4 capitalize">{variant} Variant</p>
                  <Tabs
                    defaultValue="code"
                    variant={variant as 'pills' | 'underline' | 'gradient'}
                  >
                    <Tabs.List>
                      <Tabs.Trigger value="code" icon={<Code className="w-4 h-4" />}>
                        Code
                      </Tabs.Trigger>
                      <Tabs.Trigger value="design" icon={<Layout className="w-4 h-4" />}>
                        Design
                      </Tabs.Trigger>
                      <Tabs.Trigger value="style" icon={<Palette className="w-4 h-4" />}>
                        Style
                      </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="code" className="p-4">
                      Code content
                    </Tabs.Content>
                    <Tabs.Content value="design" className="p-4">
                      Design content
                    </Tabs.Content>
                    <Tabs.Content value="style" className="p-4">
                      Style content
                    </Tabs.Content>
                  </Tabs>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Tabs */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Vertical Tabs</h3>
            <CodeBlock code={verticalCode} language="tsx" />
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <Tabs orientation="vertical" defaultValue="profile">
                <Tabs.List className="w-48">
                  <Tabs.Trigger value="profile" icon={<User className="w-4 h-4" />}>
                    Profile
                  </Tabs.Trigger>
                  <Tabs.Trigger value="messages" icon={<Mail className="w-4 h-4" />}>
                    Messages
                  </Tabs.Trigger>
                  <Tabs.Trigger value="settings" icon={<Settings className="w-4 h-4" />}>
                    Settings
                  </Tabs.Trigger>
                </Tabs.List>

                <div className="flex-1">
                  <Tabs.Content value="profile" className="p-4">
                    <h4 className="text-lg font-medium mb-2">Profile Settings</h4>
                    <p className="text-muted">Manage your account profile and preferences.</p>
                  </Tabs.Content>
                  <Tabs.Content value="messages" className="p-4">
                    <h4 className="text-lg font-medium mb-2">Messages</h4>
                    <p className="text-muted">View and manage your messages.</p>
                  </Tabs.Content>
                  <Tabs.Content value="settings" className="p-4">
                    <h4 className="text-lg font-medium mb-2">Settings</h4>
                    <p className="text-muted">Configure your application settings.</p>
                  </Tabs.Content>
                </div>
              </Tabs>
            </div>
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
                  <td className="py-4 px-6">Tabs</td>
                  <td className="py-4 px-6">defaultValue</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Initial active tab</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs</td>
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Controlled active tab</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs</td>
                  <td className="py-4 px-6">variant</td>
                  <td className="py-4 px-6">default | pills | underline | gradient</td>
                  <td className="py-4 px-6">default</td>
                  <td className="py-4 px-6">Visual style variant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs</td>
                  <td className="py-4 px-6">size</td>
                  <td className="py-4 px-6">sm | md | lg</td>
                  <td className="py-4 px-6">md</td>
                  <td className="py-4 px-6">Size of the tabs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs</td>
                  <td className="py-4 px-6">orientation</td>
                  <td className="py-4 px-6">horizontal | vertical</td>
                  <td className="py-4 px-6">horizontal</td>
                  <td className="py-4 px-6">Layout orientation</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs.Trigger</td>
                  <td className="py-4 px-6">value</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Unique identifier</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs.Trigger</td>
                  <td className="py-4 px-6">disabled</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Disable the tab</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">Tabs.Trigger</td>
                  <td className="py-4 px-6">icon</td>
                  <td className="py-4 px-6">ReactNode</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Optional icon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}