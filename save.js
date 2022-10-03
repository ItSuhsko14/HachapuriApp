let save = document.getElementById("save");

let curDate = getCurDate();

save.addEventListener('click', function(event) {
	console.log("-- Натиснуто кнопку Save");
	let data = count;
	data['date'] = curDate;
	data = JSON.stringify(data);
	console.log(data);

	let phpText = document.getElementById('text_for_php');
	let phpButton = document.getElementById('save_for_php');

	phpText.value = data;

	phpButton.click();
})

document.write('<?php echo "Hello World"; ?>');



