var titulos = "reflexiono";
numero_pagina(40);

document.getElementById("pre1").addEventListener("keypress", () => {
    validNumero(0, 10, 1);
  });
  document.getElementById("pre1").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1"), 10);
  });