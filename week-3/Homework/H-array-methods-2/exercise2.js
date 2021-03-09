/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

//let result= str.charAt(0).toUpperCase() + str.slice(1);
  //return result

function capitalise(str) {
  let result= str.charAt(0).toUpperCase() + str.slice(1);
  return result
  
}





/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var names = "daniel";

console.log(capitalise(names));
console.log(capitalise("hello"));
console.log (capitalise("daniel"))
/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
