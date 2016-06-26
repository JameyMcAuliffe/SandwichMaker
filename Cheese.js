
//IIFE to add cheese

var SandwichMaker = (function(maker){

	//Private variable to store cheese prices
	var cheesePrices = {
		"No Cheese": 0,
		"American": .50,
		"Cheddar": .50,
		"Swiss": .50
	};

	//addCheese method
	maker.addCheese = function(cheese) {
		return cheese;
	};

	//getter for cheese object
	maker.getCheesePrices = function(cheese){
		return cheesePrices[cheese];
	};

	//for in loop to populate select options
	for (var key in cheesePrices){
  	var newOption = document.createElement("option");
  	document.getElementById("cheese-chooser").appendChild(newOption);
  	newOption.innerHTML = key;
  }

	return maker;
})(SandwichMaker);