import express from "express";
const router = express.Router();
import {
  getEntries,
  getHabitEntries,
  addEntry,
} from "../controller/entriesController.js";

router.get("/", getEntries);
router.get("/:habitId", getHabitEntries);
router.post("/:habitId", addEntry);

export default router;
