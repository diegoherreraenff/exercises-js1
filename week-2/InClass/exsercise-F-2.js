function user (x,y) {
    if (x[0] ==="A" || x[0] ==="e" || x[0] ==="i" ||x[0] ==="o" || x[0] ==="u" && x[0].toUpperCase){
        return "user valid"
    }
    else if ( y === "admin" || y === "manager" || y === "sudo" ) {
        return "user valid"
    }
    else return "user invalid"  
}
console.log (user ("Antonio","invitado"))
console.log (user("b"))