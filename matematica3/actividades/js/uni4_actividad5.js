var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
// #region Random1
var random1 = [
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#0099C4"><tr><td width="50%"><center><img src="img/i4_p169_act1.jpg" class="img-responsive"></center></td><td width="50%"><h3><input type="text" size="1"  style="width:150px" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="xxx"></h3></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#0099C4"><tr><td width="50%"><center><img src="img/i3_p169_act1.jpg" class="img-responsive"></center></td><td width="50%"><h3><input type="text" size="1"  style="width:150px" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="xxxxx"></h3></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#0099C4"><tr><td width="50%"><center><img src="img/i2_p169_act1.jpg" class="img-responsive"></center></td><td width="50%"><h3><input type="text" size="1"  style="width:150px" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="x"></h3></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#0099C4"><tr><td width="50%"><center><img src="img/i5_p169_act1.jpg" class="img-responsive"></center></td><td width="50%"><h3><input type="text" size="1"  style="width:150px" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="xx"></h3></td></tr></table>'
  ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}
// #endregion


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
  tpre2 = ((nota*4) / 10);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta2

// #region Random2
var random2 = [
  [
    '<h4> ¿Cuál es la fruta que menos les gusta? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="La piña"></h4>'
  ],
  [
    '<h4> ¿Cuántos estudiantes respondieron la encuesta? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="33"></h4>'
  ],
  [
    '<h4> ¿Cuál es la diferencia entre la cantidad de niños que prefieren la sandía y las naranjas? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></h4>'
  ],
  [
    '<h4> ¿Cuál es la diferencia entre la cantidad de estudiantes que les gusta la sandía y las uvas? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"></h4>'
  ],
  [
    '<h4> ¿Cuál es la fruta preferida por los estudiantes? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="La sandía"> </h4>'
  ],
  [
    '<h4> ¿Cuántos niños prefieren las naranjas? <input type="text" size="1"  style="width:200px" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"></h4>'
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
  tpre3 = ((nota*2) / 10);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta3

// #region Random3
var random3 = [
  [
    '¿Hay un juego que no fue conocido por ningún niño?  <input type="text" size="1"  style="width:200px" class="respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="El San Benito*San Benito"><br>'
  ],
  [
    '¿Cuántos niños respondieron la encuesta? <input type="text" size="1"  style="width:200px" class="respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="66 niños*66"><br>'
  ],
  [
    '¿Qué juego es el más conocido? <input type="text" size="1"  style="width:200px" class="respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="Las canicas*canicas"><br>'
  ],
  [
    'Qué juego fue más conocido, ¿el trompo o la rayuela? <input type="text" size="1"  style="width:200px" class="respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="La rayuela*rayuela"><br>'
  ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(
    '<span width="50px">' + random3[i][0] + "</span> "
  );
}
// #endregion

function pregunta3() {
  var respuestas = document.getElementsByClassName("respuestas3");
  var soluciones = document.getElementsByClassName("solucion3");
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
  tpre3 = ((nota*2) / 10);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
