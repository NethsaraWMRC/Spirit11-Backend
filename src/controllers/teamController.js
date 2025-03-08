import teamService from "../services/teamService.js";

const teamController = {
  async addPlayer(req, res) {
    try {
      const { userId, playerId } = req.body;

      const updatedUser = await teamService.addPlayerToTeam(userId, playerId);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async removePlayer(req, res) {
    try {
      const { userId, playerId } = req.body;
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
      const { userId } = req.params;
      const userTeam = await teamService.getUserTeam(userId);
      res.json(userTeam);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default teamController;
