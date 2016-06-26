
//IIFE to add veggies
var SandwichMaker = (function(maker){

	//Private variable to store the veggie prices
	var veggiePrices = {
		"No Veggies": 0,
		"Lettuce": .49,
		"Tomatos": .59,
		"Onions": .49,
		"Peppers": .69,
		"Spinach": .49
	};

	//Augment sandwichmaker object with addVeggie method
	maker.addVeggie = function(veggie) {
		return veggie;
	};

	//getter for veggie object
	maker.getVeggiePrices = function(veggie){
		return veggiePrices[veggie];
	};

	//for in loop to populate select options
	for (var key in veggiePrices){
  	var newOption = document.createElement("option");
  	document.getElementById("veggie-chooser").appendChild(newOption);
  	newOption.innerHTML = key;
  }

	return maker;

})(SandwichMaker);