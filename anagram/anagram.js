//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const Anagram = (collection) => {
    let myCollection= collection.toLowerCase().split("").sort().join("");

  return myCollection;
}


export const findAnagrams = (word, collections) => {
  console.log(collections);
  let myarray = [];
  const sortedWord = word.toLowerCase().split("").sort();
  const joinedWord = sortedWord.join("");

  for( let i=0 ; i<collections.length ; i++){
    if(word.toLowerCase()==collections[i].toLowerCase()){
      continue;
    }
    else{
      if(joinedWord == Anagram(collections[i])){
          myarray.push(collections[i]);
       }
      else{
          continue;
       }
    }
  }
  console.log(myarray);
  return myarray;
};
