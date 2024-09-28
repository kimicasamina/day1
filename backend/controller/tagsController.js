import mongoose from "mongoose";
import Habit from "../models/habitModel.js";
import User from "../models/userModel.js";
import Entry from "../models/entryModel.js";
import Tag from "../models/tagModel.js";

export async function getTags(req, res, next) {
  try {
    const tags = await Tag.find({});
    return res.status(200).json({ tags });
  } catch (error) {
    console.log(error);
  }
}

export async function getTagById(req, res, next) {
  const tagId = req.params.tagId;
  try {
    const tag = await Tag.findById(tagId);
    return res.status(200).json({ tag });
  } catch (error) {
    console.log(error);
  }
}

export async function getTagsByUser(req, res, next) {
  const id = req.params.id;

  try {
    let existingUser = await User.findById(id);
    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "Could not find user" });
    }

    const tags = await Tag.find({ user: existingUser._id });
    return res.status(200).json({ tags });
  } catch (error) {
    console.log(error);
  }
}

export async function createTag(req, res, next) {
  const { name, user } = req.body;

  try {
    const tag = await Tag.create({ name, user });
    return res.status(201).json({ tag });
  } catch (error) {
    console.log(error);
  }
}

export async function updateTag(req, res, next) {
  const tagId = req.params.tagId;
  try {
    const tag = await Tag.findByIdAndUpdate(
      { _id: tagId },
      { name },
      { new: true }
    );
    return res.status(201).json({ tag });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTag(req, res, next) {
  const tagId = req.params.tagId;
  try {
    const tag = await Tag.findByIdAndDelete({ _id: tagId }, { new: true });
    return res.status(201).json({ tag });
  } catch (error) {
    console.log(error);
  }
}
