var titulos = 'aplico';

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 10, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
  });

