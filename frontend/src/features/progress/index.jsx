import Calendar from "@/components/calendar";
import React from "react";
import { useSelector } from "react-redux";

export default function Progress() {
  const habits = useSelector((state) => state.habits);
  return (
    <div className="h-full w-full p-4">
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-20 justify-center overflow-y-scroll no-scrollbar sm:p-4 ">
        {habits.map((habit, index) => (
          <div
            className="w-full shadow-md bg-neutral p-4 rounded-sm text-neutral-content "
            key={habit._id}
          >
            <h3 className="w-full text-md font-semibold mb-4 text-nowrap overflow-x-hidden text-base-100">
              {habit.name}
            </h3>
            <Calendar datesWithCheck={habit.entries} />
          </div>
        ))}
      </div>
    </div>
  );
}
