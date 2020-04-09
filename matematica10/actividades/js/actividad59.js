var titulos = "aplico";
numero_pagina(47);

var random1 = [
    ['<div class="text-question"><span><b>Calcula</b> el área y el perímetro del trapecio isósceles de la figura.</span></div><br><img class="img-responsive" src="img/i2_p47_act1.jpg"><span>A =</span><input type="text" size="1" maxlength="2" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="81">'+
    '<input type="text" size="1" maxlength="2" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="cm"><sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2"></sup><br><br>'+
    '<span>P =</span><input type="text" size="1" maxlength="5" style="width:55px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="39,37"><input type="text" size="1" maxlength="2" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="cm">'
    ],
    ['<div class="text-question"><span>El perímetro de un campo tiene forma de trapecio isósceles y mide 110 m, las bases miden 40 m y 30 m respectivamente. <b>Calcula</b> los lados no paralelos y el área del campo.</span></div><br><span>Lado =</span><input type="text" size="1" maxlength="2" style="width:55px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="20">'+
    '<input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="m"><br><BR><span>A =</span><input type="text" size="1" maxlength="6" style="width:55px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="677,78"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="m"><sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2"></sup>'
    ],
    ['<div class="text-question"><span>Nicolás construyó un corral para su perro. El corral tiene forma de triángulo equilátero y un perímetro de 240 cm. ¿Cuál es el área del corral en m2?</span></div><br><span>R =</span><input type="text" size="1" maxlength="4" style="width:55px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0,28"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="m"><sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2"></sup>'
    ],
    ['<div class="text-question"><span><b>Calcula</b> el área en cada ejercicio, sabiendo que A, B y C son los ángulos y que a, b y c son las longitudes de los lados del triángulo.</span></div><br>'+
    '<span><b>a)</b> Triángulo isósceles de base 6 u, lados iguales con medida de 5 u cada uno.</span><br><input type="text" size="1" maxlength="2" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="12"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="u"><sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="2"></sup><br><br><span><b>b)</b> Triángulo escaleno de 8, 10 y 15 m de lado.</span><br><input type="text" size="1" maxlength="5" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="36,98"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="m">'+
    '<sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2"></sup><br><br><div class="text-question"><span><b>Determina</b> el área y el perímetro de un rombo cuyas diagonales son 3 y 5,4 m.'+
    '<b>Utiliza </b> la figura.</span></div><br><img class="img-responsive" src="img/i1_p47_act1.jpg"><span>A =</span><input type="text" size="1" maxlength="3" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="8,1"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="m"><sup><input type="text" size="1" maxlength="1" style="width:15px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2"></sup><br><br><span>P =</span><input type="text" size="1" maxlength="6" style="width:55px;text-align:center" class=" border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="12,355*12,35*12,36"><input type="text" size="1" maxlength="1" style="width:25px;text-align:center" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="m">'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }