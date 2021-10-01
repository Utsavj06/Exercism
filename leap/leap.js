//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (calendar) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(calendar)

  if(calendar % 400 !== 0 && calendar % 100 == 0 ){
    return false;
  }
  
  else if(calendar % 4 !== 0)
  {
    return false
  }

  else {
    return true
  }
};
