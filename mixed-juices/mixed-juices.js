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
   var limesCount = 0; var count = 0; var i = 0; var limeAdd = 0;
   for ( var j = 0 ; j < limes.length ;j++) {
   while(i <= j && limeAdd < wedgesNeeded){
   switch (limes[j]) {
     case 'small' : limeAdd = limeAdd+ 6;  console.log(limeAdd , limes[j]); count += 1; break;
     
     case 'medium' : limeAdd = limeAdd+8; console.log(limeAdd, limes[j]); count += 1; break;
      
     case 'large' :limeAdd = limeAdd+10; console.log(limeAdd, limes[j]); count += 1; break;
     
      default :  break;
      }  i++;
     }
  } console.log(count); return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  //throw new Error('Please implement the remainingOrders function');
//console.log(timeLeft , orders);
 let j = 0; 
  for (var i = 0 ; i < orders.length ; i++){
     while(timeLeft > 0 ){
      switch (orders[i]){
       case "Pure Strawberry Joy" :  timeLeft = timeLeft-0.5; orders.splice(0 , 1);
      break;
       case 'Energizer' :  timeLeft = timeLeft-1.5; orders.splice(0, 1);
       break;
      case 'Green Garden' :   timeLeft = timeLeft-1.5; orders.splice(0, 1);
       break;
      case 'Tropical Island' :  timeLeft = timeLeft-3;   orders.splice(0 , 1);
       break;
      case 'All or Nothing' :  timeLeft = timeLeft-5; orders.splice(0, 1);
       break;
      default :  timeLeft = timeLeft-2.5; orders.splice(0, 1);
       break;
      } j++; 
    } 
 }  console.log(timeLeft); console.log(orders);  return (orders);
}
