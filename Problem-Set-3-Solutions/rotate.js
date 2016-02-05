function rotate(arr, steps){
	var rotations = steps;
	var index;

	while(rotations > 0){
		index = arr.pop();
		arr.unshift(index);

		rotations--;
	}

	return arr;
}
