import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BiSolidPlusSquare } from "react-icons/bi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addHabit } from "@/store/habits/actions";

export default function CreateHabit({ onClose }) {
  const options = ["Health", "Career", "Productivity"];
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  async function onSubmit(data) {
    try {
      console.log("DATA: ", data);
      const newHabit = {
        name: data.name,
        description: data.description,
        category: data.category,
      };
      dispatch(addHabit(data));
      onClose();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 min-h-full justify-between"
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="" className="text-accent-content">
            Name
          </label>

          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content"
            name="name"
            placeholder="E.g, Walk the dog"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="" className="text-accent-content">
            Description
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content"
            placeholder="E.g, Walking walking"
            name="description"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="" className="text-accent-content">
            Category
          </label>

          <select
            className="select border-1 select-primary w-full bg-accent text-accent-content "
            name="category"
            defaultValue=""
            {...register("category", { required: true })}
          >
            {/* <option disabled selected>
              Select Category
            </option> */}
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
