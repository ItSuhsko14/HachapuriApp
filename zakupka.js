console.log("Скрипт закупки");

let zakupka = document.querySelector('.zakupka');
let zakupkaWrapper = document.getElementById('zakupka-wrapper');

let zakupkaList = [
	{name: "Свинина", type: "counted", curValue: 5, unit: "кг"},
	{name: "Яловичина", type: "counted", curValue: 5, unit: "кг"},
	{name: "Фарш курячий", type: "counted", curValue: 3, unit: "кг"},
	{name: "Філе куряче", type: "counted", curValue: 2, unit: "шт."},
	{name: "Ошийок", type: "not counted", checked: false},
	{name: "Фарш свин.", type: "not counted", checked: false},
	{name: "Кінза", type: "not counted", checked: true},
	{name: "Зелена цибул", type: "not counted", checked: true},
	{name: "Гриби", type: "not counted", checked: true},
	{name: "Цибуля ріпчаста", type: "not counted", checked: false},
	{name: "Яблука", type: "not counted", checked: true},
	{name: "Абрикос", type: "not counted", checked: false},
	{name: "Вишня", type: "not counted", checked: false},
	{name: "Творог", type: "not counted", checked: false},
	{name: "Шоколад", type: "not counted", checked: false},
	{name: "Масло", type: "not counted", checked: false},
	{name: "Олія", type: "not counted", checked: false},
	{name: "Цукор", type: "not counted", checked: false},
	{name: "Дріжджі", type: "not counted", checked: false},
	{name: "Борошно", type: "not counted", checked: false},
	{name: "Сир", type: "not counted", checked: false},
	{name: "Лісткове тісто", type: "not counted", checked: false},
	{name: "Сіль", type: "not counted", checked: false},
	{name: "Пергамент", type: "not counted", checked: false},
	{name: "Миюче", type: "not counted", checked: false},
	{name: "Копчений сулугуні", type: "not counted", checked: false},
	{name: "Сванська сіль", type: "not counted", checked: false},
	{name: "Паприка", type: "not counted", checked: false},
	{name: "Сумахі", type: "not counted", checked: false},
	{name: "Кунжут чорний", type: "not counted", checked: false},
	{name: "Кунжут білий", type: "not counted", checked: false},
	{name: "Цукрова пудра", type: "not counted", checked: false},
	{name: "Кориця", type: "not counted", checked: false},
	{name: "Перець чорний", type: "not counted", checked: false},
	{name: "Кавказькі спеції", type: "not counted", checked: false},
	{name: "Яйця", type: "not counted", checked: false},

];



// створюю html закупки
function createZakupka() {
	let ul = document.createElement('ul');
	ul.classList.add('list');
	ul.id = "ul-zakupka";
	zakupkaWrapper.appendChild(ul);
	
	for (zak in zakupkaList) {

		let li = document.createElement('li');
		let div = document.createElement('div');
		let inputCheck = document.createElement('input');
		inputCheck.type = "checkbox";
		inputCheck.classList.add('checkbox');
		inputCheck.checked = zakupkaList[zak].checked;
		
		li.classList.add('list-li')
		if (zakupkaList[zak].type == "counted") {
			li.id = "counter";
		}
		ul.appendChild(li);
		li.appendChild(div);
		div.innerHTML = zakupkaList[zak].name;
		div = document.createElement('div');
		li.appendChild(div);

		if (zakupkaList[zak].type == "counted") {
			
			let inputMin = document.createElement('input');
			inputMin.type = "button";
			inputMin.classList.add("min");
			inputMin.value = "-";

			let inputPl = document.createElement('input');
			inputPl.type = "button";
			inputPl.classList.add("pl");
			inputPl.value = "+";			
			
			let inputCount = document.createElement('input');
			inputCount.type = "text";
			inputCount.classList.add("count-field");
			inputCount.value = zakupkaList[zak].curValue;

			div.appendChild(inputMin);
			div.appendChild(inputCount);
			div.appendChild(inputPl);
		} else {
			div.appendChild(inputCheck);
		}
		
	}
}

createZakupka();

//видаляю html закупки
function clearZakupka() {
	console.log("-- функція очищення html Закупки");
	let ul = document.getElementById('ul-zakupka');
	ul.remove();
	console.log("видалили список");
}


// створюю html редагування закупки
function createZakupkaRedact() {
	console.log("-- Функція createZakupkaRedact");
	clearZakupka();
	let ul = document.createElement('ul');
	ul.classList.add('list');
	zakupkaWrapper.appendChild(ul);
	console.log(zakupkaList[0]);

	for (zak in zakupkaList) {

		console.log(zak);
		let li = document.createElement('li');
		let div = document.createElement('div');
		let inputCheck = document.createElement('input');
		inputCheck.type = "checkbox";
		inputCheck.classList.add('checkbox');
		inputCheck.checked = zakupkaList[zak].checked;
		
		li.classList.add('list-li')
		if (zakupkaList[zak].type == "counted") {
			li.id = "counter";
		}
		ul.appendChild(li);
		li.appendChild(div);
		div.innerHTML = zakupkaList[zak].name;
		div = document.createElement('div');
		li.appendChild(div);

		if (zakupkaList[zak].type == "counted") {
			
			let inputMin = document.createElement('input');
			inputMin.type = "button";
			inputMin.classList.add("min");
			inputMin.value = "-";

			let inputPl = document.createElement('input');
			inputPl.type = "button";
			inputPl.classList.add("pl");
			inputPl.value = "+";			
			
			let inputCount = document.createElement('input');
			inputCount.type = "text";
			inputCount.classList.add("count-field");
			inputCount.value = zakupkaList[zak].curValue;

			div.appendChild(inputMin);
			div.appendChild(inputCount);
			div.appendChild(inputPl);
		} else {
			div.appendChild(inputCheck);
		}
		
	}

	let li = document.createElement('li');
	li.classList.add('list-li')
	let div = document.createElement('div');
	ul.appendChild(li);
	li.appendChild(div);
	div.innerHTML = "додати елемент";
}



// відкриваємо вікно закупка
zakupka.addEventListener('click', function(event) {
	let zakupkaWrapper = document.getElementById('zakupka-wrapper');
	zakupkaWrapper.classList.toggle("close");
})

// закриваємо вікно закупка
let zakupkaClose = document.getElementById("zakupka-close");
zakupkaClose.addEventListener('click', function(event) {
	let zakupkaWrapper = document.getElementById('zakupka-wrapper');
	zakupkaWrapper.classList.toggle("close");
})




// копіюємо дані закупки
let copy = document.getElementById("copy");

copy.addEventListener('click', function(e) {
	console.log("-- Функція копіювати закупку");
	let list = document.querySelector(".list");
	let copyStr = "";
	let i = 0;
	console.log(list);
		for (child of list.children) {

			if (child.id === "counter") {
				console.log(zakupkaList[i].unit);
				copyStr = copyStr + child.children[0].innerText + " ";
				copyStr = copyStr + child.children[1].children[1].value + zakupkaList[i].unit+"\n";
			} else if (child.children[1].children[0].checked) {
				copyStr = copyStr + child.children[0].innerText +"\n";
			}
			i++	
		};
		console.log(copyStr);

		//створюю місце для текста, виділяю, копіюю
		const el = document.createElement("textarea");
		el.value = copyStr;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		clickButton();
});

// counter
zakupkaWrapper.addEventListener('click', function(e) {
	let target = e.target;
	if (target.className === "pl") {
		target.previousSibling.value++;
	}

	if (target.className === "min") {
		target.nextSibling.value--;
	}
		
})