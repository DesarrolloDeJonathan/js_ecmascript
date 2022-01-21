/**
 * Includes
 * Para hacer una busqueda dendtro de un array o string
 * antes de ES7 se usaba un index of y algo de codigo mas complejo
 */
let numbers = [1, 2, 3, 7, 8];
const VALUE = 7;

if (numbers.includes(VALUE)) {
  console.log(`Sí se encuentra el valor ${VALUE}`);
} else {
  console.log(`No se encuentra el valor ${VALUE}`);
}

/**
 * Pow
 * Operador de exponente o potencia
 * antes de la implementacion ES7 se usaba
 * console.log(Math.pow(2, 4)); // 16
 */
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(`Result -> ${result}`);
