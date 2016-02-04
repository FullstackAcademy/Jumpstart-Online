function repeat(str, num){
	var finalStr = "";
	
	for(num; num > 0; num--){
		finalStr+= str;
	}

	return finalStr;
}