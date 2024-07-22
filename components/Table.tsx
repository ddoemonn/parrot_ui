import React from 'react';

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
