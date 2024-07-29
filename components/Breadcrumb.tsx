import React, { useEffect, useState } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      setActiveTab(currentPath);
    }
  }, []);
  return (
    <nav
      aria-label="breadcrumb"
      className=" text-md"
    >
      <ol className="flex flex-wrap list-none p-0 m-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${index < items.length - 1 ? 'after:content-["/"] after:px-2' : ''}`}
          >
            {item.href ? (
              <a
                href={item.href}
                className={`${activeTab === item.href ? 'text-indigo-500' : ''}`}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
