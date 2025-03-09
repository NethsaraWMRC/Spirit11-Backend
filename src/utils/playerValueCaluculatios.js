export function calculatePlayerPoints(player) {
  const battingStrikeRate =
    player.ballsFaced > 0 ? (player.totalRuns / player.ballsFaced) * 100 : 0;
  const battingAverage =
    player.inningsPlayed > 0 ? player.totalRuns / player.inningsPlayed : 0;

  // Bowling Strike Rate: If Wickets = 0, set it as undefined
  const bowlingStrikeRate =
    player.wickets > 0
      ? (player.oversBowled * 6) / player.wickets
      : "Undefined";

  const economyRate =
    player.oversBowled > 0
      ? (player.runsConceded / (player.oversBowled * 6)) * 6
      : 0;

  return (
    battingStrikeRate / 5 +
    battingAverage * 0.8 +
    (bowlingStrikeRate === "Undefined" ? 0 : 500 / bowlingStrikeRate) +
    140 / economyRate
  );
}

export function calculatePlayerValue(playerPoints) {
  const value = (9 * playerPoints + 100) * 1000;

  // Round to the nearest multiple of 50,000
  return Math.round(value / 50000) * 50000;
}
