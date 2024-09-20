import express from "express";
const router = express.Router();
import {
  getHabits,
  createHabit,
  deleteHabit,
  updateHabit,
  checkHabit,
} from "../controller/habitController.js";

router.get("/", getHabits);
router.post("/create", createHabit);
router.delete("/:id/delete", deleteHabit);
router.put("/:id/update", updateHabit);
router.put("/:id/check", checkHabit);

export default router;
