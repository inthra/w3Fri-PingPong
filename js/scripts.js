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
// End Business Logic Section

// Start Interface Logic Section
$(document).ready(function(){
  $("#blank").submit(function(event){
    event.preventDefault();

    var rawNum = parseInt($("input#inputNum").val());
    console.log(rawNum);

    for (i = 1; i <= rawNum; i += 1) {
console.log(i);
      if (divisible3(i) && divisible5(i)) {
        $("#answer").append("<li>" + "pingpong" + "</li>");
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
    };
  });
});
// End Business Logic Section
