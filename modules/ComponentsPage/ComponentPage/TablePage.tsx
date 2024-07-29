import React from 'react';

import Table from '@/components/Table';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

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

const tableCode = `import React from 'react';

type TableProps<T> = {
  columns: { key: keyof T; title: string }[];
  data: T[];
};

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {columns.map(col => (
              <th
                key={String(col.key)}
                className="py-2 px-4 text-left text-gray-600 font-semibold"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200"
            >
              {columns.map(col => (
                <td
                  key={String(col.key)}
                  className="py-2 px-4 text-gray-700"
                >
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
`;

const tableUsage = `import React from 'react';

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
`;

export default function TablePage() {
  return (
    <ComponentDetail
      usage={tableUsage}
      code={tableCode}
      component={
        <Table<User>
          columns={columns}
          data={users}
        />
      }
      name="Table"
      detail="The Table component is a generic table that displays data in rows and columns. It accepts an array of column definitions and data, and dynamically generates the table structure based on the provided props. This component supports any data structure that conforms to the given column definitions."
    />
  );
}
