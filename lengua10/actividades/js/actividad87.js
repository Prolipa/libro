var titulos = 'aplico';

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
  });

  document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 6, 1);
  });
  document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 6);
  });

  document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
  });
  document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
  });