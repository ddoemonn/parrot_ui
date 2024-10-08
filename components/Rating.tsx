// Rating.tsx
import React, { useState } from 'react';

import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
  maxStars?: number;
}

const Rating: React.FC<RatingProps> = ({ value, onChange, maxStars = 5 }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    setHovered(index + 1);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = (hovered ?? 0) >= starValue || value >= starValue;
        const Icon = isFilled ? StarFilledIcon : StarIcon;

        return (
          <Icon
            key={index}
            className={`cursor-pointer text-yellow-500 hover:text-yellow-400 ${isFilled ? 'text-yellow-500' : 'text-gray-300'}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            width={24}
            height={24}
          />
        );
      })}
    </div>
  );
};

export default Rating;
