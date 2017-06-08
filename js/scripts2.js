// business logic:
arabic_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
roman_values = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var checkValidity = function(originalArabicString) {
  var arabic = parseInt(originalArabicString);
  if ((isNaN(arabic)) || (arabic < 1) || (arabic >= 4000)) {
    alert("Please enter a valid number between 1-3,999");
  }
  else {
    toRoman(originalArabicString);
  }
}

var toRoman = function(originalArabicString) {
  columnNum = originalArabicString.length;
  var arabic = parseInt(originalArabicString);
  if (columnNum === 4) {
    columnNum
  }
}



// user interface:

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var originalArabicString = $("#arabic-input").val();
    checkValidity(originalArabicString);
  });
});
