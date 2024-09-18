import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import Modal from "@/components/modal";
import ViewHabit from "../viewHabit";

export default function Habit({ habit }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div
      className="relative w-full flex items-center rounded-sm bg-base-100 cursor-pointer"
      key={habit?._id}
    >
      <span className="px-2 flex justify-center items-center cursor-pointer h-full bg-neutral-content text-neutral">
        <BiCheck className="w-[32px] h-[32px] " />
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
