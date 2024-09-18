import express from "express";
const router = express.Router();
import {
  getAllUser,
  createUser,
  loginUser,
  logoutUser,
  getProfile,
} from "../controller/userController.js";
import verifyToken from "../middleware/verifyToken.js";

router.get("/", getAllUser);
router.post("/register", createUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/getprofile", verifyToken, getProfile);

export default router;
