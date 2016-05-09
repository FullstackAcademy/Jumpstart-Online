function palindrome(str){
  var reversedStr = "";
  var lowerStr = str.toLowerCase();
  
  for(var length = lowerStr.length - 1; length >= 0; length--){  	
  		reversedStr += lowerStr[length];  
  }

  if(reversedStr === lowerStr){
    return true;
  }

  return false;
}


function palindrome(str) {
  for (var i = 0; i < str.length; i++)
    if (str[i] !== str[str.length - i - 1]){
      return false;
    }
  return true;
}

