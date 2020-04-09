$("#n_pagina").html("268"); //impresion de pagina
var titulos = "evaluacion";
f_titulos();

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;






document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2);
});


document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});


// #region Pregunta1

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Pregunta3
p3vec1 = [
    '<div class="col-sm-6 table-responsive" style="text-align: center;">                                    <center><img src="img/i1_p268_act3.jpg" class="img-responsive"></center><br><br>                                    <input  type="text" size="10" style="width:160px;height: 50px;font-size: 30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="fantasia">                                </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center;">                                    <center><img src="img/i2_p268_act3.jpg" class="img-responsive"></center><br><br>                                    <input  type="text" size="10" style="width:160px;height: 50px;font-size: 30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="realidad">                                </div>',
]
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);


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
    tpre3 = (nota / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
p4vec1 = [
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1">                                         <img src="img/i2_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="12">                                         <img src="img/i3_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="13">                                         <img src="img/i4_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="19">                                         <img src="img/i5_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5">                                         <img src="img/i6_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="9">                                         <img src="img/i7_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2">                                         <img src="img/i8_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="14">                                         <img src="img/i9_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6">                                         <img src="img/i10_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="21">                                         <img src="img/i11_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="10">                                         <img src="img/i12_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="24">                                         <img src="img/i13_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3">                                         <img src="img/i14_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="18">                                         <img src="img/i15_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="20">                                         <img src="img/i16_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="11">                                         <img src="img/i17_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="7">                                         <img src="img/i18_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="15">                                         <img src="img/i19_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4">                                         <img src="img/i20_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="23">                                         <img src="img/i21_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8">                                         <img src="img/i22_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="17">                                         <img src="img/i23_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="16">                                         <img src="img/i24_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>',
    '<div class="col-sm-3 table-responsive" style="border: solid 1px orange">                                        <input  type="text" maxlength="2" size="10" style="width:40px;height: 50px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="22">                                         <img src="img/i25_p268_act4.jpg" style="width: 120px;height: 90px">                                    </div>'
]
p4vec1.sort(f_randomico);
$('#li4').html(p4vec1);

function pregunta4() {
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
    tpre4 = ((nota / 10) * 4);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion






// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califiqué la pregunta");
        } else {
            var pre5a = document.getElementById("pre5a").value; /**/
            if (pre5a == "") {
                alert("Pregunta 5: Califiqué la pregunta");
            } else {

                pregunta1();
                pregunta2();
                pregunta3();
                pregunta4();
                pregunta5();

                 cor = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5);
                Calculo_nota();
            }
        }
    }
}
// #endregion