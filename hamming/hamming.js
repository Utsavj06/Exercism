//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (input,string) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(input, string)

  if(input.length == string.length){
    var count =0;
    for(let i=0 ; i<input.length ; i++){
      if(input[i] == string[i]){
        
      }
      else{
        count += 1;
      }
    }
      console.log(count);
    return count;
  }
    else if(input.length == 0){
       throw new Error ("left strand must not be empty");
    }

      else if(string.length == 0){
       throw new Error ("right strand must not be empty");
    }
  else {
    throw new Error("left and right strands must be of equal length");
  }
  
};
