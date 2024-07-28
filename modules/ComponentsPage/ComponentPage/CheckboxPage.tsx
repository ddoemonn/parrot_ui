import React from 'react';

import Checkbox from '@/components/Checkbox';

export default function CheckboxPage() {
  const handleCheckboxChange = (checked: boolean) => {
    console.log(`Checkbox is ${checked ? 'checked' : 'unchecked'}`);
  };
  return (
    <div className="p-4">
      <Checkbox
        label="Accept Terms and Conditions"
        onChange={handleCheckboxChange}
        className="mb-4"
      />
    </div>
  );
}
