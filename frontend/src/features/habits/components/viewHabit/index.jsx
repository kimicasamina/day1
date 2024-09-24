import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import EditHabit from "../editHabit";
import { useDispatch } from "react-redux";
import { deleteHabit } from "@/store/habits/actions";
import Calendar from "@/components/calendar";

export default function ViewHabit({ habit, onClose }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleEdit() {
    setEditMode(true);
  }

  function handleDelete() {
    dispatch(deleteHabit(habit._id));
    onClose();
  }

  console.log("HABIT DETAILS: ", habit);

  return (
    <div className="w-full min-h-full flex flex-col gap-y-4 transition-all duration-300 p-2">
      {!editMode ? (
        <>
          <h2 className="text-2xl font-semibold">{habit?.name}</h2>
          <p className="text-sm">{habit?.description}</p>

          <div className="flex gap-x-2">
            {habit.tags.length > 0
              ? habit.tags.map((tag) => (
                  <span
                    className="px-2 max-w-fit badge-neutral badge-md rounded-badge"
                    key={tag._id}
                  >
                    {tag.name}
                  </span>
                ))
              : null}
          </div>
          <div className="w-full grow mt-4">
            <Calendar datesWithCheck={habit.entries} />
          </div>
          <div className="center-row self-end gap-x-2">
            <button
              className="btn btn-md px-8 btn-accent text-secondary-content flex items-center gap-x-1"
              onClick={handleEdit}
            >
              <BiPencil className="w-[20px] h-[20px] cursor-pointer" />
              <span className="">Edit</span>
            </button>
            <button
              className="btn btn-md px-8 btn-accent text-secondary-content flex items-center gap-x-1"
              onClick={handleDelete}
            >
              <BiSolidTrash className="w-[18px] h-[18px] cursor-pointer" />
              <span className="">Delete</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <EditHabit habit={habit} onClose={onClose} />
        </>
      )}
    </div>
  );
}
