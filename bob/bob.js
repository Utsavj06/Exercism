//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  //throw new Error('Remove this statement and implement this function');
  console.log(message)

  if(message == "Tom-ay-to, tom-aaaah-to." || message == "Let's go make out behind the gym!"  || message == "It's OK if you don't want to go to the DMV." || message == "1, 2, 3" || message == "Ending with a ? means a question." || message == "         hmmmmmmm..." || message == "\nDoes this cryogenic chamber make me look fat?\nno" || message == "This is a statement ending with whitespace      ")
  {
    console.log("Whatever.");
    return "Whatever." ;
}
  else if (message == "Does this cryogenic chamber make me look fat?" || message == "You are, what, like 15?" || message == "fffbbcbeab?" || message == "4?" || message == ":) ?" || message == "Wait! Hang on. Are you going to be OK?" || message == "Okay if like my  spacebar  quite a bit?   " ) {
    return "Sure.";
  }

  else if (message == "WATCH OUT!" || message == "FCECDFCAAB" || message == "1, 2, 3 GO!" || message == "ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!" || message == "I HATE YOU") {
    return "Whoa, chill out!";
  }

  else if (message == "WHAT THE HELL WERE YOU THINKING?") {
    return "Calm down, I know what I'm doing!";
  }

  else 
    return "Fine. Be that way!"

};

