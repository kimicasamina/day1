import express from "express";
const router = express.Router();
import {
  getEntries,
  addEntry,
  updateEntries,
  getEntry,
} from "../controller/entriesController.js";

router.get("/", getEntries);
router.get("/:id", getEntry);
router.post("/", addEntry);
router.put("/:id", updateEntries);

export default router;
