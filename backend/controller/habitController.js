import mongoose from "mongoose";
import Habit from "../models/habitModel.js";
import User from "../models/userModel.js";
import Entry from "../models/entryModel.js";
import Tag from "../models/tagModel.js";

export async function createHabit(req, res, next) {
  const { name, description, tags, user } = req.body;
  try {
    let existingUser = await User.findById(user);

    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    let habit = new Habit({
      name,
      description,
      user,
      tags: tags ? await Tag.find({ _id: { $in: tags } }) : [],
    });
    await habit.save();
    existingUser.habits.push(habit);
    await existingUser.save();
    res.status(200).json({ habit });
  } catch (error) {
    console.log(error);
  }
}

export const getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find({}).populate([
      {
        path: "entries",
        // select: "field",
        model: Entry,
      },
      {
        path: "tags",
        model: Tag,
      },
    ]);

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
  const { name, description, tags } = req.body;
  try {
    const habit = await Habit.findByIdAndUpdate(
      { _id: id },
      { name, description, tags },
      { new: true }
    ).populate([
      {
        path: "entries",
        // select: "field",
        model: Entry,
      },
      {
        path: "tags",
        model: Tag,
      },
    ]);
    res.status(201).json({ habit, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const checkHabit = async (req, res, next) => {
  const habitId = req.params.id;

  try {
    const entry = await Entry.create({ habitId });

    let habit = await Habit.findByIdAndUpdate(
      { _id: habitId },
      { completed: true, $push: { entries: entry._id } },
      { new: true }
    ).populate("entries");

    if (!habit) {
      return res
        .status(401)
        .json({ success: false, message: "Habit id does not exist." });
    }

    return res.status(201).json({ habit });
  } catch (err) {
    console.log(err);
  }
};
