function mayuscula(name) {
    let mayus= name.sort();
    return mayus;
}

function abracaFunction(mayuscula) {
    const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ];
    
    const abracaOutput = mayuscula(abracaArray);
    return abracaOutput;
    }

   

    console.log(abracaFunction(mayuscula));