//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  //throw new Error('Remove this statement and implement this function');
  console.log(strand);
  const output = {
    "A" : 0,
    'C' : 0,
    'G' : 0,
    'T' : 0,
  }
  const result=[];

  
      for(let key of strand){
        switch(key){
        case 'A' : output[key] += 1;
          break;
        case 'C' : output[key] += 1;
          break;
        case 'G' : output[key] += 1;
          break;
        case 'T' : output[key] += 1;
          break;
        default: throw new Error("Invalid nucleotide in strand");
        }
      }
    
      for(let k2 in output){
        console.log(output[k2])
        switch(k2){
          case 'A' : result.push(output[k2]);
            break;
          case 'C' : result.push(output[k2]);
            break;
          case 'G' : result.push(output[k2]);
            break;
          case 'T' : result.push(output[k2]);
            break;
        }  
      }
      const value = result.join(" ")
      console.log(result);
      console.log(value);
      return value;    
}
