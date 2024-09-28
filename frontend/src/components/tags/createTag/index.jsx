import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTag } from "@/store/tags/actions";
import { useAuth } from "@/context/auth/auth";
export default function CreateTag({ onClose }) {
  const [name, setName] = useState("");
  const { user } = useAuth();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(addTag(name, user._id));
      toast.success("Sucessfully added a new tag");
      onClose();
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    }
  }

  return (
    <form
      className="w-full grow flex flex-col gap-y-4 min-h-full justify-between"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-3xl text-center font-semibold">Create New Tag</h2>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-base-content font-semibold text-xl">
          Name
        </label>
        <input
          type="text"
          className="input input-md input-primary bg-accent text-accent-content rounded-sm"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-accent text-accent-content ">
        DONE
      </button>
    </form>
  );
}
