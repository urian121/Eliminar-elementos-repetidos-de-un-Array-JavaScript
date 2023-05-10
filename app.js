/**
 *  new Set es una estructura de datos en JavaScript que representa una colección de valores únicos.
 */

//Eliminar elemento Duplicados del siguiente Array (Arreglo)
let miArreglo = [10, "React", "JavaScript", 10, "PHP", 2, 1, 3, 2, 3, "React"];
let noDuplicados = new Set(miArreglo);
console.log(noDuplicados);

/**
 * Usando el método filter() y indexOf():
 */
//Defino el array original array que contiene varios elementos duplicados
const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];

/**
 * Creo la const newArray1 que será el nuevo array con elementos unicos
 * Se usa el método filter() para crear un nuevo array que contiene solo los elementos únicos.
 * La función de callback dentro del filter() recorre cada elemento del array original y verifica si el índice de la primera aparición de ese elemento es igual al índice actual.
 * Si lo es, el elemento se conserva en el nuevo array.
 * De lo contrario, se omite porque ya se encuentra en el nuevo array
 */
const newArray1 = array.filter((item, index) => array.indexOf(item) === index);
//Por último, se imprime el nuevo array newArray1 que contiene los elementos únicos del array original array.
console.log(newArray1);
// [1, 2, 3, 4, 5]

/**
 * Usando el método Set() y Array.from():
 */
//Creo un nuevo arreglo newArray2 a partir del arreglo array
/**
 * La función Set() se utiliza para crear un conjunto de elementos únicos.
 * Al pasar el arreglo array como argumento a Set(),
 * se crea un conjunto de elementos únicos basados en los valores de array.
 *
 * Luego, se utiliza la función Array.from() para crear un nuevo arreglo a partir de ese conjunto de elementos únicos.
 * El resultado es que newArray2 contiene los mismos elementos que array, pero sin elementos duplicados
 */
const newArray2 = Array.from(new Set(array));
//Finalmente, se imprime la constante newArray2
console.log(newArray2); // [1, 2, 3, 4, 5]

/**
 * Usando el operador spread ... y el método Set():
 */
/**
 * Primero se crea un objeto Set a partir del array original usando new Set(array).
 * IMPORTANTE: Un objeto Set solo permite valores únicos, por lo que todos los duplicados son automáticamente eliminados.
 *
 * Luego, para convertir este objeto Set de vuelta a un array, se utiliza el operador spread ... junto con la sintaxis de array [ ].
 * Esto crea un nuevo array con los valores únicos del objeto Set.
 */
const newArray3 = [...new Set(array)];
// Finalmente, se imprime el nuevo array en la consola
console.log(newArray3); // [1, 2, 3, 4, 5]

/**
 * Usando el método reduce() y includes():
 * Este código usa el método reduce para crear un nuevo array que contiene valores únicos de un array existente
 */
/**
 * El método reduce() toma una función reductora como primer parámetro, que se ejecuta en cada elemento del array y devuelve un valor acumulado.
 * En este caso, la función reductora recibe dos parámetros: unique y item.
 * unique es el valor acumulado en el proceso de reducción y en este caso se inicializa con un array vacío[].
 * item es el elemento actual del array array que se está procesando.
 * Dentro de la función reductora, se verifica si el elemento item ya existe en el array unique utilizando el método includes().
 * Si ya existe, simplemente se devuelve el array unique sin modificarlo.
 * Si no existe, se devuelve un nuevo array que contiene todos los elementos previos de unique más el nuevo elemento item.
 * De esta manera, al finalizar el proceso de reducción, se habrá obtenido un nuevo array newArray4 que contiene sólo valores únicos del array original array.
 */
const newArray4 = array.reduce((unique, item) => {
  if (!unique.includes(item)) {
    unique.push(item);
  }
  return unique;
}, []);

console.log(newArray4); // [1, 2, 3, 4, 5]
