function vowelCount(string){
	var vowels = 'aeiou',			
			string = string.toLowerCase(),
			count = 0;

	for(var i = 0; i < string.length; i++){
		if(vowels.indexOf(string[i]) >= 0){
			count++;
		}
	}

	return count;
}