function findVacantRooms(arr){
	var vacantRooms = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === "vacant"){
			vacantRooms.push(i);
		}
	}
	return vacantRooms;
}
