

function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.totalCost = 0
}

Pizza.prototype.calcTotal = function() {
  if (this.size === "small"){
    this.totalCost += 5
  } else if  (this.size === "medium") {
    this.totalCost += 7
  } else if (this.size === "large") {
    this.totalCost += 10
    console.log (this.totalCost);
  } else {
      this.totalCost += 13
      console.log(this.totalCost);
    }
    var toppingsPrice = 0;
    this.toppings.forEach(function(toppings){
      toppingsPrice += 0.5
    });
    this.totalCost += toppingsPrice
    return this.totalCost
  };
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name='size']:checked").val();
    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val()
      console.log(toppings);
      toppingsArray.push(toppings);
    });
      var newPizza = new Pizza (size, toppingsArray);

  $(".result").show();
  $("#showPrice").text(`Your pizza costs $${newPizza.calcTotal()}`);
  });
});
