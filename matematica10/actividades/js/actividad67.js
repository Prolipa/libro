var titulos = "aplico";
numero_pagina(67);

var random1 = [
    [
      '<img src="img/i3_p67_act1.jpg" class="img-responsive"><br>'+
      '<label>(<input type="text" maxlength="1" size="1" style="width:30px" id="cj1b" >)</label>'
    ],
    [
      '<img src="img/i4_p67_act1.jpg" class="img-responsive"><br>'+
      '<label>(<input type="text" maxlength="1" size="1" style="width:30px" id="cj1c" >)</label>'
    ],
    [
      '<img src="img/i2_p67_act1.jpg" class="img-responsive"><br>'+
      '<label>(<input type="text" maxlength="1" size="1" style="width:30px" id="cj1a" >)</label>'
    ],
    [
      '<img src="img/i5_p67_act1.jpg" class="img-responsive"><br>'+
      '<label>(<input type="text" maxlength="1" size="1" style="width:30px" id="cj1d" >)</label>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }

function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;

  if (cj1a == "c" || cj1a == "C") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "d" || cj1b == "D") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }

  if (cj1c == "b" || cj1c == "B") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }

  if (cj1d == "a" || cj1d == "A") {
    cor = cor + 1;
    $("#cj1d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1d").addClass("incorrecto");
  }
 var tpre1=0;
  var total = ((cor) * 10) / 4;
  if (total < 0) {
    total = 0;
     tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#txtNota").html(tpre1);
  document.getElementById("bt_comprobar").disabled = true;

}
