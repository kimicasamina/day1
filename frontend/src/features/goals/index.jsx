import React, { useState } from "react";
import Filter from "@/components/filter";
import GoalList from "./components/goalList";
import CreateGoal from "./components/createGoal";
import Modal from "@/components/modal";
import { BiSolidPlusSquare } from "react-icons/bi";

export default function Goals({ goals, tags, searchInput }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="grow flex-1 h-full w-full todos overflow-y-hidden flex flex-col p-4">
      <h1 className="todos__title font-semibold text-4xl">Goals</h1>
      <Filter />
      <div className="overflow-y-hidden h-full flex flex-col gap-y-2 bg-base-200 p-2 rounded-md">
        <button
          className="leading-loose flex justify-center items-center w-full btn btn-md rounded-md btn-accent btn-accent-content"
          onClick={(e) => setShowModal((prev) => (prev = true))}
        >
          ADD NEW GOAL
          <BiSolidPlusSquare className="w-[28px] h-full ml-2" />
        </button>
        <GoalList goals={goals} tags={tags} searchInput={searchInput} />
      </div>
      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateGoal onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
