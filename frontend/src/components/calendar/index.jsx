import { getMonth } from "@/utils/getMonth";
import { getEntries } from "@/hooks/entries/getEntries";
import { formatDate, formatDateShort } from "@/utils/dateHelpers";
import React, { useEffect, useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import { TbCircleFilled } from "react-icons/tb";

export default function Calendar({ datesWithCheck }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysArray, setDaysArray] = useState([]);

  const renderDays = () => {
    const daysArray = new Array(getMonth(currentDate));
    let habitEntries = getEntries(daysArray[0], datesWithCheck);
    habitEntries = habitEntries.sort((a, b) => new Date(a) - new Date(b));

    return (
      <div className="w-full grid grid-cols-7 ">
        {habitEntries.map((item, index) => (
          <div
            className={`text-center p-2 ${item.entries.length !== 0 ? "bg-info" : ""}`}
            key={index}
          >
            {item.date.getDate()}
          </div>
        ))}
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
      <div className="header flex gap-x-2 w-full justify-between items-center border-b border-t py-4">
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
    </div>
  );
}
