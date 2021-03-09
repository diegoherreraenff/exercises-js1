let year = [1964, 2008, 1999, 2005, 1978, 1985, 1919]


function filtro(año) {
    return año < 2005
    
}

const resultado = year.filter(filtro);

console.log("esto son los años de las personas que pueden conducir " + resultado)