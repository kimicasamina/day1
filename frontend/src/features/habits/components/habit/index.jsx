import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { TbPlus } from "react-icons/tb";
import Modal from "@/components/modal";
import ViewHabit from "../viewHabit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkHabit } from "@/store/habits/actions";

export default function Habit({ habit }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  function closeModal() {
    setShowModal(false);
  }

  async function handleCompleteHabit() {
    dispatch(checkHabit(habit._id));
  }

  return (
    <div
      className="relative w-full flex items-center rounded-md bg-base-100 cursor-pointer hover:bg-accent"
      key={habit?._id}
    >
      <span
        className={`px-2 flex justify-center items-center cursor-pointer h-full   rounded-tl-md rounded-bl-md transition-all duration-150 hover:bg-accent-foreground hover:text-accent ${habit.completed ? "bg-success text-success-content " : "bg-neutral-content text-neutral "}`}
        onClick={handleCompleteHabit}
      >
        <TbPlus className="w-[32px] h-[32px] " />
      </span>

      <div
        className="flex-1 flex flex-col leading-tight p-2"
        onClick={(e) => setShowModal((prev) => (prev = true))}
      >
        <p className="font-semibold text-secondary-content text-sm ">
          {habit?.name}
        </p>
        <p className="font-normal text-secondary-content text-xs ">
          {habit?.description}
        </p>
      </div>

      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <ViewHabit habit={habit} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
