//Back end
test test test test 
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();

//to calculate size price
      var size = ""; // ????
      var sizePrice = 0; //????
      var small = $("input:radio[name=small]:checked").val();
      var medium = $("input:radio[name=medium]:checked").val();
      var large = $("input:radio[name=large]:checked").val();
      var xlarge = $("input:radio[name=xlarge]:checked").val();
//to calculate size price
if (size = "small"){
  sizePrice = "$5"; //which one?
  // return "$5" // return? or this.price= ?
} else if (size = "medium"){
  sizePrice = "$7";
} else if (size = "large"){
  sizePrice = $10
} else
  sizePrice = "$13"
});

//declare Object
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings,
  // sizePrice = size price,
  // toppingsPrice = toppings price
}

//function to calculate toppings price
Pizza.prototype.calcToppings = function(){
  var price=0;
  var toppingsArray = [];
  $("input:checkbox[name=toppings]:checked").each(function(){
    var toppings = $(this).val();
    this.toppingsArray.push(toppings);
  });
  this.toppingsArray //this will be the array that was passed into Pizza
  for (var i =0; i => this.toppingsArray.length; i++){
  price += .5;
}
return price
}

Pizza.prototype.calcTotal= function(){
  return this.calcToppngs + this.sizePrice // still need to compute size price.
}

});
