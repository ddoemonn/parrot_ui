'use client';

import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
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
  hoverable?: boolean;
  striped?: boolean;
  compact?: boolean;
  bordered?: boolean;
  className?: string;
}

export function Table<T extends { id: string }>({
  data,
  columns,
  sortColumn,
  sortDirection = 'asc',
  onSort,
  selectable,
  selectedRows = [],
  onRowSelect,
  onSelectAll,
  hoverable = true,
  striped = false,
  compact = false,
  bordered = false,
  className,
}: TableProps<T>) {
  const [internalSortColumn, setInternalSortColumn] = useState<string | undefined>(sortColumn);
  const [internalSortDirection, setInternalSortDirection] = useState<'asc' | 'desc'>(sortDirection);

  const handleSort = (column: string) => {
    if (!columns.find(col => col.key === column)?.sortable) return;

    if (onSort) {
      onSort(column);
    } else {
      setInternalSortColumn(column);
      setInternalSortDirection(prev => 
        internalSortColumn === column 
          ? prev === 'asc' ? 'desc' : 'asc'
          : 'asc'
      );
    }
  };

  const sortedData = useMemo(() => {
    const sortCol = onSort ? sortColumn : internalSortColumn;
    const sortDir = onSort ? sortDirection : internalSortDirection;

    if (!sortCol) return data;

    return [...data].sort((a, b) => {
      const aValue = (a as any)[sortCol];
      const bValue = (b as any)[sortCol];

      if (aValue === bValue) return 0;
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      const comparison = aValue < bValue ? -1 : 1;
      return sortDir === 'asc' ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection, internalSortColumn, internalSortDirection, onSort]);

  const allSelected = data.length > 0 && selectedRows.length === data.length;

  return (
    <div className={cn(
      'w-full overflow-auto',
      bordered && 'border border-border rounded-lg',
      className
    )}>
      <table className="w-full caption-bottom text-sm">
        <thead className={cn(
          'bg-muted/50',
          '[&_tr]:border-b [&_tr]:border-border'
        )}>
          <tr>
            {selectable && (
              <th className="h-12 px-4 text-left align-middle">
                <Checkbox
                  checked={allSelected}
                  onChange={onSelectAll}
                  aria-label="Select all"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
                  column.sortable && 'cursor-pointer select-none',
                  compact ? 'py-2' : 'py-4'
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && (
                    <div className="flex flex-col">
                      <ChevronUp
                        className={cn(
                          'w-4 h-4 -mb-1',
                          sortColumn === column.key && sortDirection === 'asc'
                            ? 'text-primary'
                            : 'text-muted-foreground/30'
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 -mt-1',
                          sortColumn === column.key && sortDirection === 'desc'
                            ? 'text-primary'
                            : 'text-muted-foreground/30'
                        )}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn(
          '[&_tr:last-child]:border-0',
          striped && '[&_tr:nth-child(even)]:bg-muted/50'
        )}>
          {sortedData.map((row, i) => (
            <tr
              key={row.id}
              className={cn(
                'border-b border-border transition-colors',
                hoverable && 'hover:bg-muted/50',
                selectedRows.includes(row.id) && 'bg-muted/50'
              )}
            >
              {selectable && (
                <td className={cn('px-4', compact ? 'py-2' : 'py-4')}>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={() => onRowSelect?.(row.id)}
                    aria-label={`Select row ${i + 1}`}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn('px-4', compact ? 'py-2' : 'py-4')}
                >
                  {column.render
                    ? column.render((row as any)[column.key], row)
                    : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}