//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  //throw new Error('Remove this statement and implement this function');
  var count =0;
  if(number>0){
       if(number == 1){
         return count;
       }

      else if(number%2 == 0){
         var i=number;
         while(i>1){
         
             if(i%2==0){
                 count += 1;
                 i= i/2;
           }
             else{
                 count += 1;
                 i= ((i*3)+1);
           }
       }
        console.log(count);
        return count;
  }
}
  else{
    throw new Error("Only positive numbers are allowed");
  }
};
 