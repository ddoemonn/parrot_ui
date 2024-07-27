// App.tsx

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
