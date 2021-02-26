

function estadodeAnimo(animo) {
    if (animo === "happy") {
      return  "i am happy";
    } else if (animo === "bad") {
      return  "i am bad";
    } else if (animo === "not bad") {
      return  "not so good";
    } else if (typeof animo ==="number" ){  
      return "this is not a state of mind";
    }
    else { return "where you doing?"
    

    }
  }

  console.log (estadodeAnimo("0"))