import React, { useState } from 'react';

import dayjs from 'dayjs';

import DatePicker from '@/components/DatePicker';

export default function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  return (
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
