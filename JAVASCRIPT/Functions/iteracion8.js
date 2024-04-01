// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite
// cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(array) {
  let objetoVacio = {};

  for (i = 0; i < array.length; i++) {
    const palabra = array[i];
    if (objetoVacio.hasOwnProperty(palabra)) {
      objetoVacio[palabra] += 1;
    } else {
      objetoVacio[palabra] = 1;
    }
  }
  return objetoVacio;
}

const resultado = repeatCounter(counterWords);

console.log(resultado);
