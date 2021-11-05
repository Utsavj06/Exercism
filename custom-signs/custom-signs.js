// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
  //throw new Error('Implement the buildSign function');
  return `Happy ${occasion} ${name}!`
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
  //throw new Error('Implement the buildBirthdaySign function');
  if(age<50) return "Happy Birthday! What a young fellow you are.";

  else return "Happy Birthday! What a old fellow you are.";
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  //throw new Error('Implement the graduationForm function');
  return `Congratulations ${name}!\nClass of ${year}`
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  //throw new Error('Implement the costOf function');
  const words = sign.split("");
  let count=20;
  console.log(words);
  for(let i=0; i<words.length ; i++){
    count +=2;
  }
  console.log(count);
  return `Your sign costs ${count}.00 ${currency}.`
}
