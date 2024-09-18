import React, { useState, useEffect } from "react";
import HabitList from "./components/habitList/index.jsx";
import CreateHabit from "./components/createHabit/index.jsx";
import Modal from "@/components/modal/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getHabits } from "@/store/habits/actions.js";
import { BiSolidPlusSquare } from "react-icons/bi";

export default function Habits() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getHabits());
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="habits overflow-y-hidden flex flex-col p-4">
      <h1 className="habits__title font-semibold text-4xl ">Habits</h1>
      <div className="overflow-y-hidden h-full flex flex-col gap-y-2 bg-base-200 p-2">
        <button
          className="leading-loose flex justify-center items-center w-full btn btn-md rounded-md btn-accent btn-accent-content"
          onClick={(e) => setShowModal((prev) => (prev = true))}
        >
          ADD NEW HABIT
          <BiSolidPlusSquare className="w-[28px] h-full ml-2" />
        </button>
        <HabitList habits={habits} />
      </div>
      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <CreateHabit onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
