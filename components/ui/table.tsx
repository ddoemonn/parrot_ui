'use client';

import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
  selectable?: boolean;
  selectedRows?: string[];
  onRowSelect?: (id: string) => void;
  onSelectAll?: () => void;
  rowKey?: string;
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  bordered?: boolean;
}

export function Table<T extends { [key: string]: any }>({
  data,
  columns,
  sortColumn,
  sortDirection,
  onSort,
  selectable,
  selectedRows = [],
  onRowSelect,
  onSelectAll,
  rowKey = 'id',
  className,
  striped = false,
  hoverable = true,
  compact = false,
  bordered = false,
}: TableProps<T>) {
  const { theme } = useTheme();

  const tableClasses = cn(
    'w-full border-collapse',
    bordered && 'border border-border',
    className
  );

  const cellClasses = cn(
    'px-4 py-3',
    bordered && 'border border-border',
    compact ? 'px-2 py-1 text-sm' : 'px-4 py-3'
  );

  const headerClasses = cn(
    cellClasses,
    'font-semibold text-left transition-colors duration-200',
    bordered && 'border border-border'
  );

  const rowClasses = cn(
    'transition-colors duration-200',
    hoverable && 'hover:bg-white/5',
    striped && 'even:bg-white/5'
  );

  const renderSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null;
    if (sortColumn !== column.key) {
      return <ChevronDown className="w-4 h-4 opacity-30" />;
    }
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg" style={{ backgroundColor: `${theme.colors.background}40` }}>
      <table className={tableClasses}>
        <thead>
          <tr className="border-b border-border">
            {selectable && (
              <th className={headerClasses}>
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={onSelectAll}
                  className="rounded border-border"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={headerClasses}
                style={{ width: column.width }}
                onClick={() => column.sortable && onSort?.(column.key)}
              >
                <div className="flex items-center space-x-2">
                  <span>{column.header}</span>
                  {renderSortIcon(column)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row[rowKey]} className={rowClasses}>
              {selectable && (
                <td className={cellClasses}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row[rowKey])}
                    onChange={() => onRowSelect?.(row[rowKey])}
                    className="rounded border-border"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={`${row[rowKey]}-${column.key}`} className={cellClasses}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}