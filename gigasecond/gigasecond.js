//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  //throw new Error('Remove this statement and implement this function');
  const gs = 1e9;  // 10^9 seconds
// the below line get time of date paramenter.
    console.log( date.getTime()+gs );

//  first (new Date) create a object where parameter date is passed through and .getTime() select the time of date.
   console.log(new Date(date.getTime() + gs *1000));
  return (new Date(date.getTime() + gs *1000));
};
