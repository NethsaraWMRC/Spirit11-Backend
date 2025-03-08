import playerRepo from "../repository/playerRepo.js";

const playerService = {
  async createPlayer(playerData) {
    return await playerRepo.createPlayer(playerData);
  },

  async getAllPlayers() {
    return await playerRepo.getAllPlayers();
  },

  async getPlayerById(playerId) {
    const player = await playerRepo.getPlayerById(playerId);
    if (!player) {
      throw new Error("Player not found");
    }
    return player;
  },

  async updatePlayer(playerId, updateData) {
    const player = await this.getPlayerById(playerId);
    if (!player.isNewPlayer) {
      throw new Error("Only new players can be updated");
    }
    return await playerRepo.updatePlayer(playerId, updateData);
  },

  async deletePlayer(playerId) {
    const player = await this.getPlayerById(playerId);
    if (!player.isNewPlayer) {
      throw new Error("Only new players can be deleted");
    }
    return await playerRepo.deletePlayer(playerId);
  },
};

export default playerService;
