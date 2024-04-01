// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar
// que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan
//  nos devuelve un true y la posición de
// dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(array, valor) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return true;
    }
  }
  return false;
  //   let valueExiste = array.some((element) => element == valor);
  //   if(valueExiste) {
  //   const index = array.findIndex((element) => element == valor);
  //   console.log(`el valor igual a ${valor} se encuentra en la posición ${index}`);
  //   } else {
  //   console.log("el valor no existe")
  // }
}

const resultado = finderName(nameFinder, "Jessica");

console.log(resultado, `y se encuentra en la posicion ${[i]}`);
