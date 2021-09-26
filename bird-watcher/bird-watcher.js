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
   console.log(birdsPerDay , week);
  // var newCount = (birdsPerDay.length)/(week);
  // console.log(newCount);
  // var inc =0;
  // for( var i = 0 ; i<birdsPerDay.length-1 ; i++){
  //   // console.log("a");
  //   if(i<newCount){
  //     inc += birdsPerDay[i];
  //   }
  // } 
  // console.log(inc);
  // return inc
  var add = 0;
  if (week <= 1 ){
    for (var i = 0 ; i<birdsPerDay.length-1 ; i++){
      if(i<7){
        add += birdsPerDay[i];
      }
    } //console.log(add);
    return add
  }
  else if (week = 2){
    for (var i = 0 ; i<birdsPerDay.length-1 ; i++){
      if(i>7 & i<14)
      {
         add += birdsPerDay[i];
      }
    } //console.log(add);
     return add
  }

  else if(week = 21){
     console.log(birdsPerDay , week);
    for (var i = 0 ; i<birdsPerDay.length-1 ; i++){
      if(i>7 & i<14)
      {
         add += birdsPerDay[i];
      }
    } console.log(add);
     return add
  }
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
  console.log(birdsPerDay)

  for (var i = 0 ; i<birdsPerDay-1 ; i+2){
    console.log(birdsPerDay[i])
  }
}
