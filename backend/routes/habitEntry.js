import express from "express";
const router = express.Router();
import {
  getEntries,
  addEntries,
  updateEntries,
} from "../controller/entriesController.js";

router.get("/", getEntries);
router.post("/add", addEntries);
router.post("/:id/update", updateEntries);

export default router;
