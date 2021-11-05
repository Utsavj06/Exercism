/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time){
  console.log(time);
  if(time==0){
    return "Lasagna is done.";
  }
  else if(time>0){
    return "Not done, please wait."
  }
  else{
    return "You forgot to set the timer."
  }
}



export function preparationTime(ary,time){
  console.log(ary,time);
  let count=0;

  if(time===undefined){
    for(let element of ary){
    count++
  }
    console.log(count);
    let timeforprepare = count*2;
    console.log(timeforprepare);
    return timeforprepare;
  }

  else{
     for(let element of ary){
         count++
     }
     console.log(count);
     let timeforprepare = count*time;
    console.log(timeforprepare);
    return timeforprepare;
  }
}

export function quantities(layer){
  console.log(layer);
  const count={
    noodles : 0,
    sauce:0
  }
  for(let item of layer){
    if(item=="noodles"){
      count.noodles += 50;
    }
    else if(item=="sauce"){
      count.sauce += 0.2;
    }
  }
    console.log(count);
    return count;
}

export function addSecretIngredient(friendlist, mylist){
  console.log(friendlist, mylist);
  
  mylist.push(friendlist[friendlist.length-1]);
  console.log(mylist);
}

export function scaleRecipe(items,persons){
  console.log(items,persons);
  for (let key in items){
    items[key]=items[key]/2;
  }
  console.log(items)
  for (let change in items){
    items[change]=items[change]*persons;
  }
  console.log(items);
  return items;
}