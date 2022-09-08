let data = [];
let save = document.getElementById("save");
let cell = {
	date: 0,
	count: {},
};
let curDate = getCurDate();
save.addEventListener('click', function(event) {
	console.log("-- Натиснуто кнопку Save");
	
	if ( data[data.length - 1].date !== undefined ) {
		console.log("data[data.length - 1] == curDate");
		data[data.length - 1].count = count;
	} else {
		console.log("data[data.length - 1] !== curDate");
		data.push(cell);
		data[data.length - 1].date = getCurDate();
		data[data.length - 1].count = count;
	};
	
	console.log(data);

})