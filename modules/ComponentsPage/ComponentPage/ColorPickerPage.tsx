import { useState } from 'react';

import { set } from 'date-fns';

import ColorPicker from '@/components/ColorPicker';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const colorPickerCode = `import React, { useState } from 'react';

interface ColorPickerProps {
  initialColor?: string;
  onColorChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = '#ffffff', onColorChange }) => {
  const [color, setColor] = useState<string>(initialColor);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onColorChange) {
      onColorChange(newColor);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-12 h-12 p-0 border-none cursor-pointer"
      />
      <div className="w-24 h-12 border rounded flex items-center justify-center">
        <span className="text-sm font-medium">{color}</span>
      </div>
    </div>
  );
};

export default ColorPicker;
`;

const colorPickerUsage = `export default function ColorPickerPage() {
  const handleColorChange = (color: string) => {
    console.log('Selected Color:', color);
  };
  return (
    <ColorPicker
    initialColor="#ff0000"
    onColorChange={handleColorChange}
  />
   }
  );
}
`;

export default function ColorPickerPage() {
  const [currentColor, setCurrentColor] = useState<string>('bg-blue-400');
  return (
    <ComponentDetail
      usage={colorPickerUsage}
      code={colorPickerCode}
      component={
        <ColorPicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      }
      name="Color Picker"
      detail="The Color Picker component is used to select a color from a color palette."
    />
  );
}
