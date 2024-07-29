// DatePickerPage.tsx
import React, { useState } from 'react';

import dayjs from 'dayjs';

import DatePicker from '@/components/DatePicker';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const datePickerCode = `import React, { useState } from 'react';

import dayjs from 'dayjs';

interface DatePickerProps {
  selectedDate?: dayjs.Dayjs | null;
  onDateChange?: (date: dayjs.Dayjs | null) => void;
}

const generateDays = (year: number, month: number) => {
  const startOfMonth = dayjs(\`\${year}-\${month}-01\`);
  const endOfMonth = startOfMonth.endOf('month');
  const days = [];

  for (let i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
    days.push(dayjs(\`\${year}-\${month}-\${i}\`));
  }

  return days;
};

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [isOpen, setIsOpen] = useState(false);

  const days = generateDays(currentDate.year(), currentDate.month() + 1);

  const handleDateClick = (date: dayjs.Dayjs) => {
    if (onDateChange) {
      onDateChange(date);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border rounded-lg focus:outline-none"
      >
        {selectedDate ? selectedDate.format('MMM DD, YYYY') : 'Select a date'}
      </button>

      {isOpen && (
        <div className="absolute mt-2 p-4 border rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}
              className="p-2 text-blue-500"
            >
              &lt;
            </button>
            <span className="font-bold">{currentDate.format('MMMM YYYY')}</span>
            <button
              onClick={() => setCurrentDate(currentDate.add(1, 'month'))}
              className="p-2 text-blue-500"
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div
                key={day}
                className="font-semibold"
              >
                {day}
              </div>
            ))}
            {days.map(day => {
              const isSelected = day.isSame(selectedDate, 'day');
              return (
                <button
                  key={day.format('DD')}
                  onClick={() => handleDateClick(day)}
                  className={\`py-2 px-4 rounded-lg \${isSelected ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-200'}\`}
                >
                  {day.format('D')}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
`;

const datePickerUsage = `export default function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);  
  return(
  <div className="p-4 w-full">
      <h1 className="text-xl font-bold mb-4">Date Picker Example</h1>
      <DatePicker
        selectedDate={selectedDate}
        onDateChange={date => setSelectedDate(date)}
      />
      <div className="mt-4">
        <p className="text-lg font-medium">Selected Date: {selectedDate ? selectedDate.format('MMM DD, YYYY') : 'None'}</p>
      </div>
    </div>
);
}
`;

export default function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  return (
    <ComponentDetail
      usage={datePickerUsage}
      code={datePickerCode}
      component={
        <div className="p-4 flex flex-col  w-full">
          <h1 className="text-xl text-blue-500 font-bold mb-4">Date Picker Example</h1>
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={date => setSelectedDate(date)}
          />
          <div className="mt-4">
            <p className="text-lg font-medium text-green-700">Selected Date: {selectedDate ? selectedDate.format('MMM DD, YYYY') : 'None'}</p>
          </div>
        </div>
      }
      name="DatePicker"
      detail="The DatePicker component allows users to select a date from a calendar view. It displays the selected date and supports month navigation."
    />
  );
}
