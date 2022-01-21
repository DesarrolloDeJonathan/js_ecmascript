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

// forma tradicional
console.log(hi + ' ' + wordl);
// ES6 permite tener espacios agrupar strings y variables
console.log(`${hi}

            ${wordl}`);