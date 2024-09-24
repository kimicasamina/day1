import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "@/store/habits/actions";
import toast from "react-hot-toast";
import { useAuth } from "@/context/auth/auth";
import Select from "react-select";
import axios from "axios";

export default function CreateHabit({ onClose }) {
  const { user } = useAuth();
  const tags = useSelector((state) => state.tags);
  const tagOptions = tags.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));
  console.log("TAG OPTIONS: ", tagOptions);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user: user._id,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const newHabit = {
      ...formData,
      tags: selectedOption ? selectedOption.map((item) => item.value) : null,
    };
    console.log("FORMDATA: ", formData);
    console.log("newHabit", newHabit);
    try {
      dispatch(addHabit(newHabit));
      toast.success("Successfully created a new  habit");
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  if (!tags) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grow flex flex-col gap-y-8 min-h-full justify-between"
    >
      <div className="grow flex flex-col gap-y-6">
        <h2 className="text-3xl text-center font-semibold">Create New Habit</h2>
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
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
