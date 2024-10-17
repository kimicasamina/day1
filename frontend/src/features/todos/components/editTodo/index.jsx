import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "@/store/todos/actions";
import Select from "react-select";

export default function EditTodo({ todo, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: todo.name,
    description: todo.description,
  });

  const [selectedOption, setSelectedOption] = useState(null);
  console.log("SELECTED: ", selectedOption);
  const tags = useSelector((state) => state.tags);
  const tagOptions = tags.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTodo = {
      ...formData,
      tags: selectedOption ? selectedOption.map((item) => item.value) : null,
    };
    dispatch(editTodo(todo._id, updatedTodo));
    onClose();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grow flex flex-col gap-y-8 min-h-full justify-between"
    >
      <div className="grow flex flex-col gap-y-6">
        <h2 className="text-3xl text-center font-semibold">Edit Daily</h2>
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
      </div>

      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
