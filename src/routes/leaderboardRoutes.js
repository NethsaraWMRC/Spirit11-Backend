import express from "express";
import { getLeaderboard } from "../controllers/leaderboardController.js";
import { commonAuth, verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/get-leaderboard", verifyToken, commonAuth, getLeaderboard);

export default router;
