var titulos = "aplico";
numero_pagina(73);

var random1 = [
    [
      '<label >[− 3, 3]</label><br><br>'+
      '<label>R=</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="2">'
    ],
    [
      '<label >[4, 20]</label><br><br>'+
      '<label>R=</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="2">'
    ],
    [
      '<label >[− 8,  − 4]</label><br><br>'+
      '<label>R=</label><input type="text" size="1" style="width:70px" class=" border-blue respuestas">'+
      '<input type="hidden" style="color:blue" class="solucion" value="2">'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }