function findVacantRooms(arr){
	var vacantRooms = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === "vacant"){
			vacantRooms.push(i);
		}
	}
	return vacantRooms;
}
function findCheapestVacantRoom(arr){
  var cheapest;
  var cheapestRoom = [];
  for(var index = 0; index < arr.length; index++){
    if(arr[index] !== "occupied"){
      if(cheapest === undefined || cheapest > arr[index]){
        cheapest = arr[index];
      }
    }
  }
  
  if(cheapest){
    cheapestRoom.push(arr.indexOf(cheapest), cheapest)
    return cheapestRoom;
  } else {
    return cheapestRoom;
  }
  
}
