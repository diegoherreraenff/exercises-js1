/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function days(x){
  let y = [];
  for(let i=0 ; i<=6; i++){
    if(x[i].startsWith("T", 0)){
      y.push(x[i]);
    }
  }
  return y;
}
console.log(days(daysOfWeek));