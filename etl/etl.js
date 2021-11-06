//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (game) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(game);
  const obj = {}
  for(let key in game){
    if(key=='1'){
      for(let k1 of game[key]){
        //console.log(k2);
        k1=k1.toLowerCase();
       // console.log(k1);
        obj[k1] = Number(key);
        console.log(obj);
      }
    }
      //--------------------------------
    else if(key=='2'){
    for(let k2 of game[key]){
      k2=k2.toLowerCase();
       // console.log(k2);
        obj[k2] = Number(key);
        console.log(obj);
     }
    }
    //------------------------------------
    else if(key=='3'){
    for(let k3 of game[key]){
      k3=k3.toLowerCase();
        console.log(k3);
        obj[k3] = Number(key);
        console.log(obj);
     }
    }
    //------------------------------------
    else if(key=='4'){
    for(let k4 of game[key]){
      k4=k4.toLowerCase();
        console.log(k4);
        obj[k4] = Number(key);
        console.log(obj);
     }
    }
    //------------------------------------
    else if(key=='5'){
    for(let k5 of game[key]){
      k5=k5.toLowerCase();
        console.log(k5);
        obj[k5] = Number(key);
        console.log(obj);
     }
    }
    //------------------------------------
    else if(key=='8'){
    for(let k6 of game[key]){
      k6=k6.toLowerCase();
        console.log(k6);
        obj[k6] = Number(key);
        console.log(obj);
     }
    }
    //------------------------------------
    else if(key=='10'){
    for(let k7 of game[key]){
      k7=k7.toLowerCase();
        console.log(k7);
        obj[k7] = Number(key);
        console.log(obj);
     }
    }
  }
      return obj;
};
