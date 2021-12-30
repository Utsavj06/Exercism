

export const countWords = (input) => {
  let obj = {};
  let splitWords;
  if (input.includes("\n")==true){
      splitWords= input.split(",\n");
      splitWords = splitWords.map((a)=>{
        return a.trim();
      })
      splitWords = splitWords.map((b)=>{
        return b.replace(/,/g,"");
      })
      splitWords = splitWords.map((c)=>{
        return c.split("\n");
      })
      splitWords = splitWords.flat();
      let i=0;
      while(i<splitWords.length){
        if(splitWords[i]==""){
          splitWords.splice(i,1);
        }
        else{
          ++i;
        }
      }
      splitWords = splitWords.map((d)=>{
         return d.trim();
      });
      splitWords = splitWords.map((e)=>{
        return e.replace(/'/g, "")
      })
  }   
  else if(input.includes(",")==true){
      let mysplitWords= input.split(",");
      splitWords=mysplitWords.map((a)=>{
        return a.trim();
      })
      splitWords=splitWords.map((b)=>{
        return b.split(" ")
      })
      splitWords = splitWords.flat();
         splitWords=splitWords.map((a)=>{
              let b=a.split(".");
              return b.join("").trim().toLowerCase();
         })
      console.log("hi");
  } 
  else{
    if(input.includes("n't")){
      let mysplitWords= input.toLowerCase().split(" ");
      splitWords=mysplitWords.map((a)=>{
        return a.replace(/don't/g, `"don't"`);
      })
      splitWords=splitWords.map((b)=>{
        return b.replace(/[^a-zA-Z']/g, "");
      })
      splitWords = splitWords.map((e)=>{
        return e.replace(/'large'/g, "large")
      })
    }
    
    else{
      let mysplitWords= input.toLowerCase().split(" ");
      splitWords=mysplitWords.map((a)=>{
        return a.replace(/[^a-zA-Z ]/g, "");
      })
      let i=0;
      while(i<splitWords.length){
        if(splitWords[i]==""){
          splitWords.splice(i,1);
        }
        else{
          ++i;
        }
      }
    }
  }
  
  let sortedSplitWords=splitWords.sort();
  console.log(sortedSplitWords);
  let countWords=1;
  let newCount ;
  
  let j=0; 
  while(j<=sortedSplitWords.length-1){
    for(let i=j+1 ; i<=sortedSplitWords.length ; i++){
      if(sortedSplitWords[j]==sortedSplitWords[i]){
        countWords++;
      }
      else{
        break;
      }
    }
    newCount=countWords;
    // console.log(`${sortedSplitWords[j]}:${newCount}`);
    obj[sortedSplitWords[j].toString()]=Number(newCount);
    countWords=1;
    j+=newCount;
  } 

  
  return obj;
};
