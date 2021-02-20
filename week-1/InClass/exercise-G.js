const numberstudenst = 10;
const numberofmentor = 4;

const totalofpeople = numberofmentor + numberstudenst;


console .log (totalofpeople);

const porcentagementor = Math.round(numberofmentor * 100/ totalofpeople);

const porcentagestudent = Math.round(numberstudenst * 100/ totalofpeople);

console .log ( "porcentaje mentor "  +  porcentagementor +  " %" ) ;
console.log (`porcentaje estudiante ${porcentagestudent} %` );

