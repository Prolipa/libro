var titulos = 'aplico';

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 5, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
  });

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 5, 1);
  });
  document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
  });

