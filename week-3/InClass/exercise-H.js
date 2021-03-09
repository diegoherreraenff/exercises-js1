const names = ["Daniel", "James", "Irina",
"Mozafar", "Ashleigh"];


function buscar(nombre) {
    if (nombre === names)
    return "found me"

    else return "Haven't found me :("
   
}

const resultado= names.find(buscar())
