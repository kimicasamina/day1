import express from "express";
const router = express.Router();
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodosByUserId,
  checkTodo,
} from "../controller/todosController.js";

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);
router.put("/:id/check", checkTodo);
router.get("/user/:id", getTodosByUserId);

// router.get("/user/:id", getByUserId);

export default router;
