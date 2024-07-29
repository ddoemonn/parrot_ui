import React from 'react';

import Breadcrumb from '../Breadcrumb';
import Code from '../Code';
import ScrollArea from '../ScrollArea';
import Tabs from '../Tabs';

interface ComponentDetailProps {
  usage: string;
  code: string;
  component: React.ReactNode;
  detail: string;
  name: string;
}
export default function ComponentDetail({ usage, code, component, detail, name }: ComponentDetailProps) {
  const tabs = [
    {
      label: 'Preview',
      content: <div className="mt-10 flex justify-center items-center">{component}</div>,
    },
    {
      label: 'Code',
      content: (
        <Code
          code={code}
          copyButton={true}
          className="bg-indigo-50 text-indigo-900"
        />
      ),
    },
    {
      label: 'Usage',
      content: (
        <ScrollArea className="">
          <Code
            code={usage}
            copyButton={true}
            className="bg-blue-50 text-blue-900"
          />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className="p-10 pt-7 w-4/5">
      <Breadcrumb items={[{ label: 'Components' }, { label: name, href: `/components/${name.toLowerCase().replace(' ', '-')}` }]} />
      <h1 className="text-3xl font-semibold mt-5 mb-2 text-indigo-500">{name}</h1>

      <p className="mb-7">{detail}</p>
      <Tabs tabs={tabs} />
    </div>
  );
}
