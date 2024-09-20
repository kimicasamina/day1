import { getDate } from "@/utils/getDate";
import React, { useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import { TbCircleFilled } from "react-icons/tb";

export default function Calendar({ markedDates }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const datesWithCheck = getDate(markedDates);
  console.log("DATES: ", datesWithCheck);
  const renderDays = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="w-full grid-grid-cols-7 ">
        <div className="w-full grid grid-cols-7 py-2">
          {daysArray.map((day) => (
            <div
              className={`text-center p-2  ${datesWithCheck.includes(day) ? "bg-success/80" : ""}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar w-full ">
      <div className="header flex gap-x-2 w-full justify-between items-center py-2 border-b border-t">
        <button className="btn-xs rounded-md" onClick={handlePrevMonth}>
          <TbChevronLeft className="w-6 h-6 hover:text-primary-content" />
        </button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button className="btn-xs rounded-md" onClick={handleNextMonth}>
          <TbChevronRight className="w-6 h-6 hover:text-primary-content" />
        </button>
      </div>
      <>{renderDays()}</>
      {/* <div className="days w-full grid grid-cols-7 ">{renderDays()}</div> */}
    </div>
  );
}
