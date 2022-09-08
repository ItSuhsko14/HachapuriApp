
let wrapper = document.querySelector(".wrapper-vipichka");
let restart = document.querySelector('.restart');
let count;
let bigCountData = {}; 
let curPageCount = document.querySelector('.cur-page');
let lastIndex;
let nextIndex;
let curIndex;
let countNull = {};

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
		"name": "Абрикос",
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
	"adjar": {
		"name": "Аджар.",
		"number": 1,
		"type": 2,
		"price": 3.5,
	},
	};


// завантажуємо count з LocalStorage
function downloadCount() {
	console.log("-- Функція downloadCount");
	if ( localStorage.getItem("data") != null ) {
		console.log("count існує в localStorage");
		count = JSON.parse( localStorage.getItem("data") );
		console.log("count завантажено з LocalStorage");
	} else {
		console.log("count не існує в localStorage");
		count = createCountNull();
		console.log("count = ");
		console.log(count);
	}
}

downloadCount();

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
	
	
	console.log("Поточні значення:");
	count = createCountNull();
	countText = JSON.stringify( count );
	localStorage.setItem( "data", countText );
	console.log("Завантажено count у LocalStorage");
	
	
	
	location.reload();
	console.log("Сторінку перезавантажено");
});




// створюєм html основних кнопок
let counterDiv;
function createButoons() {
	console.log("-- Функція createButoons --");
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

// обробка кліка по документу
document.addEventListener('click', function(event) {
    console.log("-- Клик на документ --");
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
			console.log(target.id);
			count[target.id] = count[target.id] + countData[target.id].number;
			console.log("count[target.id]");
			console.log(count[target.id]);
			target.innerHTML = count[target.id];
			saveCountInLocalStorage();
		break;

		case "plus":
			console.log("Нажато +");
			count[curId]++;
			target.parentNode.previousSibling.innerHTML = count[curId];
			saveCountInLocalStorage();
		break;

		case "minus":
			console.log("Нажато -");
			count[curId]--;
			target.parentNode.previousSibling.innerHTML = count[curId];
			saveCountInLocalStorage();
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
	console.log(' -- Функція підрахунку статистики');
	console.log(count);
	console.log(countData);
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
		console.log(drigVal);
		console.log(listVal);
		console.log(totalVal);
	}
	return totalSum;
}  

let list = document.querySelector(".list")


// індикація натискання кнопки copy
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


/*function getDayOfWeek(date) {
	let days = ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"];
	return days[date.getDay()];
}

getDayOfWeek(20.06);*/


function createGlobStat() {
	console.log("-- Функція createGlobStat --");
	
}



