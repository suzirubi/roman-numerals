// business logic
function properRange(userInput) {
  if (userInput > 3999 || userInput < 1) {
    return false;
  }
}



//numeralConverter




// user interface logic
$(document).ready(function(){
  $("#romanNumeralCalculator").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var inRange = properRange(userInput);
    console.log(inRange);
    //var result = numeralConverter(userInput);

    if (inRange === false) {
      $(".output").text("Please enter a number between 1 and 3,999");
    }
  //  $("#output").text(result);


  }); //submit
}); // document
