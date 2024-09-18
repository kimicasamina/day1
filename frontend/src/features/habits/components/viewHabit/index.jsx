import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import EditHabit from "../editHabit";

export default function ViewHabit({ habit, onClose }) {
  const [editMode, setEditMode] = useState(false);

  function handleEdit(e) {
    setEditMode(true);
  }

  return (
    <div className="w-full min-h-full flex flex-col gap-y-4 transition-all duration-300">
      {!editMode ? (
        <>
          <h2 className="text-2xl font-semibold">{habit?.name}</h2>
          <p className="text-sm">{habit?.description}</p>
          {habit?.category ? (
            <span className="px-2 max-w-fit bg-neutral text-neutral-content">
              {habit?.category}
            </span>
          ) : null}
          <div className="w-full grow h-[120px] bg-neutral/50 center">
            Calender
          </div>
          <div className="center-row self-end ">
            <button
              className=""
              onClick={(e) => setEditMode((prev) => (prev = true))}
            >
              <BiPencil className="w-[28px] h-[28px] cursor-pointer" />
            </button>
            <BiSolidTrash className="w-[28px] h-[28px] cursor-pointer" />
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
