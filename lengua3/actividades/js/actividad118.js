var titulos = "reflexiono";
f_titulos();
$("#n_pagina").html("98");

var tpre2 = 0;

// #region Random2
var random2 = [
  [
    '<h4><b><span class="enc2" id="3">fotografías</span></b></h4>'
  ],
  [
    '<h4><b><span class="enc2" id="1">título</b></h4>'
  ],
  [
    '<h4><b><span class="enc2" id="2">letras grandes y pequeñas</span></b></h4>'
  ],
  [
    '<h4><b><span class="enc2" id="4">colores</span></b></h4>'
  ],
  [
    '<h4><b><span class="enc2" id="6">dibujos</b></h4>'
  ],
  [
    '<h4><b><span class="enc2" id="5">marco decorativo</span></b></h4>'
  ]
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta2
$(".enc2").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 6; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja ==
        "título"||caja ==
        "colores"||
        caja ==
        "marco decorativo"
      ) {
        respr1 = respr1 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1-respr2) * 10) / 3;
  if (total < 0) {
    total = 0;
    tpre2 = total;
  } else {
    tpre2 = total;
  }

  tpre2 = total.toFixed(2);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta2();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal + "/10");
  document.getElementById("bt_comprobar").disabled = true;
}

// #endregion
