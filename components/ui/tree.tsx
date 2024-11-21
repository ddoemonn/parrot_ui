'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Folder, File } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
}

interface TreeProps {
  data: TreeNode[];
  defaultExpanded?: boolean;
  onNodeClick?: (node: TreeNode) => void;
  className?: string;
}

interface TreeItemProps extends TreeNode {
  level: number;
  defaultExpanded?: boolean;
  onNodeClick?: (node: TreeNode) => void;
}

const TreeItem = ({ id, label, icon, children, level, defaultExpanded, onNodeClick }: TreeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const { theme } = useTheme();
  const hasChildren = children && children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    onNodeClick?.({ id, label, icon, children });
  };

  return (
    <div>
      <motion.div
        className={cn(
          'flex items-center py-1.5 px-2 rounded-lg cursor-pointer select-none',
          'hover:bg-white/5 transition-colors duration-200',
          level > 0 && 'ml-6'
        )}
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
      >
        {hasChildren && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="mr-1"
          >
            <ChevronRight className="w-4 h-4 text-white/60" />
          </motion.div>
        )}
        {!hasChildren && <div className="w-5" />}
        <div className="mr-2 text-white/60">
          {icon || (hasChildren ? <Folder className="w-4 h-4" /> : <File className="w-4 h-4" />)}
        </div>
        <span className="text-sm">{label}</span>
      </motion.div>

      <AnimatePresence initial={false}>
        {isExpanded && children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children.map((child) => (
              <TreeItem
                key={child.id}
                {...child}
                level={level + 1}
                defaultExpanded={defaultExpanded}
                onNodeClick={onNodeClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Tree({ data, defaultExpanded = false, onNodeClick, className }: TreeProps) {
  return (
    <div className={cn('rounded-lg', className)}>
      {data.map((node) => (
        <TreeItem
          key={node.id}
          {...node}
          level={0}
          defaultExpanded={defaultExpanded}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  );
}