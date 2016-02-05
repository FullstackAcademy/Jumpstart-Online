function indexOf(str,char) {
  var pos = 0;

  for (var i = 0 ; i <= str.length - char.length ;  i++) {
    
    for(var j = 0; j < char.length; j++) {
             
      if(str[i+j] !== char[j]) {
        break;
      }
      
      if(j === char.length - 1) {
        return i;
      }

    }
    
    
  }
  
  return -1;
  
}
