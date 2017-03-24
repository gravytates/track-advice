$(document).ready(function(){

// function ran upon submission of the questionaire
  $("#questionaire").submit(function(event) {

    event.preventDefault();

// set variables
    var name = $("#name input").val();
    var cost = $("#cost").val();
    var pace = $("#pace").val();
    var platform = $("#platform").val();
    var frontback = $("#front-back").val();
    var result = "<strong>" + name + "</strong>, thank you for taking the time to complete our form. My infallible* advice: ";

    $(".result").html(result);
    $("#form-wrapper").hide();


    alert("test");
  });




});
