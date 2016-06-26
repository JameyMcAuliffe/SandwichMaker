
//Sandwich maker iife

var SandwichMaker = (function () {


	//Private variable to store the price
	var total = 0;
	var storeTotal = document.getElementById("total");
	var sandwich = document.getElementById("sandwich");
	var ingredients = "";
	
	//storeTotal.innerHTML = total;


	// Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      total += toppingPrice;
      storeTotal.innerHTML = total.toFixed(2);
  	},
  	addIngredient: function(ingredient) {
  		ingredients += ingredient + ", ";
  		sandwich.innerHTML = ingredients;
  	}
  

  };

})();

// //Loose iife 
// var SandwichMaker = (function(sandwich){
  
//   return sandwich;

// })(SandwichMaker || {});