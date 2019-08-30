$(document).ready(function(){

// BACK END

function Pizza (size, toppings){
  size = size;
  toppings = [];
  price = 0;
}

// var sizePrice = sizecheckbox:checked .val
Pizza.prototype.calcPrice = function(){
  this.size.val() + this.toppings.length * .50
}



//UI
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
var toppingsIds = $(".toppingsChoices input:checkbox:checked")
return $(this).val();
console.log(toppingsIds);
}).toArray();

    });

//   $("input:checkbox[name=toppings]:checked").each(function(){
//     var showToppings = $(this).val();
//     toppingsArray.push(showToppings);
//     $("#showPizza").show();
//   });
//   $("#pizzaForm").hide();
// });
// });



}); //doc ready curly
