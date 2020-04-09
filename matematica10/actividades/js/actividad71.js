var titulos = "aplico";
numero_pagina(73);

var random1 = [
    [
      '<label>[− 2, 1] y [2, 6]</label>'+
      '<img src="img/i1_p73_act3.jpg" class="img-responsive"><br>'+
      '<label>TVM [−2, 1] =</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="0"><br><br>'+
      '<label>TVM [2, 6] =</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="-1">'
    ],
    [
      '<label>[2, 3] y [6, 7]</label>'+
      '<img src="img/i2_p73_act3.jpg" class="img-responsive"><br>'+
      '<label>TVM [2, 3] =</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="3"><br><br>'+
      '<label>TVM [6, 7] =</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="4">'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }