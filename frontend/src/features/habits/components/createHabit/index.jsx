import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addHabit } from "@/store/habits/actions";
import { useAuth } from "@/context/auth/auth";
import Select from "react-select";
import axios from "axios";

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

export default function CreateHabit({ onClose }) {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const tagOptions = tags.map((tag) => ({
    value: tag.name,
    label: tag.name,
  }));
  console.log("TAG OPTIONS: ", tagOptions);
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
      tags: "",
      user: user._id,
    },
  });

  async function onSubmit(data) {
    try {
      console.log("DATA: ", data);
      const newHabit = {
        name: data.name,
        description: data.description,
        tags: data.tags,
      };
      dispatch(addHabit(data));
      onClose();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/tags");
      console.log("ENTRIES: ", data);
      setTags([...data]);
    }

    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
            placeholder="E.g, Walk the dog"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Description
          </label>
          <textarea
            name="description"
            type="text"
            className="textarea textarea-md textarea-primary bg-accent text-accent-content rounded-sm"
            // cols="30"
            // rows="10"
            placeholder="E.g, Walking walking"
            {...register("description")}
          ></textarea>
          {/* {errors.description && <span>This field is required</span>} */}
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Tags
          </label>
          <Select options={tagOptions} isMulti />
        </div>
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
