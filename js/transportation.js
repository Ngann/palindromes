$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<bt>");
    });
    $('#transportation_survey').hide();
  });
});

//The spacing between the : and checked matters, below code does not work
// $("input:checkbox[name=work-transportation]: checked").each(function(){
