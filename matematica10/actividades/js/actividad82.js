var titulos = "aplico";
numero_pagina(88);


document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
  });

var random1 = [
    [
      '<img class="img-responsive" src="img/i7_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table></td><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ],
    [
      '<img class="img-responsive" src="img/i4_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ],
    [
      '<img class="img-responsive" src="img/i8_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table></td><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ],
    [
      '<img class="img-responsive" src="img/i9_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table></td><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ],
    [
      '<img class="img-responsive" src="img/i5_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table></td><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ],
    [
      '<img class="img-responsive" src="img/i6_p88_act1.jpg"><br><table><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td><td><table><tr></tr><tr><td><label>&nbsp;=&nbsp;</label></td></tr><tr></tr></table></td><td><table><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr><tr><td class="numerador"></td></tr><tr><td><label class="periodo"><input type="text" size="1" style="width:30px" ></label></td></tr></table></td></table>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }