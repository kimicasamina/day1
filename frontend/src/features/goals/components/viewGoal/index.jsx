import React, { useState } from "react";
import EditGoal from "../editGoal";
import { formatDate } from "@/utils/dateHelpers";
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteGoal } from "@/store/goals/action";
export default function ViewGoal({ goal, onClose }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleEdit() {
    setEditMode(true);
  }

  function handleDelete() {
    dispatch(deleteGoal(goal._id));
    onClose();
  }
  console.log("GOAL:", goal);

  return (
    <div className="w-full min-h-full flex flex-col gap-y-4 transition-all duration-300 p-2">
      {!editMode ? (
        <>
          <h2 className="text-2xl font-semibold">{goal?.name}</h2>
          <p className="text-sm">{goal?.description}</p>

          <div className="flex gap-x-2">
            {goal.tags?.length > 0
              ? goal.tags.map((tag) => (
                  <span
                    className="px-2 max-w-fit badge-neutral badge-md rounded-badge"
                    key={tag._id}
                  >
                    {tag.name}
                  </span>
                ))
              : null}
          </div>
          <div className="w-full flex gap-x-4 rounded-sm">
            <div className="flex-1 flex flex-col gap-x-4">
              <span className="flex-1 font-normal text-secondary-content text-xs mb-2">
                Start Date
              </span>
              <span className="flex-1 font-normal text-secondary-content text-xs bg-neutral-content py-2 rounded-sm px-2">
                {formatDate(goal.startDate)}
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-x-4 ">
              <span className="flex-1 font-normal text-secondary-content text-xs mb-2">
                Target Date
              </span>
              <span className="flex-1 font-normal text-secondary-content text-xs bg-neutral-content py-2 rounded-sm px-2">
                {formatDate(goal.targetDate)}
              </span>
            </div>
          </div>

          <div className="flex w-full justify-end items-center gap-x-2">
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
          <EditGoal goal={goal} onClose={onClose} />
        </>
      )}
    </div>
  );
}
