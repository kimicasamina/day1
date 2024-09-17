import React, { useState, useEffect } from "react";
import HabitList from "./components/habitList/index.jsx";
import axios from "axios";
import useFetch from "../../hooks/useFetchData.jsx";
import { DialogTrigger, Dialog } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button";
import CreateHabit from "./components/createHabit/index.jsx";
import Modal from "@/components/modal/modal/index.jsx";
import useFetchData from "../../hooks/useFetchData.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getHabits } from "@/store/habits/actions.js";
import { BiSolidPlusSquare } from "react-icons/bi";
import { useUi } from "@/context/ui/ui.jsx";

export default function Habits() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);
  const { showModal, setShowModal, openModal, closeModal } = useUi();

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

  console.log("SHOW HABITS: ", habits);

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
