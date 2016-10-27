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


    if (fourthToLastNumber === "1" || fourthToLastNumber === "2" || fourthToLastNumber === "3") {
      outputArray.push("M");
    }

    if (thirdToLastNumber === "1") {
        outputArray.push("C");
    } else if (thirdToLastNumber === "2") {
        outputArray.push("CC");
    } else if (thirdToLastNumber === "3") {
      outputArray.push("CCC");
    } else if (thirdToLastNumber === "4") {
      outputArray.push("CD");
    } else if (thirdToLastNumber === "5") {
      outputArray.push("D");
    } else if (thirdToLastNumber === "6") {
      outputArray.push("DC");
    } else if (thirdToLastNumber === "7") {
      outputArray.push("DCC");
    } else if (thirdToLastNumber === "8") {
      outputArray.push("DCCC");
    } else if (thirdToLastNumber === "9") {
      outputArray.push("CM");
    } else if (thirdToLastNumber === "0") {
      outputArray.push("");
    }

    if (secondToLastNumber === "1") {
        outputArray.push("X");
    } else if (secondToLastNumber === "2") {
        outputArray.push("XX");
    } else if (secondToLastNumber === "3") {
      outputArray.push("XXX");
    } else if (secondToLastNumber=== "4") {
      outputArray.push("XL");
    } else if (secondToLastNumber === "5") {
      outputArray.push("L");
    } else if (secondToLastNumber === "6") {
      outputArray.push("LX");
    } else if (secondToLastNumber === "7") {
      outputArray.push("LXX");
    } else if (secondToLastNumber === "8") {
      outputArray.push("LXXX");
    } else if (secondToLastNumber === "9") {
      outputArray.push("XC");
    } else if (secondToLastNumber === "0") {
      outputArray.push("");
    }

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
