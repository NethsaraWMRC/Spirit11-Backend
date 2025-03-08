import User from "../models/user.js";
import Player from "../models/player.js";

const teamService = {
  async addPlayerToTeam(userId, playerId) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const player = await Player.findById(playerId);
    if (!player) throw new Error("Player not found");

    // Check if player is already in the team
    if (user.team.some((p) => p.player.toString() === playerId)) {
      throw new Error("Player already exists in team");
    }

    // Check budget
    // if (user.budget < player.value) {
    //   throw new Error("Not enough budget to buy this player");
    // }

    // Add player to team
    user.team.push({ player: playerId, price: player.value });
    // user.budget -= player.value;

    await user.save();
    return user;
  },

  async removePlayerFromTeam(userId, playerId) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const playerIndex = user.team.findIndex(
      (p) => p.player.toString() === playerId
    );
    if (playerIndex === -1) throw new Error("Player not found in team");

    // Refund budget
    // user.budget += user.team[playerIndex].price;

    // Remove player
    user.team.splice(playerIndex, 1);

    await user.save();
    return user;
  },

  async getUserTeam(userId) {
    return await User.findById(userId).populate("team.player");
  },
};

export default teamService;
