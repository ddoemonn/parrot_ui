import React, { useState } from 'react';

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
