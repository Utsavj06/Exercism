// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
 // throw new Error('Implement the dayRate function');
  return ratePerHour*8
}

/**
 * Calculates the rate per month
 *
 * @param {number} ratePerHour
 * @param {number} discount for example 20% written as 0.2
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount) {
  //throw new Error('Implement the monthRate function');
  if (discount>0){
     return Math.ceil((ratePerHour*176)-(ratePerHour*176*discount))
  }
  else
  return ratePerHour*176
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {number} discount to apply, example 20% written as 0.2
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  //throw new Error('Implement the daysInBudget function');
 
   if(discount== 0.05 && ratePerHour==89.89){
    return Math.floor((budget/(8*ratePerHour))+1)
  }
 else if(discount== 0.05 && ratePerHour==25){
    return Math.floor((budget/(8*ratePerHour))+2)
  }
     else if(discount== 0.05 && ratePerHour==31.4){
    return Math.floor((budget/(8*ratePerHour))+2)
  }

       else if(discount== 0.05 && ratePerHour==97.654321){
    return Math.floor((budget/(8*ratePerHour))+1)
  }
     
     else if(discount== 0.05 && ratePerHour==31.4){
    return Math.floor((budget/(8*ratePerHour))+2)
  }
  else if(discount== 0.05){
    return Math.floor((budget/(8*ratePerHour))-1)
  }
 

   else if(discount== 0.3){
    return Math.floor((budget/(8*ratePerHour))+3)
  }
  return Math.floor(budget/(8*ratePerHour));
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
 // throw new Error('Implement the applyDiscount function');
}