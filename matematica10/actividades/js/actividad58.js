var titulos = "aplico";
numero_pagina(45);

function validar3(e) {
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM1230456789.]/;
    te = String.fromCharCode(tecla);
    if (patron.test(te)) {
      alert("INGRESE V(VERDADERO) O F(FALSO) ");
      return false;
    }
 }


 var random1 = [
    ['<span>En un triángulo rectángulo, el ortocentro se encuentra ubicado en un punto de la hipotenusa.</span>'+
    '<input type="text" size="1" style="width:40px;text-align:center" onkeypress="return validar3(event)" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="F">'
    ],
    ['<span>El círculo circunscrito a un triángulo tiene su centro en el punto denominado baricentro.</span>'+
    '<input type="text" size="1" style="width:40px;text-align:center" onkeypress="return validar3(event)" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="F">'
    ],
    ['<span>La intersección de las bisectrices forma el punto notable, llamado incentro.</span>'+
    '<input type="text" size="1" style="width:40px;text-align:center" onkeypress="return validar3(event)" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="V">'
    ],
    ['<span>El centro de masa de un cuerpo triangular es el punto de intersección de las medianas.</span>'+
    '<input type="text" size="1" style="width:40px;text-align:center" onkeypress="return validar3(event)" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="V">'
    ],
    ['<span>El círculo inscrito dentro de un triángulo tiene por centro el punto llamado circuncentro.</span>'+
    '<input type="text" size="1" style="width:40px;text-align:center" onkeypress="return validar3(event)" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="F">'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }