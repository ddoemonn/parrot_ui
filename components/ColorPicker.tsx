import React, { useState } from 'react';

import { Pencil1Icon } from '@radix-ui/react-icons';

interface ColorPickerProps {
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ currentColor, setCurrentColor }) => {
  const [colors] = useState<string[]>(['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']);
  const [variants] = useState<number[]>([100, 200, 300, 400, 500, 600, 700, 800, 900]);
  const [iconColor, setIconColor] = useState<string>('text-white');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const selectColor = (color: string, variant: number) => {
    const newColor = `${color}-${variant}`;
    setCurrentColor(`bg-${newColor}`);
    setIconColor(variant < 500 ? 'text-black' : 'text-white');
    setIsOpen(false);
  };

  return (
    <div className="bg-white mx-auto my-auto p-6">
      <div>
        <label
          htmlFor="color-picker"
          className="block mb-1 font-semibold"
        >
          Select a color
        </label>
        <div className="flex flex-row relative">
          <input
            id="color-picker"
            className="border border-gray-400 p-2 rounded-lg"
            value={currentColor}
            readOnly
          />
          <div
            onClick={handleToggle}
            className={`cursor-pointer rounded-full ml-3 my-auto h-9 w-9 flex items-center justify-center ${currentColor}`}
          >
            <Pencil1Icon className={`h-4 w-4  mx-auto my-auto ${iconColor}`} />
          </div>
          {isOpen && (
            <div
              onClick={handleClose}
              className="absolute top-14 left-0 grid grid-cols-8 w-96 gap-2 border border-gray-300 bg-white shadow-lg rounded-md p-2"
            >
              {colors.map(color => (
                <div
                  key={color}
                  className="flex flex-wrap"
                >
                  {variants.map(variant => (
                    <div
                      key={variant}
                      onClick={() => selectColor(color, variant)}
                      className={`cursor-pointer w-6 h-6 rounded-full mx-1 my-1 ${`bg-${color}-${variant}`}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

const gray100 = 'bg-gray-100';
const gray200 = 'bg-gray-200';
const gray300 = 'bg-gray-300';
const gray400 = 'bg-gray-400';
const gray500 = 'bg-gray-500';
const gray600 = 'bg-gray-600';
const gray700 = 'bg-gray-700';
const gray800 = 'bg-gray-800';
const gray900 = 'bg-gray-900';

const red100 = 'bg-red-100';
const red200 = 'bg-red-200';
const red300 = 'bg-red-300';
const red400 = 'bg-red-400';
const red500 = 'bg-red-500';
const red600 = 'bg-red-600';
const red700 = 'bg-red-700';
const red800 = 'bg-red-800';
const red900 = 'bg-red-900';

const yellow100 = 'bg-yellow-100';
const yellow200 = 'bg-yellow-200';
const yellow300 = 'bg-yellow-300';
const yellow400 = 'bg-yellow-400';
const yellow500 = 'bg-yellow-500';
const yellow600 = 'bg-yellow-600';
const yellow700 = 'bg-yellow-700';
const yellow800 = 'bg-yellow-800';
const yellow900 = 'bg-yellow-900';

const green100 = 'bg-green-100';
const green200 = 'bg-green-200';
const green300 = 'bg-green-300';
const green400 = 'bg-green-400';
const green500 = 'bg-green-500';
const green600 = 'bg-green-600';
const green700 = 'bg-green-700';
const green800 = 'bg-green-800';
const green900 = 'bg-green-900';

const blue100 = 'bg-blue-100';
const blue200 = 'bg-blue-200';
const blue300 = 'bg-blue-300';
const blue400 = 'bg-blue-400';
const blue500 = 'bg-blue-500';
const blue600 = 'bg-blue-600';
const blue700 = 'bg-blue-700';
const blue800 = 'bg-blue-800';
const blue900 = 'bg-blue-900';

const indigo100 = 'bg-indigo-100';
const indigo200 = 'bg-indigo-200';
const indigo300 = 'bg-indigo-300';
const indigo400 = 'bg-indigo-400';
const indigo500 = 'bg-indigo-500';
const indigo600 = 'bg-indigo-600';
const indigo700 = 'bg-indigo-700';
const indigo800 = 'bg-indigo-800';
const indigo900 = 'bg-indigo-900';

const purple100 = 'bg-purple-100';
const purple200 = 'bg-purple-200';
const purple300 = 'bg-purple-300';
const purple400 = 'bg-purple-400';
const purple500 = 'bg-purple-500';
const purple600 = 'bg-purple-600';
const purple700 = 'bg-purple-700';
const purple800 = 'bg-purple-800';
const purple900 = 'bg-purple-900';

const pink100 = 'bg-pink-100';
const pink200 = 'bg-pink-200';
const pink300 = 'bg-pink-300';
const pink400 = 'bg-pink-400';
const pink500 = 'bg-pink-500';
const pink600 = 'bg-pink-600';
const pink700 = 'bg-pink-700';
const pink800 = 'bg-pink-800';
const pink900 = 'bg-pink-900';
