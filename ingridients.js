console.log(count);

// об'єкти випічки

class Recipe {
	constructor(name) {
		this.name = name;
	}
};

let hachapuri = new Recipe("Hachapuri");

console.log(hachapuri);

// масив змінних
let countIngridients = {
	farshFarsh: {
		container: "farsh",
		mass: 100,
		value: 0
	},
	fylePetuchinia: {
		container: "petuchinia",
		mass: 100,
		value: 0
	},
	sirPetuchinia: {
		container: "petuchinia",
		mass: 35,
		value: 0
	},
	svinKubd: {
		container: "kubdari",
		mass: 140,
		value: 0
	},
	svinMyaso: {
		container: "miaso",
		mass: 100,
		value: 0
	},
	svinGemr: {
		container: "gemrieli",
		mass: 100,
		value: 0
	},
	telyatDjirg: {
		container: "djigruli",
		mass: 100,
		value: 0
	},
	telyatSumahi: {
		container: "sumahi",
		mass: 100,
		value: 0
	},
	sirHachapuri: {
		container: "hachapuri",
		mass: 130,
		value: 0
	},
	sirMyaso: {
		container: "miaso",
		mass: 60,
		value: 0
	},
	sirSir: {
		container: "sir",
		mass: 100,
		value: 0
	},
	sirFarsh: {
		container: "farsh",
		mass: 60,
		value: 0
	},
	sirAdjar: {
		container: "adjar",
		mass: 600,
		value: 0
	},
};


// рахую використан інгридієнти


let sir;
let svin;
let telyat;
let farsh;
let fyle;
let tisto;


function fromUsualToDecimal (str) { // перевожу спеціальний запис формата цілі-частини в десятковий дріб, тобто 2-2 = 2.25
	console.log(" -- function fromUsualToDecimal");
	console.log(str);
	str = String(str);
	console.log(str);
	let parce = str.split(".");
	let result;
	console.log(parce[1]);
	if (parce[1] != undefined ) {
		console.log( Number(parce[1])/8 );
		result = Number(parce[0]) + Number(parce[1]/8);
		} else {
			result = Number(str);
		}
	console.log(result);
	return result;
}


function tistoTransform(sum) { //повертає десятковий дріб у вигляді кількості цілих і восьмих частин
	console.log(" -- function tistoTransform ");
	console.log(sum);
	let sumTrunc = Math.trunc(sum);
	console.log(sumTrunc);
	let drib = sum - sumTrunc;
	console.log(drib);
	drib = drib*100/12.5;
	console.log(drib);
	//let result = Math.floor(sum);
	//console.log(result);
	let result = sumTrunc;
	result = result + " " + drib +"/8";
	console.log(result);
	return result;
};


//-1.125
//-1
//-1.125 - (-1) = -0.125
//drib = -1/8
//sumTrunc = -1



		


function howMuchTisto() { // повертає кількість листкового тіста
	console.log("-- How much tisto");
	let sum = 0;
	for (el in countData) {
		if (countData[el].type == 2) {
		sum += count[el]*1/8;
		
		}
	}
	return sum;
};

function usedIngredients() {
	console.log("-- Функція розрахунку інгридієнтів");
	const dataIngrigients = count;
	for (key in countIngridients) {
		let name = countIngridients[key].container;
		let result = dataIngrigients[name] * countIngridients[key].mass;
		countIngridients[key].value = Math.round(result*1000)/1000;
		let output = Math.round(countIngridients[key].value*1000)/1000;
	};
														
	sir = countIngridients["sirHachapuri"].value + countIngridients["sirFarsh"].value + countIngridients["sirSir"].value + countIngridients["sirMyaso"].value + countIngridients["sirPetuchinia"].value + countIngridients["sirAdjar"].value;
	sir = Math.round(sir*1000)/1000;
	svin = countIngridients["svinGemr"].value + countIngridients["svinKubd"].value + countIngridients["svinMyaso"].value;
	svin = Math.round(svin*1000)/1000;
	telyat = countIngridients["telyatDjirg"].value + countIngridients["telyatSumahi"].value;
	telyat = Math.round(telyat*1000)/1000;
	farsh = countIngridients["farshFarsh"].value;
	farsh = Math.round(farsh*1000)/1000;
	fyle = countIngridients["fylePetuchinia"].value;
	fyle = Math.round(fyle*1000)/1000;
	tisto = howMuchTisto();
	innerIngridients();
	
	};

//заповнюємо данні інгридієнтів
function innerIngridients() {
	let svinDiv = document.querySelector(".svinDiv");
	let telyatDiv = document.querySelector(".telyatDiv");
	let farshDiv = document.querySelector(".farshDiv");
	let sirDiv = document.querySelector(".sirDiv");
	let fyleDiv = document.querySelector(".fyleDiv");
	let tistoDiv = document.querySelector(".tistoDiv");
	
	svinDiv.innerHTML = svin + " г";
	telyatDiv.innerHTML = telyat + " г";
	farshDiv.innerHTML = farsh + " г";
	fyleDiv.innerHTML = fyle + " шт.";
	sirDiv.innerHTML = sir + " г";
	tistoDiv.innerHTML = tistoTransform(tisto) + " шт.";
}



