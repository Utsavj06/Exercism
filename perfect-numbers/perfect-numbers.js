//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  let factor = [];
  let factorSum=0 ;
  if(number==0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  else if(number<0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  else {
    for(let i=1 ; i<number ; i++){
      if(number%i==0){
        factor.push(i);
      }
    }
  }
console.log(factor);
  for(let i=0 ; i<=factor.length-1 ; i++){
    factorSum += factor[i];
  }
    console.log(factorSum); 

  if(factorSum == number){
    return 'perfect';
  }
  else if(factorSum > number){
    return "abundant";
  }
  else 
    return 'deficient';
};
