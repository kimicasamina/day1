import express from "express";
const router = express.Router();
import {
  getEntries,
  getEntry,
  addEntry,
  updateEntry,
} from "../controller/entriesController.js";

router.get("/", getEntries);
router.get("/:id", getEntry);
router.post("/:id", addEntry);
router.put("/:id", updateEntry);

export default router;
