import React from 'react';

import Checkbox from '@/components/Checkbox';

const CheckboxExample: React.FC = () => {
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
};

export default CheckboxExample;
