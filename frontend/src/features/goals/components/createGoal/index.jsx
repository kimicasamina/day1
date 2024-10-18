import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addGoal } from "@/store/goals/action";
import toast from "react-hot-toast";
import { useAuth } from "@/context/auth/auth";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateGoal({ onClose }) {
  const { user } = useAuth();
  const tags = useSelector((state) => state.tags);
  const tagOptions = tags.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));
  console.log("TAG OPTIONS: ", tagOptions);
  const [startDate, setStartDate] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user: user._id,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  console.log("START DATE:", startDate);

  console.log("END DATE:", targetDate);

  function closeModal() {
    setShowModal(false);
  }

  async function handleCompleteGoal() {
    try {
      dispatch(checkGoal(goal._id));
      return toast.success("Goal completed!");
    } catch (error) {
      console.log("ERROR:", error);
      return toast.error("Something went wrong");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      ...formData,
      tags: selectedOption ? selectedOption.map((item) => item.value) : null,
      startDate: startDate,
      targetDate: targetDate,
    };
    console.log("NEW GOAL:", newGoal);
    try {
      dispatch(addGoal(newGoal));
      toast.success("Successfully created a new goal");
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grow flex flex-col gap-y-8 min-h-full justify-between"
    >
      <div className="grow flex flex-col gap-y-6">
        <h2 className="text-3xl text-center font-semibold">Create New Goal</h2>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Name
          </label>

          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="E.g, Walk the dog"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Description
          </label>
          <textarea
            name="description"
            type="text"
            className="textarea textarea-md textarea-primary bg-accent text-accent-content rounded-sm"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="E.g, Walking walking"
          ></textarea>
        </div>

        <div className="w-full flex gap-x-4 justify-between items-center">
          <div className="flex-1 flex flex-col gap-y-2">
            <label
              htmlFor=""
              className="text-base-content font-semibold text-xl"
            >
              Start Date
            </label>
            <DatePicker
              className="input input-md input-primary bg-accent text-accent-content rounded-sm w-full px-2"
              showTimeSelect
              dateFormat="Pp"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-2">
            <label
              htmlFor=""
              className="w-full text-base-content font-semibold text-xl"
            >
              Target Date
            </label>
            <DatePicker
              className="input input-md input-primary bg-accent text-accent-content rounded-sm w-full px-2"
              showTimeSelect
              dateFormat="Pp"
              selected={targetDate}
              onChange={(date) => setTargetDate(date)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <label
            htmlFor=""
            className="w-full text-base-content font-semibold text-xl"
          >
            Tags
          </label>
          <Select
            className="w-full"
            onChange={(option) => setSelectedOption(option)}
            options={tagOptions}
            isMulti
          />
        </div>
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
