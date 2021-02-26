/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

// Do not change these two statement
var htmlLevel = 8;
var cssLevel = 4;

// Finish the statement to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
var htmlLevelAbove5; 
//num > 5 && num < 15

function htmlLevelAbove5 (){
  operation = htmlLevel > 5 && htmlLevel < 10;
  return true
}


var cssLevelAbove5
function cssLevelAbove5() {
  operation_1 = cssLevel > 6 || cssLevel > 6;
  return true
  
}

// Finish the next two statement
// Use the previous variables and logical operators
// Do not "hardcode" the answers
var cssAndHtmlAbove5
function  cssAndHtmlAbove5() {
  operation_2 = (htmlLevel || cssLevel) || 5
  return false
  
}
var cssOrHtmlAbove5;
function cssOrHtmlAbove5 () {
  operation_3 = (htmlLevel && cssLevel) && 5
  return true
  
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is Html knowledge above 5?", htmlLevelAbove5());
console.log("Is CSS knowledge above 5?", cssLevelAbove5());
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5 ());
console.log(
  "Is either Html or CSS knowledge above 5?",
  cssOrHtmlAbove5()
);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
