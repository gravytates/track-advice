$(document).ready(function(){

// function ran upon submission of the questionaire
  $("#questionaire").submit(function(event) {

// set variables
    var name = $("#name input").val();
    var cost = $("#cost").val();
    var pace = $("#pace").val();
    var platform = $("#platform").val();
    var font-back = $("#front-back").val();




    event.preventDefault();
    alert("test");
  });




});
