import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h2>Select a date for cleaning service</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}

export default BookingCalendar;
