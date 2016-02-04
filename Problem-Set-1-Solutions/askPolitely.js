function askPolitely(sentence){
	if(sentence.slice(-1) === "?"){
		if(sentence.slice(-7) === "please?"){
			return sentence;
			} else {
				return sentence.slice(0,-1) + " please?";	
			}
	} else {
		return sentence;
	}
}