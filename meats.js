
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"No Meat": 0,
  	"Turkey": .99,
  	"Ham": 1.09,
  	"Bacon": 1.29,
  	"Chicken": 1.19
  };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    return meat;
  };

  //getter for meatPrices object
  maker.getMeatPrices = function(meat){
  	return meatPrices[meat];
  };

  //for in loop to populate select options
  for (var key in meatPrices){
  	var newOption = document.createElement("option");
  	document.getElementById("meat-chooser").appendChild(newOption);
  	newOption.innerHTML = key;
  }
  

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

// Loose augmentation call
// (SandwichMaker || {});
