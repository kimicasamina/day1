import React, { useState, useEffect } from "react";
import HabitList from "./components/habitList/index.jsx";
import CreateHabit from "./components/createHabit/index.jsx";
import Filter from "@/components/filter/index.jsx";
import Modal from "@/components/modal/index.jsx";
import { BiSolidPlusSquare } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { TbSortAscendingLetters } from "react-icons/tb";

export default function Habits({ habits, tags, searchInput }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="grow flex-1 h-full w-full habits overflow-y-hidden flex flex-col p-4">
      <h1 className="habits__title font-semibold text-4xl">Habits</h1>
      <Filter />
      <div className="overflow-y-hidden h-full flex flex-col gap-y-2 bg-base-200 p-2 rounded-md">
        <button
          className="leading-loose flex justify-center items-center w-full btn btn-md rounded-md btn-accent btn-accent-content"
          onClick={(e) => setShowModal((prev) => (prev = true))}
        >
          ADD NEW HABIT
          <BiSolidPlusSquare className="w-[28px] h-full ml-2" />
        </button>
        <HabitList habits={habits} searchInput={searchInput} tags={tags} />
      </div>
      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateHabit onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
