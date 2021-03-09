let classSpanish =["emilio","ronar", "manuel", "leon", "manuel", "toño"]
let classInglesh =["pepe", "juan", "pedro", "lucas" , "jhon"]

let totalStudent =classInglesh.concat(classSpanish);

console.log(totalStudent);
console.log (totalStudent.sort())

function list(name,totalStudent) {
    let classSpanish =["emilio","ronar", "manuel", "leon", "manuel", "toño"]
    let classInglesh =["pepe", "juan", "pedro", "lucas" , "jhon"]

    if (classInglesh.includes(name)){
      return name +  " esta en clase` de ingles " + "con " + classInglesh.unshift()
      }
      else if (classSpanish.includes(name)){
          return name + "esta en la clase de español " +  "con " +  classSpanish.join();
      }

      else{return name + " no esta en clase"};
    } 

      console.log(list("pepe",totalStudent))
      console.log(list("manuel", totalStudent))
      console.log(list("diego", totalStudent))
      