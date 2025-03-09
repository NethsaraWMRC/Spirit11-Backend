import express from "express";
import tournamentController from "../controllers/tournamentController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/summary", verifyToken, tournamentController.getTournamentSummary);

export default router;
