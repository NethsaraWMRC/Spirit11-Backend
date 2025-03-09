import express from "express";
import {
  login,
  getRefreshToken,
  userRegistration,
  adminRegistration,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/user/registration", userRegistration);
router.post("/admin/registration", adminRegistration);
router.post("/login", login);
router.get("/get-refreshToken", getRefreshToken);
// router.get("/decode", verifyToken);

export default router;
