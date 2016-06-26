
//IIFE to add bread
var SandwichMaker = (function(maker){

	//private variable to store bread prices
	var breadPrices = {
		"Wheat": .99,
		"White": .99,
		"5-Grain": .99
	};

	//add bread method
	maker.addBread = function(bread){
		return bread;
	};

	//getter for bread object
	maker.getBreadPrices = function(bread){
		return breadPrices[bread];
	};

	//for in loop to populate select options
	for (var key in breadPrices){
  	var newOption = document.createElement("option");
  	document.getElementById("bread-chooser").appendChild(newOption);
  	newOption.innerHTML = key;
  }

	return maker;

})(SandwichMaker);