function divide(a, b) {
  if (typeof a === "number" && typeof b === "number")
    if (b != 0) {
      return a / b;
    } else {
      return false;
    }
}

module.exports.divide = divide;

//exports crea un objeto con el atributo divide, que tiene como valor la funcion divide
