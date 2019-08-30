//Back end
var pizza; //declaring object called pizza

var pizza;
pizza.toppings = [];

// //UI
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    $("#showPizza").show();
    // $(".showPrice").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      pizza.toppings.push(toppings);
      $('#showPizza').append(toppings + "<br>");
      $('#pizzaForm').hide();

    });
  });
});
