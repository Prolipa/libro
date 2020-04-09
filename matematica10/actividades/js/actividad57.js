var titulos = "aplico";
numero_pagina(45);

var random1 = [
    ['      <span>Los lados del triángulo se dividen en dos partes iguales con la mediatriz y la</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="mediana"><span>.</span>'
    ],
    ['<span>El circuncentro en un triángulo rectángulo se encuentra sobre un lado específico, este lado lleva el nombre de</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="hipotenusa"><span>.</span>'
    ],
    ['<span>La bisectriz divide a un</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="ángulo"><span>en dos</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="ángulos"><span>iguales.</span>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }