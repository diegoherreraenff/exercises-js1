/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function greeting (mentor) {
  if (mentor === "daniel"){
    return "hi, im daniel, i`m a mentor"
  }
}
    

var name = "Daniel";
var danielsRole = "mentor";

console.log (greeting("daniel"))
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
