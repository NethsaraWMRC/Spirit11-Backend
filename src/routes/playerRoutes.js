import express from "express";
import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerController.js";

const router = express.Router();

router.post("/create", createPlayer);
router.get("/get-all", getAllPlayers);
router.get("/get-one/:id", getPlayerById);
router.put("/update-one/:id", updatePlayer);
router.delete("/delete-one/:id", deletePlayer);

export default router;
