$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressTestResult = $(this).val();
      $('#stress-responses').append(stressTestResult + "<bt>");
    });
    $('#stress_test').hide();
  });
});

//The spacing between the : and checked matters, below code does not work
// $("input:checkbox[name=work-transportation]: checked").each(function(){
