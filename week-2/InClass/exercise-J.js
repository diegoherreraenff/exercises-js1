function secondMatchesAmy(array) {
  if (array [1] === "Amy") {
    return "Second index matched!";
  } else 
  return "Second index not matched";
} 


  let names = ["Alex", "Amara", "Carlos"];
  let names2 = ["Ali", "Amy", "Naresh"];
  
  const result = secondMatchesAmy(names2);
  const result_1= secondMatchesAmy(names)
  console.log(result)
  console.log (result_1)