// DYNAMIC IMPORT
export function dinamicImport() {
  console.log("Hola Dynamic Import");
}

// BIG INIT
// Dos formas de trabajar con enteros muy grandes
// antes de es11 se agregaba una n al final para que la salida del numero no fuera 9.000374537452476e+28
const aBigNumber = 90003745374524763478456646574n;
console.log(aBigNumber);
// llego con ES11
const otherBigInt = BigInt(9000374537452476347874);
console.log(otherBigInt);

// Promise all settled
const primose1 = new Promise((resolve, reject) => reject("reject"));
const primose2 = new Promise((resolve, reject) => reject("resolve"));
const primose3 = new Promise((resolve, reject) => reject("resolve 1"));

Promise.allSettled([primose1, primose2, primose3]).then((response) =>
  console.log(response),
);

// GLOBAL THIS
console.log(window);
console.log(self);
console.log(frames);
console.log(this);
console.log(globalThis);

// NULL OPERATOR
const foo = null ?? "default string";
console.log(foo);

const dateStart = null ?? "0000-00-00 00:00:00";
console.log(dateStart);
const dateEnd = "2021-10-08 12:57:11" ?? "0000-00-00 00:00:00";
console.log(dateEnd);

// OPTIONAL CHAINING
const user = {};
console.log(user?.profile?.email);
