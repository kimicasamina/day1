import React from "react";
import { BiX } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

export default function HabitDetails({ habit }) {
  console.log("HABIT: ", habit);

  return (
    <div className="w-full min-h-full flex flex-col gap-y-4 transition-all duration-300">
      <h2 className="text-2xl font-semibold">{habit.name}</h2>
      <p className="text-sm">{habit.description}</p>
      {habit.category ? (
        <span className="px-2 max-w-fit bg-neutral text-neutral-content">
          {habit.category}
        </span>
      ) : null}
      <div className="w-full grow h-[120px] bg-neutral/50 center">Calender</div>
      <div className="center-row self-end ">
        <BiPencil className="w-[28px] h-[28px] cursor-pointer" />
        <BiSolidTrash className="w-[28px] h-[28px] cursor-pointer" />
      </div>
    </div>
  );
}
