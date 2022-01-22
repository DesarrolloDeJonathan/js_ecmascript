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

// Ejemplo de una de las formas de usar Async Await
// Tenemos una promesa para trabajar Async Await
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    // Alteramos la condicion para ver como se captura el error
    false
      ? setTimeout(() => resolve("Hello Promise later three seconds"), 3000)
      : reject(new Error("Test Error"));
  });
};

// usaremos la palabra reservada async para crear una arrow funtion que tendra la espera  (await) y con esta epera manejamos mejor el asincronismo
const helloAsync = async () => {
  const hello = await helloPromise();
  // Podremos tener una serie de constantes que se iran ejecutando despues de la ejecucion anterior
  console.log(hello);
};

helloAsync();

// Forma correcta de usar async await ya que manejaremos los errores
const otherFunction = async () => {
  try {
    const hello = await helloPromise();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
otherFunction();
