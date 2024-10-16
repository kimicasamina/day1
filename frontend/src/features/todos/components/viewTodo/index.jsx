import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/store/todos/actions";
import EditTodo from "../editTodo";
import Calendar from "@/components/calendar";

export default function ViewTodo({ todo, onClose }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleEdit() {
    setEditMode(true);
  }

  function handleDelete() {
    dispatch(deleteTodo(todo._id));
    onClose();
  }

  console.log("HABIT DETAILS: ", todo);

  return (
    <div className="w-full min-h-full flex flex-col gap-y-4 transition-all duration-300 p-2">
      {!editMode ? (
        <>
          <h2 className="text-2xl font-semibold">{todo?.name}</h2>
          <p className="text-sm">{todo?.description}</p>
          <div className="flex gap-x-2 mb-20">
            {todo.tags?.length > 0
              ? todo.tags.map((tag) => (
                  <span
                    className="px-2 max-w-fit badge-neutral badge-md rounded-badge"
                    key={tag._id}
                  >
                    {tag.name}
                  </span>
                ))
              : null}
          </div>
          <div className="flex w-full justify-end items-center  gap-x-2">
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
          <EditTodo todo={todo} onClose={onClose} />
        </>
      )}
    </div>
  );
}
