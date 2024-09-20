import express from "express";
const router = express.Router();
import {
  getEntries,
  addEntry,
  updateEntry,
} from "../controller/entriesController.js";

router.get("/", getEntries);
router.post("/add", addEntry);
router.post("/:id/update", updateEntry);

export default router;