// натискаємо кнопку порівняння
let globalStat = document.querySelector('.global-stat');
let globStatMod = document.getElementById("glob-statMod");
globalStat.addEventListener('click', function(e) {
	globStatModeClose();
	createGlobStat();
});

	
//кнопка рахувати
let calculate = document.getElementById("ingridients-calculate");
calculate.addEventListener('click', function(e) {
	calculateSub();
});

function calculateSub() {
	console.log(" -- function calculateSub -- ");
	let svinSub = document.getElementById("svin-sub");
	let svinYest = +document.getElementById("svin-yest").value;
	console.log(svinYest);
	let svinTod = +document.getElementById('svin-tod').value;
	let svinAdd = +document.getElementById('svin-add').value;
	let sub = svinTod - (svinYest + svinAdd - svin);
	sub = Math.round(sub*100)/100;
	svinSub.innerHTML = sub;
	

	let telyatSub = document.getElementById("telyat-sub");
	let telyatYest = +document.getElementById("telyat-yest").value;
	let telyatTod = +document.getElementById('telyat-tod').value;
	let telyatAdd = +document.getElementById('telyat-add').value;
	let subTelyat = telyatTod - (telyatYest + telyatAdd - telyat);
	sub = Math.round(subTelyat*100)/100;
	telyatSub.innerHTML = sub;

	let farshSub = document.getElementById("farsh-sub");
	let farshYest = +document.getElementById("farsh-yest").value;
	let farshTod = +document.getElementById('farsh-tod').value;
	let farshAdd = +document.getElementById('farsh-add').value;
	let subFarsh = farshTod - (farshYest + farshAdd - farsh);
	console.log(subFarsh);
	sub = Math.round(subFarsh*100)/100;
	farshSub.innerHTML = sub;
	
	let sirSub = document.getElementById("sir-sub");
	let sirYest = +document.getElementById("sir-yest").value;
	let sirTod = +document.getElementById('sir-tod').value;
	let sirAdd = +document.getElementById('sir-add').value;
	let subSir = sirTod - (sirYest + sirAdd - sir);
	sub = Math.round(subSir*100)/100;
	sirSub.innerHTML = sub;

	let fyleSub = document.getElementById("fyle-sub");
	let fyleYest = +document.getElementById("fyle-yest").value;
	let fyleTod = +document.getElementById('fyle-tod').value;
	let fyleAdd = +document.getElementById('fyle-add').value;
	let subFyle = fyleTod - (fyleYest + fyleAdd - fyle);
	sub = Math.round(subFyle*100)/100;
	fyleSub.innerHTML = sub;

	let tistoSub = document.getElementById("tisto-sub");
	let tistoYest = document.getElementById("tisto-yest").value;
	console.log(tistoYest);
	tistoYest = fromUsualToDecimal(tistoYest);
	console.log("tistoYest");
	console.log(typeof tistoYest);
	let tistoTod = document.getElementById('tisto-tod').value;
	tistoTod = fromUsualToDecimal(tistoTod);
	console.log("tistoTod");
	console.log(typeof tistoTod);
	let tistoAdd = document.getElementById('tisto-add').value;
	tistoAdd = fromUsualToDecimal(tistoAdd);
	console.log("tistoAdd");
	console.log(typeof tistoAdd);
	console.log(tistoAdd);
	
	let subTisto = tistoTod - (tistoYest + tistoAdd - tisto);
	console.log(`subTisto ${subTisto} = tistoTod ${tistoTod} - (tistoYest ${tistoYest} + tistoAdd ${tistoAdd} - tisto ${tisto}) `);
	console.log(subTisto);
	sub = Math.round(subTisto*1000)/1000;
	console.log(sub);
	tistoSub.innerHTML = tistoTransform(sub);
}

//кнопка закрити
let ingridientsClose = document.getElementById("ingridients-close");
ingridientsClose.addEventListener('click', function(e) {
	console.log(ingridientsClose);
	globStatMod.classList.add("close");
});

//globStatMod.addEventListener('click', globStatModeClose );

function globStatModeClose() {
	usedIngredients();
	globStatMod.classList.toggle("close");
}



function filterArray(numbers, value) {
   // Change code below this line
  let array = [];
  for (i=0; i<numbers.length; i++) {
  	console.log(i);
  	console.log(numbers[i]);
    if (numbers[i]>value) {
      array.push(numbers['sdf']);
    }
  }
  return array;


  // Change code above this line
}

function includes(array, value) {
  // Change code below this line
  for (let el of array) {
    console.log(el);
    if (el == value) {
      return true;
    };

  }
  return false;
  // Change code above this line
}

function countFromPrompt() {
	console.log(" -- function countRemainder --");
	let sum = 0;
	for (let i = 0; i <= 100; i++) {
		let a = +prompt("Введи кількість або натисни cancel", " ");
		if (a == 0) {
			return sum;
			break;
		} else {
			sum += a;
		}
	}
	console.log(sum);
	return sum;
}

let sirTod = document.getElementById("sir-tod");
let sirCount = document.getElementById("sir-count");
console.log(sirCount);
console.log(sirTod);



let buttonsCountRemainder = document.getElementsByClassName("input-div");
console.log(buttonsCountRemainder);

for (button of buttonsCountRemainder) {
	console.log(button.children[1]);
	button.children[1].onclick = function(event) {
		console.log(event.target.previousElementSibling);	
		a = countFromPrompt();
		event.target.previousElementSibling.value = a;
	}
}