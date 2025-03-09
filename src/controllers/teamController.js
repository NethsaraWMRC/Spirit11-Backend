import teamService from "../services/teamService.js";

const teamController = {
  async addPlayer(req, res) {
    try {
      const { playerId } = req.body;

      const userId = req.userId;

      const updatedUser = await teamService.addPlayerToTeam(userId, playerId);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async removePlayer(req, res) {
    try {
      const { playerId } = req.body;
      const userId = req.userId;
      const updatedUser = await teamService.removePlayerFromTeam(
        userId,
        playerId
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getUserTeam(req, res) {
    try {
      const userId = req.userId;
      const userTeam = await teamService.getUserTeam(userId);
      res.json(userTeam);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getTotalTeamStats(req, res) {
    try {
      const userId = req.userId;
      const stats = await teamService.calculateTotalTeamStats(userId);
      res.status(200).json({
        success: true,
        message: "Total team stats calculated successfully",
        data: stats,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message || "Error calculating team stats",
      });
    }
  },
};

export default teamController;
