var titulos = "aplico";
numero_pagina(41);

document.getElementById("pre1").addEventListener("keypress", () => {
    validNumero(0, 10, 1);
  });
  document.getElementById("pre1").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1"), 10);
  });


  var random1 = [
    ['<span>¿Es posible construir un triángulo con lados de 3 cm, 5 cm y 9 cm? ¿Por qué?</span>'+
    '<textarea class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea><br>'
    ],
    ['<span>¿Cuál es la medida de un ángulo agudo de un triángulo rectángulo isósceles?</span>'+
    '<input type="text" size="1" maxlength="2" style="width:40px;text-align:center"><span>°</span>'
    ],
    ['<span>¿Cuánto mide un ángulo de un triángulo equilátero de 10 cm de lado?</span>'+
    '<input type="text" size="1" maxlength="2" style="width:40px;text-align:center"><span>°</span>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }