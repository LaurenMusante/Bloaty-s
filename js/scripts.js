$(document).ready(function(){

// BACK END
function Create (price){
  this.pizzaAmount = [];
  this.totalItems = this.assignId;  // needed?
  this.currentId = 0;
} //object curly ender

Create.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Create.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzaAmount.push(pizza);
}

function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice =;
}
//
// var individualPizzaPrice =

Pizza.prototype.smallCalcPrice = function(){
var smallVal = $("input:checkbox[name=small]:checked").val();
  smallVal + this.toppings.length +0.5;
}
Pizza.prototype.medCalcPrice = function(){
var medVal = $("input:checkbox[name=med]:checked").val();
  medVal + this.toppings.length +0.75;
}
Pizza.prototype.largeCalcPrice = function(){
var largeVal = $("input:checkbox[name=large]:checked").val();
  largeVal+ this.toppings.length +1;
}
Pizza.prototype.smallCalcPrice = function(){
var xlargeVal = $("input:checkbox[name=xlarge]:checked").val();
  xlargeVal + this.toppings.length +1.25;
}


//UI




}); //doc ready curly
