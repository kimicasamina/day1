import mongoose from "mongoose";
import Habit from "../models/habitModel.js";
import User from "../models/userModel.js";
import Entry from "../models/entryModel.js";
import Tag from "../models/tagModel.js";

export async function getTags(req, res, next) {
  try {
    const tags = await Tag.find({});
    return res.status(200).json(tags);
  } catch (error) {
    console.log(error);
  }
}

export async function getTagById(req, res, next) {
  const tagId = req.params.tagId;
  try {
    const tag = await Tag.findById(tagId);
    return res.status(200).json(tag);
  } catch (error) {
    console.log(error);
  }
}

export async function createTag(req, res, next) {
  const { name } = req.body;

  try {
    const tag = await Tag.create({ name });
    return res.status(201).json(tag);
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
    return res.status(201).json(tag);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTag(req, res, next) {
  const tagId = req.params.tagId;
  try {
    const tag = await Tag.findByIdAndDelete({ _id: tagId }, { new: true });
    return res.status(201).json(tag);
  } catch (error) {
    console.log(error);
  }
}
