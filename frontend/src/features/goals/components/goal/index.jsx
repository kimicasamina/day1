import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { BiCheck } from "react-icons/bi";
import { TbPlus } from "react-icons/tb";
import Modal from "@/components/modal";
import ViewGoal from "../viewGoal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "@/utils/dateHelpers";
import { editGoal } from "@/store/goals/action";

export default function Goal({ goal, onClose }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  console.log("GOAL:", goal);

  function closeModal() {
    setShowModal(false);
  }

  async function handleCompleteGoal() {
    const newGoal = {
      ...goal,
      isCompleted: !goal.isCompleted,
    };

    try {
      dispatch(editGoal(goal._id, newGoal));
      return toast.success("Goal completed!");
    } catch (error) {
      console.log("ERROR:", error);
      return toast.error("Something went wrong");
    }
  }

  return (
    <div
      className="shadow-sm relative w-full flex items-center rounded-md bg-primary-foreground cursor-pointer hover:bg-accent"
      key={goal?._id}
    >
      <span
        className={`px-2 flex justify-center items-center cursor-pointer h-full   rounded-tl-md rounded-bl-md transition-all duration-150 hover:bg-accent-foreground hover:text-accent ${goal.isCompleted ? "bg-success text-success-content " : "bg-neutral-content text-neutral "}`}
        onClick={handleCompleteGoal}
      >
        <BiCheck className="w-[32px] h-[32px] " />
      </span>

      <div
        className="flex-1 flex flex-col leading-tight p-2"
        onClick={(e) => setShowModal((prev) => (prev = true))}
      >
        <p className="font-semibold text-secondary-content text-sm ">
          {goal?.name}
        </p>
        <p className="font-normal text-secondary-content text-xs ">
          {goal?.description}
        </p>
      </div>

      {showModal && (
        <Modal isVisible={showModal} onClose={closeModal}>
          <ViewGoal goal={goal} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
