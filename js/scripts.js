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



    if (cost === "no") {
      $("#wait").show();
    } else {

      if (platform === "mobile") {
        $("#java").show();
      } else if (pace === "established" && platform === "internal" && frontback === "back") {
        $("#C").show();
      } else if (platform === "internal" && frontback === "front") {
        $("#design").show();
      } else {
        $("#ruby").show();
      }
    
      // } else if (pace === "evolving" && platform === "mobile") {
      //   $("#java").show();
      // }





    };

    //   // show specific result
    //   if (entertainment === "music") {
    //     $("#old-music").show();
    //   } else if (entertainment === "books") {
    //     $("#old-books").show();
    //   } else {
    //     $("#old-movies").show();
    //   }
    //
    // } else {
    //   // if user is less than 40, check prefered entertainment
    //   // show specific result
    //   if (entertainment === "music") {
    //     $("#young-music").show();
    //   } else if (entertainment === "books") {
    //     $("#young-books").show();
    //   } else {
    //     $("#young-movies").show();
    //   }
    //
    // };


    alert("test");

  });




});
