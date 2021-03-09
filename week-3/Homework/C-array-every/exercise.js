/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = function lista(element) {
  return group.every(element)
}      // complete this statement



function buscar(names) {
  if (names= groupIsOnlyStudents) {
    console.log("The group does not contain only students");
  } else {
    console.log("The group contains only students"  );
  }
  
}

console.log(buscar())

/* EXPECTED RESULT */

// The group does not contain only students
