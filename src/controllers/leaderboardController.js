import leaderboardService from "../services/leaderBoardService.js";

// get leaderboard
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.getLeaderboard();
    res.status(200).json({ success: true, leaderboard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
