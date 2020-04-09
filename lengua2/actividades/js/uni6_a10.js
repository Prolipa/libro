$("#n_pagina").html("250"); //impresion de pagina
var titulos = "evaluacion";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;

var tpre6 = 0;


// #region Pregunta6
p6vec1=
[
'<div class="col-sm-12 table-responsive" style="border: solid 1px #009EE4;"><br><br><img src="img/i1_p250_act6.jpg">                      <input maxlength="1" type="text" size="10" style="width:50px;height: 50px;font-size: 30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="2">  <br><br>                    </div>',
'<div class="col-sm-12 table-responsive" style="border: solid 1px #009EE4;"><br><br><img src="img/i2_p250_act6.jpg">                    <input maxlength="1" type="text" size="10" style="width:50px;height: 50px;font-size: 30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="3">  <br><br>                   </div>',
'<div class="col-sm-12 table-responsive" style="border: solid 1px #009EE4;"><br><br><img src="img/i3_p250_act6.jpg">                       <input maxlength="1" type="text" size="10" style="width:50px;height: 50px;font-size: 30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="1">  <br><br>                    </div>'
];
p6vec1.sort(f_randomico);
$('#li6').html(p6vec1);
function pregunta6() {
    var respuestas = document.getElementsByClassName("respuestas6");
    var soluciones = document.getElementsByClassName("solucion6");
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
    tpre6 = (nota);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {


    pregunta6();
    cor =
        parseFloat(tpre6);
    Calculo_nota();
}


// #endregion