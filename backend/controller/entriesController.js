import mongoose from "mongoose";
import Habit from "../models/habitModel.js";
import User from "../models/userModel.js";
import Entry from "../models/habitEntry.js";

export async function getEntries(req, res, next) {
  try {
    const entries = await Entry.find({});
    res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

export async function getEntry(req, res, next) {
  const id = req.params.id;
  try {
    const entry = await Entry.findById(id);
    res.status(200).json(entry);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

export async function addEntry(req, res, next) {
  const habitId = req.params.habitId;

  try {
    const habit = await Habit.findById(habitId);
    if (!habit) {
      res
        .status(401)
        .json({ success: false, message: "Habit id does not exist." });
    }
    const entries = await Entry.create({
      habitId: habit._id,
    });

    await entries.save();
    habit.entries.push(habit._id);
    await habit.save();
    res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

export async function updateEntry(req, res, next) {
  const id = req.params.id;
  try {
    const entry = await Entry.findById(id);
    res.status(201).json(entry);
  } catch (error) {
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}
