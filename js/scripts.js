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

var checkNum = function(test) {     // Function to check input value is 0 or not
  if (test < 1) {
    return true;
  }
  else {
    return false;
  }
};

var checkNotNumber = function(test) {     // Function to check input value is a Number
  if (Number.isNaN(test)) {
    return true;
  }
  else {
    return false;
  }
};
// End Business Logic Section

// Start User Interface Logic Section
$(document).ready(function(){
  $("#blank").submit(function(event){
    event.preventDefault();

    var rawInput = parseInt($("input#inputNum").val());

    if (checkNum(rawInput)) {
      $("#wrongNum").show();
      $("#wrongInput").hide();
      $("#answer").empty();
      $("#result").show();
    }
    else if (checkNotNumber(rawInput)) {
      $("#wrongInput").show();
      $("#wrongNum").hide();
      $("#answer").empty();
      $("#result").show();
    }
    else {
      $("#result").hide();
      $("#answer").empty();
      $("#wrongNum").hide();
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
// End User Interface Logic Section
