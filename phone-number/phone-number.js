
export const clean = (number) => {
 var numbers= number.replace(/[" "()-.]/g , "")
  console.log(numbers);
  if(numbers.length<10){
    throw new Error("Incorrect number of digits")
  }
  else if(numbers.length==10){
    if(numbers.includes("b")==true){
      throw new Error("Letters not permitted");
    }
    else if(numbers.includes("@")==true){
      throw new Error('Punctuations not permitted')
    }
    else if(numbers[0]==0){
      throw new Error("Area code cannot start with zero")
    }
    else if(numbers[0]==1){
      throw new Error("Area code cannot start with one")
    }
    else if(numbers[3]==0){
      throw new Error("Exchange code cannot start with zero")
    }
    else if(numbers[3]==1){
      throw new Error("Exchange code cannot start with one")
    }
    return numbers;
  }
  else if(numbers.length==11){
    if(numbers[1]==0){
      throw new Error('Area code cannot start with zero');
    }
    else if(numbers[1]==1){
      throw new Error('Area code cannot start with one');
    }
    else if(numbers[4]==0){
      throw new Error('Exchange code cannot start with zero');
    }
    else if(numbers[4]==1){
      throw new Error('Exchange code cannot start with one');
    }
    else if(number[0]==1  || numbers[0]==1){
      const number=numbers.split('');
      number.splice(0,1);
      numbers=number.join("")
      return numbers;
    }
    else if(numbers[0]!==1){
      throw new Error("11 digits must start with 1");
    }
  }
  else{
    throw new Error ('More than 11 digits')
  }
};
