//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (cipher, rotation) => {
  console.log(cipher, rotation);
let rotationalCipher="";
  for (let i=0; i<cipher.length ; i++){
    console.log(cipher[i]);
    if(cipher.charCodeAt(i)>64 && cipher.charCodeAt(i)<91){
        if(cipher.charCodeAt(i)+rotation>90){
          let rotationalValue=26-rotation;
          rotationalCipher += String.fromCharCode(cipher.charCodeAt(i)-rotationalValue) 
        }
        else{  
          rotationalCipher += String.fromCharCode(cipher.charCodeAt(i)+rotation)
          }
        } 
    else if(cipher.charCodeAt(i)>96 && cipher.charCodeAt(i)<123){
        if(cipher.charCodeAt(i)+rotation>122){
          let rotationalValue=26-rotation;
          rotationalCipher += String.fromCharCode(cipher.charCodeAt(i)-rotationalValue) 
        }
        else{  
          console.log(rotation);
          rotationalCipher += String.fromCharCode(cipher.charCodeAt(i)+rotation)
          console.log(cipher.charCodeAt(i)+rotation);
          }
        }        
    else{
      rotationalCipher+=String.fromCharCode(cipher.charCodeAt(i))
    }
  }
  return rotationalCipher;
};
