/**
 *  Set es una estructura de datos en JavaScript que representa una colección de valores únicos.
 *  Cuando se crea un objeto Set, se pueden agregar valores a él utilizando el método add(). 
 * Si se intenta agregar un valor que ya existe en el Set, se ignorará y el tamaño del Set no cambiará.

La sintaxis para crear un nuevo objeto Set es:
const mySet = new Set();

 */

//Eliminar elemento Duplicados del siguiente Array (Arreglo)
let miArreglo = [10, "React", "JavaScript", 10, "PHP", 2, 1, 3, 2, 3, "React"];
let noDuplicados = new Set(miArreglo);
console.log(noDuplicados);

/**
 * Usando el método filter() y indexOf():
 */
const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const newArray1 = array.filter((item, index) => array.indexOf(item) === index);
console.log(newArray); // [1, 2, 3, 4, 5]

/**
 * Usando el método Set() y Array.from():
 */

const newArray2 = Array.from(new Set(array));
console.log(newArray2); // [1, 2, 3, 4, 5]

/**
 * Usando el operador spread ... y el método Set():
 */
const newArray3 = [...new Set(array)];
console.log(newArray3); // [1, 2, 3, 4, 5]

/**
 * Usando el método reduce() y includes():
 */

const newArray_4 = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
console.log(newArray); // [1, 2, 3, 4, 5]
