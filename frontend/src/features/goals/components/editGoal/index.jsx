import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGoal } from "@/store/goals/action";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditGoal({ goal, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: goal.name,
    description: goal.description,
  });
  const [startDate, setStartDate] = useState(goal?.startDate);
  const [targetDate, setTargetDate] = useState(goal?.targetDate);

  const [selectedOption, setSelectedOption] = useState(null);
  console.log("SELECTED: ", selectedOption);
  const tags = useSelector((state) => state.tags);
  const tagOptions = tags.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));

  function handleSubmit(e) {
    e.preventDefault();
    const updatedGoal = {
      ...formData,
      tags: selectedOption ? selectedOption.map((item) => item.value) : null,
      startDate: new Date(startDate),
      targetDate: new Date(targetDate),
    };
    dispatch(editGoal(goal._id, updatedGoal));
    onClose();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grow flex flex-col gap-y-8 min-h-full justify-between"
    >
      <div className="grow flex flex-col gap-y-6">
        <h2 className="text-3xl text-center font-semibold">Edit Goal</h2>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Name
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Description
          </label>
          <textarea
            name="description"
            type="text"
            value={formData.description}
            className="textarea textarea-md textarea-primary bg-accent text-accent-content rounded-sm"
            placeholder="E.g, Walking walking"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Tags
          </label>

          <Select
            onChange={(option) => setSelectedOption(option)}
            options={tagOptions}
            isMulti
          />
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
              selected={new Date(startDate)}
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
              selected={new Date(targetDate)}
              onChange={(date) => setTargetDate(date)}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
