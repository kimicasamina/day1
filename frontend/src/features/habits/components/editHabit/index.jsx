import { useUi } from "@/context/ui/ui";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editHabit } from "@/store/habits/actions";

export default function EditHabit({ habit, onClose }) {
  const { closeModal } = useUi();
  const dispatch = useDispatch();
  const [newHabit, setNewHabit] = useState({
    name: habit.name,
    description: habit.description,
    tags: habit.tags,
  });

  const options = ["Health", "Career", "Productivity"];

  function handleSubmit(e) {
    e.preventDefault();
    console.log("NEW HABIT: ", newHabit);
    dispatch(editHabit(habit._id, newHabit));
    onClose();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grow flex flex-col gap-y-8 min-h-full justify-between"
    >
      <div className="grow flex flex-col gap-y-6">
        <h2 className="text-3xl text-center font-semibold">Edit Habit</h2>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Name
          </label>
          <input
            type="text"
            className="input input-md input-primary bg-accent text-accent-content rounded-sm"
            name="name"
            value={newHabit.name}
            onChange={(e) =>
              setNewHabit({ ...newHabit, [e.target.name]: e.target.value })
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
            value={newHabit.description}
            className="textarea textarea-md textarea-primary bg-accent text-accent-content rounded-sm"
            placeholder="E.g, Walking walking"
            onChange={(e) =>
              setNewHabit({ ...newHabit, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="text-base-content font-semibold text-xl">
            Tags
          </label>

          <select
            className="select border-1 select-primary w-full bg-accent text-accent-content rounded-sm"
            name="tags"
            defaultValue={newHabit.tags}
            onChange={(e) =>
              setNewHabit({ ...newHabit, [e.target.name]: e.target.value })
            }
          >
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
