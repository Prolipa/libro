var titulos = "aplico";
numero_pagina(41);

  var random1 = [
    ['<span>El triángulo</span>'+
    '<input type="text"  size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="escaleno"><label>'+
    '<span>tiene tres</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="lados"><label><span> diferentes y tres ángulos también diferentes.</span>'
    ],
    ['<span>Si los</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="tres"><label>'+
    '<span>ángulos de un triángulo son iguales, también sus tres lados lo serán, y el triángulo lleva el nombre de</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="equiángulo"><label><span>.</span>'
    ],
    ['<span>Un triángulo rectángulo puede ser también</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="isósceles"><label>'+
    '<span>si tiene un ángulo</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="recto"><label><span> y dos lados iguales.</span>'
    ],
    ['<span>El triángulo</span>'+
    '<input type="text" size="1" style="width:100px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="equilátero"><label>'+
    '<span>no tiene ángulos ni lados desiguales.</span>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }