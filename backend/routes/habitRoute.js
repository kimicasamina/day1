import express from "express";
const router = express.Router();
import { getHabits, createHabit } from "../controller/habitController.js";

router.get("/", getHabits);
router.post("/create", createHabit);

export default router;
