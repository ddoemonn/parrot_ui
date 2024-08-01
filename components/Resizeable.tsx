import React, { useState, useCallback, useRef, useEffect } from 'react';

import { ArrowBottomRightIcon } from '@radix-ui/react-icons';

import Button from './Button';

interface ResizableProps {
  initialWidth?: number;
  initialHeight?: number;
}

const Resizable: React.FC<ResizableProps> = ({ initialWidth = 200, initialHeight = 200 }) => {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startPosition = useRef<{ x: number; y: number } | null>(null);

  // Event handler to start resizing
  const startResizing = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsResizing(true);
    startPosition.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  // Event handler to handle resizing
  const handleResize = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !containerRef.current || !startPosition.current) return;

      const dx = e.clientX - startPosition.current.x;
      const dy = e.clientY - startPosition.current.y;

      setSize(prevSize => ({
        width: Math.max(prevSize.width + dx, 50),
        height: Math.max(prevSize.height + dy, 50),
      }));

      startPosition.current = { x: e.clientX, y: e.clientY };
    },
    [isResizing]
  );

  // Event handler to stop resizing
  const stopResizing = () => {
    setIsResizing(false);
  };

  // Add/remove event listeners for mousemove and mouseup
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResize);
      document.addEventListener('mouseup', stopResizing);
    } else {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, handleResize, stopResizing]);

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-50 border border-gray-200 overflow-hidden"
      style={{ width: size.width, height: size.height }}
    >
      <div className="p-4">
        <p>Resize me!</p>
      </div>
      <Button onMouseDown={startResizing}>
        <ArrowBottomRightIcon className="absolute bottom-0 right-0 w-4 h-4  cursor-se-resize" />
      </Button>
    </div>
  );
};
export default Resizable;
