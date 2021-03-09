function birdYear(años) {
    let calculoEdad = 2021 - años ;
    return "i have year old " +  calculoEdad
    
}

const personOld = [1964, 2008, 1999, 2005, 1978,
    1985, 1919];



for (let i = 0; i < personOld.length; i++) {
    const element = personOld[i];
    console.log (birdYear(element))
}

console.log(personOld.map(birdYear))

