
//IIFE to add condiments
var SandwichMaker = (function(maker){

	//Private variable to store condiment prices
	var condimentPrices = {
		"No Condiments": 0,
		"Oil and Vinegar": 0,
		"Deli Mustard": .25,
		"Spicy Mustard": .25
	};

	//addCondiment method
	maker.addCondiment = function(condiment) {
		return condiment;
	};

	//getter for condiment object
	maker.getCondimentPrices = function(condiment){
		return condimentPrices[condiment];
	};

	//for in loop to populate select options
	for (var key in condimentPrices){
  	var newOption = document.createElement("option");
  	document.getElementById("condiment-chooser").appendChild(newOption);
  	newOption.innerHTML = key;
  }

	return maker;

})(SandwichMaker);