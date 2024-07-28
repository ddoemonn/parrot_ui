import React, { useState } from 'react';

import Input from '@/components/Input';

export default function InputPage() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue.length < 3) {
      setError('Input must be at least 3 characters long.');
    } else {
      setError('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Input
        label="Your Name"
        value={value}
        onChange={handleChange}
        errorMessage={error}
        placeholder="Enter your name"
      />
    </div>
  );
}
