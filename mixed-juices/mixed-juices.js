// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  //throw new Error('Please implement the timeToMixJuice function');
console.log(name);
  switch (name) {
    case "Pure Strawberry Joy" : return 0.5;
      break;
       case 'Energizer' : return 1.5;
       break;
      case 'Green Garden' : return 1.5;
       break;
      case 'Tropical Island' : return 3;
       break;
      case 'All or Nothing' : return 5;
       break;
      default : return 2.5;
       break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  //throw new Error('Please implement the limesToCut function');
  // console.log(wedgesNeeded)
  console.log(limes)
var i = 0;
  //while(i < wedgesNeeded)
  switch (limes) {
    case 'small' : console.log("wedgesNeededao;k" );
      break ;
    case 'medium' : console.log("wedgesNeededaoqwuiqw" );
      break ;
    case 'large' : console.log("wedgesNeededaocoppy" );
      break;
      default : break;
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
