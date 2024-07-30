import Checkbox from '@/components/Checkbox';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const checkboxCode = `import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange, className = '' }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className={\`flex items-center space-x-2 cursor-pointer \${className}\`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
      />
      <span className={\`text-sm \${isChecked ? 'text-blue-600' : 'text-gray-900'}\`}>{label}</span>
    </label>
  );
};

export default Checkbox;
`;

const checkboxUsage = `<div className="p-4">
  <Checkbox
    label="Accept Terms and Conditions"
    onChange={handleCheckboxChange}
    className="mb-4"
  />
</div>`;

export default function CheckboxPage() {
  const handleCheckboxChange = (checked: boolean) => {
    console.log(`Checkbox is ${checked ? 'checked' : 'unchecked'}`);
  };
  return (
    <ComponentDetail
      usage={checkboxUsage}
      code={checkboxCode}
      component={
        <div className="p-4">
          <Checkbox
            onChange={handleCheckboxChange}
            className="mb-4"
          >
            Accept Terms and Conditions
          </Checkbox>
        </div>
      }
      name="Checkbox"
      detail="A Checkbox component with a label and an optional onChange event."
    />
  );
}
