import mongoose from "mongoose";
import Habit from "../models/habitModel.js";

export async function createHabit(req, res, next) {
  const { name, description, category } = req.body;
  console.log("REQ BODY: ", +`${name} ${description} ${category}`);
  try {
    const habit = new Habit({ name, description, category });
    await habit.save();
    res.status(200).json(habit);
  } catch (error) {
    console.log(error);
  }
}

export const getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find({});
    console.log("List of habits:", habits);
    res.status(200).json({ habits });
  } catch (err) {
    console.log(err);
  }
};

export const deleteHabit = async (req, res, next) => {
  const id = req.params.id;

  try {
    const habit = await Habit.findByIdAndDelete(id);
    res
      .status(201)
      .json({ status: "ok", message: "successfully deleted..", habit });
  } catch (err) {
    console.log(err);
  }
};

export const updateHabit = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, category } = req.body;
  try {
    const habit = await Habit.findByIdAndUpdate(
      { _id: id },
      { name, description, category },
      { new: true }
    );
    res.status(201).json({ habit });
  } catch (err) {
    console.log(err);
  }
};
