//business logic
function properRange(userInput) {
  if (userInput > 3999 || userInput < 1) {
    return false;
  }
}

function converter(userInput) {

  var output = [];

  if (userInput === "5") {
    console.log("if statement is running");
    return "V";
  } else if (userInput === "10") {
    return "X";
  } else if (userInput === "50") {
    return "L";
  } else if (userInput === "100") {
    return "C";
  } else if (userInput === "500") {
    return "D";
  } else if (userInput === "1000") {
    return "M";
  }
}





// user interface logic
$(document).ready(function(){
  $("#romanNumeralCalculator").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var inRange = properRange(userInput);
    var result = converter(userInput);
    console.log(result);
    if (inRange === false) {
      $(".output").text("Please enter a number between 1 and 3,999");
    } else {
      $(".output").text(result);
    }

  }); //submit
}); // document
