//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (row) => {
  //throw new Error('Remove this statement and implement this function');
  //console.log(row);
  var arr = [];
  if(row==0)  return [];
  else if(row==1){
    arr.push([1])
    return arr;
  } 
    
  else{
    let result=[];
    for(let i=0 ; i<row ; i++){
      for(let j=0; j<=i ; j++){
        if(i==0&&j==0){
          result.push(1);
        }
        else if(j==0 || j==i){
          result.push(1);
        }
        else{
          result.push((arr[i-1][j])+(arr[i-1][j-1]));
        }
      }
      arr.push(result);
      result = [];
    }
      //console.log(result)
  }

  console.log(arr)
  return arr;
};
