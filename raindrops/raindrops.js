//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(input)
  if(input%3 != 0 && input%5 != 0 && input%7 != 0){
    console.log(input);
    return `${input}`;
  }
  else if (input%3 == 0 && input%5 != 0 && input%7 != 0 ){
    return "Pling";
  }
  else if (input%3 != 0 && input%5 == 0 && input%7 != 0 ){
    return "Plang";
  }
   else if (input%3 != 0 && input%5 != 0 && input%7 == 0 ){
    return "Plong";
  }
   else if (input%3 == 0 && input%5 == 0 && input%7 != 0 ){
    return "PlingPlang";
  }
  else if (input%3 == 0 && input%5 != 0 && input%7 == 0 ){
    return "PlingPlong";
  }
  else if (input%3 != 0 && input%5 == 0 && input%7 == 0 ){
    return "PlangPlong";
  }
  else if (input%3 == 0 && input%5 == 0 && input%7 == 0 ){
    return "PlingPlangPlong";
  }
};
