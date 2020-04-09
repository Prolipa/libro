var titulos = "aplico";
numero_pagina(121);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;


// #region Pregunta1
function pregunta1() 
{
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
  tpre1 = nota / 4;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() 
{
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
    tpre2 = nota / 4;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() 
{
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
    tpre3 = nota / 4;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() 
{
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = nota / 4;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2) +
    parseFloat(tpre3) +
    parseFloat(tpre4);

  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}

// #endregion
