//Back end
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();


    //declare Object

    function Pizza (size, toppings) {
      this.size = size,
      this.toppings = toppings,
      // sizePrice = size price,
      // toppingsPrice = toppings price
    }

//to calculate size price
      var size = " "; // ????
      var sizePrice = 0; //????
      var small = $("input:radio[name=small]:checked").val();
      var medium = $("input:radio[name=medium]:checked").val();
      var large = $("input:radio[name=large]:checked").val();
      var xlarge = $("input:radio[name=xlarge]:checked").val();

//to calculate size price
Pizza.prototype.sizePrice = function() {
  if (size = "small"){
    return "$5";
  } else if  (size = "medium") {
    return "$7";
  } else if (size = "large") {
    return "$10"
  } else {
      return "13"
    }
  };



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
