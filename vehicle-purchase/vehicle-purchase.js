// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  //throw new Error('Please implement the needsLicense function');

  if(kind== 'car' || kind == 'truck'){
    return true;}
  else 
    return false
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
 // throw new Error('Please implement the chooseVehicle function');
//console.log(option1.compareTo(option2));
  console.log(option1);
  console.log(option2);
  var a = option1.charCodeAt(0);
    var b = option2.charCodeAt(0);
  console.log(a);
   console.log(b);

  if (a>b){
    console.log(option1);
    return (option2  + " is clearly the better choice.");
   // return true;
  }
   else {
    console.log(option2);
  return (option1 + " is clearly the better choice.");
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  throw new Error('Please implement the calculateResellPrice function');
}
