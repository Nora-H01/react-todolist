import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "./css/calendar.css";

const CalendarComponent = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false); 

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onDateSelect(selectedDate); 
    setShowCalendar(false); 
  };

  return (
    <div className="calendar-container">
      <button
        className="toggle-calendar-btn"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {showCalendar ? "Close calendar" : "Select a date"}
      </button>

      {showCalendar && (
        <Calendar value={date} onChange={handleDateChange} />
      )}
    </div>
  );
};

export default CalendarComponent;
