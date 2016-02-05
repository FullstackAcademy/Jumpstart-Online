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
	var cheapestRoom = [];
	var cheapest;

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number'){
			if(!cheapest || arr[i] < cheapest){
				cheapest = arr[i];
				cheapestRoom.push(i, arr[i]);
			}
		}
	}

	return cheapestRoom;
}
