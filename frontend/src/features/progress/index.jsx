import Calendar from "@/components/calendar";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Progress() {
  const habits = useSelector((state) => state.habits);

  let index = 0;
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);
  console.log("habitsx:", habits);
  console.log("CURRENT INDEX: ", index);

  function nextHabit() {
    if (index >= habits.length) {
      index = 0;
    }

    index++;
    console.log(" INDEX: ", index);
    setSelectedHabit((prev) => (prev = habits[index]));
  }

  function prevHabit() {
    if (index === 0) {
      index = habits.length - 1;
    }
    index--;
    console.log("INDEX: ", index);
    setSelectedHabit((prev) => (prev = habits[index]));
  }

  return (
    <div className="h-full w-full p-4">
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-20 justify-center overflow-y-scroll no-scrollbar sm:p-4 ">
        {selectedHabit ? (
          <div
            className="w-full shadow-md bg-neutral p-4 rounded-sm text-neutral-content "
            key={selectedHabit?._id}
          >
            <div className="flex gap-x-4 items-center py-4 text-center">
              <button className="" onClick={prevHabit}>
                PREV
              </button>
              <h3 className="w-full text-md font-semibold  text-nowrap overflow-x-hidden text-base-100">
                {selectedHabit?.name}
              </h3>
              <button className="" onClick={nextHabit}>
                NEXT
              </button>
            </div>
            <Calendar datesWithCheck={selectedHabit?.entries} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
