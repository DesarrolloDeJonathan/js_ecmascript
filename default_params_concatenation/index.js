function newFunction (name, age, country) {
  var name = name || 'Jonny',
  var age = age || 47
  var country = country || 'AR'
  console.log(name, age, country);
}

// Usando ES6 para establecerlo desde la asignacion de los parametros
// Damos una asignacion por defecto desde los paramtros que pasamos a la funcion
function newFunction2(name = 'Jonny', age = '47', country = 'AR') {
  console.log(name, age, country);
}
newFunction2()
newFunction2('Stivi', '55', 'MX')

// Formas de imprimir y concatenar elementos
let hi = 'Hola'
let wordl = 'Mundo'

// FORMAS DE ASIGNACION
// forma tradicional para pasar a otra linea se usa \n
console.log(hi + ' \n' + wordl);
// ES6 permite tener espacios agrupar strings y variables
// Llamados templates literals
console.log(`${hi}

${wordl}`);

let lorem = `estamos usando template literals por medio de la comilla francesa
hacemos salgo de linea sin necesida de \n si la ponemos igual sirve`
console.log(lorem);

let person = {
  'name': 'Jonny',
  'lastName': 'Bravo',
  'age': 32,
  'country': 'VEN '

}
//Forma de llamar atributos de objetos
console.log(person.name, person.age);
// Llamar atributos de objetos con desestructuracion de ES6
let{ lastName, country} = person
console.log(lastName, country);

// Operador de propagacion (Spread Operator)
let teamUno = ['Raspu', 'Richard', 'Mateo']
let teamDos = ['Zurdo', 'Kaki', 'Postilla']
// Creamos un nuevo array agregando una copia de los otros dos arrays
let education =  ['Goliat', ...teamUno, ...teamDos]
console.log(education);

// Let, var , const
// Var
{let varLet = 'Solo disponible dentro de este scope'; console.log(varLet)}
console.log(varLet);//dara error si intentamos llamarla desde fuera
// Let
// Permite reasingnar pero respeta el scope
{var varVar = 'Estare disponible de forma global sin importar el scope'};
console.log(varVar);
// Const
// No podremos reasignarla, dara error
const a = 'Soy una a y no me puedes reasignar'
a = 'jaja te reasignare'
console.log(`Veamos que paso con const ${a}`);

// Objetos y como asignarlos
let name = 'Jonny'
let age = 45

// obj1 = {name:name, age:age} Este es el estandar ES5 teniamos que colocar mas elementos
// Ahora ES6 lo simplifica
obj2 = {name, age}
console.log(obj2);

// Arraw functions funciones de flecha
const names = [{name:'Rata', age:27},{name:'Negro', age:23},{name:'Mateo', age:29}]
// ES5 lo hariamos asi
let listOfNames = names.map(function (item) {
  console.log(item.name);
})
// ES6 Arrow functions
let listOfNames1 = names.map(item => { console.log(item.name);})
// algunas formas de como veras Arrow functions
// const listOfNames2 = (name, age, country) => {  ...  }
// const listOfNAmes3 = name => {  ...  }
// const sum = num => num + num  Aqui tenemos un return implicito

// Promesas
// Vienen a resolver el problema del callback hell
// Recibe como parametro una arrow funtion con dos valores, dentro los evalua con una condicional y retorna una promesa
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey i am resolve')
    } else {
      reject('Upss what`s up')
    }
  })
}
// Al invocarla podremos agregar .then si la respuesta es true, podremos encadenar varios
// Y .catch si la respuesta es false
helloPromise()
  .then(response=> console.log(response))//
  .then(() => console.log('Hola soy un then significa que reponse paso en true'))
  .catch(error => console.log(error))

