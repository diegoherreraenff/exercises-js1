const student = [
    "pedro",
    "luis",
    "pepe",
    "flavio",
    "obtavio",
    "maria",
    "roberto", 
  ];
  console.log (student.length)
  
  for (let i = 0;  i < student.length; i++) {
    const studenthere = student[i] + " here,";
    const studentInclass = "is index " + i;
    console.log(studenthere,studentInclass);
  }
  