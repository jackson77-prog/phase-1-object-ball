function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  // Part 2: Building Functions
  function numPointsScored(playerName) {
    return gameObject().home.players[playerName].points || gameObject().away.players[playerName].points;
  }
  
  function shoeSize(playerName) {
    return gameObject().home.players[playerName].shoe || gameObject().away.players[playerName].shoe;
  }
  
  function teamColors(teamName) {
    return teamName === gameObject().home.teamName ? gameObject().home.colors : gameObject().away.colors;
  }
  
  function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
  }
  
  function playerNumbers(teamName) {
    return Object.values(teamName === gameObject().home.teamName ? gameObject().home.players : gameObject().away.players).map(player => player.number);
  }
  
  function playerStats(playerName) {
    return gameObject().home.players[playerName] || gameObject().away.players[playerName];
  }
  
  function bigShoeRebounds() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    const playerWithLargestShoe = Object.keys(players).reduce((a, b) => shoeSize(a) > shoeSize(b) ? a : b);
    return players[playerWithLargestShoe].rebounds;
  }
  
  function mostPointsScored() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    const playerWithMostPoints = Object.keys(players).reduce((a, b) => players[a].points > players[b].points ? a : b);
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    const homePoints = Object.values(gameObject().home.players).reduce((total, player) => total + player.points, 0);
    const awayPoints = Object.values(gameObject().away.players).reduce((total, player) => total + player.points, 0);
    return homePoints > awayPoints ? gameObject().home.teamName : gameObject().away.teamName;
  }
  
  function playerWithLongestName() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    const playerWithLongestName = Object.keys(players).reduce((a, b) => a.length > b.length ? a : b);
    return playerWithLongestName;
  }
  
  function doesLongNameStealATon() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    const playerWithLongestName = playerWithLongestName();
    const playerWithMostSteals = Object.keys(players).reduce((a, b) => players[a].steals > players[b].steals ? a : b);
    return playerWithLongestName === playerWithMostSteals;
  }
  