function secondMatchesAmy(array) {
  if ( "amy") {
    return "Second index matched!";
  } else if (typeof array !== "number"){
  return "Second index not matched"};
} 
console.log (secondMatchesAmy("carlos"))

  let names = ["Alex", "Amara", "Carlos"];
  let names2 = ["Ali", "Amy", "Naresh"];
  
  const result = secondMatchesAmy("naresh");
  console.log(result)