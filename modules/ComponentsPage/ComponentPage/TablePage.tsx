import React from 'react';

import Table from '@/components/Table';

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const columns: { key: keyof User; title: string }[] = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
];

export default function TablePage() {
  return (
    <div className="p-4">
      <Table<User>
        columns={columns}
        data={users}
      />
    </div>
  );
}
