import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import Modal from "@/components/modal/modal";
import HabitDetails from "../habitDetails";

export default function Habit({ habit }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="relative w-full flex items-center rounded-sm bg-base-100 cursor-pointer"
      key={habit._id}
    >
      <span className="px-2 flex justify-center items-center cursor-pointer h-full bg-neutral-content text-neutral">
        <BiCheck className="w-[32px] h-[32px] " />
      </span>

      <div
        className="flex-1 flex flex-col leading-tight p-2"
        onClick={(e) => setShowModal(true)}
      >
        <p className="font-semibold text-secondary-content text-sm ">
          {habit.name}
        </p>
        <p className="font-normal text-secondary-content text-xs ">
          {habit.description}
        </p>
      </div>

      <Modal isVisible={showModal} onClose={(e) => setShowModal(false)}>
        <HabitDetails habit={habit} />
      </Modal>
    </div>
  );
}
