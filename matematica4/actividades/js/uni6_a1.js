var titulos = "prueba";
numero_pagina(220);

$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});



// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-12 "><div class="table-responsive">                                        <table class="">                                            <tr><td></td>                                              <td><img src="img/i1_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="+25"></td>                                                <td><img src="img/i3_p220_act1.jpg"></td>                                            </tr>                                            <tr>                                                <td><input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="1285"></td>                                                <td></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="1310"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1335"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1360"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1385"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1410"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1435"></td>                                            </tr>                                        </table><br>                                    </div></li>',
    '<li class="col-sm-12 "><div class="table-responsive">                                        <table class="">                                            <tr><td></td>                                                <td><img src="img/i1_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="-48"></td>                                                <td><img src="img/i3_p220_act1.jpg"></td>                                            </tr>                                            <tr>                                                <td><input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="3890"></td>                                                <td></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="3842"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3794"></td>                                               <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3746"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3698"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3650"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3602"></td>                                            </tr>                                        </table><br>                                    </div></li>',
    '<li class="col-sm-12 "><div class="table-responsive">                                        <table class="">                                            <tr><td></td>                                                <td><img src="img/i1_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x3"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x3"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x3"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i3_p220_act1.jpg"></td>                                            </tr>                                            <tr>                                                <td><input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="1"></td>                                                <td></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="3"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="45"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="225"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="675"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3375"></td>                                            </tr>                                        </table><br>                                    </div></li>',
    '<li class="col-sm-12 "><div class="table-responsive">                                        <table class="">                                            <tr><td></td>                                                <td><img src="img/i1_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x2"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x2"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x2"></td>                                                <td><img src="img/i2_p220_act1.jpg"></td>                                                <td><input style="width:50px;border: solid 2px orange;border-radius: 10px;text-align: center;" value="x5"></td>                                                <td><img src="img/i3_p220_act1.jpg"></td>                                            </tr>                                            <tr>                                                <td><input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="2"></td>                                                <td></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" value="4"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="20"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="40"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="200"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="400"></td>                                                <td></td>                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input maxlength="4" type="text" size="1" style="width:50px;border: solid 2px #00AEEF;border-radius: 30px;text-align: center;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2000"></td>                                            </tr>                                        </table><br>                                    </div></li>'
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
    tpre1 = ((nota / 10) * 2);
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
    tpre3 = ((nota / 10) * 2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}


// #region Pregunta1
p4vec1 = [
    '<li class="col-sm-6">                                            <div class="table-responsive">14 </span> ÷ 7 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2">, porque 7 × <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> = 14<br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">30 </span> ÷ 5 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6">, porque 5 × 6 = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"><br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">16 </span> ÷ 4 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4">, porque 4 × <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> = 16<br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">36 </span> ÷ 4 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="9">, porque 4 × <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="9"> = 36<br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">21 </span> ÷ 3 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="7">, porque 3 × 7 = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="21"><br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">49 </span> ÷ 7 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="7">, porque 7 × 7 = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="49"><br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">24 </span> ÷ 8 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3">, porque 8 × 3 = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="24"><br><br></div>                                        </li>',
    '<li class="col-sm-6">                                            <div class="table-responsive">72 </span> ÷ 9 </span> = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8">, porque 9 × 8 = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #009CDE;border-radius:10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="72"><br><br></div>                                        </li>'
];
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
    tpre4 = ((nota / 10) * 2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

p5vec1 = [
    '<li>Un <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="día"> tiene 24 horas.<br><br></li>',
    '<li>Una <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="década"> dura 10 años.<br><br></li>',
    '<li>Un año tiene <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="doce"> meses.<br><br></li>',
    '<li>Mil años corresponden a un <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="milenio">.<br><br></li>',
    '<li>Cada cuatro años se produce un año <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="bisiesto">.<br><br></li>',
    '<li>Un siglo tiene <input type="text" size="1" style="width:100px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="100"> años.<br><br></li>'
];
p5vec1.sort(f_randomico);
$('#li5').html(p5vec1);

function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
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
    tpre5 = ((nota / 10) * 1);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
p6vec1 = [
    '<li class="col-sm-4 table-responsive"><center><img src="img/i1_p220_act6.jpg"><br>                                                <input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="01*1">:<input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="00*0"></center><br></li>',
    '<li class="col-sm-4 table-responsive"><center><img src="img/i2_p220_act6.jpg"><br>                                                <input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="06*6">:<input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="05*5"></center><br></li>',
    '<li class="col-sm-4 table-responsive"><center><img src="img/i3_p220_act6.jpg"><br>                                                <input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="07*7">:<input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="10"></center><br></li>',
    '<li class="col-sm-4 table-responsive"><center><img src="img/i4_p220_act6.jpg"><br>                                                <input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="12">:<input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="15"></center><br></li>',
    '<li class="col-sm-4 table-responsive"><center><img src="img/i5_p220_act6.jpg"><br>                                                <input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="11">:<input type="text" size="1" style="width:50px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="20"></center><br></li>'
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
    tpre6 = ((nota / 10) * 1);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7

function pregunta7() {
    var respuestas = document.getElementsByClassName("respuestas7");
    var soluciones = document.getElementsByClassName("solucion7");
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
    tpre7 = ((nota / 10) * 1);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        var Nf =
            parseFloat(tpre1) +
            parseFloat(tpre2) +
            parseFloat(tpre3) +
            parseFloat(tpre4) +
            parseFloat(tpre5) +
            parseFloat(tpre6) +
            parseFloat(tpre7);

        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}
// #endregion