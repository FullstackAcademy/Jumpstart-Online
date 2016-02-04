function lastDigit(num1, num2){
	num1 = num1.toString();
	num2 = num2.toString();

	if(num1[num1.length-1] === num2[num2.length-1]){
		return true;
	} else {
		return false;
	}
}