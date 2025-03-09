import express from "express";
import teamController from "../controllers/teamController.js";

const router = express.Router();

router.post("/add", teamController.addPlayer);
router.post("/remove", teamController.removePlayer);
router.get("/get-user-team/:userId", teamController.getUserTeam);
router.get("/get-user-team/:userId/stats", teamController.getTotalTeamStats);

export default router;
