import User from "../models/user.js";
import playerService from "./playerService.js";

const leaderboardService = {
  async getLeaderboard() {
    // Find users who have exactly 11 players in their team
    const users = await User.find({ team: { $size: 11 } }).populate(
      "team.player"
    );

    // Calculate total points for each user
    const leaderboard = await Promise.all(
      users.map(async (user) => {
        let totalPoints = 0;

        for (const teamPlayer of user.team) {
          const playerStats = await playerService.calculatePlayerStats(
            teamPlayer.player._id
          );
          totalPoints += parseFloat(playerStats.points); // Convert to number
        }

        return {
          username: user.username,
          totalPoints: totalPoints.toFixed(2),
        };
      })
    );

    // Sort users by total points in descending order
    leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

    return leaderboard;
  },
};

export default leaderboardService;
