// ES8
// Object entries, Object Values, Padding y Trailing-Comas

// Trailing-Comas.es decir que ahora se pueden colocar asi no haya un elemento enseguida
const data = {
  frontend: "Jonny",
  backend: "Edgar",
  desing: "Camilo",
};

// Ejemplo con Object.entries
// Esto me regresa mi objeto como una matrix (arreglo)
const entries = Object.entries(data);
console.log(entries);
// Podemos contar la cantidad de elementos del array con length
console.log(entries.length);

// Ejemplo con Object.values
const data = {
  frontend: "Jonny",
  backend: "Edgar",
  desing: "Camilo",
};
// Ahora lo transforma en un arreglo de strings con los valores y omitiendo las llaves
const values = Object.values(data);
console.log(values);
console.log(values.length); // Elementos dentro del objeto

// Ejemplo con Padding
const string = "hello";
console.log(string.padStart(7, "hi")); // En este caso agrega 7 espacios antes la palabra hi
//padEnd() agrega al final e indica cuantos caracteres debe contar para poner los guiones al final
console.log(string.padEnd(12, " ----->"));
