const obj = {
  name: "Jonny",
  age: 55,
  country: "MX",
};

// Tambien llamado operador de reposo
// luego del let entre llaves tenemos: la propiedad que vamos a extraer
// y aplicando desestructuracion, en otro array tendremos el resto del objeto
let { name, ...all } = obj;
// Vemos atributo que ahora esta fuera del objeto
console.log(name, all);
// vemos los elementos que quedaron dentro de este nuevo objeto
console.log(all);

// Ejemplo de Operadores de propagacion
const obj = {
  name: "Jonny",
  age: 55,
  country: "MX",
};
const obj1 = {
  ...obj,
  country: "COL",
};

// Promise
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    // Alteramos la condicion para ver como se captura el error con try catch
    false
      ? setTimeout(() => resolve("Hello Promise later three seconds"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloPromise()
  .then((response) => console.log(resonse))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

// Ejemplo de como trabajar con fechas, con regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
// Separamos a match en cada uno de los elementos
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, year);

// Otra de las nuevas características de ES9 en la captura de grupos es:
// nombrar nuestros grupos para encontrarlos de una forma más fácil
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = regexData.exec("2018-04-20");
const { year, month, day } = match.groups;

console.log({ year, month, day });
console.log(match);
console.log({ match });
