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
		mass: 0.1,
		value: 0
	},
	fylePetuchinia: {
		container: "petuchinia",
		mass: 0.1,
		value: 0
	},
	sirPetuchinia: {
		container: "petuchinia",
		mass: 0.035,
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
	},
	sirAdjar: {
		container: "adjar",
		mass: 0.6,
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

function usedIngredients() {
	console.log("-- Функція розрахунку інгридієнтів");
	const dataIngrigients = count;
	for (key in countIngridients) {
		console.log(key);
		let name = countIngridients[key].container;
		let result = dataIngrigients[name] * countIngridients[key].mass;
		countIngridients[key].value = Math.round(result*1000)/1000;
		let output = Math.round(countIngridients[key].value*1000)/1000;
		
	};
														
						
	sir = countIngridients["sirHachapuri"].value + countIngridients["sirFarsh"].value + countIngridients["sirSir"].value + countIngridients["sirMyaso"].value + countIngridients["sirPetuchinia"].value + countIngridients["sirAdjar"].value;
	svin = countIngridients["svinGemr"].value + countIngridients["svinKubd"].value + countIngridients["svinMyaso"].value;
	telyat = countIngridients["telyatDjirg"].value + countIngridients["telyatSumahi"].value;
	farsh = countIngridients["farshFarsh"].value;
	fyle = countIngridients["fylePetuchinia"].value;
	tisto = 1
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
	
	svinDiv.innerHTML = svin + " кг";
	telyatDiv.innerHTML = telyat + " кг";
	farshDiv.innerHTML = farsh + " кг";
	fyleDiv.innerHTML = fyle + " шт.";
	sirDiv.innerHTML = sir + " кг";
	tistoDiv.innerHTML = tisto + " шт.";
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
	console.log(calculate);
	calculateSub();
});

function calculateSub() {
	let svinSub = document.getElementById("svin-sub");
	let svinYest = +document.getElementById("svin-yest").value;
	let svinTod = +document.getElementById('svin-tod').value;
	let svinAdd = +document.getElementById('svin-add').value;
	let sub = svinTod - (svinYest + svinAdd - svin);
	sub = Math.round(sub*100)/100;
	svinSub.innerHTML = sub;
	console.log(typeof svinYest);
	console.log(svinAdd);
	console.log(svin);
	console.log(svinTod);
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

let countSir = document.getElementById('count-sir');
let masSir = 10 - 10;

function countingSir() {
	console.log(" -- Функція countSir");
	while (true) {
		let countMass = + prompt("Вага сира");
		if (!countMass) break;
		masSir = masSir + countMass;
		console.log(masSir);
	}
	console.log("Кінцева вага сира: " + masSir);
	alert("Кінцева вага сира: " + masSir);
};

countSir.addEventListener('click', countingSir );

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


  console.log(includes([1,2,3,4,5],3) );