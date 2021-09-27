// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  //throw new Error('Please implement the totalBirdCount function');
  //console.log(birdsPerDay)
  var count =0;
  for( var i=0 ; i<=birdsPerDay.length-1 ; i++){
       count += birdsPerDay[i];
    }
  console.log(count);
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
 // throw new Error('Please implement the birdsInWeek function');

 let sum = 0;
 
    // if((week)*7 > birdsPerDay.length){
    //     return;
    // }else{
       
        let s = (week*7) -7; 
  console.log(s)
       let i = s;
      while (i<s+7 ){
        //for( let i=s; i<s+7 ; i++){
            sum = sum + birdsPerDay[i];
            i++;
        }  
  //  }
  console.log(sum);
    return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
 // throw new Error('Please implement the fixBirdCountLog function');
  console.log(birdsPerDay);
  
    for (var i = 0 ; i<birdsPerDay.length-1 ; i++){ 
      if(i%2 == 0){
        birdsPerDay[i] += 1 
      }
      else {
        birdsPerDay[i] = birdsPerDay[i];
      }
      console.log(birdsPerDay[i]);
    }
  return birdsPerDay;
}
