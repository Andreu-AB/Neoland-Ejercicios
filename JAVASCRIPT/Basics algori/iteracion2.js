// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
// const character = {name: 'Jack Sparrow', age: 10};

// 1.2 Declara 3 variables con los nombres y valores siguientes
// 	firstName = 'Jon';
// 	lastName = 'Snow';
// 	age = 24;
// Muestralos por consola de esta forma:
// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;
console.log(character);
let firstName = "Jon";
let lastName = "Snow";
let age = "24";
console.log(
  `Soy ${firstName} ${lastName}, tengo ${24} años y me gustan los lobos.`
);
