//Back end

$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();

//to calculate size price
      var size = $("input:radio[name=size]:checked").val();
      // var medium = $("input:radio[name=size]:checked").val();
      // var large = $("input:radio[name=size]:checked").val();
      // var xlarge = $("input:radio[name=size]:checked").val();
//to calculate size price
if (size = "small"){
  return "$5" // return? or this.price= ?
  console.log(size)
} else if (size = "medium"){
  this.price="$7"
} else if (size = "large"){
  this.price="$10"
} else
  this.price="$13"
});

//declare Object
function Pizza (size, toppings) {
  size = size,
  toppingsArray = toppings,
  sizePrice = size price,
  toppingsPrice = toppings price
}

//make toppingsArray
var toppingsArray = [];
$("input:checkbox[name=toppings]:checked").each(function(){
  var toppings = $(this).val();
  this.toppingsArray.push(toppings); //this.? Do I need?
}):



var workTransportationMode = $(this).val();
   $('#work-responses').append(workTransportationMode + "<br>");
 });
 $('#transportation_survey').hide();
});
//function to calculate toppings price
Pizza.prototype.calcToppings = function(){
  var price=0;
  var toppingsArray=[]; //pizza.toppings?
  this.toppingsArray=[]; //<----?
  for (var i =0; i => this.toppingsArray.length; i++){
  this.price += .5; //can also just do if length === 1, $x; if length === 2, $y,
}
return this.toppingsPrice //with or without "this."?
}

Pizza.prototype.calcTotal= function(){
  return this.toppingsPrice + this.sizePrice // with or without "this."?"
}

});
// // //UI
// $(document).ready(function(){
//   $("form#pizzaForm").submit(function(event){
//     event.preventDefault();
//     $("#showPizza").show();
//     // $(".showPrice").show();
//     $("input:checkbox[name=toppings]:checked").each(function(){
//       var toppings = $(this).val();
//       pizza.toppings.push(toppings);
//       $('#showPizza').append(toppings + "<br>");
//       $('#pizzaForm').hide();
//
//     });
//   });
// });
