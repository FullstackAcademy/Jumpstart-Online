function underToCamel(underName) {
    var camelCaseOutput = "";
    var foundUnder = false;
    for(var i = 0; i<underName.length; i++) {
        // underName[i];
        if (underName[i] === "_") {
            foundUnder = true;
        } else {
            if (foundUnder) {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } else {
                camelCaseOutput += underName[i];
            }
        }
    }
  return camelCaseOutput;
}


/* Solution 2 */    
   
// function underToCamel(name){
// 	var finalString = "",
// 		name = name.toLowerCase(),
// 		count = 0;

// 	for(var i = 0; i < name.length; i++){
// 		if(name[i] === "_"){
// 			finalString += name[i+1].toUpperCase();
// 			count++;
// 		} else if(finalString[i-count] === name[i].toUpperCase()) {
// 		    continue;
// 		} else {
// 		    finalString += name[i];
// 		}
// 	}
// 	return finalString;
// }



//     /* Solution 3 */    

// function underToCamel(underName) {
//     var camelCaseOutput = "";
//     // var underWordArray = underName.split("_");
//     // camelCaseOutput = underWordArray[0].toLowerCase();
//     // for(var j = 1; j < underWordArray.length; j++) {
//     //     camelCaseOutput += underWordArray[j][0].toUpperCase();
//     //     camelCaseOutput += underWordArray[j].slice(1).toLowerCase();
//     // }
    
//     return camelCaseOutput;
// }
