// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  //throw new Error('Implement the twoSum function');
  console.log(array1, array2);
  let k1 = "";
  let k2 = "";
  for (let key1 of array1){
    //console.log(key1);
    k1 += key1
  }

  for (let key2 of array2){
    k2 +=key2;
  }
  //console.log(k1);
  k1 = Number(k2)+ Number(k1);
  console.log(k1);
  return k1;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  //throw new Error('Implement the luckyNumber function');
  console.log(value);
   let tmp = value, sum=0 , remainder;
   while(value>0){
     remainder = Math.floor(value%10);
     sum = sum*10+remainder;
     value = Math.floor(value/10);
     // console.log(sum);
     // console.log(value);
   }
  //console.log(value);
  value = tmp;
  // console.log(value);
  // console.log(sum);
  if(sum === value){
    return true;
  }
  else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  //throw new Error('Implement the errorMessage function');
  console.log(input);
  if(!input){
    return "Required field";
  } else {
    if(isNaN(Number(input)) || input === "0"){
      return 'Must be a number besides 0'
    } else {
      return ""
    }
  }
}
