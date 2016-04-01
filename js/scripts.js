// Start Business Logic Section
var divisible3 = function(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

var divisible5 = function(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

var checkInput = function(test) {     // This function to check whether the input value is less than 1 or Not-A-Number
  if (test < 1 || Number.isNaN(test)) {
    return true;
  }
  else {
    return false;
  }
};
// End Business Logic Section

// Start Interface Logic Section
$(document).ready(function(){
  $("#blank").submit(function(event){
    event.preventDefault();

    var rawInput = parseInt($("input#inputNum").val());

    if (checkInput(rawInput)){
      $("#answer").empty();
      $("#wrongInput").show();
      $("#result").show();
    }
    else {
      $("#answer").empty();
      $("#wrongInput").hide();
      for (i = 1; i <= rawInput; i += 1) {
        if (divisible3(i) && divisible5(i)) {
          $("#answer").append("<li>" + "Ping-Pong" + "</li>");
        }
        else if (divisible5(i)) {
          $("#answer").append("<li>" + "pong" + "</li>");
        }
        else if (divisible3(i)) {
          $("#answer").append("<li>" + "ping" + "</li>");
        }
        else {
          $("#answer").append("<li>" + i + "</li>");
        }
        $("#result").show();
      };
    }
  });
});
// End Business Logic Section
