//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  //throw new Error('Remove this statement and implement this function');

  console.log(string);
//let abc[]= string.length;
  let reverseString = ''
  for (var i =string.length-1 ; i>= 0 ; i--){
          console.log(string[i])
     reverseString += string[i];
     
  }
    console.log(reverseString)
  return reverseString;
};
