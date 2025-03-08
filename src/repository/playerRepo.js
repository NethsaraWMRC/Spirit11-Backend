import Player from "../models/player.js";

const playerRepo = {
  // Create a new player
  async createPlayer(playerData) {
    return await Player.create(playerData);
  },

  // Get all players
  async getAllPlayers() {
    return await Player.find();
  },

  // Get a player by ID
  async getPlayerById(playerId) {
    return await Player.findById(playerId);
  },

  // Update a player by ID
  async updatePlayer(playerId, updateData) {
    return await Player.findByIdAndUpdate(playerId, updateData, { new: true });
  },

  // Delete a player by ID
  async deletePlayer(playerId) {
    return await Player.findByIdAndDelete(playerId);
  },
};

export default playerRepo;
