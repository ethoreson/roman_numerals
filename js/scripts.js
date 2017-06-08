// business logic:
var arabic_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman_values = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var result = "";

var checkValidity = function(originalArabicString) {
  var arabic = parseInt(originalArabicString);
  if ((isNaN(arabic)) || (arabic < 1) || (arabic >= 4000)) {
    alert("Please enter a valid number between 1-3,999");
  }
  else {
    toRoman(originalArabicString);
  }
  return result;
}

var toRoman = function(originalArabicString) {
  var input = parseInt(originalArabicString);
  for (i = 0; i <= roman_values.length; i+= 1) {
    if (input >= arabic_values[i]) {
      result += roman_values[i];
      input -= arabic_values[i];
      i -= 1;
    }
  }
  return result;
}

// user interface:

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var originalArabicString = $("#arabic-input").val();
    var outputResult = checkValidity(originalArabicString);
    $(".output").text(outputResult);
  });
});
