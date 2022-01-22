// 🧯 Replace
const string =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
// Ingresamos el valor y por el valor que lo remplazara, solo remplaza la primera coincidencia
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// Para remplazar todas las coincidencias usaremos replaceAll
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);
const replacedString3 = string.replaceAll(/ Javascript /g, "Python");
console.log(replacedString3);

// 🔒 Metodos privados, # es el prefijo para indicar que un metodo es privado
class Message {
  #show(val) {
    // Con el # convertimos al método en privado
    console.log(val);
  }
  // get #add(val){
  //   ... funcionara para setters & getters
  // }
}

const message = new Message();
message.show(
  "Soy privada y mientras este metodo tenga # solo podra accederse dentro de la clase!",
);

//  👽 Promise Any objeto
/**
 * recibe un array de promesas y se resuelve tan pronto como una de ellas haya
 * sido resuelta. El valor del resultado va a ser esa primera promesa resuelta.
 */
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) =>
  resolve("Me resolvi primero"),
);
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response),
);

//  🦴 WeakRef(element);
/**
 * Un objeto WeakRef le permite mantener una referencia débil a otro objeto,
 * sin evitar que ese objeto sea recolectado como basura.
 * WeakRef(elemnt) con esta palabra reserveda que es un metodo logramos tener una referencia debil
 */
// class AnyClass {
//     constructor(element){
//         this.ref = new WeakRef(elemnt)
//     }
//     {...}
// }

// 🧪 Nuevos operadores lógicos
// AND
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));

// OR ORX
let isTrue = true;
let isFalse = false;
console.log((isTrue ||= isFalse));

// Valores nulos
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));
