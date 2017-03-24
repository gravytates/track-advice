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

    // attempt to refractor useralerts

    // var useralert = function(field, flag) {
    //   if (!field) {
    //     flag;
    //     exit;
    //   };
    //
    // useralert(name, ($("#name-warning").show()));
    // useralert(cost, $("#cost-warning"));
    // useralert(pace, $("#pace-warning"));
    // useralert(platform, $("#platform-warning"));
    // useralert(frontback, $("#front-back-warning"));

    if (!name) {
      $("#name-warning").show();
      exit;
    } else {
      $("#name-warning").hide();
    };

    if (!cost) {
      $("#cost-warning").show();
      exit;
    } else {
      $("#cost-warning").hide();
    };

    if (!pace) {
      $("#pace-warning").show();
      exit;
    } else {
      $("#pace-warning").hide();
    };

    if (!platform) {
      $("#platform-warning").show();
      exit;
    } else {
      $("#platform-warning").hide();
    };

    if (!frontback) {
      $("#front-back-warning").show();
      exit;
    } else {
      $("#front-back-warning").hide();
    };

    $(".result").html(result);
    $("#form-wrapper").hide();

// logic to choose track/advice. parsed down from many longer lines!
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
    };
  });




});
