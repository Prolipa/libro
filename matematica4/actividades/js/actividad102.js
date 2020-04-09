var titulos = "aplico";
numero_pagina(113);

var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var random1 = [
    [
      '<table style="text-align:center"  class="table"><td width="25%">15</td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="45"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="60"></td></table>'
    ],
    [
        '<table style="text-align:center"  class="table"><td width="25%">32</td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="32"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="64"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="32"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="96"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="32"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="128"></td></table>'
      ],
    [
        '<table style="text-align:center"  class="table"><td width="25%">8</td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="16"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="24"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="32"></td></table>'
      ],
      [
        '<table style="text-align:center"  class="table"><td width="25%">20</td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="20"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="40"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="20"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="60"></td><td width="25%"><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="20"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="80"></td>'
      ],
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }
  // #endregion

// #region Pregunta1
function pregunta1() {
  var respuestas = document.getElementsByClassName("respuestas1");
  var soluciones = document.getElementsByClassName("solucion1");
  var valor = valor_pregunta(respuestas);
  var nota = 0;
  for (var i = 0; i < respuestas.length; i++) {
    if (
      verificar_contenido(
        respuestas[i].value.toLowerCase(),
        soluciones[i].value.toLowerCase().split("*")
      )
    ) {
      respuestas[i].classList.add("valid");
      respuestas[i].classList.remove("no-valid");
      nota += valor;
    } else {
      respuestas[i].classList.add("no-valid");
      respuestas[i].classList.remove("valid");
    }
  }
  tpre1 = nota/2;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var respuestas = document.getElementsByClassName("respuestas2");
  var soluciones = document.getElementsByClassName("solucion2");
  var valor = valor_pregunta(respuestas);
  var nota = 0;
  for (var i = 0; i < respuestas.length; i++) {
    if (
      verificar_contenido(
        respuestas[i].value.toLowerCase(),
        soluciones[i].value.toLowerCase().split("*")
      )
    ) {
      respuestas[i].classList.add("valid");
      respuestas[i].classList.remove("no-valid");
      nota += valor;
    } else {
      respuestas[i].classList.add("no-valid");
      respuestas[i].classList.remove("valid");
    }
  }
  tpre2 = nota/2;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  var Nf = parseFloat(tpre1)+parseFloat(tpre2);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
// #endregion
