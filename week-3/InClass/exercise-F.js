function biryeard(año) {
    const currentYear = new Date().getFullYear()
    let persmisoConducir= currentYear - año
    return persmisoConducir
}

const year =[1964, 2008, 1999, 2005, 1978, 1985, 1919]

console.log(biryeard(1990))



for (let i= 0; i < year.length; i++) {
    const element = year[i];
    console.log (biryeard(element))
    
}


function permisoConducir(año) {
    if (biryeard(año)  < 17){
        return "esta persona no  puede conducir, puede conducir dentro de " + (17 - biryeard(año))+ "años"
    }
    else return "esta persona puede conducir"
    
}

//console.log(permisoConducir(2018))
console.log (year.map(permisoConducir))