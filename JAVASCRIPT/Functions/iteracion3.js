// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve
// la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let total = 0;

  for (i = 0; i < numbers.length; i++) {
    // console.log("i: ", i);
    // console.log("numselect: ", numbers[i]);
    // console.log("total abans de sumar: ", total);

    total = total + numbers[i];
    // console.log("total despres de cada suma: ", total);
  }

  return total;
}
console.log(sumAll(numbers));
