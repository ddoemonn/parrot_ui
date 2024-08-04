import React, { useState } from 'react';

import { cn } from '@/lib/utils';

const generateDays = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const isSameDate = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = generateDays(year, month);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div className="p-4 max-w-xs mx-auto text-sm bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className=" hover:text-blue-700 hover:bg-gray-100 p-2 rounded-xl"
        >
          &lt;
        </button>
        <h2 className="text-md font-semibold">{`${currentDate.toLocaleString('default', { month: 'long' })} ${year}`}</h2>
        <button
          onClick={handleNextMonth}
          className=" hover:text-blue-700 hover:bg-gray-100 p-2 rounded-xl"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        <div className="font-semibold">Su</div>
        <div className="font-semibold">Mo</div>
        <div className="font-semibold">Tu</div>
        <div className="font-semibold">We</div>
        <div className="font-semibold">Th</div>
        <div className="font-semibold">Fr</div>
        <div className="font-semibold">Sa</div>
        {Array.from({ length: new Date(year, month, 1).getDay() }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="p-2"
          />
        ))}
        {days.map(day => (
          <div
            key={day.toString()}
            className={cn('p-2 hover:bg-gray-100 rounded-xl cursor-pointer', {
              'bg-black text-white hover:bg-black': selectedDate && isSameDate(day, selectedDate),
            })}
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
