'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Table, type Column } from '@/components/ui/table';
import { CodeBlock } from '@/components/code-block';
import { Check, X } from 'lucide-react';

const installCode = `npm install @parrot-ui/react`;

const usageCode = `import { Table, type Column } from '@parrot-ui/react';

// Define your data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

// Define your columns
const columns: Column<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'error'}>
        {value}
      </Badge>
    ),
  },
];

// Your component
function UserTable() {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <Table
      data={users}
      columns={columns}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      onSort={handleSort}
      hoverable
      striped
    />
  );
}`;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const sampleData: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'inactive',
  },
];

export default function TablePage() {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const columns: Column<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    {
      key: 'status',
      header: 'Status',
      render: (value) => (
        <div className="flex items-center space-x-2">
          {value === 'active' ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <X className="w-4 h-4 text-error" />
          )}
          <span>{value}</span>
        </div>
      ),
    },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows((prev) =>
      prev.length === sampleData.length ? [] : sampleData.map((row) => row.id)
    );
  };

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto p-8 pt-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text mb-4">
          Table
        </h1>
        <p className="text-lg text-muted mb-8">
          A flexible table component with sorting, selection, and customizable styling.
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
          
          {/* Basic */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Basic Table</h3>
            <Table
              data={sampleData}
              columns={columns}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </div>

          {/* Selectable */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Selectable Rows</h3>
            <Table
              data={sampleData}
              columns={columns}
              selectable
              selectedRows={selectedRows}
              onRowSelect={handleRowSelect}
              onSelectAll={handleSelectAll}
              striped
            />
          </div>

          {/* Compact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-text">Compact Table</h3>
            <Table
              data={sampleData}
              columns={columns}
              compact
              bordered
            />
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-text">Prop</th>
                  <th className="py-4 px-6 text-text">Type</th>
                  <th className="py-4 px-6 text-text">Default</th>
                  <th className="py-4 px-6 text-text">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-4 px-6">data</td>
                  <td className="py-4 px-6">T[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Array of data to display</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">columns</td>
                  <td className="py-4 px-6">Column[]</td>
                  <td className="py-4 px-6">required</td>
                  <td className="py-4 px-6">Column definitions</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">sortColumn</td>
                  <td className="py-4 px-6">string</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Currently sorted column</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">sortDirection</td>
                  <td className="py-4 px-6">asc | desc</td>
                  <td className="py-4 px-6">undefined</td>
                  <td className="py-4 px-6">Sort direction</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">selectable</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Enable row selection</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">striped</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Enable striped rows</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">hoverable</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">true</td>
                  <td className="py-4 px-6">Enable hover effect</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">compact</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Use compact padding</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6">bordered</td>
                  <td className="py-4 px-6">boolean</td>
                  <td className="py-4 px-6">false</td>
                  <td className="py-4 px-6">Show borders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </motion.div>
    </div>
  );
}