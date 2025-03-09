import tournamentService from "../services/tournamentService.js";

const tournamentController = {
  async getTournamentSummary(req, res) {
    try {
      const summary = await tournamentService.calculateTournamentStat();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default tournamentController;
