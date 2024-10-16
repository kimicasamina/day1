import React, { useState } from "react";
import Modal from "@/components/modal";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todos/actions";
import { useAuth } from "@/context/auth/auth";
import { useSelector } from "react-redux";

export default function CreateTodo({ onClose }) {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user: user._id,
  });

  const tags = useSelector((state) => state.tags);
  const tagOptions = tags.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      ...formData,
      tags: selectedOption ? selectedOption.map((item) => item.value) : null,
    };
    try {
      dispatch(addTodo(newTodo));
      toast.success("Successfully created a new  habit");
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
        <h2 className="text-3xl text-center font-semibold">Create New Todo</h2>
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
            placeholder="E.g, Grocery shopping"
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
            placeholder="E.g, Buy groceries for the week"
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
