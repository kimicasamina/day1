import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BiSolidPlusSquare } from "react-icons/bi";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

export default function CreateHabit() {
  const options = ["Health", "Career", "Productivity"];
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });
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
      console.log("FORM:", formData);
      console.log("E:", data);
      console.log("Submit new habit: ");
      const res = axios.post("/api/habits/create", {
        ...data,
      });
      console.log(res);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="leading-tight">
          ADD NEW HABIT
          <BiSolidPlusSquare className="w-[28px] h-full ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-primary-content text-2xl mb-2">
              Create a new Habit
            </h2>
          </DialogTitle>
          <DialogDescription>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            exercitationem provident possimus. */}
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-accent-content">
              Name
            </label>

            <input
              type="text"
              className="input input-md bg-accent text-accent-content"
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
              className="input input-md bg-accent text-accent-content"
              placeholder="E.g, Walking walking"
              name="description"
              {...register("description", {
                required: true,
                maxLength: 35,
              })}
            />
            {errors.description && <span>Hello</span>}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-accent-content">
              Category
            </label>

            <select
              className="select select-bordered w-full bg-accent text-accent-content "
              name="category"
              {...register("category", { required: true })}
            >
              <option disabled selected>
                Select Category
              </option>
              {options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <DialogClose asChild>
            <button
              type="submit"
              className="btn btn-accent text-accent-content"
            >
              DONE
            </button>
          </DialogClose>
        </form>
        ;
      </DialogContent>
    </Dialog>
  );
}
