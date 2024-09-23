import mongoose from "mongoose";
import Habit from "../models/habitModel.js";
import User from "../models/userModel.js";
import Entry from "../models/entryModel.js";

export async function getEntries(req, res, next) {
  try {
    const entries = await Entry.find({});
    res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

export async function getHabitEntries(req, res, next) {
  const habitId = req.params.habitId;

  try {
    const entries = await Entry.findById({ habitId: habitId });
    res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

export async function addEntry(req, res, next) {
  const habitId = req.params.habitId;
  // const { date } = req.body;

  try {
    const entry = await Entry.create({
      habitId,
    });

    const habit = await Habit.findByIdAndUpdate(
      { _id: habitId },
      { completed: true, $push: { entries: entry._id } },
      { new: true }
    ).populate("entries");

    res.status(200).json(entry);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}
