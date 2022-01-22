// ES10
// .flat nos permitira aplanar un array recibe como parametro la profundidad de array a aplanar
let arrayFlat = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(1));
console.log(array.flat(0));

// aplanar segun un resultado de la funcion
let arrayFlatMap = [1, 2, 3, 4, 5];
// cuando traemos el valor de esta forma tendremos el varlor del array original y luego su valor al multiplicarlo por dos
console.log(arrayFlatMap.flatMap((value) => [value, value * 2]));
// al traer el valor asi tendremos un array solo del resultado de value * 2
console.log(arrayFlatMap.flatMap((value) => value * 2));

// Para eliminar los espacios en blanco al incio de un strin o al final
// trimStart para los espacios en el incio y trimEnd para los del final
let trimStart = "         Quita los espacios del principio     ";
console.log(trimStart.trimStart());

let trimEnd = "          Quita los espacios del final        ";
console.log(trimEnd.trimEnd());

// Optional catch bidin
// El parametro error que recibe catch puede ser omitido ya que es algo que siempre va a recibir por lo podemos apartir de ES9
// try {
// } catch (error) {
// }

// Transforma un arreglo clave valor Object.fromEntries
let entries = [
  ["name", "Jonny"],
  ["age", 87],
];
// De esta forma lo tranformamos a un objeto el arreglo anterior
// Puede servirnos ya que hay otra po
console.log(Object.fromEntries(entries));
// Podemos combinarlos para hacer varias cosas con ellos en el manejo de datos
const entriesObject = Object.entries(entries);
console.log(entriesObject);

// Objeto de tipo simbolo y como acceder a la descripcion de un objeto de tipo symbol
let mySymbol = "Mi symbol descriptor";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
