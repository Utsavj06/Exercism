/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  //throw new Error('Please implement the createScoreBoard function');
  let scoreBoard = {'The Best Ever' : 1000000 ,};

   return scoreBoard;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  //throw new Error('Please implement the addPlayer function');
  //console.log(scoreBoard, player, score);

  //Object.assign(scoreBoard, {player: score});
  scoreBoard[player]=score;
  console.log(scoreBoard);

 return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  //throw new Error('Please implement the removePlayer function');

  delete scoreBoard[player];
  console.log(scoreBoard);
  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
 // throw new Error('Please implement the addToScore function');
  //console.log(scoreBoard, player, points);
   scoreBoard[player] += points;
    console.log(scoreBoard);

   return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *Object.keys(object).forEach((property) => {
      object[property] = "Updated value";
    });
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
 // throw new Error('Please implement the applyMondayBonus function');
  console.log(scoreBoard);

  for (var i in scoreBoard){
    scoreBoard[i]+=100;
    console.log(`${i}: ${scoreBoard[i]}`);
    
  }return (`${i}: ${scoreBoard[i]}`);
 // return abc;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  //throw new Error('Please implement the normalizeScore function');

  // console.log(params);
  // const normalizeFunction = (score) => {
  //   console.log(score);
  // }

  //return ((params.score*3)-10);
}
