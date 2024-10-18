import mongoose from "mongoose";
import Todo from "../models/todoModel.js";
import User from "../models/userModel.js";
import Tag from "../models/tagModel.js";
import Goal from "../models/goalModel.js";

export async function createGoal(req, res, next) {
  const { name, description, tags, user, startDate, targetDate } = req.body;
  try {
    let existingUser = await User.findById(user);

    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    let goal = new Goal({
      name,
      description,
      userId: existingUser._id,
      tags: tags ? await Tag.find({ _id: { $in: tags } }) : [],
      startDate,
      targetDate,
    });

    await goal.save();
    existingUser.goals.push(goal);
    await existingUser.save();
    goal = await Goal.findById(goal._id).populate([
      {
        path: "tags",
        model: Tag,
      },
      {
        path: "goals",
        model: Goal,
      },
    ]);
    res.status(200).json({ goal });
  } catch (error) {
    console.log(error);
  }
}

export const getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find({}).populate([
      {
        path: "tags",
        model: Tag,
      },
      {
        path: "goal",
        model: Goal,
      },
    ]);

    res.status(200).json({ goals });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGoal = async (req, res, next) => {
  const id = req.params.id;

  try {
    const goal = await Goal.findByIdAndDelete(id);
    res
      .status(201)
      .json({ status: "ok", message: "successfully deleted..", goal });
  } catch (err) {
    console.log(err);
  }
};

export const updateGoal = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    description,
    tags,
    startDate,
    targetDate,
    isCompleted,
    completionRate,
  } = req.body;
  try {
    const goal = await Goal.findByIdAndUpdate(
      { _id: id },
      {
        name,
        description,
        tags,
        startDate,
        targetDate,
        isCompleted,
        completionRate,
      },
      { new: true }
    ).populate([
      {
        path: "tags",
        model: Tag,
      },
      {
        path: "goals",
        model: Goal,
      },
    ]);
    res.status(201).json({ goal, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const getGoalsByUserId = async (req, res, next) => {
  const id = req.params.id;

  try {
    let existingUser = await User.findById(id);

    if (!existingUser) {
      return res
        .status(401)
        .json({ messages: "Could not find the user", success: false });
    }

    const goals = await Goal.find({ userId: existingUser._id }).populate([
      {
        path: "tags",
        model: Tag,
      },
      {
        path: "goals",
        model: Goal,
      },
    ]);

    res.status(201).json({ goals, success: true });
  } catch (error) {
    console.log(error);
  }
};
