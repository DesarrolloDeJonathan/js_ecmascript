const button = document.getElementById("btn");
//con dynamic import: podremos realizar importacion dinamicas de piezas de codigo espesificas
button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.dinamicImport();
});
