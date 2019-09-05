

function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.sizePrice = 0,
  this.totalCost = " "//??
}
console.log(Pizza);

var newPizza = new Pizza (this.size, this.toppings, this.sizePrice, this.totalCost)
console.log(newPizza);

var size = $("input:radio[name='size']:checked").val();
console.log(size); // returns "undefined"
Pizza.prototype.sizePrice = function() {
  if (size = "small"){
    this.sizePrice += 5
  } else if  (size = "medium") {
    this.sizePrice += 7
  } else if (size = "large") {
    this.sizePrice += 10
    console.log (this.sizePrice);
  } else {
      this.sizePrice += 13
    }
    console.log(this.sizePrice);
  };

Pizza.prototype.calcToppings = function(){
    var toppingsPrice = 0;
    toppingsArray.forEach(function(toppings){
    toppingsPrice += 0.5
  });
  newPizza.calcToppings();
  console.log(newPizza.calcToppings)
};

$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      console.log(toppings);
      this.toppingsArray.push(toppings); //console showing "push" as undefined. Also tried "append" with same result.
    });
  $(".result").show();
  $("#showPrice").text(newPizza.totalCost);
  });
});
