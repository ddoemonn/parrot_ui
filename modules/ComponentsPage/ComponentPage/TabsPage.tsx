import React from 'react';

import Tabs from '@/components/Tabs';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const tabsCode = `import React, { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={\`px-4 py-2 focus:outline-none \${activeTab === index ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}\`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
`;

const tabsUsage = `import React from 'react';

import Tabs from '@/components/Tabs';

const App: React.FC = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
    },
  ];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
`;

export default function TabsPage() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
    },
  ];

  return (
    <ComponentDetail
      usage={tabsUsage}
      code={tabsCode}
      component={<Tabs tabs={tabs} />}
      name="Tabs"
      detail="The Tabs component provides a tabbed navigation interface where users can switch between different content panels. It uses buttons to switch between tabs and displays the content associated with the active tab. This component is useful for organizing content into sections that can be navigated easily."
    />
  );
}
