export const hey = (input) =>{
	input = input.trim();
	function isShouting(input){
		return (input.toUpperCase() === input && input.toLowerCase() != input)
	}
	function isQuestion(input){
		return input.slice(-1) === "?"
	}

    if(isQuestion(input) && isShouting(input)){
      return  "Calm down, I know what I'm doing!"
    }
	else if (isShouting(input)){
		return "Whoa, chill out!"
	} else if (isQuestion(input)){
		return "Sure."
	}
     
    else if (input == ""){
		return "Fine. Be that way!"
	} else {
		return "Whatever."
	}
};

