var titulos = "aplico";
f_titulos();
numero_pagina(229);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-4">20 ÷ 10 =                             <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="2"><br><br></li>',
    '<li class="col-sm-4">40 ÷ 10 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="4"><br><br></li>',
    '<li class="col-sm-4">90 ÷ 10 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="9"><br><br></li>',
    '<li class="col-sm-4">3 000 ÷ 10 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="300"><br><br></li>',
    '<li class="col-sm-4">3 000 ÷ 100 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="30"><br><br></li>',
    '<li class="col-sm-4">3 000 ÷ 1000 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="3"><br><br></li>',
    '<li class="col-sm-4">4 500 ÷ 10 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="450"><br><br></li>',
    '<li class="col-sm-4">9 000 ÷ 100 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="30"><br><br></li>',
    '<li class="col-sm-4">3 400 ÷ 10 = <input maxlength="3" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas1"><input type="hidden" style="color:blue;" class="solucion1" value="340"><br><br></li>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = ((nota * 4) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

p2vec1 = [
    '<li class="col-sm-4">4 200 ÷ <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="100"> = 42<br><br></li>',
    '<li class="col-sm-4">890 ÷ 10 = <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="89"><br><br></li>',
    '<li class="col-sm-4"><input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="5300"> ÷ 10 =  530<br><br></li>',
    '<li class="col-sm-4">1 700 ÷ <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="10"> = 170<br><br></li>',
    '<li class="col-sm-4"><input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="6300"> ÷ 100 =  63<br><br></li>',
    '<li class="col-sm-4">7 000 ÷ <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="1000"> = 7<br><br></li>',
    '<li class="col-sm-4">2 200 ÷ 10 = <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="220"><br><br></li>',
    '<li class="col-sm-4"><input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="3010"> ÷ 10 =  301<br><br></li>',
    '<li class="col-sm-4">5 200 ÷ <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #AED4EF;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue;" class="solucion2" value="100"> = 52<br><br></li>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

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
    tpre2 = ((nota * 4) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
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
    tpre3 = ((nota * 2) / 10);
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
    $("input").attr('disabled', 'disabled');
}

// #endregion