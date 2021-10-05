//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(input);
var finalList = [];
 for (var x = 0; x < input.length; x++) {
      switch (input[x]) {
        case 'G':
          finalList.push('C');
          break;
        case 'C':
          finalList.push('G');
          break;
        case 'T':
          finalList.push('A');
          break;
        case 'A':
          finalList.push('U');
          break;
        default:
          continue;
      }
    }
    return finalList.join("");
};
