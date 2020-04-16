export const leaderboardLoaded = (players) => ({
  type: "LEADERBOARD-LOADED",
  players,
});

export const shoot = (mousePosition) => ({
  type: "SHOOT",
  mousePosition,
});
