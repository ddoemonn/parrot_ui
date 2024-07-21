// App.tsx
import React, { useState } from 'react';

import Rating from '@/components/Rating'; // Adjust the path as needed

const RatingExample: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Rate this item:</h1>
      <Rating
        value={rating}
        onChange={setRating}
      />
      <p className="mt-2">Your rating: {rating}</p>
    </div>
  );
};

export default RatingExample;
