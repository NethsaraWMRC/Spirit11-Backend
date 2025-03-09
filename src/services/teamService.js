import User from "../models/user.js";
import Player from "../models/player.js";
import playerService from "./playerService.js";

const teamService = {
  async addPlayerToTeam(userId, playerId) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const player = await Player.findById(playerId);
    if (!player) throw new Error("Player not found");

    //team size limit
    if (user.team.length >= 11) {
      throw new Error("A team can have a maximum of 11 players.");
    }

    // Check if player is already in the team
    if (user.team.some((p) => p.player.toString() === playerId)) {
      throw new Error("Player already exists in team");
    }

    const { value, point } = await playerService.calculatePlayerStats(playerId);

    // Check budget
    if (user.budget < value) {
      throw new Error("Not enough budget to buy this player");
    }

    // Add player to team
    user.team.push({ player: playerId, price: value });
    user.budget -= value;

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
    user.budget += user.team[playerIndex].price;

    // Remove player
    user.team.splice(playerIndex, 1);

    await user.save();
    return user;
  },

  async getUserTeam(userId) {
    return await User.findById(userId).populate("team.player");
  },

  async calculateTotalTeamStats(userId) {
    const user = await User.findById(userId).populate("team.player");
    if (!user) throw new Error("User not found");

    let totalValue = 0;
    let totalPoints = 0;

    for (const teamPlayer of user.team) {
      const { points, value } = await playerService.calculatePlayerStats(
        teamPlayer.player._id
      );
      totalValue += value;
      totalPoints += parseFloat(points);
    }

    return {
      userId: userId,
      totalPoints: totalPoints.toFixed(2),
      totalValue: totalValue,
    };
  },
};

export default teamService;
