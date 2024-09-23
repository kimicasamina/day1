import express from "express";
const router = express.Router();
import {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "../controller/tagsController.js";

router.get("/", getTags);
router.get("/:tagId", getTagById);
router.post("/", createTag);
router.put("/:tagId", updateTag);
router.delete("/:tagId", deleteTag);

export default router;
