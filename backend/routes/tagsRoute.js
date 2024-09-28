import express from "express";
const router = express.Router();
import {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
  getTagsByUser,
} from "../controller/tagsController.js";

router.get("/", getTags);
router.get("/:tagId", getTagById);
router.post("/", createTag);
router.put("/:tagId", updateTag);
router.delete("/:tagId", deleteTag);
router.get("/user/:id", getTagsByUser);

export default router;
