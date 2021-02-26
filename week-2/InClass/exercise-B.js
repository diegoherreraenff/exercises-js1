function boolChecker(bool) {
  if (typeof bool === "boolean") {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log (boolChecker(false));

let isHappy = true;
// The condition is met
if (isHappy) {
console.log("I am happy :)");
} else { // the condition is not met
console.log("I am not happy :(");
}
console.log("End of script");