import React, { useState } from "react";

// Sample Calendar Component
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the first day of the month
  const getFirstDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  };

  // Function to get the last day of the month
  const getLastDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  };

  // Function to generate an array of dates for the current month
  const generateCalendarDates = () => {
    const firstDay = getFirstDayOfMonth();
    const lastDay = getLastDayOfMonth();

    const dates = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      );
    }

    return dates;
  };

  // Weekday names
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Handle the month change
  const changeMonth = (offset) => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1)
    );
  };

  const calendarDates = generateCalendarDates();

  return (
    <div>
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>
      <button onClick={() => changeMonth(-1)}>Previous</button>
      <button onClick={() => changeMonth(1)}>Next</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
        }}
      >
        {weekdays.map((day) => (
          <div key={day} style={{ padding: "10px", fontWeight: "bold" }}>
            {day}
          </div>
        ))}
        {Array.from({ length: getFirstDayOfMonth().getDay() }).map(
          (_, index) => (
            <div key={index} style={{ padding: "10px" }}></div>
          )
        )}
        {calendarDates.map((date) => (
          <div key={date} style={{ padding: "10px" }}>
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
