import React from 'react';

import ScrollArea from '@/components/ScrollArea';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const scrollAreaCode = `import React, { useEffect, useRef } from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Retrieve and set scroll position from localStorage
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition && scrollRef.current) {
      scrollRef.current.scrollTop = parseInt(savedScrollPosition, 10);
    }

    // Save scroll position to localStorage on scroll
    const handleScroll = () => {
      if (scrollRef.current) {
        localStorage.setItem('scrollPosition', scrollRef.current.scrollTop.toString());
      }
    };

    const scrollArea = scrollRef.current;
    if (scrollArea) {
      scrollArea.addEventListener('scroll', handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={\`overflow-auto \${className}\`}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
`;

const scrollAreaUsage = `import React from 'react';

import ScrollArea from '@/components/ScrollArea';

export default function ScrollAreaPage() {
  return (
    <div className="p-4">
      <ScrollArea className="border border-gray-300 rounded-md p-2 w-80 h-64">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla eu suscipit cursus, libero nisl facilisis est, at faucibus orci
            eros a mauris.
          </p>
          <p>
            Suspendisse potenti. Phasellus aliquam cursus turpis, ut congue nulla condimentum id. Cras vehicula metus eget leo volutpat vestibulum. Praesent nec
            erat in ligula dapibus volutpat a ac nulla.
          </p>
          <p>
            Aliquam erat volutpat. Nullam varius est sed lectus tincidunt, ac gravida eros ullamcorper. Nam laoreet mi et tincidunt pretium. Duis sagittis,
            ligula vel vulputate iaculis, magna lectus cursus risus, eget accumsan purus eros vel sem.
          </p>
          <p>
            Vestibulum luctus, lorem ut tincidunt gravida, turpis sem posuere libero, sed varius orci lacus sed libero. Curabitur ultrices dui at ante
            ullamcorper, at fermentum felis feugiat.
          </p>
          <p>
            Maecenas euismod velit in dignissim convallis. Integer sit amet lectus vitae sapien egestas malesuada. In hac habitasse platea dictumst. Nullam sit
            amet massa id felis commodo consectetur non ac sapien.
          </p>
          <p>
            Ut fringilla, tortor vel pharetra feugiat, libero ipsum fermentum odio, in sollicitudin nulla nunc vel risus. Sed mollis erat et turpis pretium
            varius. Nam venenatis nunc id est elementum laoreet.
          </p>
          <p>
            Suspendisse potenti. Aenean ut ligula urna. Donec imperdiet, lacus nec fermentum tincidunt, ligula urna egestas magna, vel tempus leo ligula ac
            nunc. Nulla facilisi.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
`;

export default function ScrollAreaPage() {
  return (
    <ComponentDetail
      usage={scrollAreaUsage}
      code={scrollAreaCode}
      component={
        <div className="p-4">
          <ScrollArea className="border border-gray-300 rounded-md p-2 w-80 h-64">
            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla eu suscipit cursus, libero nisl facilisis est, at faucibus
                orci eros a mauris.
              </p>
              <p>
                Suspendisse potenti. Phasellus aliquam cursus turpis, ut congue nulla condimentum id. Cras vehicula metus eget leo volutpat vestibulum. Praesent
                nec erat in ligula dapibus volutpat a ac nulla.
              </p>
              <p>
                Aliquam erat volutpat. Nullam varius est sed lectus tincidunt, ac gravida eros ullamcorper. Nam laoreet mi et tincidunt pretium. Duis sagittis,
                ligula vel vulputate iaculis, magna lectus cursus risus, eget accumsan purus eros vel sem.
              </p>
              <p>
                Vestibulum luctus, lorem ut tincidunt gravida, turpis sem posuere libero, sed varius orci lacus sed libero. Curabitur ultrices dui at ante
                ullamcorper, at fermentum felis feugiat.
              </p>
              <p>
                Maecenas euismod velit in dignissim convallis. Integer sit amet lectus vitae sapien egestas malesuada. In hac habitasse platea dictumst. Nullam
                sit amet massa id felis commodo consectetur non ac sapien.
              </p>
              <p>
                Ut fringilla, tortor vel pharetra feugiat, libero ipsum fermentum odio, in sollicitudin nulla nunc vel risus. Sed mollis erat et turpis pretium
                varius. Nam venenatis nunc id est elementum laoreet.
              </p>
              <p>
                Suspendisse potenti. Aenean ut ligula urna. Donec imperdiet, lacus nec fermentum tincidunt, ligula urna egestas magna, vel tempus leo ligula ac
                nunc. Nulla facilisi.
              </p>
            </div>
          </ScrollArea>
        </div>
      }
      name="ScrollArea"
      detail="The ScrollArea component provides a container with a scrollable area. It maintains the scroll position across page reloads using localStorage. The component applies overflow styling and allows customization with additional class names."
    />
  );
}
