import React, { useEffect, useRef } from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition && scrollRef.current) {
      scrollRef.current.scrollTop = parseInt(savedScrollPosition, 10);
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        localStorage.setItem('scrollPosition', scrollRef.current.scrollTop.toString());
      }
    };

    const scrollArea = scrollRef.current;
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll);
      }
    };
  });

  return (
    <div
      ref={scrollRef}
      className={`overflow-scroll ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
