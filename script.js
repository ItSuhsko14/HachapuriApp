
let wrapper = document.querySelector(".wrapper-vipichka");
let restart = document.querySelector('.restart');
let count;
let bigCountData = {}; 
let curPageCount = document.querySelector('.cur-page');
let lastIndex;
let nextIndex;
let curIndex;
console.log("поточна дата: " + getCurDate());
console.log(bigCountData);


let countData = { 
	"kubdari": {
		"name": "Кубдарі",
		"number": 10,
		"type": 1,
		"price": 3,
	},
	"hachapuri": {
		"name": "Хачапурі",
		"number": 10,
		"type": 1,
		"price": 3,
	},
	"djigruli": {
		"name": "Джигрулі",
		"number": 10,
		"type": 1,
		"price": 3,
	},
	"gemrieli": {
		"name": "Гемріелі",
		"number": 10,
		"type": 1,
		"price": 3,
	},
	"sumahi": {
		"name": "Сумахі",
		"number": 10,
		"type": 1,
		"price": 3,
	},
	"petuchinia": {
		"name": "Петучінія",
		"number": 5,
		"type": 1,
		"price": 3,
	},
	"farsh": {
		"name": "Фарш",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"sir": {
		"name": "Сир",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"miaso": {
		"name": "М'ясо",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"shoco": {
		"name": "Шоколад",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"vishnya": {
		"name": "Вишня",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"tvorog": {
		"name": "Творог",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	"yabluko": {
		"name": "Яблуко",
		"number": 8,
		"type": 2,
		"price": 3.5,
	},
	};

// створюємо нульовий Count
let countNull = {};

function createCountNull() {
	console.log("-- Функція createCountNull --");
	for (let keys in countData) {
	countNull[keys] = 0;
	}
	console.log("countNull = ");
	console.log(countNull);
	return countNull;
}


// скидаємо данні сторінки
restart.addEventListener('click', function clearCount() {
	console.log("-- Функція clearCount --");
	localStorage.removeItem("data");
	console.log("Видалено data З LocalStorage");
	localStorage.removeItem("bigData");
	console.log("Видалено bigData з LocalStorage");
	bigCountData[curIndex].count = createCountNull();
	console.log("Поточні значення:");
	console.log(bigCountData);
	countText = JSON.stringify( count );
	localStorage.setItem( "data", countText );
	console.log("Завантажено count у LocalStorage");
	countText = JSON.stringify( bigCountData );
	localStorage.setItem( "data", countText );
	console.log("Завантажено bigCountData у LocalStorage");
	location.reload();
	console.log("Сторінку перезавантажено");
});

// перевіряємо наявність bigCountData в LocalStorage
function isBigCountDataInStorage() {
	console.log("Функція isBigCountDataInStorage перевіряє наявність даних в LocalStorage.");
	if ( localStorage.getItem("bigData") != null ) {
		console.log("bigdata існує в localStorage");
	} else {
		console.log("bigdata немає в localStorage");
		console.log("Запускаємо функцію createElementInBigCountData");
		createElementInBigCountData(0);
	}
}


// заванажуємо данні bigDataCount з LocalStorage
function downloadBigData() {
	console.log("-- Функція downloadBigData завантажує данні з LocalStorage");
	if (localStorage.getItem("bigData") !== null) {
		bigCountData = JSON.parse( localStorage.getItem("bigData") );
		console.log("bigCountData завантажено з LocalStorage");
	} else {
		console.log("bigCountData не існує в localStorage");
		createElementInBigCountData(0);

	}
}
downloadBigData();

lastIndex = Object.keys(bigCountData).length-1; //кількість сторінок
console.log("останній індекс:" + lastIndex);

// отримуємо данні сторінки на поточну дату
let curPage;
function getCurPage() {
	console.log("-- Функція getCurPage --");
	for (let ind in bigCountData) {
		if (bigCountData[ind].date == getCurDate() ) {
			curIndex = ind;
			console.log(curIndex);
			curPage = bigCountData[ind];
			console.log("Поточна дата " + getCurDate());
			console.log("Індекс поточної сторінки " + curIndex);
			console.log("Данні поточної сторінки: ");
			console.log(curPage);
			return curPage
		} else {
			console.log("Поточної дати не існує в bigCountData, тому створюємо елемент з поточною датою");
			console.log(lastIndex);
			createElementInBigCountData(lastIndex + 1);
		}
	}
}

getCurPage();



/*function getCurIndex() {
	console.log("функція getCurIndex");
	if (bigCountData[lastIndex].date !== getCurDate()) { 
		console.log(bigCountData[lastIndex].date + " не дорівнює " + getCurDate());
		if ( isCurDateInBigCountData() ) {
			for (let ind in bigCountData) {
				if (bigCountData[ind] == getCurDate()) {
					console.log( bigCountData[ind] +" дорівнює "+ getCurDate() );
					curIndex = ind;
					console.log("curIndex = " + curIndex);
				};
				console.log(ind + " " + bigCountData[ind].date);
			}
		} else {
			console.log("створюємо сторінку для поточної дати функцією createCurDateElement");
			createCurDateElement();
		}
		console.log("поточний індекс є останнім");
		console.log(getCurDate());
	} else {
		console.log("поточна дата співпадає з поточною сторінкою");
	}
}

getCurIndex(); */

function createCurDateElement() {
	console.log("-- Функція createCurDateElement --");
	console.log("Створюється новий елемент bigCountData");
	console.log("bigCountData[0] = " + bigCountData[0]);
	if (bigCountData[0] !== undefined ) {
		lastIndex = bigCountData.length;
		console.log("bigCountData вже існує і lastIndex = " + lastIndex);
	} else {
		lastIndex = 0;
		console.log("bigCountData не існувало, тому lastIndex = 0");
	}
	createElementInBigCountData(lastIndex)
	console.log("lastIndex = " + lastIndex);
	console.log("створено елемент з поточною датою");
	console.log(bigCountData[lastIndex]);
}

function createElementInBigCountData(index) {
	console.log("-- функція createElementInBigCountData --");
	bigCountData[index] = {};
	bigCountData[index].date = getCurDate();
	bigCountData[index].count = createCountNull();
	curIndex = index;
	console.log("Елемент з індексом " + index + " створено. Ось він ");
	console.log(bigCountData[index]);
	
}

function isCurDateInBigCountData() {
	console.log("-- Функція isCurDateInBigCountData");
	for (let ind in bigCountData) {
		if (bigCountData[ind].date == getCurDate()) {
			console.log("isCurDateInBigCountData() говорить, що елемент з такою датою існує");
			return true;
		}
		console.log("isCurDateInBigCountData() говорить, що елемента з такою датою немає");
		return false;
	}
}


count = bigCountData[curIndex];
console.log(count);

// створюєм html основних кнопок
let counterDiv;
function createButoons() {
	console.log("-- Функція createButoons --");
	console.log(lastIndex);
	let count = bigCountData[curIndex].count; 	
	for (key in count) {		
		let div = document.createElement('div');
		let nameDiv = document.createElement('div');
		counterDiv = document.createElement('div');
		let plusWrapper = document.createElement('div');
		let plus = document.createElement('div');
		let minus = document.createElement('div');
		div.classList.add('el');
		div.id = key;
		counterDiv.id = key;
		plus.id = key;
		minus.id = key;
		counterDiv.classList.add('counter');
		nameDiv.classList.add('name');
		plusWrapper.classList.add('plusWrapper');
		plus.classList.add('plus');
		minus.classList.add('minus');
		wrapper.appendChild(div);
		div.appendChild(nameDiv);
		div.appendChild(counterDiv);
		div.appendChild(plusWrapper);
		plusWrapper.appendChild(minus);
		plusWrapper.appendChild(plus);
		nameDiv.innerHTML = countData[key].name;
		counterDiv.innerHTML = count[key];
		plus.innerHTML = "+";
		minus.innerHTML = "-";
		curPageCount.innerHTML = bigCountData[curIndex].date;
	}
};

createButoons();

// перезавантажити значення кнопок
function regenButtons() {
	curPage = bigCountData[curIndex];
	console.log("поточний індекс:");
	console.log(curIndex);
	console.log("дані поточної сторінки:");
	console.log(curPage);
	count = curPage.count;
	let elements = document.querySelectorAll('.el')
	let length = elements.length;
	
	for (i=0; i < length; i++) {
		let id = elements[i].id;
		elements[i].children[1].innerHTML = curPage.count[id];
		curPageCount.innerHTML = bigCountData[curIndex].date;
	}
};

// рахуємо попередню дату
function getPrevDate() {
	let string = bigCountData[curIndex+1].date;
	console.log(string);
	let arr = string.split('.');
	console.log(arr);
	arr[0]--;
	let str = arr.join('.');
	console.log(str);
	return str;
};

// рахуємо наступну дату
function getNextDate() {
	console.log("-- Функція getNextDate");
	let string = bigCountData[curIndex-1].date;
	console.log(string);
	let arr = string.split('.');
	console.log(arr);
	arr[0]++;
	let str = arr.join('.');
	console.log(str);
	return str;
};

// створюємо попередню сторінку
function createPrevPage() {
	console.log("-- Функція createPrevPage --");
	if (curIndex > 0) {
		bigCountData[curIndex] = {};
		bigCountData[curIndex].date = getPrevDate();
		bigCountData[curIndex].count = countNull;
		console.log("createPrevPage запущено");
	}
}

// створюємо наступну сторінку
function createNextPage() {
	console.log("-- Функція createNextPage --");
	bigCountData[curIndex] = {};
	bigCountData[curIndex].date = getNextDate();
	bigCountData[curIndex].count = countNull;
	console.log("createNextPage запущено");
}

// перейти на попередню сторінку
function getPrevPage() {
	console.log("-- Функція getPrevPage --");
	curIndex--;
	if ( bigCountData[curIndex] === undefined ) {
		console.log("такої сторінки не існує, створюємо її");
		createPrevPage();
		regenButtons();
	} else {
		count = bigCountData[curIndex].count;
		regenButtons();
		console.log("поточні данні -");
		console.log(bigCountData[curIndex]);
	};
}

// перейти на наступну сторінку
function getNextPage() {
	console.log("-- Функція getNextPage --");
	curIndex++;
	if ( bigCountData[curIndex] === undefined ) {
		console.log("такої сторінки не існує, створюємо її");
		createNextPage();
		regenButtons();
	} else {
		count = bigCountData[curIndex].count;
		regenButtons();
		console.log("curIndex = "+ curIndex);
		console.log("поточні данні:");
		console.log(bigCountData[curIndex]);
	};
};

// натискання кнопок вперед і назад
let prevPage = document.getElementById('prev-page');
let nextPage = document.getElementById('next-page');

prevPage.addEventListener('click', getPrevPage);
nextPage.addEventListener('click', getNextPage);

countButtons = document.querySelectorAll(".counter");

let target = "";
let childrens = "";




// завантажити count в LocalStorage
function saveCountInLocalStorage() {
	console.log("-- Функція saveCountInLocalStorage --");
	let countText = JSON.stringify( count );
	localStorage.setItem("data", countText);
	console.log("count завантажено в Local storage");
}

// завантажуємо bigCountData в LocalStorage
function saveBigCountDataInLocalStorage() {
	console.log("-- Функція saveBigCountDataInLocalStorage --");
	countText = JSON.stringify( bigCountData );
	localStorage.setItem("bigData", countText);
	console.log("bigCountData завантажено в localStorage");
};


// обробка кліка по документу
document.addEventListener('click', function(event) {
    console.log("-- Клик на документ --");
    console.log(event.target.dataset);
    if (event.target.dataset.counter != undefined) { // если есть атрибут...
      console.log("Нажато" + event.target);
      console.log("Значення " + event.target + " - " + event.target.value);
      event.target.value++;
    }

    let curClass = event.target.className;
    let curId = event.target.id;
    let target = event.target;

	switch(curClass) {

		case "counter":
			console.log("Нажато Counter");
			console.log("countData[curId].number");
			console.log(countData[curId].number);
			console.log("curIndex = " + curIndex);
			console.log("bigCountData[curIndex].count[curId]");
			console.log(bigCountData[curIndex].count[curId]);
			bigCountData[curIndex].count[curId] = bigCountData[curIndex].count[curId] + countData[curId].number;
			console.log("countData[curId].number");
			console.log(countData[curId].number);
			console.log("bigCountData[curIndex].count[curId]");
			console.log(bigCountData[curIndex].count[curId]);
			target.innerHTML = bigCountData[curIndex].count[curId];
			console.log(target);
		break;

		case "plus":
			console.log("Нажато +");
			bigCountData[curIndex].count[curId]++;
			target.parentNode.previousSibling.innerHTML = bigCountData[curIndex].count[curId];
		break;

		case "minus":
			console.log("Нажато -");
			bigCountData[curIndex].count[curId]--;
			target.parentNode.previousSibling.innerHTML = bigCountData[curIndex].count[curId];
		break;
	}
			

	if (curClass === "statistic button") {
		let modal = document.getElementById("statMod");

		modal.classList.toggle("close");
		clearStatistic();
		totalCount();
		usedIngredients();
		
		let drigStat = document.querySelector(".drigStat");
		let listStat = document.querySelector(".listStat");
		let totalStat = document.querySelector(".totalStat");
		let drigValue = document.querySelector(".drigValue");
		let listValue = document.querySelector(".listValue");
		let totalValue = document.querySelector(".totalValue");
		let totalSir = document.querySelector(".totalSir");
		  drigStat.children[0].innerHTML = drigSum;
		  listStat.children[0].innerHTML = listSum;
		  totalStat.children[0].innerHTML = totalSum;
		  drigValue.children[0].innerHTML = drigVal;
		  listValue.children[0].innerHTML = listVal;
		  totalValue.children[0].innerHTML = totalVal;
		  totalSir.children[0].innerHTML = sir;
		console.log(totalSum);
	}

	if (curId === "statMod") {
		let modal = document.getElementById("statMod");
		modal.classList.toggle("close");
	}

	if (curId === "zakupka-wrapper") {
		let zakupkaWrapper = document.getElementById("zakupka-wrapper");
		zakupkaWrapper.classList.toggle("close");
	}

	saveCountInLocalStorage();

	saveBigCountDataInLocalStorage();
	
  });


// декларую зміні для статистики
let drigSum = 0;
let listSum = 0;
let totalSum = 0;
let drigVal = 0;
let listVal = 0;
let totalVal = 0;





function clearStatistic() {
	drigSum = 0;
	listSum = 0;
	totalSum = 0;
	drigVal = 0;
	listVal = 0;
	totalVal = 0;
}

// рахую статистику
function totalCount() {
	for ( key in count ) {
		console.log(key + " " + count[key]);
		totalSum = totalSum + count[key];
		console.log(totalSum);
		console.log(countData[key].type);
		if (countData[key].type === 1) {
			drigSum = drigSum + count[key];
		}
		if (countData[key].type === 2) {
			listSum = listSum + count[key];
		}
		drigVal = drigSum*3;
		listVal = listSum*3.5;
		totalVal = drigVal + listVal;
		
	}
	return totalSum;
}  


// масив змінних
let countIngridients = {
	farshFarsh: {
		container: "farsh",
		mass: 0.1,
		value: 0
	},
	fylePetuchinia: {
		container: "petuchinia",
		mass: 0.1,
		value: 0
	},
	svinKubd: {
		container: "kubdari",
		mass: 0.14,
		value: 0
	},
	svinMyaso: {
		container: "miaso",
		mass: 0.1,
		value: 0
	},
	svinGemr: {
		container: "gemrieli",
		mass: 0.1,
		value: 0
	},
	telyatDjirg: {
		container: "djigruli",
		mass: 0.1,
		value: 0
	},
	telyatSumahi: {
		container: "sumahi",
		mass: 0.1,
		value: 0
	},
	sirHachapuri: {
		container: "hachapuri",
		mass: 0.13,
		value: 0
	},
	sirMyaso: {
		container: "miaso",
		mass: 0.06,
		value: 0
	},
	sirSir: {
		container: "sir",
		mass: 0.1,
		value: 0
	},
	sirFarsh: {
		container: "farsh",
		mass: 0.06,
		value: 0
	}
};

console.log(countIngridients);

// рахую використан інгридієнти
function usedIngredients() {
	console.log("-- Функція розрахунку інгридієнтів");
	count = bigCountData[curIndex];
	const dataIngrigients = count.count;
	for (key in countIngridients) {
		let name = countIngridients[key].container;
		countIngridients[key].value = dataIngrigients[name] * countIngridients[key].mass;
		console.log(	key +" = " + countIngridients[key].value);
	};
														
						
	let sir = countIngridients["sirHachapuri"].value + countIngridients["sirFarsh"].value + countIngridients["sirSir"].value + countIngridients["sirMyaso"].value;
	let svin = countIngridients["svinGemr"].value + countIngridients["svinKubd"].value;
	let telyat = countIngridients["telyatDjirg"].value + countIngridients["telyatSumahi"].value;
	let farsh = countIngridients["farshFarsh"].value;
	let fyle = countIngridients["fylePetuchinia"];

	console.log("sir="+sir);
		console.log("svin="+svin);
		console.log("telyat="+telyat);
		console.log("farsh="+farsh);
	};

usedIngredients();



let list = document.querySelector(".list")


// індикація натискання кнопки
function clickButton() {
	copy.classList.add("click");
	setTimeout( function() {
		copy.classList.remove("click");	
	}, 500);

	
}





// дістаю дані з файла сервера data.json
( async () => {
	fetch('data.json').then(function(response) {
		response.text().then(function(text) {
			
		}) })
})();

// створюємо архів данних bigCountData

// отримуємо поточну дату
function getCurDate() {
	let date = new Date();
	let day = date.getDate();
	let mounth = date.getMonth();
	let year = date.getFullYear();
	let curDate = day + "." + mounth + "." + year;
	return curDate;
}

// натискаємо кнопку порівняння
let globalStat = document.querySelector('.global-stat');
let globStatMod = document.getElementById("glob-statMod");
globalStat.addEventListener('click', function(e) {
	globStatModeClose();
	createGlobStat();
});

globStatMod.addEventListener('click', globStatModeClose );

function globStatModeClose() {
	globStatMod.classList.toggle("close");
}

/*function getDayOfWeek(date) {
	let days = ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"];
	return days[date.getDay()];
}

getDayOfWeek(20.06);*/


function createGlobStat() {
	console.log("-- Функція createGlobStat --");
	let table = document.createElement('table');
	console.log(globStatMod.childNodes[1] );
	
	if (globStatMod.childNodes[1] != undefined ) {
		globStatMod.childNodes[1].remove();
	}
	table.remove();
	globStatMod.appendChild(table);
	let td = document.createElement('td');
	table.appendChild(td);
	let th = document.createElement('th');
	td.appendChild(th);
	th.innerHTML = "назва";
	

	for (key in countData) {
		let tr = document.createElement('tr');
		td.appendChild(tr); 
		tr.innerHTML = countData[key].name;
	}
	

	
	for (key in bigCountData) {
		let td = document.createElement('td');
		table.appendChild(td);
		let tr = document.createElement('tr');
			td.appendChild(tr);
			tr.innerHTML = bigCountData[key].date;

		//console.log(bigCountData[key]);
		//console.log(bigCountData[key].date);
		let curCount = bigCountData[key].count;
		
		for (let ind in curCount) {
		  let tr = document.createElement('tr');
		  td.appendChild(tr);
		  tr.innerHTML = curCount[ind];
		  //console.log("ind - " + ind + " curCount[ind] - " +curCount[ind]);
		}	
	}	
}

let fromPhpToJs = document.getElementById('my-block');
console.log(fromPhpToJs.textContent);