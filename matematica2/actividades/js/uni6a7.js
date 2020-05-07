var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


p1vec1=[
'<li class="col-md-4">                                500 <input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="<"> 600                             </li>',
'<li class="col-md-4">                                700 <input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value=">"> 600                             </li>',
'<li class="col-md-4">                                200 <input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="="> 200                             </li>'
];

p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);
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
  tpre1 = ((nota*4) / 10);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2

// #endregion

p2vec2=[
'<li class="col-md-4">                                <div style="background-color: #0098C4;color: white;border-radius: 10px;display: inline-block;padding: 5px">Trecientos                                </div>                                <table border="1" bordercolor="#ABB2B9">                                    <tr>                                        <td style="color: #009376"><b>C</b></td>                                        <td style="color: #DB0080"><b>D</b></td>                                        <td style="color: #32B6D6"><b>U</b></td>                                    </tr>                                    <tr>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                    </tr>                                </table>                            </li>',
'<li class="col-md-4">                                <div style="background-color: #628CC4;color: white;border-radius: 10px;display: inline-block;padding: 5px">Seiscientos                                </div>                                <table border="1" bordercolor="#ABB2B9">                                    <tr>                                        <td style="color: #009376"><b>C</b></td>                                        <td style="color: #DB0080"><b>D</b></td>                                        <td style="color: #32B6D6"><b>U</b></td>                                    </tr>                                    <tr>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                    </tr>                                </table>                            </li>',
'<li class="col-md-4">                                <div style="background-color: #0098C4;color: white;border-radius: 10px;display: inline-block;padding: 5px">Cuatrocientos                                </div>                                <table border="1" bordercolor="#ABB2B9">                                    <tr>                                        <td style="color: #009376"><b>C</b></td>                                        <td style="color: #DB0080"><b>D</b></td>                                        <td style="color: #32B6D6"><b>U</b></td>                                    </tr>                                    <tr>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                        <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border-radius: 10px;" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                    </tr>                                </table>                            </li>'
];

p2vec2.sort(f_randomico);
$('#li2').html(p2vec2);
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
  tpre2 = ((nota*4) / 10);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion

// #region Random3

// #endregion

// #region Pregunta3
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
    tpre3 = nota / 5;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}