function reverseString(str){
	var finalString = "";

	for(var currPosition = str.length-1; currPosition >= 0; currPosition--){
		finalString += str[currPosition];
	}
	return finalString;
}