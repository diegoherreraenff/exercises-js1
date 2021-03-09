

function abracaFunction(mayuscula) {
    console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ];
    const name =[
        "julio",
        "agosto",
        "septiembre",
    ];
    const abracaOutput = mayuscula(name);
    return abracaOutput;
    }

    function mayuscula(name) {
        let mayus= name.map(mayus => mayus.toUpperCase())
        return mayus;
    }

    console.log(abracaFunction(mayuscula));