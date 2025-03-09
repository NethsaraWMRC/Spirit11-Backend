import playerRepo from "../repository/playerRepo.js";
import {
  calculatePlayerPoints,
  calculatePlayerValue,
} from "../utils/playerValueCaluculatios.js";

const playerService = {
  //create
  async createPlayer(playerData) {
    return await playerRepo.createPlayer(playerData);
  },

  //get all
  async getAllPlayers() {
    return await playerRepo.getAllPlayers();
  },

  //get one
  async getPlayerById(playerId) {
    const player = await playerRepo.getPlayerById(playerId);
    if (!player) {
      throw new Error("Player not found");
    }
    return player;
  },

  //update
  async updatePlayer(playerId, updateData) {
    const player = await this.getPlayerById(playerId);
    if (!player.isNewPlayer) {
      throw new Error("Only new players can be updated");
    }
    return await playerRepo.updatePlayer(playerId, updateData);
  },

  //delete
  async deletePlayer(playerId) {
    const player = await this.getPlayerById(playerId);
    if (!player.isNewPlayer) {
      throw new Error("Only new players can be deleted");
    }
    return await playerRepo.deletePlayer(playerId);
  },

  //calculate player points
  async calculatePlayerStats(playerId) {
    const player = await playerRepo.getPlayerById(playerId);
    if (!player) {
      throw new Error("Player not found");
    }

    const points = calculatePlayerPoints(player);
    const value = calculatePlayerValue(points);

    return {
      playerId: playerId,
      points: points.toFixed(2),
      value: value,
    };
  },
};

export default playerService;
