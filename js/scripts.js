// // BACK END

function Pizza (size, toppings){
  size = size;
  toppings = [];
  price = 0;
}

var laurenPizza = new Pizza ("small", "[mushroom, olive]", "$8"}

//
// Pizza.prototype.calcPrice = function(){
//   this.size.val() + (this.toppings.length * .50)
//   return: this.price;
// }
//


//UI
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    $("#showPizza").show();
    // $(".showPrice").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('#showPizza').append(toppings + "<br>");
      $('#pizzaForm').hide();
    });
  });
});
}); //doc ready curly
