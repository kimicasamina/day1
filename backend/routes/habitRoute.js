import express from "express";
const router = express.Router();
import {
  getHabits,
  createHabit,
  deleteHabit,
  updateHabit,
} from "../controller/habitController.js";

router.get("/", getHabits);
router.post("/create", createHabit);
router.delete("/:id/delete", deleteHabit);
router.put("/:id/update", updateHabit);

export default router;
