var titulos = "aplico";
numero_pagina(79);

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
  });

   
var random1 = [
    [
      '<label>f(x ) = x<sup>3</sup> + 2x</label><br>'+
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="10"></textarea>'
    ],
    [
      '<label>f(x ) = 2 x<sup>4</sup>− ​x<sup>2</sup> − 1</label><br>'+
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="10"></textarea>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }
  
