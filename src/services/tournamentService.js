import playerRepo from "../repository/playerRepo.js";

const tournamentService = {
  async calculateTournamentStat() {
    const players = await playerRepo.getAllPlayers();
    if (!players || players.length === 0) {
      throw new Error("No players found in the tournament");
    }

    let totalRuns = 0;
    let totalWickets = 0;
    let highestRun = { player: null, runs: 0 };
    let highestWicket = { player: null, wickets: 0 };

    for (const player of players) {
      totalRuns += player.runs || 0;
      totalWickets += player.wickets || 0;

      if (player.runs > highestRun.runs) {
        highestRun = { player: player.name, runs: player.runs };
      }

      if (player.wickets > highestWicket.wickets) {
        highestWicket = { player: player.name, wickets: player.wickets };
      }
    }

    return {
      totalRuns,
      totalWickets,
      highestRun,
      highestWicket,
    };
  },
};

export default tournamentService;
