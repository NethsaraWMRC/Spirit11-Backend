import express from "express";
import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  getPlayerStats,
} from "../controllers/playerController.js";
import {
  adminAuth,
  commonAuth,
  verifyToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, adminAuth, createPlayer);
router.get("/get-all", verifyToken, getAllPlayers);
router.get("/get-one/:id", verifyToken, getPlayerById);
router.put("/update-one/:id", verifyToken, updatePlayer);
router.delete("/delete-one/:id", verifyToken, adminAuth, deletePlayer);
router.get("/:playerId/stats", verifyToken, getPlayerStats);

export default router;
