//business logic
function properRange(userInput) {
  if (userInput > 3999 || userInput < 1) {
    return false;
  }
}

function converter(userInput) {

  var outputArray = [];

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

    var inputArray = userInput.split("");

    var finalNumber = inputArray.pop();
    var secondToLastNumber = inputArray.pop();
    var thirdToLastNumber = inputArray.pop();
    var fourthToLastNumber = inputArray.pop();


    if (finalNumber === "1") {
        outputArray.push("I");
    } else if (finalNumber === "2") {
        outputArray.push("II");
    } else if (finalNumber === "3") {
      outputArray.push("III");
    } else if (finalNumber === "4") {
      outputArray.push("IV");
    } else if (finalNumber === "5") {
      outputArray.push("V");
    } else if (finalNumber === "6") {
      outputArray.push("VI");
    } else if (finalNumber === "7") {
      outputArray.push("VII");
    } else if (finalNumber === "8") {
      outputArray.push("VIII");
    } else if (finalNumber === "9") {
      outputArray.push("XI");
    } else if (finalNumber === "0") {
      outputArray.push("X");
      // will need to add exceptions to this rule for divisible by 10, 50, etc...
    }

  var finalOutput = outputArray.join("");
  return finalOutput;
} //converter





// user interface logic
$(document).ready(function(){
  $("#romanNumeralCalculator").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var inRange = properRange(userInput);
    var result = converter(userInput);
    if (inRange === false) {
      $(".output").text("Please enter a number between 1 and 3,999");
    } else {
      $(".output").text(result);
    }

  }); //submit
}); // document
