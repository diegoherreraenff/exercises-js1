function user (x,y) {
    if (x [0] ==="a" || x [0] ==="e" || x [0] ==="i" ||x [0] ==="o" || x [0] ==="u" && x.length >= 5 && x.length <=10 ){
        return "user valid"
    }
    else if ( y === "admin" || y === "manager" || y === "sudo" ) {
        return "user valid"
    }
    else return "user invalid"  
}
console.log (user ("yntonio","invita"))
console.log (user("ae"))