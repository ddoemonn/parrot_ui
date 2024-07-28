import React from 'react';

import ColorPicker from '@/components/ColorPicker';

export default function ColorPickerPage() {
  const handleColorChange = (color: string) => {
    console.log('Selected Color:', color);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Color Picker Component</h1>
      <ColorPicker
        initialColor="#ff0000"
        onColorChange={handleColorChange}
      />
    </div>
  );
}
