import React, { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";
import Modal from "@/components/modal";
import { editTodo } from "@/store/todos/actions";
import ViewTodo from "../viewTodo";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function Todo({ todo, onClose }) {
  const [showModal, setShowModal] = useState(false);
  console.log("TODO:", todo);
  const dispatch = useDispatch();

  function closeModal() {
    setShowModal(false);
  }

  function handleCompleteTodo(e) {
    e.preventDefault();
    const updatedTodo = {
      ...todo,
      isChecked: !todo.isChecked,
    };
    try {
      dispatch(editTodo(todo._id, updatedTodo));
      return toast.success("Todo completed!");
    } catch (error) {
      console.log("ERROR:", error);
      return toast.error("Something went wrong");
    }
  }

  return (
    <div
      className="shadow-sm relative w-full flex items-center rounded-md bg-primary-foreground cursor-pointer hover:bg-accent"
      key={todo?._id}
    >
      <span
        className={`px-2 flex justify-center items-center cursor-pointer h-full   rounded-tl-md rounded-bl-md transition-all duration-150 hover:bg-accent-foreground hover:text-accent ${todo.isChecked ? "bg-success text-success-content " : "bg-neutral-content text-neutral "}`}
        onClick={handleCompleteTodo}
      >
        <TbCheck className="w-[32px] h-[32px] " />
      </span>

      <div
        className="flex-1 flex flex-col leading-tight p-2"
        onClick={(e) => setShowModal((prev) => (prev = true))}
      >
        <p className="font-semibold text-secondary-content text-sm ">
          {todo?.name}
        </p>
        <p className="font-normal text-secondary-content text-xs ">
          {todo?.description}
        </p>
      </div>

      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <ViewTodo todo={todo} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
