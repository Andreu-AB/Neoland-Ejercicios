// Crea una variable llamada `myFavoriteHero`, asigna el valor `Hulk` a ella.

// Crea una variable llamada `x`, asigna el valor `50` a ella.

// Crea una variable llamada `h` con el valor `5` y otra `y` con el valor `10`.

// Crea una otra variable `z` y asignale el valor de `h + y`.

// Dado el siguiente javascript, cambia el valor de la propiedad `age` a `250`.

let myFavoriteHero = "Hulk";
let x = 5;
let y = 10;
let z = "h + y";

const character = { name: "Jack Frost", age: 250 };

let firstName = "Jon";
let lastName = "Snow";
let age = 24;
const jon = { firstName: "Jon", lastName: "Snow", age: 24 };
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
);

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
const totalPrice = toy1.price + toy2.price;
console.log(totalPrice);

// 1. Crea una variable llamada **`planet`** y asígnale el valor "Tierra"
// 2. Crea una variable llamada **`isInnerPlanet`** y asígnale el valor **`true`** (la Tierra es un planeta interno)
// 3. Crea una variable llamada **`hasAtmosphere`** y asígnale el valor **`true`** (la Tierra tiene atmósfera)
// 4. Utiliza un operador lógico **`&&`** (AND) para combinar las variables **`isInnerPlanet`** y **`hasAtmosphere`** en una expresión lógica que evalúe a **`true`**. Almacena el resultado en una variable llamada **`isHabitable`**.
// 5. Utiliza una declaración **`console.log`** para imprimir el valor de la variable **`isHabitable`** en la consola. Debería mostrarse **`true`**.

let planet = "Tierra";
let isInnerPlanet = false;
let hasAtmosphere = true;
let isHabitable;

if (isInnerPlanet && hasAtmosphere) {
  isHabitable = true;
} else if (isInnerPlanet && !hasAtmosphere) {
  isHabitable = undefined;
} else if (!isInnerPlanet && hasAtmosphere) {
  isHabitable = null;
} else {
  isHabitable = false;
}
console.log(isHabitable);
