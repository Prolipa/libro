var titulos = "aplico";
f_titulos();
numero_pagina(251);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-3">                            <div clas="table-responsive">                                1 l a ml = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1000"> ml                            <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive">                                3 l a cl = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="300"> cl                            <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive">                                4 l a dl = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="40"> cl                            <br><br></div>                        </li>',
    '<li class="col-sm-3">                            <div clas="table-responsive">                                8 l a ml = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8000"> ml                            <br><br></div>                        </li>'
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
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    2 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20"> dl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    79 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="790"> dl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    68 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6800"> cl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    4 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4000"> ml                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    5 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="50"> dl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    4 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="400"> cl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    92 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9200"> cl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    6 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6000"> ml                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    12 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="120"> dl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    9 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="900"> cl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    1 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1000"> ml                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    8 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8000"> ml                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    25 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="250"> dl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    17 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1700"> cl                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    3 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3000"> ml                                    <br><br></div>                            </li>',
    '<li class="col-sm-3">                                <div clas="table-responsive">                                    41 l = <input maxlength="4" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="410"> dl                                    <br><br></div>                            </li>'
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
    // var pre3a = document.getElementById("pre3a").value;
    // if (pre3a == "") {
    //     alert("Pregunta 3: Califiqué la pregunta");
    // } else {
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
// }
// #endregion