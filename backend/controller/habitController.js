import mongoose from "mongoose";
import Habit from "../models/habitModel.js";

export async function createHabit(req, res, next) {
  const { name, description, category } = req.body;

  try {
    const habit = new Habit({ name, description, category });
    await habit.save();
    res.status(200).json(habit);
  } catch (error) {
    console.log(error);
  }
}

export const getHabits = async (req, res, next) => {
  const habits = await Habit.find({});
  //   const habits = ["jogging", "shower", "exercise"];

  console.log("List of habits:", habits);
  res.status(200).json({ habits });
};
