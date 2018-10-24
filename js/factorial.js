$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

// num is a placeholder parameter, when you run the function firstFactorial(numberInput) , you are passing the arguement/varable numberInput in placement of num.

    var numberInput = parseInt($("input#number").val());
    var firstFactorial = function(num){
      var factorial = 1;
      var total =[];
      for(var i = 1; i <=num; i++){
        factorial = factorial *i;
      }
      return factorial;
    }
    var result = firstFactorial(numberInput);
    console.log(result);
    $(".output").text(result);

  });
});
