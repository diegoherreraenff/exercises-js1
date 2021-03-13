let sucios = [100, "iSMael", 55, 45, "sANyiA", 66,
"1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,
"ElaMIN"]
 console.log (sucios)
 
 function limpia(array) {
    return array
        .filter(element => typeof element === "string")
        .map(element => element.toUpperCase() + "!" )
 }

 

 console.log(limpia(sucios))
 