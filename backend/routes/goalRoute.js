import express from "express";
const router = express.Router();
import {
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
  getGoalsByUserId,
} from "../controller/goalsController.js";

router.get("/", getGoals);
router.post("/", createGoal);
router.delete("/:id", deleteGoal);
router.put("/:id", updateGoal);
router.get("/user/:id", getGoalsByUserId);

// router.get("/user/:id", getByUserId);

export default router;
