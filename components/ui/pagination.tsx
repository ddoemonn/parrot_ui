'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  size = 'md',
  variant = 'default',
  className
}: PaginationProps) {
  const { theme } = useTheme();

  const getPageNumbers = () => {
    const pageNumbers = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    for (let i = leftSibling; i <= rightSibling; i++) {
      pageNumbers.push(i);
    }

    if (leftSibling > 1) {
      if (leftSibling > 2) {
        pageNumbers.unshift('...');
      }
      pageNumbers.unshift(1);
    }

    if (rightSibling < totalPages) {
      if (rightSibling < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg'
  };

  const variantClasses = {
    default: 'bg-white/10 hover:bg-white/20',
    outline: 'border border-white/20 hover:bg-white/10',
    ghost: 'hover:bg-white/10'
  };

  const baseButtonClasses = cn(
    'flex items-center justify-center rounded-lg transition-colors duration-200',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant]
  );

  const activeButtonClasses = cn(
    'bg-gradient-to-r',
    'from-[#FF6B6B] to-[#4ECDC4]',
    'text-white'
  );

  return (
    <nav className={cn('flex items-center gap-2', className)}>
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={baseButtonClasses}
          aria-label="First page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={baseButtonClasses}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPageNumbers().map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === '...' ? (
            <span className="px-2">...</span>
          ) : (
            <button
              onClick={() => onPageChange(pageNumber as number)}
              className={cn(
                baseButtonClasses,
                currentPage === pageNumber && activeButtonClasses
              )}
              aria-current={currentPage === pageNumber ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={baseButtonClasses}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={baseButtonClasses}
          aria-label="Last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
}