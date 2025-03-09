import express from "express";
import tournamentController from "../controllers/tournamentController.js";

const router = express.Router();

router.get("/summary", tournamentController.getTournamentSummary);

export default router;
