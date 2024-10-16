import mongoose from "mongoose";
import Todo from "../models/todoModel.js";
import User from "../models/userModel.js";
import Tag from "../models/tagModel.js";

export async function createTodo(req, res, next) {
  const { name, description, tags, user } = req.body;
  try {
    let existingUser = await User.findById(user);

    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    let todo = new Todo({
      name,
      description,
      userId: existingUser._id,
      tags: tags ? await Tag.find({ _id: { $in: tags } }) : [],
    });

    await todo.save();
    existingUser.todos.push(todo);
    await existingUser.save();
    todo = await Todo.findById(todo._id).populate([
      {
        path: "tags",
        model: Tag,
      },
    ]);
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error);
  }
}

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).populate([
      {
        path: "tags",
        model: Tag,
      },
    ]);

    res.status(200).json({ todos });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (req, res, next) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    res
      .status(201)
      .json({ status: "ok", message: "successfully deleted..", todo });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, tags, isChecked } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { name, description, tags, isChecked },
      { new: true }
    ).populate([
      {
        path: "tags",
        model: Tag,
      },
    ]);
    res.status(201).json({ todo, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const getTodosByUserId = async (req, res, next) => {
  const id = req.params.id;

  try {
    let existingUser = await User.findById(id);

    if (!existingUser) {
      return res
        .status(401)
        .json({ messages: "Could not find the user", success: false });
    }

    const todos = await Todo.find({ userId: existingUser._id }).populate(
      "tags"
    );

    res.status(201).json({ todos, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const checkTodo = async (req, res, next) => {
  const todoId = req.params.id;

  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { isChecked: true },
      { new: true }
    ).populate([
      {
        path: "tags",
        model: Tag,
      },
    ]);
    res.status(201).json({ todo, success: true });
  } catch (err) {
    console.log(err);
  }
};
