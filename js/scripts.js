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

var divisible15 = function(number) {
  if (number % 15 === 0) {
    return true;
  } else {
    return false;
  }
};
// End Business Logic Section

// Start Interface Logic Section
$(document).ready(function(){
  $("#blank form").submit(function(event){
    event.preventDefault();

    var rawNum = $("input#inputNum").val();

    for (i = 1)
  })
}):
// End Business Logic Section
