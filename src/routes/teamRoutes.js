import express from "express";
import teamController from "../controllers/teamController.js";
import { commonAuth, verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", verifyToken, commonAuth, teamController.addPlayer);
router.post("/remove", verifyToken, commonAuth, teamController.removePlayer);
router.get(
  "/get-user-team",
  verifyToken,
  commonAuth,
  teamController.getUserTeam
);
router.get(
  "/get-user-team/stats",
  verifyToken,
  commonAuth,
  teamController.getTotalTeamStats
);

export default router;
