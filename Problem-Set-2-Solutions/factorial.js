function factorial(num){
	var total = 1;
	
	for(num; num >1; num--){
		total*= num;
	}

	return total;
}