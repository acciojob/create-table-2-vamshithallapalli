function createTable() {
    //Write your code here
    let rows = prompt('Input number of rows');
	let cols = prompt('Input number of columns');

	rows = Number(rows);
	cols = Number(cols);

	if(isNaN(rows) || isNaN(cols)){
		return;
	}

	if(rows<=0 || cols<=0){
		 alert("Please enter positive numbers greater than 0.");
        return;
	}

	const table = document.getElementById('myTable');
	table.innerHTML = '';

	for(let i=0; i<rows; i++){
		let row = table.insertRow();

		for(let j=0; j<cols; j++){
			let cell = row.insertCell();
			cell.innerHTML = `Row-${i} Column-${j}`
		}
	}
}
