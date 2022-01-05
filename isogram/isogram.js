//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (phrase) => {
  let lowerPhrase=phrase.toLowerCase();
  let count = 1;
  for(let i=0;i<lowerPhrase.length;i++){
    let isogram=lowerPhrase.charAt(i);
    //console.log(isogram);
    for(let j=i+1 ; j<lowerPhrase.length; j++){
        if(isogram == lowerPhrase.charAt(j)){
          if(lowerPhrase.charAt(j)==" "){
            continue;
          }
          else if(lowerPhrase.charAt(j)=="-"){
            continue;
          } 
          else{
              count+=1;
          }
        }
        else{
          continue;
        }
    }
  }

  if(count>1){
    return false;
  }
  else{
    return true;
  }
};
